import React, { FC, useState, useContext } from "react";
// Interfaces
import { Weather } from "../api/interfaces";

const speedState = {
  speed: "",
  setSpeed: (newSpeed: string): void => {
    /**/
  },
};

const tempState = {
  temp: "",
  setTemp: (newTemp: string): void => {
    /**/
  },
};

// Context API
export const WeatherContext = React.createContext<Weather>({} as Weather);
export const TempContext = React.createContext(tempState);
export const SpeedContext = React.createContext(speedState);

type Props = {
  children: React.ReactNode;
};

export const TempProvider: FC<Props> = ({ children }) => {
  const [temp, setTemp] = useState<string>("f");

  return (
    <TempContext.Provider value={{ temp, setTemp }}>
      {children}
    </TempContext.Provider>
  );
};

export const useTemp = () => {
  const { temp, setTemp } = useContext(TempContext);
  if (temp === undefined) {
    throw new Error("useTemp must be used within a TempProvider");
  }
  return { temp, setTemp };
};
