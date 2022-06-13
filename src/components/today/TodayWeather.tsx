import React, { FC, useContext } from "react";
// Format Date
import { format } from "date-fns";
// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
// Child components
import MoreDetails from "./TodayDetails";
// Context
import { WeatherContext, TempContext } from "../../context/appContext";

const TodayWeather: FC = () => {
  const weather = useContext(WeatherContext);
  const { temp } = useContext(TempContext);

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
            {format(new Date(weather.location.localtime_epoch * 1000), "EEEE")}
          </p>
          <p className='date'>
            {format(
              new Date(weather.location.localtime_epoch * 1000),
              "MMMM do, yyyy"
            )}
          </p>
        </div>
      </div>

      {/* Current temp and forecast */}
      <div className='current-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>
            {temp === "f" ? weather.current.temp_f : weather.current.temp_c}
          </p>
          <span className='unit'>
            {temp === "f" ? (
              <TbTemperatureFahrenheit size={22} />
            ) : (
              <TbTemperatureCelsius size={22} />
            )}
          </span>
        </div>
        <span className='text'>{weather.current.condition.text}</span>
      </div>

      {/* Child component showing low temp, high temp, humidity, and wind speed */}
      <MoreDetails />
    </div>
  );
};

export default TodayWeather;
