import * as React from "react";
import styled from "styled-components";

import "../fonts.css";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
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

const Navbar = () => {
  return (
    <Container>
      <TabContainer>Daily Questions</TabContainer>
      <TabContainer>Voting Arena</TabContainer>
      <TabContainer>Sign Up</TabContainer>
    </Container>
  );
};

export default Navbar;
