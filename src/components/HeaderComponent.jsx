import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const HeaderComponent = () => {
  const context = useContext(AuthContext);

  return (
    context?.isUserLoggedIn && (
      <div style={{ margin: "100px auto auto auto", width: "40vw" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link to="/">HomePage</Link>
          <Link to="/add">Add</Link>
          <Link to="/edit/:id">Edit</Link>
        </div>
      </div>
    )
  );
};

export default HeaderComponent;
