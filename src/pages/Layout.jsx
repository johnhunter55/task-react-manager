import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header.jsx";

export function Layout() {
  return (
    <div>
      <Header />
      <div className="flex justify-center w-full">
        <div className="flex flex-col border-indigo-800 border-3 rounded-2xl max-w-7xl w-full mt-5 p-5 shadow-xl shadow-taupe-700/20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
