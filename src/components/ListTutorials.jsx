import React, { useState, useEffect, useContext } from "react";
import PrivateRoute from "./PrivateRoute";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ListTutorials = () => {
  const [tutorials, setTutorials] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3001/course/all", {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        const tutorialsData = await response.json();
        setTutorials(tutorialsData.courses);
      } catch (err) {
        throw new Error(`New Error Occured - ${err}`);
      }
    })();
  }, []);

  const handleDeleteTutorial = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/course/deleteOne/${id}`,
        {
          method: "DELETE",
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      const deleteData = await response.json();

      const filteredData = tutorials?.filter((item) => item._id !== id);

      setTutorials(filteredData);
    } catch (err) {
      alert(err);
      throw err;
    }
  };

  return (
    <PrivateRoute>
      <br></br><br/>
      <div stPrivateRouteyle={{ marginTop: "50px" }}>
        <h2 style={{ textAlign: "center",marginBottom: "30px" }}>This is Tutorials Listing</h2>

        {tutorials
          ?.map((item, index) => (
            <div
              key={index}
              style={{
                
                border: "1px solid black",
                padding: "15px 30px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                margin: "100px auto auto auto",
                width: "48vw",
                height:"50vh"
                
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  to={`/edit/${item?._id}`}
                >
                  <p>Edit</p>
                </Link>
                <button
                  style={{ height: "30px", color:"white" , backgroundColor:"red" , width: "100px", marginLeft: "380px" }}
                  onClick={() => handleDeleteTutorial(item?._id)}
                >
                  Delete
                </button>
              </div>
              <Link to={`/`} style={{ textDecoration: "none" }}>
                <h1>{item.name}</h1>
                <h3>{item.description}</h3>
                <p>Price - {item.price}</p>
                <p>{item.duration}</p>
              </Link>
            </div>
          ))
          .slice(0, 5)}
      </div>
    </PrivateRoute>
  );
};

export default ListTutorials;
