import React from "react";

// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";

type Props = {
  lowTemp: number;
  highTemp: number;
  humidity: number;
  windSpeed: number;
};

const TodayDetails = () => {
  return (
    <div className='today-details fx-row'>
      {/* Low Temp */}
      <div className='l-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>75</p>
          <span className='unit'>
            <TbTemperatureCelsius />
          </span>
        </div>
        <span className='text'>Low</span>
      </div>

      {/* High Temp */}
      <div className='h-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>105</p>
          <span className='unit'>
            <TbTemperatureCelsius />
          </span>
        </div>
        <span className='text'>High</span>
      </div>

      {/* Humidity */}
      <div className='humidity fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>15</p>
          <span className='unit'>%</span>
        </div>
        <span className='text'>Humidity</span>
      </div>

      {/* Wind Speed */}
      <div className='wind fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>15</p>
          <span className='unit'>mph</span>
        </div>
        <span className='text'>Wind Speed</span>
      </div>
    </div>
  );
};

export default TodayDetails;
