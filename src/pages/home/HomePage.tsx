import React from "react";
import WeatherTable from "../../components/home/WeatherTable";

const HomePage = () => {
  return (
    <div className="min-h-[150vh]">
      <div className="text-3xl font-semibold text-slate-500 pt-2 pb-4">
        Overview
      </div>
      <WeatherTable />
    </div>
  );
};

export default HomePage;
