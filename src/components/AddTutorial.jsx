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

  const handleAddTutorial = async () => {
    try {
      const savedTutorails = await fetch("http://localhost:3001/course/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: tutorials?.name,
          description: tutorials?.description,
          price: tutorials?.price,
          duration: tutorials?.duration,
        }),
      });

      const formatResponse = await savedTutorails.json();

      //Error handling
      if (!formatResponse?.isSuccess) {
        throw new Error(formatResponse?.message);
      }

      alert(formatResponse?.message);

      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <PrivateRoute>
      
        <div style={{ marginTop: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Add a New Tutorials
        </h2>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(event) => {
            event.preventDefault();
            if (tutorials) {
              handleAddTutorial();
            }
          }}
        >
          <label style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw"
            }}>Name of tutorials</label>
          <input
            style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "5px" }}
            name="name"
            type="text"
            onChange={handleChange}
          />
          <br />
          <br />
          <label style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "10px" }}>Price</label>
          <input
            style={{ height: "30px", margin: "100px auto auto auto",
            width: "40vw", marginTop: "10px" }}
            name="price"
            type="number"
            onChange={handleChange}
          />
          <br />
          <br />
          <label style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "10px" }}>Duration</label>
          <input
            style={{ height: "30px", margin: "100px auto auto auto",
            width: "40vw", marginTop: "5px" }}
            name="duration"
            type="text"
            onChange={handleChange}
          />
          <br />
          <br />
          <label style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "10px" }}>Description</label>
          <input
            style={{ height: "30px", margin: "100px auto auto auto",
            width: "40vw", marginTop: "10px" }}
            name="description"
            type="text"
            onChange={handleChange}
          />
          <br />
          <button
            style={{
              height: "30px", margin: "100px auto auto auto",
              width: "40vw", marginTop: "10px"
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
