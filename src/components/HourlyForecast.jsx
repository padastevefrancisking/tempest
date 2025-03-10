import './Components.css'
import Temperature from './../assets/temperature.png'
import Precipitation from './../assets/precipitation.png'
import WindSpeed from './../assets/wind-speed.png'

function isWithin3HoursAfterMidnight(dateString) {
    const date = new Date(dateString);    
    const hour = date.getHours();         
    const minute = date.getMinutes();     
  
    const totalMinutes = hour * 60 + minute;
  
    // 3 hours * 60 minutes = 180
    return totalMinutes < 180; // true if it's before 3:00 AM
}


function HourlyForecast({ data, index }){
    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
            day: "2-digit",
            month: "2-digit"
        }).format(new Date()),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date().setMinutes(0)),
    };

    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
            day: "2-digit",
            month: "2-digit"
        }).format(new Date(data.dt_txt)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date(data.dt_txt).setMinutes(0)),
    };

    weather_date.day = weather_date.day === now_date.day && (isWithin3HoursAfterMidnight(data.dt_txt) || index === 0)
    ? 'Today' 
    : isWithin3HoursAfterMidnight(data.dt_txt) && weather_date.day !== now_date.day 
        ? weather_date.day
        : "\u00A0" ;


    return (
        <div className="w-full flex flex-col justify-end items-center gap-y-2">
            <div className="w-full font-bold">
                {weather_date.day}
            </div>

            {/* Uneven D */}
            <div className="group flex flex-col w-full border-2 border-[#588157] rounded-3xl shadow-md transition-all duration-300 hover:bg-[#588157] hover:scale-103 hover:text-[#DAD7CD] hover:border-0 hover:shadow-2xl z-0">
                {/* First Sub-Div */}
                <div className="flex flex-1 flex-col justify-center items-center gap-2 p-3 pb-0">
                    <div className="flex">
                        <h1 className='text-2xl font-bold'>{weather_date.time}</h1>
                    </div>
                    <div className='flex'>
                        {data.weather && data.weather[0] && (
                            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                                alt="weather icon" 
                                className="w-[120px] h-auto object-cover" />
                        )}
                    </div>
                </div>
        
                {/* Second Sub-Div */}
                <div className="w-full flex-1 flex flex-col justify-center items-center p-3">
                    <div className='w-full flex justify-center items-center gap-1'>
                        <img src={Temperature} alt='Temperature' className="w-5 h-auto object-cover" />
                        <h1 className=''>{Math.round(data.main.temp)} °C</h1>
                    </div>
                    <div className='w-full flex justify-center items-center gap-1'>
                        <img src={Precipitation} alt='Precipitation' className="w-6 h-auto object-cover" />
                        <h3>{data.rain?.["3h"] ? `${data.rain["3h"]} mm/h` : "No rain"}</h3>
                    </div>
                    <div className='w-full flex justify-center items-center gap-1'>
                        <img src={WindSpeed} alt='WindSpeed' className="w-4 h-auto object-cover" />
                        <h3>{Math.round(data.wind.speed)} mph</h3>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default HourlyForecast;