import React, { FC, useState, useContext } from "react";
// Interfaces
import { Weather } from "../api/interfaces";

const speedState = {
  speed: "",
  handleSpeed: (event: React.ChangeEvent<HTMLInputElement>) => {
    /**/
  },
};

const tempState = {
  temp: "",
  handleTemp: (event: React.ChangeEvent<HTMLInputElement>) => {
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
  // value given to context
  const [temp, setTemp] = useState<string>("f");

  const handleTemp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(event.target.value);
  };

  return (
    <TempContext.Provider value={{ temp, handleTemp }}>
      {children}
    </TempContext.Provider>
  );
};

export const useTemp = () => {
  const { temp, handleTemp } = useContext(TempContext);
  if (temp === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return { temp, handleTemp };
};

export const SpeedProvider: FC<Props> = ({ children }) => {
  // value given to context
  const [speed, setSpeed] = useState<string>("f");

  const handleSpeed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(event.target.value);
  };

  return (
    <SpeedContext.Provider value={{ speed, handleSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};

export const useSpeed = () => {
  const { speed, handleSpeed } = useContext(SpeedContext);
  if (speed === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return { speed, handleSpeed };
};
