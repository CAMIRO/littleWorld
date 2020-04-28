import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

const client = new ApolloClient({
  uri: 'https://localhost:5000/graphql',
});

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


