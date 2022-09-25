import React, { useState, useEffect } from "react";
import PrivateRoute from "./PrivateRoute";
import { useParams } from "react-router-dom";

const GetSingleTutotial = () => {
  const [detailData, setDetailData] = useState(null);

  const params = useParams();

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
      console.log(detailDataResponse);
      setDetailData(detailDataResponse);
    })();
  }, []);

  return (
    <PrivateRoute>
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Get a Single Tutorials</h1>
        <div
          style={{
            marginTop: "50px",
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
          <h1>{detailData?.title}</h1>
          <h3>{detailData?.description}</h3>
          <h4>{detailData?.published === false ? "false" : "true"}</h4>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default GetSingleTutotial;
