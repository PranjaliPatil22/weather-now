import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import ErrorMessage from "./ErrorMessage";
import "./App.css";

const weatherCodeMap = {
  0: "Clear sky ",
  1: "Mainly clear ",
  2: "Partly cloudy ",
  3: "Overcast ",
  45: "Fog ",
  48: "Depositing rime fog ",
  51: "Light drizzle ",
  53: "Moderate drizzle ",
  55: "Dense drizzle ",
  61: "Slight rain ",
  63: "Moderate rain ",
  65: "Heavy rain ",
  71: "Slight snow ",
  73: "Moderate snow ",
  75: "Heavy snow ",
  95: "Thunderstorm ",
};

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch weather info for a city
  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      // 1. Geocoding API - get latitude & longitude
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2. Weather API - get current weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`,
        { cache: "no-store" }
      );
      const weatherDataJson = await weatherRes.json();
      const { current_weather: current, timezone } = weatherDataJson;

      // Use the API’s timezone (so Dubai shows GST, London shows BST/GMT, etc.)
      const localDateTime = new Date().toLocaleString("en-US", {
        timeZone: timezone,
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Set state with formatted local time
      setWeatherData({
        city: `${name}, ${country}`,
        temperature: current.temperature,
        condition: weatherCodeMap[current.weathercode] || "Unknown",
        windspeed: current.windspeed,
        time: `Last updated: ${localDateTime} (${timezone})`,
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Weather Now</h1>
      <SearchBar onSearch={handleSearch} />
      <ErrorMessage error={error} />
      <WeatherDisplay weatherData={weatherData} loading={loading} />
    </div>
  );
}

export default App;
