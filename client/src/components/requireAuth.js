import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import CurrentUser from "../queries/CurrentUser";
import { useNavigate } from "react-router";

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const navigate = useNavigate();
    const { data, loading } = useQuery(CurrentUser);

    useEffect(() => {
      if (!loading && !data.user) {
        navigate("/signin");
      }
    });
    return <ChildComponent {...props} />;
  };

  return ComposedComponent;
};

///example from course
/* import React, { useEffect } from "react";
import CurrentUser from "../queries/CurrentUser";
import { useNavigate } from "react-router";
import { useQuery } from "@apollo/client";

const requireAuth = (BaseComponent) => (props) => {
  const { data, loading } = useQuery(CurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    //if the user does not exist, push them to login
    if (!loading && !data?.user) {
      navigate("/signin");
    }
  });
  return <BaseComponent {...props} />;
};

export default requireAuth; */
