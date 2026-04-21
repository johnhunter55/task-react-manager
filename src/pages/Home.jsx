import React from "react";
import { NavLink } from "react-router-dom";

export function Home() {
  const savedTasks = localStorage.getItem("tasks");
  const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];

  const taskAmount = parsedTasks.length;
  return (
    <div>
      <h1 className="text-xl">
        This is an app to let you set tasks and order by priority and when they
        are due, stay an orginized person and you will be very sucessful yay :D
      </h1>
      <div className="flex w-full justify-center p-10">
        <NavLink
          className={`text-white text-2xl font-bold bg-indigo-800 px-5 py-2 rounded-xl shadow-md border-2 border-indigo-900 shadow-indigo-900/30 hover:bg-indigo-900`}
          to="/tasks"
        >
          {taskAmount > 0
            ? "Click to add more tasks!"
            : "Click to start your first task!"}
        </NavLink>
      </div>
    </div>
  );
}
