import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const TabContainer = styled.p`
  color: white;
  margin-left: auto;
  margin-right: 15px;
  border-color: white;
  border-style: solid;
  border-radius: 20px;
`;

const TabText = styled.p`
  font-family: "San Francisco";
  font-weight: 500;
  margin: 10px;
  font-size: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <TabContainer>
        <TabText>Sign Up</TabText>
      </TabContainer>
      <TabContainer>
        <TabText>Sign Up</TabText>
      </TabContainer>
    </Container>
  );
};

export default Navbar;
