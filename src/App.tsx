import React, { FC, useState, useEffect } from "react";

// api helpers
import axios from "./api/axios";
import requests from "./api/requests";

// Import components
import Search from "./components/search/Search";
import Today from "./components/today/TodayWeather";
import Future from "./components/future/FutureWeather";

const App: FC = () => {
  const [weather, setWeather] = useState();
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
        const req = await axios.get(
          `${requests.fetchForecast}&q=${location}&days=${5}&aqi=no&alerts=no`
        );
        console.log(req.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, [location]);

  return (
    <div className='fx-col'>
      <Search setLocation={setLocation} />
      <div className='c-temp'>
        <Today />
        <Future />
      </div>
    </div>
  );
};

export default App;
