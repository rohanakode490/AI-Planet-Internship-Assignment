import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import moment from "moment";

const Button = ({ id, increment, type, goto, formvalues, stdate, enddate, img,}) => {
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
      console.log("val", val);
      const parsedData = JSON.parse(data);
      parsedData.push(val);
      console.log("parsedData", parsedData);
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
      console.log(add_data);
      localStorage.setItem("data", JSON.stringify(add_data));
    }
  };

  return type ? (
    //Submit form
    goto ? (
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
