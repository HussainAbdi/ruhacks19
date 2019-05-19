import React from "react";
import styled from "styled-components";

import Header from "./Header";

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

const Container = styled.div`
  flex-direction: row;
`;

class Enrich extends React.Component {
  render() {
    return (
      <Container>
        <Header text={"Today's Questions"} />
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
