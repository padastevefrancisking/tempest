import "./Components.css";
import HumidityIcon from '../assets/humidity.png';
import PressureIcon from '../assets/pressure.png';
import WindSpeedIcon from '../assets/wind-speed.png';
import WindDirectionIcon from '../assets/wind-direction.png';
import VisibilityIcon from '../assets/visibility.png';
import CloudCoverIcon from '../assets/cloud-cover.png';

function DetailedInfo({ weather }) {
    const otherInfo = [
        { 
            id: 0,
            icon: HumidityIcon,
            name: "Humidity", 
            value: weather.main? Math.round(weather.main.humidity) : '0',
            unit: "%"
        },
        { 
            id: 1,
            icon: PressureIcon,
            name: "Pressure",
            value: weather.main? Math.round(weather.main.pressure) : '0',
            unit: "hPa"
        },
        { 
            id: 2,
            icon: WindSpeedIcon,
            name: "Wind Speed",
            value: weather.main? Math.round(weather.wind.speed) : '0',
            unit: "m/s"
        },
        {
            id: 3,
            icon: WindDirectionIcon,
            name: "Wind Direction",
            value: weather.main? Math.round(weather.wind.deg) : '0',
            unit: "°"
        },
        { 
            id: 4,
            icon: VisibilityIcon,
            name: "Visibility",
            value: weather.main? Math.round(weather.visibility) : '0',
            unit: "m"
        },
        {
            id: 5,
            icon: CloudCoverIcon,
            name: "Cloud Cover",
            value: weather.main? Math.round(weather.clouds.all) : '0',
            unit: "%"
        },
    ];

    return (
        <div className="w-full h-full flex flex-col border-2 border-[#588157] text-black shadow-md rounded-3xl py-3">
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3">
                {otherInfo.map((info) => (
                    <div key={info.id} className="flex flex-col justify-between items-center">
                        <div className="w-auto h-auto flex justify-center items-center gap-2">
                            <img src={info.icon} alt="icon" className="w-4 h-auto object-cover" />
                            <p className="text-lg">{info.value} {info.unit}</p>
                        </div>
                        <h2 className="text-xs">{info.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetailedInfo;