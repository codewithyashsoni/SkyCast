import React, {useState} from "react"
import {WiDaySunny, WiCloud, WiRain, WiShowers, WiSnow
    , WiThunderstorm, WiFog, WiDayHaze} from "react-icons/wi"

const weatherStyles = {
  Clear: {
    icon: <WiDaySunny />,
    color: "var(--sunny)"
  },
  Clouds: {
    icon: <WiCloud />,
    color: "var(--cloudy)"
  },
  Rain: {
    icon: <WiRain />,
    color: "var(--rainy)"
  },
  Drizzle: {
    icon: <WiShowers />,
    color: "var(--drizzle)"
  },
  Thunderstorm: {
    icon: <WiThunderstorm />,
    color: "var(--storm)"
  },
  Snow: {
    icon: <WiSnow />,
    color: "var(--snow)"
  },
  Mist: {
    icon: <WiFog />,
    color: "var(--mist)"
  },
  Fog: {
    icon: <WiFog />,
    color: "var(--fog)"
  },
  Haze: {
    icon: <WiDayHaze />,
    color: "var(--haze)"
  }
};

function ForecastWeather({forecast}){
  const forecastObjects = forecast.list.filter((item) => (
      item.dt_txt.includes("12:00:00")
  ));
  console.log(forecastObjects);

  function formatDate(date){
    const currentDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    })
    return currentDate;
  }

  function formatDescription(description){
    return description.split(" ").map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(" ");

  }

  return(
    <div className="forecast-weather">
      <div className="forecast-cards">
        {forecastObjects.map((forecastObject) => (
          <div key={forecastObject.dt}
            className="forecast-card"
          >
            <div className="forecast-card-title-wrapper">
              <h3 className='forecast-card-title'>{formatDate(forecastObject.dt_txt)}</h3>
              <div className="forecast-card-icon"
                style={{color: weatherStyles[forecastObject.weather[0].main].color}}
              >
                {weatherStyles[forecastObject.weather[0].main].icon}
              </div>
            </div>
            
            <p className="forecast-card-temperature">
              {forecastObject.main.temp_min}°C / {forecastObject.main.temp_max}°C
            </p>

            <p className="forecast-card-description">{formatDescription(forecastObject.weather[0].description)}</p>

          </div>
        ))}
      </div>
    </div>
  )
}
export default ForecastWeather