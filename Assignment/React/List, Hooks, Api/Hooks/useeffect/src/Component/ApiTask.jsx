import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ApiTask.css";

export default function ApiTask() {
  const [data, setData] = useState([]);

  const fetchingData = () => {
    console.log("run");
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setData(res.data.users));
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="main-container">
      <h1 style={{ textAlign: "center", width:'100%' }}>User Data</h1>
      {data.map((e) => {
        return (
          <div className="container" key={e.id}>
            <p>{e.firstName}</p>
            <p>{e.age}</p>
            <p>{e.gender}</p>
          </div>
        );
      })}
    </div>
  );
}
