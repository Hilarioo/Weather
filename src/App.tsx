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
// Materiaul UI
import CircularProgress from "@mui/material/CircularProgress";

// Context API
export const WeatherContext = React.createContext<Weather>({} as Weather);
export const TempContext = React.createContext<string>("");
export const SpeedContext = React.createContext<string>("");

const App: FC = () => {
  const [weather, setWeather] = useState<Weather>();
  const [temp, setTemp] = useState<string>("f");
  const [speed, setSpeed] = useState<string>("mph");
  const [location, setLocation] = useState<string>();

  // Fetch user's IP address
  const fetchIP = async () => {
    try {
      // get data from geolocation API
      await axios.get(requests.fetchUserIP).then((res) => {
        setLocation(res.data.IPv4);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch new weather info
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
      <Search
        speed={speed}
        setSpeed={setSpeed}
        temp={temp}
        setTemp={setTemp}
        setLocation={setLocation}
      />

      <div className='c-temp'>
        {weather === undefined ? (
          <CircularProgress />
        ) : (
          <WeatherContext.Provider value={weather}>
            <TempContext.Provider value={temp}>
              <SpeedContext.Provider value={speed}>
                <Today />
              </SpeedContext.Provider>
            </TempContext.Provider>
          </WeatherContext.Provider>
        )}

        {weather === undefined ? (
          <CircularProgress />
        ) : (
          <WeatherContext.Provider value={weather}>
            <TempContext.Provider value={temp}>
              <Future />
            </TempContext.Provider>
          </WeatherContext.Provider>
        )}
      </div>
    </div>
  );
};

export default App;
