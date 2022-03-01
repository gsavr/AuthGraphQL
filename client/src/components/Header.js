import React from "react";
import { graphql } from "react-apollo";
import CurrentUserQuery from "../queries/CurrentUser";

const Header = ({ data: { user, loading } }) => {
  console.log(user);

  return <div>Header</div>;
};

export default graphql(CurrentUserQuery)(Header);
