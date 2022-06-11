import React, { FC, useState, useEffect, useMemo } from "react";
// API helpers
import axios from "./api/axios";
import requests from "./api/requests";
// Interfaces
import { Weather } from "./api/interfaces";
// Context
import { WeatherContext } from "./context/appContext";
// Context
import { TempProvider, SpeedProvider } from "./context/appContext";
// Import components
import Search from "./components/search/Search";
import Today from "./components/today/TodayWeather";
import Future from "./components/future/FutureWeather";
// Materiaul UI
import CircularProgress from "@mui/material/CircularProgress";

const App: FC = () => {
  const [weather, setWeather] = useState<Weather>();
  const [temp, setTemp] = useState<string>("f");
  const [speed, setSpeed] = useState<string>("mph");
  // if user's IP address fails. Default is set to San Francisco
  const [location, setLocation] = useState<string>("San Francisco");

  // Fetch user's IP address
  const fetchIP = () => {
    // get data from geolocation API
    axios
      .get(requests.fetchUserIP)
      .then((res) => {
        setLocation(res.data.IPv4);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Fetch new weather info
  const fetchWeather = () => {
    axios
      .get(
        // Free Tier only allows 3-days MAX so thats why its hardcoded
        `${requests.fetchForecast}&q=${location}&days=${3}&aqi=no&alerts=no`
      )
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // init
  useEffect(() => {
    fetchIP();
    fetchWeather();
  }, []);

  // listens to location state change
  useEffect(() => {
    fetchWeather();
  }, [location]);

  return (
    <div className='fx-col'>
      <TempProvider>
        <SpeedProvider>
          <Search setLocation={setLocation} />
        </SpeedProvider>
      </TempProvider>

      <div className='c-temp'>
        {weather === undefined ? (
          <CircularProgress />
        ) : (
          <WeatherContext.Provider value={weather}>
            <TempProvider>
              <SpeedProvider>
                <Today />
              </SpeedProvider>
            </TempProvider>
          </WeatherContext.Provider>
        )}

        {weather === undefined ? (
          <CircularProgress />
        ) : (
          <WeatherContext.Provider value={weather}>
            <TempProvider>
              <Future />
            </TempProvider>
          </WeatherContext.Provider>
        )}
      </div>
    </div>
  );
};

export default App;
