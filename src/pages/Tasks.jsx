import { useState, useEffect } from "react";
import { TaskHolder } from "../components/TaskHolder.jsx";

export function Tasks() {
  const [taskText, setTaskText] = useState("");
  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function handleSubmit(event) {
    event.preventDefault();
    if (taskText.trim() === "") return;
    setTasks([...tasks, taskText]);
    setTaskText("");
  }
  return (
    <div>
      <h1 className="px-3 p-2 text-lg text-indigo-900">Create a Task:</h1>

      <form className="flex gap-2 mb-10" onSubmit={handleSubmit}>
        <TaskHolder value={taskText} onChange={handleInputChange} />
        <button
          type="submit"
          className="bg-indigo-800 text-white px-5 p-1 rounded-2xl"
        >
          Add
        </button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="text-lg py-1 border-b border-gray-200">
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
