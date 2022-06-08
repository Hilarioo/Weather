import React, { FC, useContext } from "react";
import FutureDate from "./FutureDate";
// Context
import { WeatherContext } from "../../App";

// Typechecking to make sure the data being received is valid
type Props = {
  temp: string;
};

const FutureWeather: FC<Props> = ({ temp }) => {
  const weather = useContext(WeatherContext);

  return (
    <div className='c-future fx-row'>
      {/* Doesnt show the same day again */}
      {weather.forecast.forecastday.map((forecastday, index) =>
        index !== 0 ? (
          <FutureDate key={index} forecastday={forecastday} temp={temp} />
        ) : null
      )}
    </div>
  );
};

export default FutureWeather;
