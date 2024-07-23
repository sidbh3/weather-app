import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import WeatherStore from '../store/WeatherStore';

const SearchBar = observer(() => {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    WeatherStore.setCity(inputCity);
    WeatherStore.fetchWeather();
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city name"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
});

export default SearchBar;
