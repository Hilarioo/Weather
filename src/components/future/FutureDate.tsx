import React, { FC } from "react";
// Format Date
import { format } from "fecha";
// Icons
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { ReactComponent as Sun } from "../../svg/Sun.svg";
import { ReactComponent as RainStorm } from "../../svg/RainStorm.svg";
import { ReactComponent as SunRain } from "../../svg/SunRain.svg";
import { ReactComponent as SunClouds } from "../../svg/SunClouds.svg";
// Interfaces
import { ForecastDay } from "../../api/interfaces";

// Typechecking to make sure the data being received is valid
type Props = {
  forecastday: ForecastDay;
  temp: string;
};

const FutureDate: FC<Props> = ({ forecastday, temp }) => {
  const cloud = ["cloudy", "overcast", "mist", "fog"];
  const rain = ["rain", "snow", "sleet", "drizzle", "ice"];
  const storm = ["thunder", "blizzard"];

  const weatherImage = (): JSX.Element => {
    if (storm.some((word) => forecastday.day.condition.text.includes(word)))
      return <RainStorm height={85} />;
    else if (rain.some((word) => forecastday.day.condition.text.includes(word)))
      return <SunRain height={85} />;
    else if (
      cloud.some((word) => forecastday.day.condition.text.includes(word))
    )
      return <SunClouds height={85} />;
    else return <Sun height={85} />;
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
      <div className='future-forecast fx-col'>
        {weatherImage()}
        {/* <Sun height={85} /> */}
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
