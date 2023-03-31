import React from "react";
import "./All.css";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Link } from "react-router-dom";
import { BsTriangleFill } from 'react-icons/bs';

const All = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <div className="tab">
        <div className="tabs">
          <div className="all-submissions-wrapper">
            <Link to="/" className="all-submissions">All Submissions</Link>
          </div>
          <div className="favourite-submissions-wrapper">
            <Link to='/favsubmissions' className="all-submissions">Favourite Submissions</Link>
          </div>
        </div>
        <div className="utilities">
          <div className="search">
            <img className="arrow-drop-down-icon" alt="" src="/search.svg" />
            <div className="newest">Search</div>
          </div>
          <div className="filter">
            <div className="newest">Newest </div>
            <BsTriangleFill size={7} style = {{transform: 'rotate(180deg)' }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
