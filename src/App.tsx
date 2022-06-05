import React, { FC } from "react";

// Import components
import Search from "./components/search/Search";
import Today from "./components/today/TodayWeather";
import Future from "./components/future/FutureWeather";

//TODO: Modify/replace whatever you need. Add components as you see fit.
const App: FC = () => {
  return (
    <div className='fx-col'>
      <Search />
      <div className='c-temp fx-row'>
        <Today />
        <Future />
      </div>
    </div>
  );
};

export default App;
