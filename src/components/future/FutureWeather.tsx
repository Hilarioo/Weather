import React from "react";
import FutureDate from "./FutureDate";

type Props = {
  futureDays: Array<string>;
  futureConditions: Array<string>;
  futureDates: Array<string>;
  futureTemp: Array<number>;
};

const FutureWeather = () => {
  return (
    <div className='c-future fx-row'>
      <FutureDate />
      <FutureDate />
      <FutureDate />
      <FutureDate />
    </div>
  );
};

export default FutureWeather;
