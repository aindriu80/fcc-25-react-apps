import { useEffect, useState } from 'react';
import SearchComponent from './SearchComponent';

const WeatherAPIKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const WeatherApplication = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${WeatherAPIKey}&units=metric`,
      );

      const data = await response.json();
      console.log('data', data);

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString('ga-ie', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  useEffect(() => {
    fetchWeatherData('Dublin, IE');
  }, []);

  return (
    <div className="weather-application">
      <SearchComponent
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="">
          <div className="city-name">
            <h2>
              {weatherData?.name},<span>{weatherData?.sys.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temperature">{weatherData?.main?.temp}°c</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ''}
          </p>
          <div className="weather-info">
            <div className="column">
              <div className="">
                <p className="wind">{weatherData?.wind?.speed}km/h</p>
                <p className="">Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div className="">
                <p className="humidty">{weatherData?.main?.humidity}%</p>
                <p className="">Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApplication;
