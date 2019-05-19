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
  color: #ffffff;
`;

const Button = styled.div`
  color: white;
  background-image: linear-gradient(to top, #dd8a00, #da1b60);
  border-radius: 20px;
  padding-left: 10px;
  float: right;
  padding-right: 10px;
`;

interface IProps {
  title: string;
  submit: any;
}

const ReplyEditCard = (props: IProps) => {
  const { title, submit } = props;

  return (
    <CardContainer>
      <Title contentEditable={true}>{title}</Title>
      <Button onClick={() => submit("This is just a another test comment")}>
        Comment
      </Button>
    </CardContainer>
  );
};

export default ReplyEditCard;
