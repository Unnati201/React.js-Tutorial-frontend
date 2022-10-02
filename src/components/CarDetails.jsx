import React, { useState } from "react";

export const CarDetails = () => {
  const [car, setCar] = useState();

  const handleChange = ({ target: { name, value } }) => {
    //name:maruti
    //price:0
    //specs:{brand:"blah",color:"    "}

    setCar({
      ...car,
      [name]: value,
    });
  };

  return (
    <div
      style={{
        margin: "100px auto auto auto",
        width: "40vw",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Car Form</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(event) => {
          event.preventDefault();

          console.log(car);
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
        <label>Price</label>
        <input
          style={{ height: "20px", marginTop: "10px" }}
          name="price"
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Model</label>
        <input
          style={{ height: "20px", marginTop: "10px" }}
          name="model"
          type="text"
          onChange={({ target: { name, value } }) =>
            setCar({ ...car, specs: { ...car.specs, [name]: value } })
          }
        />
        <br />
        <br />
        <label>Brand</label>
        <input
          style={{ height: "20px", marginTop: "10px" }}
          name="brand"
          type="text"
          onChange={({ target: { name, value } }) =>
            setCar({ ...car, specs: { ...car.specs, [name]: value } })
          }
        />
        <br />
        <br />
        <label>Color</label>
        <input
          style={{ height: "20px", marginTop: "10px" }}
          name="color"
          type="text"
          onChange={({ target: { name, value } }) =>
            setCar({ ...car, specs: { ...car.specs, [name]: value } })
          }
        />
        <button
          style={{
            height: "30px",
            margin: "30px 0",
          }}
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};
