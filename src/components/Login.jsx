import React, { useState, useContext, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const location = useLocation();
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  return (
    <div
      style={{
        margin: "100px auto auto auto",
        width: "40vw",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => {
          e.preventDefault();

          if (userDetails?.password !== location?.state?.password) {
            alert("Password is incorrect");
          } else {
            context?.handleLogin();

            navigate("/");
          }
        }}
      >
        <label>Email</label>
        <input
          style={{ height: "20px", marginTop: "10px" }}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Password</label>
        <input
          style={{ height: "20px", marginTop: "10px" }}
          name="password"
          type="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button style={{ height: "30px", marginTop: "10px" }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
