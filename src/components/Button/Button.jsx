import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import moment from "moment";

const Button = ({ type, goto, formvalues, stdate, enddate, img }) => {
  
  const [id, setid] = useState(1);
  const handleclick = () => {
    const data = localStorage.getItem("data");
    if (data !== null) {
      const val = {
        id: id,
        ...formvalues,
        start_date: stdate,
        end_date: enddate,
        submit_date: new moment(),
        image: img,
        favourite: false
      };
      const parsedData = JSON.parse(data);
      parsedData.push(val);
      setid((prev)=> prev+1)
      console.log(parsedData);
      localStorage.setItem("data", JSON.stringify(parsedData));
    } else {
      const add_data = [];
      const val = {
        id: id,
        ...formvalues,
        start_date: stdate,
        end_date: enddate,
        submit_date: new moment(),
        image: img,
        favourite: false,
      };
      setid((prev)=> prev+1)
      add_data.push(val);
      console.log(add_data);
      console.log(img);
      localStorage.setItem("data", JSON.stringify(add_data));
    }
  };

  return type ? (
    //Submit form
      goto ? <Link to="/" className="btn" onClick={handleclick}>
        Upload Submission
      </Link>:
        <button className="btn">Upload Submission</button>
  ) : (
    //To form
    <Link to="/form" className="btn">
      Upload Submission
    </Link>
  );
};

export default Button;
