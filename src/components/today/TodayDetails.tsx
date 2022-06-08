import React, { FC, useContext } from "react";
// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
// Context
import { WeatherContext, SpeedContext, TempContext } from "../../App";

const TodayDetails: FC = () => {
  const weather = useContext(WeatherContext);
  const speed = useContext(SpeedContext);
  const temp = useContext(TempContext);

  return (
    <div className='today-details fx-row'>
      {/* Low Temp */}
      <div className='l-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>
            {temp === "f"
              ? weather.forecast.forecastday[0].day.mintemp_f
              : weather.forecast.forecastday[0].day.mintemp_c}
          </p>
          <span className='unit'>
            {temp === "f" ? (
              <TbTemperatureFahrenheit />
            ) : (
              <TbTemperatureCelsius />
            )}
          </span>
        </div>
        <span className='text'>Low</span>
      </div>

      {/* High Temp */}
      <div className='h-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>
            {temp === "f"
              ? weather.forecast.forecastday[0].day.maxtemp_f
              : weather.forecast.forecastday[0].day.maxtemp_c}
          </p>
          <span className='unit'>
            {temp === "f" ? (
              <TbTemperatureFahrenheit />
            ) : (
              <TbTemperatureCelsius />
            )}
          </span>
        </div>
        <span className='text'>High</span>
      </div>

      {/* Humidity */}
      <div className='humidity fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>{weather.current.humidity}</p>
          <span className='unit'>%</span>
        </div>
        <span className='text'>Humidity</span>
      </div>

      {/* Wind Speed */}
      <div className='wind fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>
            {speed === "mph"
              ? weather.current.wind_mph
              : weather.current.wind_kph}
          </p>
          <span className='unit'>{speed === "mph" ? "mph" : "km/h"}</span>
        </div>
        <span className='text'>Wind Speed</span>
      </div>
    </div>
  );
};

export default TodayDetails;
