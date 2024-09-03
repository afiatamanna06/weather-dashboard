import React from "react";
import { routes } from "../../routes/RouteList";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <div className="flex w-full">
      <div className="flex flex-col h-screen fixed w-[4rem] md:w-[8rem] p-3 bg-slate-100">
        {routes.map((route) => (
          <Link
            key={route.name}
            to={route.path}
            className={`flex flex-row items-start gap-2 p-3 rounded-md ${
              location.pathname === route.path
                ? "text-white bg-green-400"
                : "text-gray-300"
            }`}
          >
            {route.icon}
            <div className="hidden md:block font-semibold">{route.name}</div>
          </Link>
        ))}
      </div>
      <div className="min-h-screen overflow-y-auto w-[calc(100vw-4rem)] ml-[4rem] md:w-[calc(100vw-8rem)] md:ml-[8rem] text-base">
        <div className="fixed w-full bg-slate-100 p-3">
           <input className="py-2 px-4 rounded-md outline-0" />
        </div>
        <div className="mt-[4.5rem] ml-2 mr-2">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
