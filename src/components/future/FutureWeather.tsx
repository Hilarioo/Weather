import React, { FC, useContext } from "react";
import FutureDate from "./FutureDate";
// Context
import { WeatherContext } from "../../context/appContext";

const FutureWeather: FC = () => {
  const weather = useContext(WeatherContext);

  console.log(weather);

  return (
    <div className='c-future fx-row'>
      {/* skip the current day */}
      {weather.forecast.forecastday.map((forecastday, index) =>
        index !== 0 ? (
          <FutureDate key={index} forecastday={forecastday} />
        ) : null
      )}
    </div>
  );
};

export default FutureWeather;
