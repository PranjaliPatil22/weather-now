import React from "react";

function WeatherDisplay({ weatherData, loading }) {
  if (loading) return <p>Loading...</p>;
  if (!weatherData) return null;

  return (
    <div className="weather-display">
      <h2>{weatherData.city}</h2>
      <p>🌡 Temperature: {weatherData.temperature}°C</p>
      <p>☁️ Condition: {weatherData.condition}</p>
      <p>💨 Wind: {weatherData.windspeed} km/h</p>
      <p>🕒 Updated: {weatherData.time}</p>
    </div>
  );
}

export default WeatherDisplay;
