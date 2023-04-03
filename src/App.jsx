import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import All from "./pages/All/All";
import Favourite from "./pages/Favourite/Favourite";
import Form from "./pages/Form/Form";
import CardDetail from "./pages/CardDetail/CardDetail";
import EditForm from "./pages/EditForm/EditForm";

function App() {
  const data = JSON.parse(localStorage.getItem("data"));
  const [id, setid] = useState(data!==null?data.length:0);
  
  const increment = () => {
    console.log("prev",id);
    setid(prevId => prevId + 1);
    console.log(id);
  };
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/favsubmissions" element={<Favourite />} />
        <Route path="/form" element={<Form id={id} increment={increment} />} />
        <Route path={`/editform/:id`} element={<EditForm/>} />
        <Route path="/image" element={<Image />} />
        <Route path={`/dash/:id`} element={<CardDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
