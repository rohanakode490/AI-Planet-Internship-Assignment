import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import All from "./pages/All/All";
import Favourite from "./pages/Favourite/Favourite";
import Form from "./pages/Form/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/favsubmissions" element={<Favourite />} />
        <Route path="/form" element={<Form />} />
        <Route path="/image" element={<Image />} />
      </Routes>
    </div>
  );
}

export default App;
