import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Define function
const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  //API key for access and city
  const apiKey = 'd97324222f7b26d016ac77087b55e40f';
  const city = 'Sydney'; 

//useEffect hook
  useEffect(() => {
//Get, set and log errors
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the weather data!", error);
      });
  }, []);

  //If statement for alternative message
  if (!weather) {
    return <div>Loading...</div>;
  }

  //Show weather dashbaord
  return (
    <div className="weather-dashboard">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDashboard;
