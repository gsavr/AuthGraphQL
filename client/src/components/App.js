import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
