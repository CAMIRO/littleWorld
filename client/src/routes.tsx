import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReactGa from "react-ga";
import styled from 'styled-components'

// Components
import LanguageSelector from "./components/languageSelector";
import { Footer } from "./components/footer"
// Views
import { Home } from "./views/home"
import { Desserts } from "./views/desserts";
import { Dishes } from "./views/dishes";
import Contact from "./views/contact";
// sub Views
import { DetailDessert } from "./views/desserts/detailDessert"

interface routesProps { }

export const Routes: React.FC<routesProps> = ({ }) => {
  useEffect(() => {
    ReactGa.initialize("UA-165053025-1");

    // To report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Wrapper>
      <BodyWrapper>
        <LanguageSelector />
        <Switch>
          <Route path="/dishes">
            <Dishes />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/desserts">
            <Desserts />
          </Route>
          <Route exact path="desserts/:dessertId" component={DetailDessert} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`

  flex: 1;
  flex-direction: column;
`
const BodyWrapper = styled.div`
 /* Equal to height of footer */
  /* But also accounting for potential margin-bottom of last child */
  min-height: 100%;
  margin-bottom: -100px;
 
`