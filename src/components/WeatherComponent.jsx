import React, { useState, useEffect } from "react";

const WeatherComponent = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "d83c87fd9a144ba9ac3112823241112"; // Replace with your WeatherAPI key

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      setWeatherData(data);
    } catch (err) {
      setError("Error fetching weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-blue-500 flex justify-center items-center">
      <div className="container mx-auto">
        {/* Centered input and button */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 rounded-lg shadow-md w-full sm:w-96 text-gray-700"
          />
          <button
            onClick={fetchWeather}
            className="mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Get Weather
          </button>
        </div>

        {loading && (
          <p className="text-center text-white text-xl">Loading...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Centered weather card */}
        {weatherData && !loading && !error && (
          <div className="flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-96">
              <h2 className="text-2xl font-semibold text-gray-800">
                Weather in {weatherData.location.name},{" "}
                {weatherData.location.country}
              </h2>
              <div className="flex justify-center items-center mt-4">
                <img
                  src={weatherData.current.condition.icon}
                  alt={weatherData.current.condition.text}
                  className="w-24 h-24"
                />
              </div>
              <p className="text-gray-600 mt-4">
                {weatherData.current.condition.text}
              </p>
              <p className="text-gray-600 mt-2">
                Temperature: {weatherData.current.temp_c}°C
              </p>
              <p className="text-gray-600 mt-2">
                Humidity: {weatherData.current.humidity}%
              </p>
              <p className="text-gray-600 mt-2">
                Wind Speed: {weatherData.current.wind_kph} km/h
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherComponent;
