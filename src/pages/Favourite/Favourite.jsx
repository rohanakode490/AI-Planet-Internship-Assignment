import React, { useState } from "react";
import "./Favourite.css";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Link } from "react-router-dom";
import { BsTriangleFill } from "react-icons/bs";

const Favourite = () => {  
  const [filter, setfilter] = useState(false);
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <div className="tab">
        <div className="tabs">
          <div className="all-submissions-wrapper">
            <Link to="/" className="all-submissions">
              All Submissions
            </Link>
          </div>
          <div className="favourite-submissions-wrapper" style={{borderBottom : "4px solid var(--celestial-green-cg-600)"}}>
            <Link to="/favsubmissions" className="all-submissions">
              Favourite Submissions
            </Link>
          </div>
        </div>
        <div className="utilities">
            <input type="text" placeholder="Search" className="search"/>
          <div className="filter" onClick={() => setfilter((state) => !state)}>
            <div className="newest dropdown">
              {filter ? (
                <div>
                  <div>Newest</div> <div>Oldest</div>{" "}
                </div>
              ) : (
                <div>Newest</div>
              )}
            </div>
            <BsTriangleFill size={7} style={{ transform: "rotate(180deg)" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
