import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReactGa from "react-ga";

// Views
import { Desserts } from "./views/desserts";
import { FastFood } from "./views/fastFood";
import Contact from "./views/contact";

interface routesProps {}

export const Routes: React.FC<routesProps> = ({}) => {
  useEffect(() => {
    ReactGa.initialize("UA-165053025-1");

    // To report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
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
    </>
  );
};
