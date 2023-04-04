import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import moment from "moment";

const Button = ({ id, edit, increment, type, goto, formvalues, stdate, enddate, img,}) => {
  const handleclick = () => {
    const data = localStorage.getItem("data");
    if (data !== null) {
      const val = {
        ...formvalues,
        start_date: stdate,
        end_date: enddate,
        submit_date: new moment(),
        image: img,
        id: id,
        favourite: false,
      };
      const parsedData = JSON.parse(data);
      parsedData.push(val);

      localStorage.setItem("data", JSON.stringify(parsedData));
    } else {
      const add_data = [];
      const val = {
        ...formvalues,
        start_date: stdate,
        end_date: enddate,
        submit_date: new moment(),
        image: img,
        id: id,
        favourite: false,
      };
      add_data.push(val);
      
      localStorage.setItem("data", JSON.stringify(add_data));
    }
  };
  
  const handleedit = () => { 
    const data = JSON.parse(localStorage.getItem("data"));

    const newdata = data.filter((item) =>{
      return parseInt(item.id) !== parseInt(id)
    })
    console.warn('new',newdata)
    console.warn('formvalues',formvalues)
    let obj={
      ...formvalues,
      id: id,
      image: img,
    };
    if(stdate!==null)
    {
      obj={...obj,start_date: stdate}
    }
    if(enddate!==null)
    {
      obj={...obj,end_date: enddate}
    }
    newdata.push(obj);
    console.warn('update',newdata)
    localStorage.setItem("data", JSON.stringify(newdata));
  }

  return type ? (
    //Submit form
    goto ? (
      edit ? (
        <Link
          to="/"
          className="btn"
          onClick={() => {
            handleedit();
          }}
        >
          Upload Submission
        </Link>
      ) : (
        <Link
          to="/"
          className="btn"
          onClick={() => {
            handleclick();
            increment();
          }}
        >
          Upload Submission
        </Link>
      )
    ) : (
      <button className="btn">Upload Submission</button>
    )
  ) : (
    //To form
    <Link to="/form" className="btn">
      Upload Submission
    </Link>
  );
};

export default Button;
