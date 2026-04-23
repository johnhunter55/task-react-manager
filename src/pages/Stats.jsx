import React from "react";

export function Stats() {
  const savedTasks = localStorage.getItem("tasks");
  const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];
  const taskAmount = parsedTasks.length;
  const priorityTypes = parsedTasks.map((task) => task.priority);
  const dueSoon = parsedTasks.filter((task) => {
    if (!task.dueDate) return false;

    const dueDate = new Date(task.dueDate + "T00:00:00");
    dueDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const boundaryDate = new Date(today);
    boundaryDate.setDate(today.getDate() + 4);

    if (dueDate <= boundaryDate && dueDate >= today) {
      return true;
    }

    return false;
  });
  const overdue = parsedTasks.filter((task) => {
    if (!task.dueDate) return false;

    const dueDate = new Date(task.dueDate);
    const today = new Date();

    if (dueDate < today) {
      return true;
    }

    return false;
  });
  return (
    <div>
      <h1 className="text-2xl">amount of tasks: {taskAmount}</h1>
      <h1 className="text-2xl">
        Completed: {parsedTasks.filter((task) => task.completed).length}
      </h1>

      <h1 className="text-2xl">
        High: {priorityTypes.filter((priority) => priority === "High").length}
      </h1>
      <h1 className="text-2xl">
        Medium:{" "}
        {priorityTypes.filter((priority) => priority === "Medium").length}
      </h1>
      <h1 className="text-2xl">
        Low: {priorityTypes.filter((priority) => priority === "Low").length}
      </h1>
      <h1 className="text-2xl">{dueSoon.length} due soon</h1>
      <h1 className="text-2xl">{overdue.length} overdue</h1>
    </div>
  );
}
