import React, { useState, useEffect, useContext } from "react";
import PrivateRoute from "./PrivateRoute";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ListTutorials = () => {
  const context = useContext(AuthContext);
  const [tutorials, setTutorials] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/postssssssss",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const tutorialsData = await response.json();
        setTutorials(tutorialsData);
      } catch (err) {
        throw new Error(`New Error Occured - ${err}`);
      }
    })();
  }, []);

  return (
    // <PrivateRoute>
    <div style={{ marginTop: "100px" }}>
      <h1 style={{ textAlign: "center" }}>This is Tutorials Listing</h1>

      {tutorials
        ?.map((item, index) => (
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
              <h1>{item.title}</h1>
              <h3>{item.body}</h3>
              {/* <p>{item.price}</p> */}
            </Link>
          </div>
        ))
        .slice(0, 5)}
    </div>
    // </PrivateRoute>
  );
};

export default ListTutorials;
