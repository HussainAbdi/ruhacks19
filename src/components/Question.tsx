import React from "react";
import styled from "styled-components";

import "../fonts.css";

const QuestionContainer = styled.div`
  background-color: green;
  /* width: 100%; */
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  font-family: "San Francisco";
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to top, #dd8a00, #da1b60);
`;

const Question = styled.div`
  color: white;
  font-weight: 500;
  margin: block;
  text-align: center;
`;

const ScoreBadge = styled.div`
  font-weight: 800;
  color: white;
`;

interface IProps {
  text: string;
  padding: number;
  fontScale: number;
  value: number;
  upvote: any;
}

class QuestionRow extends React.Component<IProps> {
  render() {
    const { padding, fontScale, text, upvote, value } = this.props;

    return (
      <QuestionContainer
        style={{
          marginRight: padding,
          marginLeft: padding,
          fontSize: 24 * fontScale
        }}
        onClick={upvote}
      >
        <Question>{text}</Question>
        <ScoreBadge>{value}</ScoreBadge>
      </QuestionContainer>
    );
  }
}

export default QuestionRow;
