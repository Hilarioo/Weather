
const API_KEY = "572896d89ecb4b55ad893804220406";

const requests = {
    fetchCurrentWeather: `current.json?key=${API_KEY}`, 
    fetchForecast: `forecast.json?key=${API_KEY}`,
    fetchUserIP: 'https://geolocation-db.com/json/'
}

export default requests;