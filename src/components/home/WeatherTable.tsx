import { useContext, useEffect, useState } from "react";
import { IoIosPartlySunny, IoIosSunny, IoMdRainy } from "react-icons/io";
import { WeatherContext } from "../../utils/WeatherContext";

interface WeatherData {
    name: string;
    temperature: number;
    condition: string;
    humidity: number;
    wspeed: number;
  };

const WeatherTable = () => {
  const city = useContext(WeatherContext)
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])
  
  const apiKey = "d588948b013155b2b1d7e46ec17e4840";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const receivedData = {
            name: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].description,
            humidity: data.main.humidity,
            wspeed: data.wind.speed,
          }
          console.log(receivedData)
          if (!(weatherData.some((item) => item.name === receivedData.name))) {
            weatherData.push(receivedData);
          }
          console.log(weatherData)
        } else {
          console.error(`Error: ${data.message}`);
        }
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [apiKey, apiUrl, weatherData]);
  return (
    <div className="text-gray-800 max-h-[100%] overflow-y-auto w-full rounded-lg px-5  bg-slate-50">
      <div className="w-full overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-500 sm:pl-0"
                >
                  City Name 
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-500 sm:pl-0"
                >
                  Temperature
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-500 sm:pl-0"
                >
                  Weather Condition
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-500 sm:pl-0"
                >
                  Humidity
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-500 sm:pl-0"
                >
                  Wind Speed
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {weatherData.map((item) => (
                <tr key={item.name} className="">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-600 sm:pl-0">
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.temperature}°F
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.condition === "clear sky" && (
                      <IoIosSunny size={30} color="yellow" />
                    )}
                    {(item.condition === "overcast clouds" || item.condition === "haze" || item.condition === "broken clouds") && (
                      <IoIosPartlySunny size={30} color="gray" />
                    )}
                    {(item.condition === "heavy intensity rain" || item.condition === "light rain") && (
                      <IoMdRainy size={30} color="skyblue" />
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.humidity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.wspeed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WeatherTable;
