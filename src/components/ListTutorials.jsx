import React, { useState, useEffect } from "react";
import PrivateRoute from "./PrivateRoute";
import { Link } from "react-router-dom";

const ListTutorials = () => {
  const [tutorials, setTutorials] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/api/tutorials", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const tutorialsData = await response.json();
      setTutorials(tutorialsData);
    })();
  }, []);

  return (
    <PrivateRoute>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>This is Tutorials Listing</h1>
        {tutorials?.map(({ id, title, description }, indx) => (
          <div
            key={id}
            style={{
              margin: "50px 0 50px 0",
              border: "1px solid black",
              padding: "15px 30px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
              to={`/edit/${id}`}
            >
              <p>Edit</p>
            </Link>
            <Link to={`/details/${id}`}>
              <h1>{title}</h1>
              <p>{description}</p>
            </Link>
          </div>
        ))}
      </div>
    </PrivateRoute>
  );
};

export default ListTutorials;
