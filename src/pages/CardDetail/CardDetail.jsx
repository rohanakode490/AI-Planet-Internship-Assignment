import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard_2 from "../../components/Dashboard_2/Dashboard_2";
import Details from "../../components/Details/Details";
import { useParams } from "react-router-dom";

const CardDetail = ({fav, handlefav}) => {
  
  const { id } = useParams();

  return (
    <div className="title">
      <Navbar/>
      <Dashboard_2 id={id} fav={fav} handlefav={handlefav}/>
      <Details id={id}/>
    </div>
  );
};

export default CardDetail;
