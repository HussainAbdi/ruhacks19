import React from "react";
import Enrich from "./components/Enrich";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Helmet
        bodyAttributes={{ style: "background-color : rgb(20, 12, 20)" }}
      />
      <Enrich />
    </Container>
  );
};

export default App;
