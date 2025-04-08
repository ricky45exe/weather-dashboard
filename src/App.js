import React from "react";
import WeatherCard from "./WeatherCard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Weather Dashboard
        </h1>
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
