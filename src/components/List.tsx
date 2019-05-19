import React from "react";
import styled from "styled-components";

import firebase from "../firebase";

import "../fonts.css";
import QuestionRow from "./Question";
import Header from "./Header";

const Container = styled.div`
  flex-direction: row;
  width: 1024px;
`;

interface IProps {
  loggedIn: boolean;
}

class List extends React.Component<IProps> {
  state = {
    questions: [],
    original: null
  };

  componentWillMount() {
    const ref = firebase.database().ref("/");
    ref.on("value", snapshot => {
      const arr = [];

      for (let i of Object.keys(snapshot.val())) {
        arr.push({
          key: i,
          ...snapshot.val()[i]
        });
      }

      arr.sort((a, b) =>
        a.upvotes > b.upvotes ? -1 : b.upvotes > a.upvotes ? 1 : 0
      );

      this.setState({
        questions: arr,
        original: snapshot.val()
      });
    });
  }

  upvote = key => {
    if (this.props.loggedIn) {
      const newArr = this.state.original;
      newArr[key].upvotes++;
      firebase
        .database()
        .ref("/")
        .update(newArr);
    }
  };

  render() {
    return (
      <Container>
        <Header text="Question Rank" />

        {this.state.questions.map((questionRow, i) => {
          let padding = 90;
          let fontScale = 1;
          if (i < 3) padding = 30 * i;
          if (i < 3) fontScale += (3 - i) * 0.15;
          console.log(questionRow);
          return (
            <>
              {/* {i == 3 && <hr />} */}
              <QuestionRow
                padding={padding}
                fontScale={fontScale}
                text={questionRow.question || ""}
                value={questionRow.upvotes || 0}
                upvote={() => this.upvote(questionRow.key)}
              />
            </>
          );
        })}
      </Container>
    );
  }
}

export default List;
