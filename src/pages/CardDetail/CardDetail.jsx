import React, { useEffect } from "react";
import "./CardDetail.css";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard_2 from "../../components/Dashboard_2/Dashboard_2";
import Details from "../../components/Details/Details";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  
  const { id } = useParams();

  return (
    <div className="title">
      <Navbar/>
      <Dashboard_2 id={id}/>
      <Details id={id}/>
    </div>
  );
};

export default CardDetail;
