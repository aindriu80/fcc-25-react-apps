import { useState } from 'react';
import SearchComponent from './SearchComponent';

const WeatherAPIKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const WeatherApplication = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    console.log(WeatherAPIKey);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${WeatherAPIKey}`,
      );

      const data = await response.json();

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  console.log(loading);

  function handleSearch() {
    fetchWeatherData(search);
  }

  return (
    <div>
      <SearchComponent
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      Weather Application
    </div>
  );
};

export default WeatherApplication;
