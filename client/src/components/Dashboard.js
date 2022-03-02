import React from "react";
import requireAuth from "../components/requireAuth";

const Dashboard = () => {
  return (
    <div>
      <h3 className="row justify-content-center">Dashboard</h3>
    </div>
  );
};

export default requireAuth(Dashboard);
