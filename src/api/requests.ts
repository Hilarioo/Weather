const API_KEY = "dacc51e700c24457a8c132500220706"


const requests = {
    fetchCurrentWeather: `current.json?key=${API_KEY}`, 
    fetchForecast: `forecast.json?key=${API_KEY}`,
    fetchUserIP: 'https://geolocation-db.com/json/'
}

export default requests;