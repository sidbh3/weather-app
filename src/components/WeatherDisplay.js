import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import WeatherStore from '../store/WeatherStore';
import './WeatherDisplay.css'

const WeatherDisplay = observer(() => {
  const { weather, loading } = WeatherStore;
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <div className="loading">Loading...</div>;
  if (!weather) return null;

  const Page1 = () => (
    <>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      </div>
    </>
  );

  const Page2 = () => (
    <p className="description">{weather.weather[0].description}</p>
  );

  const Page3 = () => (
    <div className="details">
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 1: return <Page1 />;
      case 2: return <Page2 />;
      case 3: return <Page3 />;
      default: return <Page1 />;
    }
  };

  return (
    <div className="weather-display">
      {renderPage()}
      <div className="pagination">
        {[1, 2, 3].map(page => (
          <button 
            key={page} 
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
});

export default WeatherDisplay;
