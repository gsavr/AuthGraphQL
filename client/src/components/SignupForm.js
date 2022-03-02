import React, { useState } from "react";
import AuthFields from "./AuthFields";
import SignupMutation from "../mutations/Signup";
import CurrentUserQuery from "../queries/CurrentUser";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [signupMutation] = useMutation(SignupMutation);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const onSubmit = (name, email, password) => {
    //console.log(email);
    signupMutation({
      variables: {
        name,
        email,
        password,
      },
      refetchQueries: [{ query: CurrentUserQuery }],
      //needed to know user is signed in before redirect
      awaitRefetchQueries: true,
    })
      .then(() => {
        navigate("/dashboard");
      })
      .catch((res) => {
        //console.log(res.graphQLErrors[0].message);
        const errs = res.graphQLErrors.map((err) => {
          const msg = err.message;
          return msg.replaceAll('"', "").replace("Unexpected error value:", "");
        });
        setErrors(errs);
      });
  };

  return (
    <div className="row justify-content-center">
      Register
      <AuthFields
        action={"Register"}
        onSubmitClick={onSubmit}
        errors={errors}
      />
    </div>
  );
};

export default SignupForm;
