import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './/components/WeatherDisplay'
import ErrorMessage from './components/ErrorMessage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar />
        <ErrorMessage />
        <WeatherDisplay />
      </main>
    </div>
  );
}

export default App;
