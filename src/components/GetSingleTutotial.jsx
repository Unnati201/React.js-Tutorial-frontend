import React from "react";
import PrivateRoute from "./PrivateRoute";

const GetSingleTutotial = () => {
  return (
    <PrivateRoute>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Get a Single Tutorials</h1>
      </div>
    </PrivateRoute>
  );
};

export default GetSingleTutotial;
