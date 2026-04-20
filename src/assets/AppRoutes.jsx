import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout.jsx";
import { Home } from "../pages/Home.jsx";
import { Tasks } from "../pages/Tasks.jsx";
import { Stats } from "../pages/Stats.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="stats" element={<Stats />} />
      </Route>
    </Routes>
  );
}
