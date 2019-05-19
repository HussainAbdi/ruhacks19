import React from "react";
import styled from "styled-components";

import "../fonts.css";
import { Link } from "react-router-dom";

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
  /* background-image: linear-gradient(to top, #dd8a00, #da1b60); This is what it was before. Orange theme */
  background-image: linear-gradient(to top, #191970, #8b008b);
  /* background-image: linear-gradient(to top, #00bfff, #8a2be2); */
  /* #2432F5, #BE41F7, #FFFFFF */
  /* background-image: linear-gradient(to bottom, #be41f7, #2432f5); */
  box-shadow: 0px 5px 5px grey;
`;

const Question = styled.div`
  color: white;
  font-weight: 500;
  margin: inline-block;
  text-align: center;
`;

const ScoreBadge = styled.div`
  font-weight: 800;
  color: white;
`;

interface IProps {
  addQuestion: any;
}

interface IState {
  question: string;
}

class QuestionInput extends React.Component<IProps, IState> {
  state = {
    question: ""
  };

  render() {
    // const { fontScale, text } = this.props;

    return (
      <QuestionContainer
        style={{
          marginRight: 90,
          marginLeft: 90,
          fontSize: 24,
          justifyContent: "space-between"
        }}
      >
        <Question>Your question:</Question>
        <input
          style={{
            marginLeft: 20,
            fontFamily: "San Francisco",
            fontSize: 24,
            fontWeight: 600,
            margin: "inline-block",
            flex: 1
          }}
          onChange={e =>
            this.setState({
              question: e.target.value
            })
          }
          value={this.state.question}
        />
        <div
          style={{
            display: "flex",
            textDecoration: "none",
            color: "black",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontFamily: "San Francisco",
              fontSize: 24,
              backgroundColor: "white",
              marginLeft: 25,
              marginRight: 25,
              borderRadius: 10,
              textDecoration: "none",
              paddingLeft: 15,
              paddingRight: 15
            }}
            onClick={() => {
              this.props.addQuestion(this.state.question);
              this.setState({
                question: ""
              });
            }}
          >
            Sign Up
          </div>
        </div>
      </QuestionContainer>
    );
  }
}

export default QuestionInput;
