import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import All from "./pages/All/All";
import Favourite from "./pages/Favourite/Favourite";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/favsubmissions" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
