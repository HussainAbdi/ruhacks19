import React from "react";
import styled from "styled-components";

import "../fonts.css";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1024px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to top, #dd8a00, #da1b60);
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
`;

const HeaderContainer = styled.div`
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: block;
  display: inline-block;
  background-color: white;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Header = styled.p`
  text-align: center;
  font-family: "San Francisco";
  font-weight: 700;
  color: #000000;
  font-size: 32px;
`;

const Container = styled.div`
  flex-direction: row;
`;

class Enrich extends React.Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Header>Today's Questions</Header>
        </HeaderContainer>
        <CardContainer>
          <Card>
            <Title>What's your favourite part of the day?</Title>
          </Card>
          <Card>
            <Title>
              What's your favourite meal fj rfj rjf rjfrj r vir vir vijr vijr
              vijr vijr vijr vijr vijr?
            </Title>
          </Card>
          <Card>
            <Title>
              What do you think about global warming? And the future of the
              world with it?
            </Title>
          </Card>
        </CardContainer>
      </Container>
    );
  }
}

export default Enrich;
