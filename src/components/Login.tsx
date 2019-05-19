import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "../fonts.css";
import Header from "./Header";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to top, #191970, #8b008b);
  border-radius: 20px;
  margin: 10px;
  padding-left: 20px;
  padding: 30px;
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
  font-size: 32px;
  font-weight: 600;
  font-family: "San Francisco";
  color: white;
`;

const Label = styled.label`
  font-family: "San Francisco";
  font-size: 32px;
  font-weight: 600;
  color: white;
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  flex-direction: row;
`;

interface IProps {
  logIn: any;
}

interface IState {
  email: string;
  password: string;
}

class Login extends React.Component<IProps, IState> {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Container>
        <Header text="Log In" />
        <CardContainer>
          <Label style={{ marginBottom: 10 }}>
            <div style={{ marginRight: 70 }}>Email:</div>
            <input
              style={{
                fontFamily: "San Francisco",
                fontSize: 32,
                fontWeight: 600,
                flex: 1
              }}
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
              value={this.state.email}
            />
          </Label>
          <Label>
            <div style={{ marginRight: 10 }}>Password:</div>
            <input
              style={{
                fontFamily: "San Francisco",
                fontSize: 32,
                fontWeight: 600,
                flex: 1
              }}
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
              type="password"
              value={this.state.password}
            />
          </Label>
          <Link
            to="/todays-questions"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                marginTop: 20,
                textAlign: "center",
                fontFamily: "San Francisco",
                fontSize: 24,
                backgroundColor: "white",
                marginLeft: 250,
                marginRight: 250,
                borderRadius: 10,
                textDecoration: "none"
              }}
              onClick={() =>
                this.props.logIn(this.state.email, this.state.password)
              }
            >
              Log In
            </div>
          </Link>
        </CardContainer>
      </Container>
    );
  }
}

export default Login;
