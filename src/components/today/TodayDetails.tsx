import React, { FC } from "react";
// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
// Interfaces
import { CurrentWeather, Forecast } from "../../api/interfaces";

// Typechecking to make sure the data being received is valid
type Props = {
  current: CurrentWeather;
  forecast: Forecast;
  speed: string;
  temp: string;
};

const TodayDetails: FC<Props> = ({ current, forecast, speed, temp }) => {
  return (
    <div className='today-details fx-row'>
      {/* Low Temp */}
      <div className='l-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>
            {temp === "f"
              ? forecast.forecastday[0].day.mintemp_f
              : forecast.forecastday[0].day.mintemp_c}
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
              ? forecast.forecastday[0].day.maxtemp_f
              : forecast.forecastday[0].day.maxtemp_c}
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
          <p className='num'>{current.humidity}</p>
          <span className='unit'>%</span>
        </div>
        <span className='text'>Humidity</span>
      </div>

      {/* Wind Speed */}
      <div className='wind fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>
            {speed === "mph" ? current.wind_mph : current.wind_kph}
          </p>
          <span className='unit'>{speed === "mph" ? "mph" : "km/h"}</span>
        </div>
        <span className='text'>Wind Speed</span>
      </div>
    </div>
  );
};

export default TodayDetails;
