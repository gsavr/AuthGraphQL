import React, { useState } from "react";
//import "materialize-css/dist/css/materialize.min.css";

const AuthFields = ({ action, onSubmitClick, errors }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //console.log(email);
  const onSubmit = (e) => {
    e.preventDefault();
    if (action === "Register") {
      onSubmitClick(name, email, password);
    } else {
      onSubmitClick(email, password);
    }
  };

  //Name is needed to register
  const signupName = () => {
    if (action === "Register") {
      return (
        <div className="input-field form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label" htmlFor="floatingName">
            Name:
          </label>
        </div>
      );
    }
  };

  return (
    <div className="row justify-content-center">
      <form onSubmit={onSubmit} className="col-lg-4 col-sm-9">
        {signupName()}
        {/* name will only be shown on register page */}
        <div className="input-field form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="floatingInput">
            Email:
          </label>
        </div>
        <div className="input-field form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="floatingPassword">
            Password:
          </label>
        </div>
        <button type="submit" className="btn btn-dark">
          {action}
        </button>
        <div className="fs-4" style={{ color: "red", textAlign: "center" }}>
          {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AuthFields;
