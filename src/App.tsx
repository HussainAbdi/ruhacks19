import React from "react";
import Enrich from "./components/Enrich";
import styled from "styled-components";
import Helmet from "react-helmet";
import Navbar from "./components/navbar/Navbar";

const BodyContainer = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

const Container = styled.div``;

const App: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <BodyContainer>
        <Helmet
          bodyAttributes={{ style: "background-color : rgb(20, 12, 20)" }}
        />
        <Enrich />
      </BodyContainer>
    </Container>
  );
};

export default App;
