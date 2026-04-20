import React from "react";
import { NavLink } from "react-router";

export function Header() {
  const navLinkStyles = ({ isActive }) => {
    return isActive
      ? "text-white underline text-xl" // The styling when the link IS active
      : "text-white text-xl hover:text-gray-200"; // The styling when the link IS NOT active
  };
  return (
    <header className="bg-taupe-800 p-3 flex justify-center">
      <div className="max-w-7xl flex justify-between grow">
        <h1 className="text-3xl font-bold text-white">Task Manager</h1>

        {/* Changed this wrapper to a <nav> tag */}
        <nav className="flex items-center gap-8">
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>

          <NavLink to="/tasks" className={navLinkStyles}>
            Tasks
          </NavLink>

          <NavLink to="/stats" className={navLinkStyles}>
            Stats
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
