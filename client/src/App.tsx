import React from 'react';
import styled from 'styled-components'
import {
  Switch,
  Route,
} from "react-router-dom";
import { AppNavBar } from './components/AppNavBar';



const App: React.FC = () => {
  
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
  return (
     <Wrapper>
       <AppNavBar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        
      </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  flex-direction: row;
`

export default App;
