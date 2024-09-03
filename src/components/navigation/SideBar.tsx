import React from "react";
import { routes } from "../../routes/RouteList";
import { Link } from "react-router-dom";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col h-screen fixed w-[5rem] md:w-[7rem] bg-slate-200">
        {routes.map((route) => (
          <Link
            key={route.name}
            to={route.path}
            className={`flex flex-row items-center`}
          >
            {route.icon}
            {route.name}
          </Link>
        ))}
      </div>
      <div className="min-h-screen overflow-y-auto w-[calc(100vw-5rem)] ml-[5rem] md:w-[calc(100vw-7rem)] md:ml-[7rem] text-base">
        {children}
      </div>
    </div>
  );
};

export default SideBar;
