import React, { useState } from "react";
import PrivateRoute from "./PrivateRoute";
import { useNavigate } from "react-router-dom";

const AddTutorial = () => {
  const [tutorialFormData, setTutorialFormData] = useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setTutorialFormData({
      ...tutorialFormData,
      [event.target.name]: event.target.value,
    });
  };

  const saveTutorial = async (dataToSave) => {
    const response = await fetch("http://localhost:8080/api/tutorials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: dataToSave.title,
        description: dataToSave.description,
        published: dataToSave?.published === "true" ? true : false,
      }),
    });

    const formatToJson = await response.json();
  };

  return (
    <PrivateRoute>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Add a New Tutorials</h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={async (event) => {
            event.preventDefault();
            await saveTutorial(tutorialFormData);
            navigate("/");
          }}
        >
          <label>Title</label>
          <input
            style={{ height: "20px", marginTop: "10px" }}
            name="title"
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
          <br />
          <label>Published</label>
          <input
            style={{ height: "20px", marginTop: "10px" }}
            name="published"
            type="text"
            onChange={handleChange}
          />
          <br />
          <br />
          <button
            style={{
              height: "30px",
              marginTop: "30px",
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
