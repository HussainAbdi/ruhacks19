import React from "react";
import styled from "styled-components";

import "../fonts.css";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to top, #dd8a00, #da1b60);
  border-radius: 20px;
  margin: 10px;
  max-width: 1024px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Title = styled.p`
  margin: block;
  font-family: "San Francisco";
  font-weight: 700;
  color: #ffffff;
  font-size: 24px;
`;

const ExtraContainer = styled.p`
  flex-direction: column;
  color: white;
  font-size: 20px;
`;

const Comments = styled.p`
  float: left;
`;

const ReadMore = styled.p`
  float: right;
`;

interface IProps {
  title: string;
  location: string;
  date: string;
}

const ReplyCard = (props: IProps) => {
  const { title, location, date } = props;

  return (
    <CardContainer>
      <Title>{title}</Title>
      <ExtraContainer>
        <Comments>{location}</Comments>
        <ReadMore>{date}</ReadMore>
      </ExtraContainer>
    </CardContainer>
  );
};

export default ReplyCard;
