import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (prop) => {
  const differncebetweendates = (d) => {
    const date = new Date(d);
    const now = new Date();
    const diffInMs = now - date;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays === 0) {
      return "uploaded moments ago";
    } else if (diffInDays === 1) {
      return "uploaded 1 day ago";
    } else {
      return `uploaded ${diffInDays} days ago`;
    }
  };

  return (
    <Link to={`/dash/${prop.id}`} className="card">
      <div className="card-heading">
        <img className="image-icon" alt="image" src={prop.image} />

        <h5 className="interviewme">{prop.title}</h5>
      </div>

      <div className="card-summary">{prop.summary}</div>
      <div className="card-stats">
        <div className="card-view">
          <i className="card-time">{differncebetweendates(prop.submit_date)}</i>
        </div>
      </div>
    </Link>
  );
};

export default Card;
