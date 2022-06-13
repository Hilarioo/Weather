import React, { FC, useState, useContext } from "react";
// Material UI
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
// Icons
import { BiSearchAlt } from "react-icons/bi";
// Select
import TextField from "@mui/material/TextField";
// Context
import { SpeedContext, useTemp } from "../../context/appContext";

// Drop-down selection for temperatures
const temperatures = [
  {
    value: "c",
    label: "Celsius (C)",
  },
  {
    value: "f",
    label: "Fahrenheit (F)",
  },
];

// Drop-down selection for wind speed
const speeds = [
  {
    value: "mph",
    label: "Miles (mph)",
  },
  {
    value: "k",
    label: "Kilometers (km/h)",
  },
];

// Typechecking the props for the component
type Props = {
  setLocation: (val: string) => void;
};

const Search: FC<Props> = ({ setLocation }) => {
  const [input, setInput] = useState("");

  const { speed, setSpeed } = useContext(SpeedContext);
  const { temp, setTemp } = useTemp();

  const handleLocation = (event: React.SyntheticEvent) => {
    event.preventDefault(); // prevent refresh
    setLocation(input);
    setInput("");
  };

  return (
    <div className='search'>
      {/* Search Bar */}
      <Paper
        component='form'
        onSubmit={(e: React.SyntheticEvent) => handleLocation(e)}
        sx={{
          m: 1,
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "90%",
          maxWidth: 400,
          height: 50,
        }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={"Search for a city..."}
          value={input}
          inputProps={{ "aria-label": "search for a city..." }}
          onChange={(e) => setInput(e.target.value)}
          data-testid='searchInput'
        />
        <IconButton sx={{ p: "10px" }} aria-label='search' type='submit'>
          <BiSearchAlt />
        </IconButton>
      </Paper>

      <div className='select'>
        {/* Select Temperature*/}
        <Box
          component='form'
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete='off'>
          <TextField
            id='outlined-select-temp'
            select
            label='Temperature Unit'
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            SelectProps={{
              native: true,
            }}>
            {temperatures.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>

        {/* Select Speed*/}
        <Box
          component='form'
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete='off'>
          <TextField
            id='outlined-select-speed'
            select
            label='Speed Unit'
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            SelectProps={{
              native: true,
            }}>
            {speeds.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
      </div>
    </div>
  );
};

export default Search;
