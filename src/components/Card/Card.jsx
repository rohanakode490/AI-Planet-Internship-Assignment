import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import moment from "moment";

const Card = (prop) => {
  // const { id } = useParams();

  // const handleCardClick = (prop) =>{
  //   return <CardDetail key={prop.id} {...prop}/>
  // }

  // console.log(prop)
  return (
    <Link to={`/dash/${prop.id}`} className="card">
      <div className="card-heading">
        <img className="image-icon" alt="image" src={prop.image} />

        {prop.title.length >= 10 ? (
          <h5 className="interviewme">
            {prop.title.split(" ").slice(0, 12).join(" ")}
            {"..."}
          </h5>
        ) : (
          <h5 className="interviewme">{prop.title.length}</h5>
        )}
      </div>

      {prop.summary.length >= 10 ? (
        <div className="card-summary">
          {prop.summary.split(" ").slice(0, 12).join(" ")}
          {"..."}
        </div>
      ) : (
        <div className="card-summary">{prop.summary}</div>
      )}
      <div className="card-stats">
        <div className="card-view">
          {new moment().diff(prop.submit_date, "days") === 0 ? (
            <i className="card-time">uploaded moments ago</i>
          ) : (
            <i className="card-time">
              uploaded {new moment().diff(prop.submit_date, "days")} ago
            </i>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
