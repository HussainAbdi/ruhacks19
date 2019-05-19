import * as React from "react";
import styled from "styled-components";

import "../fonts.css";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
`;

const TabContainer = styled.div`
  float: right;
  border-style: solid;
  background-color: white;
  border-color: white;
  margin-right: 10px;
  border-radius: 20px;
  padding: 10px;
`;

interface IProps {
  loggedIn: boolean;
  logout: any;
}

const Navbar = (props: IProps) => {
  console.log("logged in is ", props.loggedIn);
  return (
    <Container>
      <Link to="/todays-questions">
        <TabContainer>Daily Questions</TabContainer>
      </Link>
      <Link to="/question-list">
        <TabContainer>Voting Arena</TabContainer>
      </Link>
      {!props.loggedIn ? (
        <>
          <Link to="/log-in">
            <TabContainer>Log In</TabContainer>
          </Link>
          <Link to="/sign-up">
            <TabContainer>Sign Up</TabContainer>
          </Link>
        </>
      ) : (
        <div onClick={props.logout}>
          <Link to="/todays-questions">
            <TabContainer>Logout</TabContainer>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
