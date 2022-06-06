import React from "react";
// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { ReactComponent as Sun } from "../../svg/Sun.svg";

const FutureDate = () => {
  return (
    <div className='future-details fx-col'>
      {/* Temp */}
      <div className='num-unit fx-row'>
        <p className='num'>105</p>
        <span className='unit'>
          <TbTemperatureCelsius size={15} />
        </span>
      </div>

      {/* Svg and forecast */}
      <div className='future-forecast fx-col'>
        <Sun height={85} />
        <p>Partly Cloudy</p>
      </div>

      <div className='future-info'>
        <p className='day'>Saturday</p>
        <p className='date'>June 5, 2022</p>
      </div>
    </div>
  );
};

export default FutureDate;
