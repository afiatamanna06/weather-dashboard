import { ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import HomePage from "../pages/home/HomePage";

export interface RouteType {
  name: string;
  path: string;
  icon: ReactNode;
  component: ReactNode;
}

export const routes: RouteType[] = [
  {
    name: "Home",
    path: "/",
    icon: <FaHome />,
    component: <HomePage />,
  },
];
