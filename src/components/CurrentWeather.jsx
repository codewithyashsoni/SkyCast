import React, { useState, useEffect} from "react"
import {WiDaySunny, WiCloud, WiRain, WiShowers, WiSnow
    , WiThunderstorm, WiFog, WiDayHaze} from "react-icons/wi"
import {Droplets, Wind, Gauge, Sunrise, Sunset} from "lucide-react"


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

const weatherBackgrounds = {
  Clear: "var(--bg-sunny)",
  Clouds: "var(--bg-cloudy)",
  Rain: "var(--bg-rainy)",
  Drizzle: "var(--bg-drizzle)",
  Thunderstorm: "var(--bg-storm)",
  Snow: "var(--bg-snow)",
  Mist: "var(--bg-mist)",
  Fog: "var(--bg-fog)",
  Haze: "var(--bg-haze)"
};

function CurrentWeather({current}){
  const[isCelcius, setIsCelcius] = useState(true);
  const[currTemperature, setCurrTemperature] = useState("");

  useEffect(() => {
    if(isCelcius){
      setCurrTemperature((current.main.temp) + "°C")
    }else{
      const newTemp = (((current.main.temp * 1.8) + 32).toFixed(2)) + "°F";
      setCurrTemperature(newTemp);
    }
  }, [isCelcius])

  useEffect(() => {
    if(current){
      document.body.style.background = weatherBackgrounds[current.weather[0].main];
    } 

  },[current])

  const description = current.weather[0].description.split(" ")
  .map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(" ");

  return(
    <div className="current-weather">
      <h2 className="current-city-name">{current.name}, {current.sys.country}</h2>

      <div className="current-weather-icon"
          style={{color: `${weatherStyles[current.weather[0].main].color}`}}
      >{weatherStyles[current.weather[0].main].icon}</div>  

      <h1 className="current-city-temperature">{currTemperature}</h1>

      <p className="current-city-description">{description}</p>

      <div className="current-temperature-buttons-wrapper">
        <button 
          className={`current-temperature-button ${isCelcius? "active" : ""}`}
          onClick={() => setIsCelcius(true)}
        >°C</button>

        <button className={`current-temperature-button ${!isCelcius? "active" : ""}`}
          onClick={() => setIsCelcius(false)}
        >°F</button>

      </div>

      <div className="current-cards">
        <div className="current-card">
          <div className="current-card-icon"><Droplets size={40} /></div>
          <p className="current-card-name">Humidity</p>
          <p className="current-card-value">{current.main.humidity}%</p>
        </div>

        <div className="current-card">
          <div className="current-card-icon"><Wind size={40} /></div>
          <p className="current-card-name">Wind</p>
          <p className="current-card-value">{current.wind.speed} km/h</p>
        </div>

        <div className="current-card">
          <div className="current-card-icon"><Gauge size={40} /></div>
          <p className="current-card-name">Pressure</p>
          <p className="current-card-value">{current.main.pressure} hPa</p>
        </div>

        <div className="current-card">
          <div className="current-card-icon"><Gauge size={40} /></div>
          <p className="current-card-name">Feels Like</p>
          <p className="current-card-value">{current.main.feels_like}°C</p>
        </div>

        <div className="current-card">
          <div className="current-card-icon"><Sunrise size={40} /></div>
          <p className="current-card-name">Sunrise</p>
          <p className="current-card-value">{new Date(current.sys.sunrise * 1000).toLocaleTimeString("en-US",{
              hour: "2-digit",
              minute: "2-digit",
              hour12: true
          })}
          </p>
        </div>

        <div className="current-card">
          <div className="current-card-icon"><Sunset size={40} /></div>
          <p className="current-card-name">Sunset</p>
          <p className="current-card-value">{new Date(current.sys.sunset * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true
          })}
          </p>
        </div>
      </div>  
    </div>
  )
}
export default CurrentWeather