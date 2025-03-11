import './Components.css';
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';

function Forecast({ title, type, data }) {
    // Check if data.list exists and is an array
    const hasData = Array.isArray(data.list);

    return (
        <div className="w-full flex flex-col">
            {/* Title */}
            <div className="w-full flex text-black mt-1 mb-0 text-xl text-left px-6">
                <h3>{title}</h3>
            </div>

            {/* Reserve the container space with fixed dimensions */}
            <div className="min-w-[320px] w-[80vh] sm:w-[640px] md:w-[740px] min-h-[200px] overflow-x-auto p-4 rounded-4xl">
                {hasData ? (
                    <div className="flex gap-3 md:gap-6 w-max justify-center ">
                        {data.list.map((indivData, index) => (
                            <div key={index} className="w-[145px] flex flex-col text-black rounded-2xl">
                                {type === 'hourly' ? (
                                    <HourlyForecast data={indivData} index={index} />
                                ) : (
                                    <DailyForecast data={indivData} index={index} />
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    // Render a placeholder (with the same container dimensions)
                    <div className="flex w-[100%] justify-center items-center h-full border-2 border-[#588157] rounded-3xl m-0">
                        <p className="text-center text-black text-lg">No forecast data available</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Forecast;