import React, { FC } from "react";
// Format Date
import { format } from "fecha";
// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { ReactComponent as Sun } from "../../svg/Sun.svg";
// Interfaces
import { ForecastDay } from "../../api/interfaces";

// Typechecking to make sure the data being received is valid
type Props = {
  forecastday: ForecastDay;
};

const FutureDate: FC<Props> = ({ forecastday }) => {
  return (
    <div className='future-details fx-col'>
      {/* Temp */}
      <div className='num-unit fx-row'>
        <p className='num'>{forecastday.day.maxtemp_f}</p>
        <span className='unit'>
          <TbTemperatureFahrenheit size={15} />
        </span>
      </div>

      {/* Svg and forecast */}
      <div className='future-forecast fx-col'>
        <Sun height={85} />
        <p>{forecastday.day.condition.text}</p>
      </div>

      <div className='future-info'>
        <p className='day'>
          {format(new Date(forecastday.date.replace(/-/g, "/")), "dddd")}
        </p>
        <p className='date'>
          {format(
            new Date(forecastday.date.replace(/-/g, "/")),
            "MMMM Do, YYYY"
          )}
        </p>
      </div>
    </div>
  );
};

export default FutureDate;
