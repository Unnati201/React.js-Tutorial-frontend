import React, { useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";

import { useParams, useNavigate } from "react-router-dom";

const EditTutorial = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [editedData, setEditedData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:8080/api/tutorials/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const detailDataResponse = await response.json();
      setEditedData(detailDataResponse);
    })();
  }, []);

  const handleChange = (event) => {
    setEditedData({
      ...editedData,
      [event.target.name]: event.target.value,
    });
  };

  const editTuorial = async (dataToSave) => {
    const response = await fetch(
      `http://localhost:8080/api/tutorials/${params.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          title: dataToSave?.title,
          description: dataToSave?.description,
          published: dataToSave?.published === "true" ? true : false,
        }),
      }
    );

    const formatToJson = await response.json();
  };

  return (
    <PrivateRoute>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Edit an existing Tutorials</h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={async (event) => {
            event.preventDefault();

            await editTuorial(editedData);

            navigate("/");

            // if (userDetails?.password !== userDetails?.confirmPassword) {
            //   alert("Passwords does not match");
            // } else {
            //   navigate("/login", {
            //     state: { password: userDetails?.password },
            //   });
            // }
          }}
        >
          <label>Title</label>
          <input
            style={{ height: "20px", marginTop: "10px" }}
            name="title"
            type="text"
            value={editedData?.title}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Description</label>
          <input
            style={{ height: "20px", marginTop: "10px" }}
            name="description"
            type="text"
            value={editedData?.description}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Published</label>
          <input
            style={{ height: "20px", marginTop: "10px" }}
            name="published"
            type="text"
            value={editedData?.published}
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

export default EditTutorial;
