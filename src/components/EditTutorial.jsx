import React from "react";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";

import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditTutorial = () => {
  const [editCourse, setEditCourse] = useState(null);

  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/course/getOne/${params?.courseid}`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        const tutorialData = await response.json();
        setEditCourse({
          name: tutorialData?.singleCourse?.name,
          price: tutorialData?.singleCourse?.price,
          duration: tutorialData?.singleCourse?.duration,
          description: tutorialData?.singleCourse?.description,
        });
      } catch (err) {
        alert(err);
        throw err;
      }
    })();
  }, []);

  const handleChange = (event) => {
    setEditCourse({ ...editCourse, [event.target.name]: event.target.value });
  };

  const handleUpdateTutorial = async () => {
    try {
      const savedTutorails = await fetch(
        `http://localhost:3001/course/update/${params?.courseid}`,
        {
          method: "PUT",
          headers: {
           "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            name: editCourse?.name,
            description: editCourse?.description,
            price: editCourse?.price,
            duration: editCourse?.duration,
          }),
        }
      );

      const formatResponse = await savedTutorails.json();

      //Error handling
      if (!formatResponse?.isSuccess) {
        throw new Error(formatResponse?.message);
      }

      alert(formatResponse?.message);

      window.history.back();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <PrivateRoute>
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Edit an existing Tutorials
        </h2>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(event) => {
            event.preventDefault();
            handleUpdateTutorial();
          }}
        >
          <label style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "10px" }}>Name of the Tutorials</label>
          <input
            style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "10px" }}
            name="name"
            type="text"
            onChange={handleChange}
            value={editCourse?.name}
          />
          <br />
          <br />
          <label style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "5px" }}>Price</label>
          <input
            style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "5px" }}
            name="price"
            onChange={handleChange}
            value={editCourse?.price}
          />
          <br />
          <br />
          <label style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "5px" }}>Duration</label>
          <input
            style={{ height: "30px", margin: "100px auto auto auto",
            width: "40vw", marginTop: "5px" }}
            name="duration"
            type="text"
            onChange={handleChange}
            value={editCourse?.duration}
          />
          <br />
          <br />
          <label style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "5px" }}>Description</label>
          <input
            style={{ height: "30px",  margin: "100px auto auto auto",
            width: "40vw", marginTop: "5px" }}
            name="description"
            type="text"
            onChange={handleChange}
            value={editCourse?.description}
          />
          <br />
          <button
            style={{
              height: "30px", margin: "100px auto auto auto",
              width: "40vw", marginTop: "8px"
            }}
            type="submit"
          >
            Save Tutorial
          </button>
        </form>
      </div>
    </PrivateRoute>
  );
};

export default EditTutorial;
