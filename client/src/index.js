import React from "react";
import ReactDOM from "react-dom";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { HashRouter } from "react-router-dom";
//import "materialize-css/dist/css/materialize.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";

const cache = new InMemoryCache();
const link = new createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  cache,
  link,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
