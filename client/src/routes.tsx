import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReactGa from "react-ga";
import styled from 'styled-components'

// Components
import LanguageSelector from "./components/languageSelector";
// Views
import { Desserts } from "./views/desserts";
import { FastFood } from "./views/fastFood";
import Contact from "./views/contact";

interface routesProps { }

export const Routes: React.FC<routesProps> = ({ }) => {
  useEffect(() => {
    ReactGa.initialize("UA-165053025-1");

    // To report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Wrapper>
      <LanguageSelector />
      <Switch>
        <Route path="/fastFood">
          <FastFood />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Desserts />
        </Route>
      </Switch>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column
`