import React, { FC } from "react";
// Format Date
import { format } from "fecha";
// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
// Interfaces
import { Weather } from "../../api/interfaces";
// Child components
import MoreDetails from "./TodayDetails";

// Typechecking to make sure the data being received is valid
type Props = {
  weather: Weather;
};

const TodayWeather: FC<Props> = ({ weather }) => {
  return (
    <div className='c-today'>
      {/* Heading showcasing location name and date */}
      <div className='header fx-row'>
        <div className='location fx-row'>
          <GrLocation size={22} />
          <p>{weather.location.name}</p>
        </div>
        <div className='today-info fx-col'>
          <p className='day'>
            {format(new Date(weather.location.localtime), "dddd")}
          </p>
          <p className='date'>
            {format(new Date(weather.location.localtime), "MMMM Do, YYYY")}
          </p>
        </div>
      </div>

      {/* Current temp and forecast */}
      <div className='current-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>{weather.current.temp_f}</p>
          <span className='unit'>
            <TbTemperatureFahrenheit size={22} />
          </span>
        </div>
        <span className='text'>{weather.current.condition.text}</span>
      </div>

      {/* Child component showing low temp, high temp, humidity, and wind speed */}
      <MoreDetails current={weather.current} forecast={weather.forecast} />
    </div>
  );
};

export default TodayWeather;
