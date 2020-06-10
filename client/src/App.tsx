import React from "react";
import styled from "styled-components";
import { AppNavBar } from "./components/appNavBar";
import { LanguageProvider } from "./containers/language";
import { Routes } from "./routes";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Wrapper>
        <AppNavBar />
        <Routes />
      </Wrapper>
    </LanguageProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  flex-direction: row;
  position: absolute;
`;

export default App;
