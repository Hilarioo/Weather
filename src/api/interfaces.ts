// Structure for current weather object obtained from the WeatherAPI
interface Condition {
  text: string;
  code: number;
}

export interface CurrentWeather {
  cloud: number;
  condition: Condition;
  humidity: number;
  is_day: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  uv: number;
  wind_kph: number;
  wind_mph: number;
}

// Structure for forecast object obtained from the WeatherAPI
interface Day {
  avghumidity: number;
  condition: Condition;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
}

export interface ForecastDay {
  date: string;
  day: Day;
}

export interface Forecast {
  forecastday: Array<ForecastDay>;
}

// Structure for location object obtained from the WeatherAPI
interface Location {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

export interface Weather {
  current: CurrentWeather;
  forecast: Forecast;
  location: Location;
}