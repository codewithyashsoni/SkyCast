import React, {useState} from "react"
import { ImSpinner2 } from "react-icons/im"
import {Search} from "lucide-react"

function SearchBar({changeWeather}){
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    
    async function handleSubmit(e){
        e.preventDefault();
        if(!city.trim()) return;

        setLoading(true);
        setError(null);

        try{
            const [currentResponse, forecastResponse] = await Promise.all([
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`),
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            ])
            const [currentData, forecastData] = await Promise.all([
                currentResponse.json(),
                forecastResponse.json()
            ])

            if(!currentResponse.ok || !forecastResponse.ok){
                throw new Error(currentData.message
                                ? currentData.message.charAt(0).toUpperCase() + currentData.message.slice(1)
                                : "City not found"
                                )
            }

            changeWeather({
                current: currentData,
                forecast: forecastData
            });
            setCity("");
        }catch(error){
            console.error(error.message);
            setError("City not found. Try another city.");
        }finally{
            setLoading(false);
        }
    }

    return(
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="search-input"
                    placeholder="Enter city name..."
                />
                
                <button 
                    className="search-button"
                    type="submit"
                    disabled={loading}
                >{loading ? 
                <span>
                    <ImSpinner2 className="spinner" /> ...Searching 
                </span> 
                :
                 <span>
                    <Search /> Search
                 </span>
                }</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    )
}
export default SearchBar