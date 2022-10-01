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
            alignItems: "center",
          }}
        >
          <Link to="/">HomePage</Link>
          <Link to="/add">Add</Link>
          <Link to="/edit/:id">Edit</Link>
          <button
            type="button"
            style={{
              backgroundColor: "blue",
              outline: "none",
              padding: "5px",
              color: "white",
              border: "1px solid blue",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => context?.handleLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default HeaderComponent;
