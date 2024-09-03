import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./RouteList";
import SideBar from "../components/navigation/SideBar";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={<SideBar>{route.component}</SideBar>}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
