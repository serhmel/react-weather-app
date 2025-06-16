# Weather App

A simple responsive React application that displays current weather information for searched cities using Redux for state management.

## 🌤 Features

- Search weather by city name (default: Kyiv)
- Displays current weather data from the OpenWeather public API
- Search history panel showing last 10 unique searches sorted by date (newest first)
- Clickable history items to quickly fetch weather again

## 🛠 Technologies

- React
- Redux
- OpenWeather API

## 🚀 Getting Started

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/serhmel/react-weather-app.git
cd react-weather-app
npm install
```

2. Create a `.env` file in the root folder with:

`REACT_APP_WEATHER_API_KEY=your_api_key`

Replace `your_api_key` with your actual OpenWeather API key.

3. Run the app:

```bash
npm start
```
