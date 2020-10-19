import Axios from "axios";
import "./Result.css";

import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import Img from "./not_found.svg";
import CloudyImg from "./cloudy.png";
import RainyImg from "./rainy.png";
import SunnyImg from "./sunny.png";

import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const Result = () => {
  const [result, setResult] = useState([]);
  const context = useContext(Context);
  const API_KEY = "ee03867b5e0e0b2c0460b8a795fae98f";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.search}&appid=${API_KEY}`;

  useEffect(() => {
    if (context.search.trim() !== "" && context.searchCount !== 0) {
      Axios.get(API_URL)
        .then((res) => {
          if (res.data) {
            const data = Object.values(res.data);
            setResult(data);
            context.setSearch("");
          }
        })
        .catch((err) => {
          if (err.message.includes(404)) {
            alertify
              .alert("Please search for valid name.")
              .set({ title: "Warning" });
          } else {
            alertify.alert("Something went wrong.").set({ title: "Warning" });
          }
        });
    }
  }, [context.searchCount]);

  return (
    <div className="result">
      <div
        className="details"
        style={result.length < 1 ? { display: "none" } : null}
      >
        <p>{result[11]}</p>
        <img
          src={
            result.length > 0
              ? result[1][0].main === "Clouds"
                ? CloudyImg
                : result[1][0].main === "Clear"
                ? SunnyImg
                : RainyImg
              : null
          }
        />
        <p style={{ color: "coral" }}>
          {result.length > 0 ? result[1][0].description : ""}
        </p>
        <p>
          Max Temp:
          {result.length > 0 ? (result[3].temp_max - 273.15).toFixed(1) : 0}°C
        </p>
        <p>
          Min Temp:
          {result.length > 0 ? (result[3].temp_min - 273.15).toFixed(1) : 0}°C
        </p>
        <p>
          Now:
          {result.length > 0 ? (result[3].temp - 273.15).toFixed(1) : 0}°C
        </p>
      </div>

      <div
        className="not_found"
        style={result.length > 0 ? { display: "none" } : null}
      >
        <img src={Img} alt="not_found" />
      </div>
    </div>
  );
};

export default Result;
