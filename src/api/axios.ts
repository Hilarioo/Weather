import axios, { Axios } from "axios";

// base URL to make requets to the Weather API
const instance: Axios = axios.create({
    baseURL: `https://api.weatherapi.com/v1/`
});

export default instance;