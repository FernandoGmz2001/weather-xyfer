import React from "react";
import { getCurrentDate } from "../../../utils/date";

function Weather() {
  return (
    <div className="weather">
      <div className="weather__date-container">
        <p className="weather__date">{getCurrentDate()}</p>
      </div>
      <div className="weather__temperature-container">
        <p className="weather__temperature">12</p>
        <div className="weater__temperature-sign">º</div>
      </div>
      <div className="weather__temperature-icon">
        <img src="../../../resources/cloud-icon.png" alt="" />
      </div>
    </div>
  );
}

export default Weather;
