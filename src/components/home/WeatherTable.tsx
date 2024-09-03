import { weatherData } from "./WeatherData";

const WeatherTable = () => {
  return (
    <div className="text-gray-800 max-h-[100%] overflow-y-auto w-full rounded-lg px-5  bg-slate-100">
      <div className="w-full overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-300">
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
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {weatherData.map((item) => (
                <tr key={item.name} className="">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-600 sm:pl-0">
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.temperature}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.condition}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.humidity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                    {item.wspeed}
                  </td>

                  {/* <td className="whitespace-nowrap px-3 py-4">
                    {item.status === "Delivered" && (
                      <Badge color="emerald">{item.status}</Badge>
                    )}
                    {item.status === "In transit" && (
                      <Badge color="blue">{item.status}</Badge>
                    )}
                    {item.status === "Pending" && (
                      <Badge color="rose">{item.status}</Badge>
                    )}
                    {item.status === "Paid" && (
                      <Badge color="amber">{item.status}</Badge>
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
