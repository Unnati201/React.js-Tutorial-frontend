import React from "react";
import PrivateRoute from "./PrivateRoute";

const EditTutorial = () => {
  return (
    <PrivateRoute>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Edit an existing Tutorials</h1>
      </div>
    </PrivateRoute>
  );
};

export default EditTutorial;
