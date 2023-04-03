import React, { useState } from "react";
import "./Dashboard_2.css";
import { BiPencil } from "react-icons/bi";
import { BsFillCalendarFill, BsStarFill, BsStar } from "react-icons/bs";
import moment from "moment";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const Dashboard_2 = ({ id }) => {
  const [fav, setfav] = useState(false);
  const data = JSON.parse(localStorage.getItem("data"));
  const prop = data[id];

  const handlefav = () => {
    setfav((prev) => !prev);
    data[id].favourite = fav;
  };

  return (
    <div className="card-dashboard">
      <div className="card-dash">
        <img src={prop.image} alt="" className="image-icon" />

        {prop.title.length >= 15 ? (
          <div className="detail-title">
            {prop.title.split(" ").slice(0, 15).join(" ")}
            {"..."}
          </div>
        ) : (
          <div className="detail-title">{prop.title}</div>
        )}
        <div className="btns">
          <Link to={`/editform/${id}`} className="card-btn">
            {" "}
            <span>
              <BiPencil type="solid" color="#ccc" />
            </span>
            Edit
          </Link>
          <Modal id={id}/>
        </div>
      </div>
      <div className="bottom-dash">
        <div className="dash-summary">{prop.summary}</div>
        <div className="fav-date">
          {fav ? (
            <BsStarFill className="fav-icon" color="#fff" onClick={handlefav} />
          ) : (
            <BsStar className="fav-icon" color="#fff" onClick={handlefav} />
          )}
          <div className="detail-date">
            <BsFillCalendarFill color="#fff" />
            <div className="detail-date-text">
              {moment(prop.submit_date).format("D MMMM")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_2;
