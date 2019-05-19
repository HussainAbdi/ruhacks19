import React from "react";
import styled from "styled-components";

import "../fonts.css";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to top, #dd8a00, #da1b60);
  border-radius: 20px;
  margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 600px;
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
  align-self: center;
`;

const Email = styled.div``;

const Password = styled.div``;

const Input = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: "San Francisco";
  color: white;
`;

const Label = styled.label`
  font-family: "San Francisco";
  font-size: 24px;
  font-weight: 400;
`;

interface IProps {
  title: string;
  email: string;
  password: string;
}

const SignInButton = styled.div`
  background-color: white;
`;

const Card = (props: IProps) => {
  const { title, email, password } = props;

  return (
    <CardContainer>
      <Title>{title}</Title>
      <Label>
        Email:
        <Input contentEditable={true}>My Email</Input>
      </Label>
      <Label>
        Password:
        <Input contentEditable={true}>Password</Input>
      </Label>
      <div
        style={{
          marginTop: 20,
          textAlign: "center",
          fontFamily: "San Francisco",
          fontSize: 24,
          backgroundColor: "white",
          marginLeft: 250,
          marginRight: 250,
          borderRadius: 10
        }}
      >
        Login
      </div>
      <br />
      <br />
      <br />
    </CardContainer>
  );
};

export default Card;
