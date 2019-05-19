import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "../fonts.css";

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
  createUser: any;
}

interface IState {
  name: string;
  password: string;
}

class SignUp extends React.Component<IProps, IState> {
  state = {
    name: "My email",
    password: ""
  };

  render() {
    return (
      <CardContainer>
        <Title>Sign Up</Title>
        <Label>
          Email:
          <Input contentEditable={true}>My Email</Input>
        </Label>
        <Label>
          Password:
          <Input contentEditable={true}>Password</Input>
        </Label>
        <Link to="/todays-questions">
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
            onClick={() =>
              this.props.createUser(
                `Shehryar${Math.random() * 10000}@gmail.com`,
                `sdiuhfsidf${Math.random() * 1000}`
              )
            }
          >
            Sign Up
          </div>
        </Link>
        <br />
        <br />
        <br />
      </CardContainer>
    );
  }
}

export default SignUp;
