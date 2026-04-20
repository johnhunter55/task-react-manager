import React from "react";

export function TaskHolder({ value, onChange }) {
  return (
    <input
      type="text"
      className="bg-gray-200 px-5 p-1 rounded-2xl"
      placeholder="Enter a task..."
      value={value}
      onChange={onChange}
    />
  );
}
