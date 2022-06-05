import React, { useState } from "react";

// Search Bar
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

// Select
import TextField from "@mui/material/TextField";

const temperatures = [
  {
    value: "celsius",
    label: "Celsius (C)",
  },
  {
    value: "fahrenheit",
    label: "Fahrenheit (F)",
  },
  {
    value: "kelvin",
    label: "Kelvin (K)",
  },
];

const speeds = [
  {
    value: "mph",
    label: "Miles (mph)",
  },
  {
    value: "km/h",
    label: "Kilometers (km/h)",
  },
];

const Search = () => {
  const [temp, setTemp] = useState("fahrenheit");
  const [speed, setSpeed] = useState("mph");

  const handleTemp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(event.target.value);
  };

  const handleSpeed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(event.target.value);
  };

  return (
    <div className='search'>
      {/* Search Bar */}
      <Paper
        component='form'
        sx={{
          m: 1,
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          height: 50,
        }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search for a city...'
          inputProps={{ "aria-label": "search for a city..." }}
        />
        <IconButton type='submit' sx={{ p: "10px" }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>

      <div className='select fx-row'>
        {/* Select Temperature*/}
        <Box
          component='form'
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20ch" },
          }}
          noValidate
          autoComplete='off'>
          <TextField
            id='outlined-select-temp'
            select
            label='Temperature Unit'
            value={temp}
            onChange={handleTemp}
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
            "& .MuiTextField-root": { m: 1, width: "23ch" },
          }}
          noValidate
          autoComplete='off'>
          <TextField
            id='outlined-select-speed'
            select
            label='Speed Unit'
            value={speed}
            onChange={handleSpeed}
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
