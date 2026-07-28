import React, {useState, useEffect} from "react"
import { ImSpinner2 } from "react-icons/im"
import {Search, History} from "lucide-react"

function SearchBar({changeWeather}){
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recentSearches, setRecentSearches] = useState(() => {
        const storedSearches = localStorage.getItem("recent-searches");
        if(storedSearches){
            return JSON.parse(storedSearches);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem("recent-searches", JSON.stringify(recentSearches))
    }, [recentSearches])

    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    
    function handleSubmit(e){
        e.preventDefault();
        searchCity(city);
    }

    async function searchCity(cityInput){
        if(!cityInput.trim()) return;
        const cityName = cityInput.trim();

        setLoading(true);
        setError(null);

        try{
            const [currentResponse, forecastResponse] = await Promise.all([
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`),
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`)
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
            setRecentSearches((prev) => {
                const filtered = prev.filter(
                    (item) => item.toLowerCase() !== currentData.name.toLowerCase()
                )
                return [...filtered, currentData.name].slice(-5);
            });
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
            <div className="recents-container">
                {recentSearches.map((recentSearch) => (
                    <button
                    key={recentSearch} 
                    className="recent-search-btn" 
                    onClick={() => searchCity(recentSearch)}
                    >
                        <History size={12} />
                        <span>{recentSearch}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
export default SearchBar