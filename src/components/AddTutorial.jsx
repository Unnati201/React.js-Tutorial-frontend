import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";

const AddTutorial = () => {
  const [tutorials, setTutorials] = useState(null);
  const context = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setTutorials({ ...tutorials, [event.target.name]: event.target.value });
  };

  return (
    <PrivateRoute>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Add a New Tutorials</h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(event) => {
            event.preventDefault();
            if (tutorials) {
              context?.handleAddTutorial(tutorials);
              navigate("/");
            }
          }}
        >
          <label>Name of the Tutorials</label>
          <input
            style={{ height: "20px", marginTop: "10px" }}
            name="name"
            type="text"
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Price</label>
          <input
            style={{ height: "20px", marginTop: "10px" }}
            name="price"
            type="number"
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Duration</label>
          <input
            style={{ height: "20px", marginTop: "10px" }}
            name="duration"
            type="text"
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Description</label>
          <input
            style={{ height: "20px", marginTop: "10px" }}
            name="description"
            type="text"
            onChange={handleChange}
          />
          <br />
          <button
            style={{
              height: "30px",
              margin: "30px 0 30px 0",
            }}
            type="submit"
          >
            Add Tutorial
          </button>
        </form>
      </div>
    </PrivateRoute>
  );
};

export default AddTutorial;
