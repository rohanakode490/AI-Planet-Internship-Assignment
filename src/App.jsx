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
  const [fav, setfav] = useState(false);

  const handlefav = (ID) => {
    setfav((prev)=>!prev);
    const newdata = data.map((item) => {
      if(parseInt(item.id) === parseInt(ID))
      {
        return{...item, favourite: fav};
      }
      return item;
    });
    
    localStorage.setItem("data", JSON.stringify(newdata));
  };

  const increment = () => {
    setid(prevId => prevId + 1);
  };
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/favsubmissions" element={<Favourite />} />
        <Route path="/form" element={<Form id={id} increment={increment} />} />
        <Route path={`/editform/:id`} element={<EditForm/>} />
        <Route path="/image" element={<Image />} />
        <Route path={`/dash/:id`} element={<CardDetail fav={fav} handlefav={handlefav}/>} />
      </Routes>
    </div>
  );
}

export default App;
