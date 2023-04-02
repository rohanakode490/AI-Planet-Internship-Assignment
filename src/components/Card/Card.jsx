import React from "react";
import './Card.css'
import { card1 } from "../../assets";
import { Link } from "react-router-dom";

const Card = (prop) => {
  return (
    <Link to={`/${prop.title}`} className="card">
      <div className="card-heading">
        <img className="image-icon" alt="image" src={prop.image} />
        <h5 className="interviewme">{prop.title}</h5>
      </div>
      <div className="card-summary">
        {prop.summary}
      </div>
      <div className="card-stats">
        <div className="card-view">

          <i className="card-time">uploaded {prop.submit_time} days ago</i>
        </div>
      </div>
    </Link>
  );
};

export default Card;
