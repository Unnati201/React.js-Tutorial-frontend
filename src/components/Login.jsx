import React, { useState, useContext, useEffect } from "react";

import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const location = useLocation();
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        context?.handleLogin();
        navigate("/");
      }
    } catch (err) {
      throw err;
    }
  }, []);

  const [userDetails, setUserDetails] = useState(null);

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleLogin = async () => {
    try {
      const loggedInUser = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userDetails?.email,
          password: userDetails?.password,
        }),
      });

      const formatResponse = await loggedInUser.json();

      //Error handling
      if (!formatResponse?.isSuccess) {
        throw new Error(formatResponse?.message);
      }

      alert(formatResponse?.message);

      localStorage.setItem("token", formatResponse?.token);
      context?.handleLogin();
      navigate("/");
    } catch (err) {
      alert(err);
    }
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
          handleLogin();
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
        <Link to="/register">
          <button
            style={{ height: "30px", marginTop: "20px", width: "100%" }}
            type="submit"
          >
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
