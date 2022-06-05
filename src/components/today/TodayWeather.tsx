import React from "react";

// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";

// child components
import MoreDetails from "./TodayDetails";

const TodayWeather = () => {
  return (
    <div className='c-today'>
      {/* Heading showcasing location name and date */}
      <div className='header fx-row'>
        <div className='location fx-row'>
          <GrLocation size={22} />
          <p>San Francisco</p>
        </div>
        <div className='today-info fx-col'>
          <p className='day'>Saturday</p>
          <p className='today-date'>June 5, 2022</p>
        </div>
      </div>

      {/* Current temp and forecast */}
      <div className='current-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>105</p>
          <span className='unit'>
            <TbTemperatureCelsius size={22} />
          </span>
        </div>
        <span className='text'>Partly Cloudy</span>
      </div>

      {/* Child component showing low temp, high temp, humidity, and wind speed */}
      <MoreDetails />
    </div>
  );
};

export default TodayWeather;
