import React from "react";

export function Stats() {
  const savedTasks = localStorage.getItem("tasks");
  const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];
  const taskAmount = parsedTasks.length;
  const priorityTypes = parsedTasks.map((task) => task.priority);
  const dueSoon = parsedTasks.filter((task) => {
    if (!task.dueDate) return false;

    const dueDate = new Date(task.dueDate);
    const today = new Date();

    const boundaryDate = new Date();
    boundaryDate.setDate(today.getDate() + 4);

    if (dueDate <= boundaryDate) {
      return true;
    }

    return false;
  });
  return (
    <div>
      <h1>amount of tasks: {taskAmount}</h1>
      <h1>Completed: {parsedTasks.filter((task) => task.completed).length}</h1>

      <h1>
        High: {priorityTypes.filter((priority) => priority === "High").length}
      </h1>
      <h1>
        Medium:{" "}
        {priorityTypes.filter((priority) => priority === "Medium").length}
      </h1>
      <h1>
        Low: {priorityTypes.filter((priority) => priority === "Low").length}
      </h1>
      <h1>{dueSoon.length} tasks due soon</h1>
    </div>
  );
}
