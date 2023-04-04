import React, { useState } from "react";
import "./Favourite.css";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Link } from "react-router-dom";
import { BsTriangleFill } from "react-icons/bs";
import Card from "../../components/Card/Card";

const Favourite = () => {
  const [filter, setfilter] = useState(false);
  const [search, setsearch] = useState("");

  const data = JSON.parse(localStorage.getItem("data"));

  const differncebetweendates = (d) => {
    const date = new Date(d);
    const now = new Date();
    const diffInMs = now - date;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Dashboard />
      <div className="tab">
        <div className="tabs">
          <div className="all-submissions-wrapper">
            <Link to="/" className="all-submissions">
              All Submissions
            </Link>
          </div>
          <div
            className="favourite-submissions-wrapper"
            style={{ borderBottom: "4px solid var(--celestial-green-cg-600)" }}
          >
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
            onClick={(e) => setfilter(e.target.value)}
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
              const x = differncebetweendates(a.submit_date);
              const y = differncebetweendates(b.submit_date);
              if (filter == 1) {
                return x < y;
              } else {
                return x >= y;
              }
            })
            .map((card) => card.favourite && <Card key={card.id} {...card} />)}
      </div>
    </>
  );
};

export default Favourite;
