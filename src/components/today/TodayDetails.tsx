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
};

const TodayDetails: FC<Props> = ({ current, forecast }) => {
  return (
    <div className='today-details fx-row'>
      {/* Low Temp */}
      <div className='l-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>{forecast.forecastday[0].day.mintemp_f}</p>
          <span className='unit'>
            <TbTemperatureFahrenheit />
          </span>
        </div>
        <span className='text'>Low</span>
      </div>

      {/* High Temp */}
      <div className='h-temp fx-col'>
        <div className='num-unit fx-row'>
          <p className='num'>{forecast.forecastday[0].day.maxtemp_f}</p>
          <span className='unit'>
            <TbTemperatureFahrenheit />
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
          <p className='num'>{current.wind_mph}</p>
          <span className='unit'>mph</span>
        </div>
        <span className='text'>Wind Speed</span>
      </div>
    </div>
  );
};

export default TodayDetails;
