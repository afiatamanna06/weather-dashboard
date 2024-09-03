import React from "react";
import { routes } from "../../routes/RouteList";
import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

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
          <div className="relative w-[9.5rem] md:w-[16rem]">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3">
              <FiSearch size={16} />
            </div>
            <input
              type="text"
              name="text"
              id="text"
              className="w-[8.7rem] md:w-[16rem] py-2 rounded-md border-0 ring-0 outline-0 focus:ring-0 pl-8 md:pl-10"
              placeholder="Search here"
            />
          </div>
        </div>
        <div className="mt-[4.5rem] ml-2 mr-2">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
