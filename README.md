# 🌦️ Weather Now

### Candidate ID: Naukri0925

---

## 📌 Project Overview
**Weather Now** is a simple and interactive weather application that allows users to search for any city worldwide and instantly view:
- Current temperature 🌡️
- Weather condition ⛅
- Wind speed 💨
- Local time of the searched city 🕒

This project is built to demonstrate API integration, responsive UI, and error handling in a React.js application.

---

## 🚀 Features
- 🌍 Search for any city across the globe
- 📡 Fetches live weather data from **Open-Meteo API**
- 🕒 Displays accurate local time of the searched city
- ⚠️ Error handling for invalid or unknown cities
- 📱 Responsive and clean user interface

---

## 🛠️ Tech Stack
- **React.js** → Frontend framework
- **Open-Meteo API** → Weather & Geocoding services
- **CodeSandbox** → Development & deployment platform

---
### API Used
Geocoding API → Converts city name to latitude & longitude
https://geocoding-api.open-meteo.com/v1/search

Weather Forecast API → Fetches current weather using coordinates
https://api.open-meteo.com/v1/forecast


### 🔧 Run Instructions

### ▶️ Run in CodeSandbox (Recommended)
1. Open the project in CodeSandbox.
2. Click on **open preview** to start the app instantly.  
   *(No setup required.)*

### 💻 Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/PranjaliPatil22/weather-now.git



2.Navigate to the project folder:
cd weather-now

3.Install dependencies:
npm install

4.Start the development server:
npm start

5.Open the app in your browser at:
http://localhost:3000


### Project Structure
src/
 ├── App.js             # Main app component
 ├── SearchBar.js       # Input field for searching city
 ├── WeatherDisplay.js  # Displays weather information
 ├── ErrorMessage.js    # Shows error messages
 ├── App.css            # Styling (responsive & clean)


### Deployment
The app is deployed on CodeSandbox.
Live Demo : https://codesandbox.io/p/devbox/hungry-wilbur-glwgd7
