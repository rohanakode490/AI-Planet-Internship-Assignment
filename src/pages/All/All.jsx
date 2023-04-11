import React, { useState } from "react";
import "./All.css";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

const All = () => {
  const [filter, setfilter] = useState(1);
  const [search, setsearch] = useState("");

  const data = JSON.parse(localStorage.getItem("data"));

  // console.warn(filter);

  // const differncebetweendates = (d) => {
  //   const date = new Date(d);
  //   const now = new Date();
  //   const diffInMs = now - date;
  //   const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  //   return diffInDays;
  // };

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setfilter(parseInt(e.target.value)); // parse the selected value to an integer
  };

  return (
    <>
      <Navbar />
      <Dashboard />
      <div className="tab">
        <div className="tabs">
          <div
            className="all-submissions-wrapper"
            style={{ borderBottom: "4px solid var(--celestial-green-cg-600)" }}
          >
            <Link to="/" className="all-submissions">
              All Submissions
            </Link>
          </div>
          <div className="favourite-submissions-wrapper">
            <Link to="/favsubmissions" className="all-submissions">
              Favourite Submissions
            </Link>
          </div>
        </div>
        <div className="utilities">
          {/* Search Bar  */}
          <input
            type="text"
            placeholder="Search..."
            className="search"
            onChange={handleSearch}
          />

          {/* Dropdown  */}
          <select
            name=""
            id=""
            className="dropdown"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value={1} className="dropdown-item">
              Newest
            </option>
            <option value={2} className="dropdown-item">
              Oldest
            </option>
          </select>
        </div>
      </div>

      {/* Mapping  */}
      <div className="grid-container">
        {data &&
          data
            .filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .sort((a, b) => {
              if (filter === 1) {
                console.log("filter", filter);
                console.log(new Date(a.submit_date) - new Date(b.submit_date));
                return new Date(a.submit_date) - new Date(b.submit_date);
              } else {
                console.log("filter", filter);
                console.log(new Date(b.submit_date) - new Date(a.submit_date));
                return new Date(b.submit_date) - new Date(a.submit_date);
              }
            })
            .map((card) => <Card key={card.id} {...card} />)}
      </div>
    </>
  );
};

export default All;
