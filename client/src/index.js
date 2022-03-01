import React from "react";
import ReactDOM from "react-dom";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HashRouter } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";

import App from "./components/App";

const cache = new InMemoryCache();
const link = new HttpLink({
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
