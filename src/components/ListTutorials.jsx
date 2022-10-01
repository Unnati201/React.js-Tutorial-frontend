import React, { useState, useEffect, useContext } from "react";
import PrivateRoute from "./PrivateRoute";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ListTutorials = () => {
  const context = useContext(AuthContext);
  // const [tutorials, setTutorials] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("http://localhost:8080/api/tutorials", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     const tutorialsData = await response.json();
  //     setTutorials(tutorialsData);
  //   })();
  // }, []);

  return (
    <PrivateRoute>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>This is Tutorials Listing</h1>
        {context?.tutorials?.map((item, index) => (
          <div
            key={index}
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
              to={"/"}
            >
              <p>Edit</p>
            </Link>
            <Link to={`/`}>
              <h1>{item.name}</h1>
              <h3>{item.duration}</h3>
              <p>{item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </PrivateRoute>
  );
};

export default ListTutorials;
