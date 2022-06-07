
// const API_KEY = "dacc51e700c24457a8c132500220706";

import * as dotenv from "dotenv";

const requests = {
    fetchCurrentWeather: `current.json?key=${process.env.REACT_APP_API_KEY}`, 
    fetchForecast: `forecast.json?key=${process.env.REACT_APP_API_KEY}`,
    fetchUserIP: 'https://geolocation-db.com/json/'
}

export default requests;