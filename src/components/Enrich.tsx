import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Card from "./Card";
import firebase from "../firebase";

import "../fonts.css";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1024px;
`;

const Container = styled.div`
  flex-direction: row;
`;

class Enrich extends React.Component {
  state = {
    questions: [],
    original: null
  };

  componentWillMount() {
    const ref = firebase.database().ref("/");
    ref.on("value", snapshot => {
      let arr = [];

      for (let i of Object.keys(snapshot.val())) {
        arr.push({
          key: i,
          ...snapshot.val()[i]
        });
      }

      arr.sort((a, b) =>
        a.upvotes > b.upvotes ? -1 : b.upvotes > a.upvotes ? 1 : 0
      );

      arr = arr.slice(0, 3);

      this.setState({
        questions: arr,
        original: snapshot.val()
      });
    });
  }

  render() {
    return (
      <Container>
        <Header text={"Today's Questions"} />
        <CardContainer>
          {this.state.questions.map(question => (
            <Card
              title={question.question}
              commentNumber={question.answers.length || 0}
              url={question.key || ""}
            />
          ))}
        </CardContainer>
      </Container>
    );
  }
}

export default Enrich;
