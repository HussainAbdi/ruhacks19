import React from "react";
import styled from "styled-components";

import "../fonts.css";
import QuestionRow from "./Question";
import Header from "./Header";

const Container = styled.div`
  flex-direction: row;
  width: 1024px;
`;

class List extends React.Component {
  render() {
    const questions = [
      "What's the favourite part of your day?",
      "What's the favourite part of your day?",
      "What's the favourite part of your day?",
      "What's the favourite part of your day?",
      "What's the favourite part of your day?",
      "What's the favourite part of your day?"
    ];

    return (
      <Container>
        <Header text="Questions" />

        {questions.map(question => (
          <QuestionRow text={question} />
        ))}
      </Container>
    );
  }
}

export default List;
