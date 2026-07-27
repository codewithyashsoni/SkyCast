import React,{ useState } from 'react'
import Logo from "./components/Logo.jsx"
import WelcomeMessage from "./components/WelcomeMessage.jsx"
import SearchBar from "./components/SearchBar.jsx"
import WeatherDashboard from "./components/WeatherDashboard.jsx"

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [animate, setAnimate] = useState(false);

  async function changeWeather(newData){
    setAnimate(false);

    await new Promise(resolve => setTimeout(resolve, 400));
    setWeatherData(newData);

    requestAnimationFrame(() => {
      setAnimate(true)
    })
  }
  
  return (
    <div className="container">
      <Logo />
      {!weatherData && <WelcomeMessage />}
      <SearchBar changeWeather={changeWeather} />
      
      {weatherData &&
        (<WeatherDashboard weatherData={weatherData} animate={animate} />)
      }
        
    </div>
  )
}

export default App
