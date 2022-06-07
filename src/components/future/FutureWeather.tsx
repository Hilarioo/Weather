import React, { FC } from "react";
import FutureDate from "./FutureDate";
// Interfaces
import { Weather } from "../../api/interfaces";

// Typechecking to make sure the data being received is valid
type Props = {
  weather: Weather;
};

const FutureWeather: FC<Props> = ({ weather }) => {
  return (
    <div className='c-future fx-row'>
      {/* Doesnt show the same day again */}
      {weather.forecast.forecastday.map((forecastday, index) =>
        index !== 0 ? (
          <FutureDate key={index} forecastday={forecastday} />
        ) : null
      )}
    </div>
  );
};

export default FutureWeather;
