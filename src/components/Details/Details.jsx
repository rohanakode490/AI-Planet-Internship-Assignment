import React from "react";
import "./Details.css";
import { BsCalendar, BsGithub, BsBoxArrowInUpRight } from "react-icons/bs";

const Details = ({ id }) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const prop = data.find((item) => {
    return parseInt(item.id) === parseInt(id);
  });

  const dateformat = (d) =>{
    const date = new Date(d);
    const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;
    
    return formattedDate
  }

  return (
    <div className="details">
      <div className="description">
        <h5 className="detail-heading">Description</h5>
        <div className="detail-description">{prop.description}</div>
      </div>
      <div className="details-hackthon">
        <h6 className="hackthon">Hackthon</h6>
        <h5 className="hackthon-name">{prop.hackthon_name}</h5>
        <div className="detail-period">
          <BsCalendar className="cal-icon" color="##858585" />
          <span>
            {" "}
            {dateformat(prop.start_date)} - {dateformat(prop.end_date)}
          </span>
        </div>
        <div className="details-links">
          <a href={`${prop.gitHub_link}`} className="git-link" target="_blank">
            <span className="a-text">
              {" "}
              <BsGithub className="github-icon" />
              {` `}GitHub Repository
            </span>
          </a>
          <a href={`${prop.other_link}?${prop.other_link}:'/'`} className="git-link" target="_blank">
            <span className="a-text">
              {" "}
              <BsBoxArrowInUpRight className="github-icon" />
              {` `}Other Link
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
