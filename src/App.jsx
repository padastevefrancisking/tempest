import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import GeneralInfo from './components/GeneralInfo.jsx';
import DetailedInfo from './components/DetailedInfo.jsx';
import MapElement from './components/MapElement.jsx';
import Forecast from './components/Forecast.jsx';
import Search from './assets/search.png'

const api = {
  key: "a16a660b31f985138502b553b546a039",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const searchCity = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          if (result.cod === 200) {
            setWeather(result);
            setQuery('');
            console.log(result);

            if(result.coord) { getForecast(result.coord.lat, result.coord.lon); }
          } else {
            console.log('City not found');
          }
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  };

  const getForecast = (lat, lon) => {
    fetch(`${api.base}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setForecast(result);
      console.log("Forecast Data:", result);
    })
  }

  useEffect(() => {
    fetch(`${api.base}weather?q=Baybay&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        if (result.cod === 200) {
          setWeather(result);
          console.log(result);
          if(result.coord) { 
            fetch(`${api.base}forecast?lat=${result.coord.lat}&lon=${result.coord.lon}&units=metric&appid=${api.key}`)
            .then(res2 => res2.json())
            .then(result2 => {
              setForecast(result2);
              console.log("Forecast Data:", result2);
            })
          }
        } else {
          console.log('City not found');
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Header />
        <main className="w-full min-h-screen py-5">
          <div className="w-full h-auto flex justify-center items-center">
            <div className="min-w-[300px] w-80h sm:w-[640px] max-w-[740px] h-auto flex justify-center items-center my-4 gap-2">
              <input
                type="text"
                className="w-5/6 py-3 pl-10 pr-6 bg-[#A3B18A] text-lg rounded-3xl border-gray-200 text-black flex
                          focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-md"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyDown={(event) => searchCity(event)}
              />

              <button
                className="w-1/6 h-full flex items-center justify-center !bg-[#588157] rounded-3xl md:rounded-4xl shadow-md
                          hover:bg-[#8a9b68] transition duration-300"
                onClick={() => searchCity({ key: 'Enter' })}
              >
                <img src={Search} alt="Search Icon" className="w-6 h-6 object-contain" />
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 h-auto justify-center items-stretch">
            <div className="w-full md:w-2/5 lg:w-2/5 h-full">
              <GeneralInfo weather={weather} className="" />
            </div>
            <div className="w-full md:w-3/5 lg:w-3/5 h-full ">
              <DetailedInfo weather={weather} className="" />
            </div>
          </div>
          
          <div className="w-full sm:w-[640px] md:w-[740px] h-auto flex flex-col my-5 justify-center items-center gap-4">
            <Forecast title='Hourly Forecast for 5 days' type='hourly' data={forecast}/>
          </div>
          
          
          <div className="w-full md:2/3 flex bg-green-50">
            {weather.coord && <MapElement weather={weather}/>}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;