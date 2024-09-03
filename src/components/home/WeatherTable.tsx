import { useEffect } from "react";
import { weatherData } from "./WeatherData";
import { IoIosPartlySunny, IoIosSunny, IoMdRainy } from "react-icons/io";

const WeatherTable = () => {
  const apiKey = "d588948b013155b2b1d7e46ec17e4840";
  const city = "London";
  const units = "metric";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${44.34}&lon=${10.99}&appid=${apiKey}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          console.log(
            `Weather in ${data.name}: ${data.weather[0].description}`
          );
          console.log(`Temperature: ${data.main.temp}°C`);
        } else {
          console.error(`Error: ${data.message}`);
        }
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [city, units, apiKey, apiUrl]);
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
                    {item.temperature}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.condition === "sunny" && (
                      <IoIosSunny size={30} color="yellow" />
                    )}
                    {item.condition === "cloudy" && (
                      <IoIosPartlySunny size={30} color="gray" />
                    )}
                    {item.condition === "rainy" && (
                      <IoMdRainy size={30} color="skyblue" />
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.humidity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.wspeed}
                  </td>

                  {/* <td className="whitespace-nowrap px-3 py-4">
                    {item.condition === "Delivered" && (
                      <Badge color="emerald">{item.condition}</Badge>
                    )}
                    {item.condition === "In transit" && (
                      <Badge color="blue">{item.condition}</Badge>
                    )}
                    {item.condition === "Pending" && (
                      <Badge color="rose">{item.condition}</Badge>
                    )}
                    {item.condition === "Paid" && (
                      <Badge color="amber">{item.condition}</Badge>
                    )}
                  </td> */}
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
