import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const WeatherCard = () => {
  const [city, setCity] = useState("Bhubaneswar");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [history, setHistory] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_KEY = "765686850d1cf8f9c3eecf270a499373";

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const [currentRes, forecastRes] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        ),
      ]);
      setWeather(currentRes.data);
      setForecast(forecastRes.data.list.filter((_, i) => i % 8 === 0).slice(0, 5));
      setHistory((prev) => {
        const newHistory = [city, ...prev.filter((c) => c !== city)];
        return newHistory.slice(0, 5);
      });
    } catch (err) {
      console.error("Error fetching weather:", err);
      alert("City not found or API error.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`max-w-3xl mx-auto p-4 transition duration-500 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"} rounded-xl shadow-lg`}>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border px-3 py-1 rounded w-2/3 text-black"
        />
        <button
          onClick={fetchWeather}
          className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
        <button
          onClick={toggleTheme}
          className="ml-2 px-2 py-1 border rounded text-sm"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>

      {history.length > 0 && (
        <div className="mb-4">
          <p className="font-semibold mb-1">Recent Searches:</p>
          <div className="flex gap-2 flex-wrap">
            {history.map((item, index) => (
              <button
                key={index}
                onClick={() => setCity(item)}
                className="px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded text-sm hover:underline"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center mt-8">
          <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-2">Loading...</p>
        </div>
      ) : (
        weather && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="transition-all duration-500"
          >
            <div className="text-center">
              <h2 className="text-3xl font-semibold">{weather.name}</h2>
              <p className="text-gray-500 dark:text-gray-300 capitalize">{weather.weather[0].description}</p>
              <div className="text-6xl font-bold mt-2">{Math.round(weather.main.temp)}°C</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold">Humidity</p>
                <p>{weather.main.humidity}%</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold">Wind</p>
                <p>{weather.wind.speed} m/s</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold">Feels Like</p>
                <p>{Math.round(weather.main.feels_like)}°C</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold">Pressure</p>
                <p>{weather.main.pressure} hPa</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-semibold mb-2">5-Day Forecast</p>
              <div className="grid grid-cols-5 gap-3 text-center">
                {forecast.map((day, i) => (
                  <div key={i} className="bg-blue-100 dark:bg-blue-900 p-2 rounded">
                    <p>{new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })}</p>
                    <p>{Math.round(day.main.temp)}°C</p>
                    <p className="capitalize text-xs">{day.weather[0].description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default WeatherCard;
