import React, { FC, useState, useEffect } from "react";
// API helpers
import axios from "./api/axios";
import requests from "./api/requests";
// Interfaces
import { Weather } from "./api/interfaces";
// Import components
import Search from "./components/search/Search";
import Today from "./components/today/TodayWeather";
import Future from "./components/future/FutureWeather";

const App: FC = () => {
  const [weather, setWeather] = useState<Weather>();
  const [temp, setTemp] = useState("f");
  const [speed, setSpeed] = useState("mph");
  const [location, setLocation] = useState("San Francisco");

  // init
  useEffect(() => {
    // const fetchIP = async () => {
    //   try {
    //     // get data from geolocation API
    //     const req = await axios.get(requests.fetchUserIP).then((res) => {
    //       console.log(res.data.IPv4);
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchIP();

    const fetchWeather = async () => {
      try {
        await axios
          .get(
            // Free Tier only allows 3-days MAX so thats why its hardcoded
            `${requests.fetchForecast}&q=${location}&days=${3}&aqi=no&alerts=no`
          )
          .then((res) => {
            setWeather(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, [location]);

  console.log(weather);

  return (
    <div className='fx-col'>
      <Search
        speed={speed}
        setSpeed={setSpeed}
        temp={temp}
        setTemp={setTemp}
        setLocation={setLocation}
      />
      <div className='c-temp'>
        {weather === undefined ? (
          "loading current weather...."
        ) : (
          <Today weather={weather} speed={speed} temp={temp} />
        )}

        {weather === undefined ? (
          "loading furutre weather...."
        ) : (
          <Future weather={weather} temp={temp} />
        )}
      </div>
    </div>
  );
};

export default App;
