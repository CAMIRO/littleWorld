import React from "react";
import styled from "styled-components";
import { AppNavBar } from "./components/AppNavBar";
import LanguageSelector from "./components/languageSelector";
import { LanguageProvider } from "./containers/language";
import { Routes } from "./routes";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Wrapper>
        <AppNavBar />
        <LanguageSelector />
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
`;

export default App;
