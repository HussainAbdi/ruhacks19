import React from "react";
import styled from "styled-components";

import "../fonts.css";

const QuestionContainer = styled.div`
  background-color: green;
  width: 100%;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  font-family: "San Francisco";
  font-size: 28px;
  display: flex;
  justify-content: space-between;
`;

const Question = styled.div`
  color: white;
  font-weight: 500;
  margin: block;
  text-align: center;
`;

const ScoreBadge = styled.div``;

interface IProps {
  text: string;
}

class QuestionRow extends React.Component<IProps> {
  state = {
    count: 0
  };

  render() {
    return (
      <QuestionContainer
        onClick={() =>
          this.setState({
            count: this.state.count + 1
          })
        }
      >
        <Question>{this.props.text}</Question>
        <ScoreBadge>{this.state.count}</ScoreBadge>
      </QuestionContainer>
    );
  }
}

export default QuestionRow;
