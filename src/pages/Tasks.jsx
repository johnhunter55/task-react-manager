import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { TaskItem } from "../components/TaskItem.jsx";
import { TaskForm } from "../components/TaskForm.jsx";

export function Tasks() {
  const [sortBy, setSortBy] = useState("default");

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const doneornot = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };
  const priorityWeights = { High: 1, Medium: 2, Low: 3 };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "priority") {
      const weightA = priorityWeights[a.priority] || 4;
      const weightB = priorityWeights[b.priority] || 4;
      return weightA - weightB;
    } else if (sortBy === "date") {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;

      return new Date(a.dueDate) - new Date(b.dueDate);
    }

    return 0;
  });
  return (
    <div>
      <h1 className="px-3 p-2 text-lg text-indigo-900">Create a Task:</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div className="flex mb-4">
        <label className="text-indigo-900 font-medium mr-2 self-center">
          Sort by:
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border-2 border-indigo-200 p-1 rounded px-2 outline-none bg-white"
        >
          <option value="default">Added Order</option>
          <option value="priority">Priority</option>
          <option value="date">Due Date</option>
        </select>
      </div>
      <ul>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onToggle={doneornot}
          />
        ))}
      </ul>
    </div>
  );
}
