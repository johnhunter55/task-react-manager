import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { GoCheckbox } from "react-icons/go";
import { BsTrash } from "react-icons/bs";

export function TaskItem({ task, onDelete, onToggle }) {
  const priorityColors = {
    High: "bg-red-400 text-red-950",
    Medium: "bg-yellow-300 text-yellow-900",
    Low: "bg-green-400 text-green-950",
  };
  const doneColor = {
    true: " text-green-500",
    false: "text-gray-600",
  };
  const priorityClass =
    priorityColors[task.priority] || "bg-gray-100 text-gray-600";

  return (
    <li className="text-lg py-2 border-b border-gray-200 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="" onClick={() => onToggle(task.id)}>
          {task.completed ? <GoCheckbox /> : <MdOutlineCheckBoxOutlineBlank />}
        </span>
        <span className={`font-medium ${doneColor[task.completed]}`}>
          {task.text}
        </span>

        <span className={`text-sm ml-3 px-2 py-1 rounded ${priorityClass}`}>
          {" "}
          {task.priority}
        </span>
        {task.notes && (
          <span className="text-sm text-gray-500 italic mt-1">
            {task.notes}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {task.dueDate && (
          <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
        )}
        <span className="" onClick={() => onDelete(task.id)}>
          <BsTrash />
        </span>
      </div>
    </li>
  );
}
