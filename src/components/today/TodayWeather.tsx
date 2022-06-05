import React from "react";

// child components
import MoreDetails from "./TodayDetails";

const TodayWeather = () => {
  return (
    <div className='c-today'>
      <div className='header fx-row'>
        <p>San Francisco</p>
        <p>
          Saturday <br /> June 5, 2022
        </p>
      </div>
      <div className='current-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>105</p>
          <span className='unit'>C</span>
        </div>
        <span className='text'>Partly Cloudy</span>
      </div>
      <MoreDetails />
    </div>
  );
};

export default TodayWeather;
