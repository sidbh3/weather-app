import { makeAutoObservable } from "mobx";
import axios from "axios";

const API_KEY = "e570d58a26990261657af4de3a409be5";

class WeatherStore {
  weather = null;
  loading = false;
  error = null;
  city = "";

  constructor() {
    makeAutoObservable(this);
  }

  setCity(city) {
    this.city = city;
  }

  async fetchWeather() {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`
      );
      this.weather = response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.error = "City not found. Please check the spelling and try again.";
      } else {
        this.error = "Failed to fetch weather data. Please try again.";
      }
      this.weather = null;
    } finally {
      this.loading = false;
    }
  }
}

const weatherStore = new WeatherStore();
export default weatherStore;
