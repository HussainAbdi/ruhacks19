import React from "react";
import styled from "styled-components";

import "../fonts.css";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-image: linear-gradient(to top, #dd8a00, #da1b60); This is what it was before */
  background-image: linear-gradient(to top, #191970, #8b008b);
  border-radius: 20px;
  margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 342px;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  margin: block;
  font-family: "San Francisco";
  font-weight: 700;
  color: #ffffff;
  font-size: 24px;
  text-decoration: none;
`;

const ExtraContainer = styled.p`
  flex-direction: column;
`;

const Comments = styled.p`
  float: left;
  color: white;
`;

const ReadMore = styled.p`
  float: right;
  color: white;
`;

interface IProps {
  title: string;
  commentNumber: number;
  url: string;
}

const Card = (props: IProps) => {
  const { title, commentNumber, url } = props;

  return (
    <CardContainer>
      <Title>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/responses/${url}`}
        >
          {title}
        </Link>
      </Title>
      <ExtraContainer>
        <Comments>
          {commentNumber} {commentNumber > 1 ? "comments" : "comment"}
        </Comments>
        <ReadMore>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/responses/${url}`}
          >
            Read more
          </Link>
        </ReadMore>
      </ExtraContainer>
    </CardContainer>
  );
};

export default Card;
