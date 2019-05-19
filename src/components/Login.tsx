import * as React from "react";
import styled from "styled-components";

import "../fonts.css";
import Header from "./Header";
import LoginCard from "./LoginCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 60%;
`;

const Email = styled.div``;

const LoginButton = styled.div``;

class Login extends React.Component {
  render() {
    return <LoginCard title="Log In" email="email" password="password" />;
  }
}

export default Login;
