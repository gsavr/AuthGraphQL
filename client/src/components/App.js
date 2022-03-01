import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
