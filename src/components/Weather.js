import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import '../style.css'


const Weather = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    
    const getWeather = async () => {
      try {
        if (lat !== null && long !== null) {
          const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          );
          console.log(response.data); 

        
          const { main, sys, name, weather } = response.data;
          const { temp, humidity } = main;
          const { sunrise, sunset } = sys;
          const main1 = weather[0].main;
          
          
          const weatherInfo = {
            city: name,
            temperature: temp,
            humidity: humidity,
            sunrise: new Date(sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(sunset * 1000).toLocaleTimeString(),
            main1
          };

          setWeatherData(weatherInfo); 
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeather();
  }, [lat, long]);

  const handleRefresh = async () => {
    window.location.reload();
   
  };

  return (

   

    <>
     <div className="weather-container">
   { weatherData ? (
    <div className="main">
          <div className="top">
          <p className="header">{weatherData.city}</p>
          <button className="button" invertedColor='blue' circularIcon='refresh' onClick={handleRefresh} />
      </div>
     
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.main1}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.temperature} &deg;C</p>
        <p className="temp">Humidity: {weatherData.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {weatherData.sunrise}</p>
        <p className="sunrise-sunset">Sunset: {weatherData.sunset}</p>
      </div>
    
  </div>

   ) : (
    <h3>loading</h3>

   )}
   </div>
   </>
    
  );
};

export default Weather;
