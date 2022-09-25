import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userDetails, setUserDetails] = useState(null);

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        margin: "100px auto auto auto",
        width: "40vw",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Register Yourself!</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(event) => {
          event.preventDefault();

          if (userDetails?.password !== userDetails?.confirmPassword) {
            alert("Passwords does not match");
          } else {
            navigate("/login", { state: { password: userDetails?.password } });
          }
        }}
      >
        <label>Name</label>
        <input
          style={{ height: "20px", marginTop: "10px" }}
          name="name"
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
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
        <label>Confirm password</label>
        <input
          style={{ height: "20px", marginTop: "10px" }}
          name="confirmPassword"
          type="password"
          onChange={handleChange}
        />
        <br />
        <button
          style={{
            height: "30px",
            marginTop: "30px",
          }}
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
