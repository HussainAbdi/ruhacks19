import React from "react";
import styled from "styled-components";

import "../fonts.css";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: gray;
  border-radius: 20px;
  margin: 10px;
  max-width: 1024px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 24px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  margin: block;
  font-family: "San Francisco";
  font-weight: 700;
  color: black;
  border-style: solid;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 200px;
  margin-right: 10px;
`;

const Button = styled.div`
  color: white;
  background-image: linear-gradient(to top, #191970, #8b008b);
  border-radius: 20px;
  padding-left: 15px;
  float: right;
  padding-right: 15px;
`;

interface IProps {
  title: string;
  submit: any;
}

const ReplyEditCard = (props: IProps) => {
  const { title, submit } = props;

  return (
    <CardContainer>
      <input
        placeholder="Your response..."
        style={{
          fontFamily: "San Francisco",
          fontWeight: 500,
          fontSize: 24,
          flex: 1,
          paddingRight: 20,
          marginRight: 20
        }}
      />
      <Button onClick={() => submit("This is just a another test comment")}>
        Comment
      </Button>
    </CardContainer>
  );
};

export default ReplyEditCard;
