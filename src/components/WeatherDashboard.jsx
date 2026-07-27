import CurrentWeather from "./CurrentWeather.jsx"
import ForecastWeather from "./ForecastWeather.jsx"

function WeatherDashboard({weatherData, animate}){
    return(
        <div className={`weather-dashboard ${animate? "show" : ""}`}>
            <CurrentWeather current={weatherData.current} />
            <ForecastWeather forecast={weatherData.forecast} />
        </div>
    )
}
export default WeatherDashboard