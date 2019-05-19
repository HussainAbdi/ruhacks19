import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Header from "./Header";
import ReplyCard from "./ReplyCard";
import ReplyEditCard from "./ReplyEditCard";

import firebase from "firebase";

import store from "../store";
import "../fonts.css";

const Container = styled.div`
  flex-direction: row;
`;

interface IProps {
  match: any;
}

@observer
class Responses extends React.Component<IProps> {
  state = {
    row: null
  };

  componentWillMount() {
    const ref = firebase.database().ref(this.props.match.params.id);
    ref.on("value", snapshot => {
      this.setState({
        row: snapshot.val()
      });
    });
  }

  submitResponse = response => {
    if (!store.loggedIn) return;
    if (!this.state.row.answers) {
      this.state.row.answers = [];
    }
    this.state.row.answers.push({
      title: response,
      location: "Toronto, CA",
      date: new Date().toISOString()
    });
    const ref = firebase
      .database()
      .ref(this.props.match.params.id)
      .update(this.state.row);
  };

  render() {
    return (
      <Container>
        <Header text={this.state.row && this.state.row.question} />
        <ReplyEditCard
          title="Your reply here..."
          submit={response => this.submitResponse(response)}
        />
        {this.state.row && this.state.row.answers ? (
          this.state.row.answers.map(answer => {
            return (
              <ReplyCard
                title={answer.title}
                location={answer.location}
                date={answer.date.substring(0, answer.date.indexOf("T"))}
              />
            );
          })
        ) : (
          <div
            style={{
              textAlign: "center",
              color: "white"
            }}
          >
            Looks like you're the first one here...
          </div>
        )}
      </Container>
    );
  }
}

export default Responses;
