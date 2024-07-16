import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import WaitingList from "./WaitingList";

export default function App() {
  return (
    <div className="flex flex-col">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/waiting-list" element={<WaitingList />} />
    </Routes>
    </div>
  );
}
