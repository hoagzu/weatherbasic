import React from 'react';
import './Display.scss';

const Display = ({ weather }) => {
  const date = (d) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[d.getDay()];
  }

  if (!weather || !weather.main || !weather.weather || !weather.wind) {
    return <div></div>; 
  }

  return (
    <div className='display'>
      <div className="weatherContainer">
        <img 
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
          alt="weather icon" 
          className="weatherIcon" 
        />
        <div className="weatherInfo">
          <span className="cityName">{weather.name}</span>
          <span className="temperature">{weather.main.temp}°C</span>
        </div>
        
        <div className="date">{date(new Date())}</div>
        <div className="windSpeed">Wind speed: {weather.wind.speed} m/s</div>
        <div className="description">{weather.weather[0].description}</div>
      </div>
      
      {/* Repeat the same structure for the other two containers */}
      <div className="weatherContainer">
        <img 
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
          alt="weather icon" 
          className="weatherIcon" 
        />
        <div className="weatherInfo">
          <span className="cityName">{weather.name}</span>
          <span className="temperature">{weather.main.temp}°C</span>
        </div>
        
        <div className="date">{date(new Date())}</div>
        <div className="windSpeed">Wind speed: {weather.wind.speed} m/s</div>
        <div className="description">{weather.weather[0].description}</div>
      </div>

      <div className="weatherContainer">
        <img 
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
          alt="weather icon" 
          className="weatherIcon" 
        />
        <div className="weatherInfo">
          <span className="cityName">{weather.name}</span>
          <span className="temperature">{weather.main.temp}°C</span>
        </div>
        
        <div className="date">{date(new Date())}</div>
        <div className="windSpeed">Wind speed: {weather.wind.speed} m/s</div>
        <div className="description">{weather.weather[0].description}</div>
      </div>
    </div>
  );
};

export default Display;
