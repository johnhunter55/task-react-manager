import { useState } from "react";

export function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");
  const [notes, setNotes] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (taskText.trim() === "") return;
    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      priority: priority,
      dueDate: dueDate,
      notes: notes,
      completed: false,
    };
    onAddTask(newTask);
    setTaskText("");
    setNotes("");
    setPriority("Medium");
    setDueDate("");
  }
  return (
    <form className="flex gap-2 mb-10 flex-wrap" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-gray-200 px-5 p-1 rounded-2xl"
        placeholder="Enter a task..."
        onChange={(e) => setTaskText(e.target.value)}
        value={taskText}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border-2 border-indigo-200 p-1 rounded px-2 outline-none"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border-2 border-indigo-200 p-1 rounded px-2 outline-none text-gray-700"
      />
      <input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="any notes?"
        className="bg-gray-200 px-5 p-1 rounded-2xl"
      />
      <button
        type="submit"
        className="bg-indigo-800 text-white px-5 p-1 rounded-2xl"
      >
        Add
      </button>
    </form>
  );
}
