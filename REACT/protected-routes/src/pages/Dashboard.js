import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <h1>Hi, This is Dashboard</h1>
      <Link to="/profile">Profile Page</Link>
    </>
  );
};
