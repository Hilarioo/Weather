import React, { FC, useContext } from "react";
// Format Date
import { format } from "date-fns";
// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { ReactComponent as Sun } from "../../svg/Sun.svg";
import { ReactComponent as RainStorm } from "../../svg/RainStorm.svg";
import { ReactComponent as SunRain } from "../../svg/SunRain.svg";
import { ReactComponent as SunClouds } from "../../svg/SunClouds.svg";
// Interfaces
import { ForecastDay } from "../../api/interfaces";
// Context
import { useTemp } from "../../context/appContext";

// Typechecking to make sure the data being received is valid
type Props = {
  forecastday: ForecastDay;
};

const FutureDate: FC<Props> = ({ forecastday }) => {
  // Choose svg to load based on weather keywords
  const cloud = ["cloudy", "overcast", "mist", "fog"];
  const rain = ["rain", "snow", "sleet", "drizzle", "ice"];
  const storm = ["thunder", "blizzard"];

  // Context API
  const { temp } = useTemp();

  const weatherImage = (forecast: string): JSX.Element => {
    if (storm.some((word) => forecast.includes(word)))
      return <RainStorm height={85} title='storm' />;
    else if (rain.some((word) => forecast.includes(word)))
      return <SunRain height={85} title='rain' />;
    else if (cloud.some((word) => forecast.includes(word)))
      return <SunClouds height={85} title='clouds' />;
    else return <Sun height={85} title='sun' />;
  };

  return (
    <div className='future-details fx-col'>
      {/* Temp */}
      <div className='num-unit fx-row'>
        <p className='num'>
          {temp === "f" ? forecastday.day.maxtemp_f : forecastday.day.maxtemp_c}
        </p>
        <span className='unit'>
          {temp === "f" ? (
            <TbTemperatureFahrenheit size={15} />
          ) : (
            <TbTemperatureCelsius size={15} />
          )}
        </span>
      </div>

      {/* Svg and forecast */}
      <div className='future-forecast fx-col' data-testid='f-forecast'>
        {weatherImage(forecastday.day.condition.text)}
        <p>{forecastday.day.condition.text}</p>
      </div>

      <div className='future-info'>
        <p className='day'>
          {format(new Date(forecastday.date_epoch * 1000), "EEEE")}
        </p>
        <p className='date'>
          {format(new Date(forecastday.date_epoch * 1000), "MMMM do, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default FutureDate;
