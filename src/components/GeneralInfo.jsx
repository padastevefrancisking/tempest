import "./Components.css";

function capitalizeWords(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function GeneralInfo({ weather }) {
    console.log('Weather data:', weather); // Add logging to check the weather data

    return (
        <div className="w-full h-full bg-[#588157] p-3 text-[#DAD7CD] shadow-md flex flex-col justify-between items-center rounded-3xl">
            {weather.name && weather.sys && (
                <div className="flex justify-center items-center w-full">
                    <h1 className="text-2xl"><b>{weather.name}</b>, {weather.sys.country}</h1>
                </div>
            )}
            <div className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-col items-start w-1/2 md:w-3/5 gap-x-6 pl-6">
                    {weather.main && (
                        <>
                            <h2 className="text-5xl md:3xl">{Math.round(weather.main.temp)}°C</h2>
                            <p className="text-lg md:text-md">Feels like {Math.round(weather.main.feels_like)}°C</p>
                            <p className="text-md md:text-xs">{capitalizeWords(weather.weather[0].description)}</p>
                        </>
                    )}
                </div>
                <div className="flex flex-col justify-center items-center w-1/2 md:w-2/5">
                    {weather.weather && weather.weather[0] && (
                        <>
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" className="w-[150px] md:w- h-auto object-cover" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GeneralInfo;