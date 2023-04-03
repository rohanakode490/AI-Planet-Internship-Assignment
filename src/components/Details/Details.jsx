import React from "react";
import "./Details.css";
import { BsCalendar, BsGithub,BsBoxArrowInUpRight } from "react-icons/bs";
import moment from "moment";
import { Link } from "react-router-dom";

const Details = ({id}) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const prop = data[id];
  return (
    <div className="details">
      <div className="description">
        <h5 className="detail-heading">Description</h5>
        <div className="detail-description">
          {prop.description}
        </div>
      </div>
      <div className="details-hackthon">
        <h6 className="hackthon">Hackthon</h6>
        <h5 className="hackthon-name">{prop.hackthon_name}</h5>
        <div className="detail-period">
          <BsCalendar className="cal-icon" color="##858585" />
          <span> {moment(prop.start_date).format('D MMM YYYY')} - {moment(prop.end_date).format('D MMM YYYY')}</span>
        </div>
        <div className="details-links">
          <Link href={prop.github_link} className="git-link"><span className="a-text"> <BsGithub className="github-icon"/>{` `}GitHub Repository</span></Link>
          <a href={prop.other_link} className="git-link"><span className="a-text"> <BsBoxArrowInUpRight className="github-icon"/>{` `}Other Link</span></a>
        </div>
      </div>
    </div>
  );
};

export default Details;
