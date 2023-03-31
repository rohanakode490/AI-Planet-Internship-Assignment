import React from "react";
import { BsTriangleFill } from 'react-icons/bs';

const Dropdown = () => {
  return (
    <div className="utilities">
      <div className="search">
        <img className="arrow-drop-down-icon" alt="" src="/search.svg" />
        <div className="newest">Search</div>
      </div>
      <div className="filter">
        <div className="newest">Newest </div>
        <BsTriangleFill size={7} style={{ transform: "rotate(180deg)" }} />
      </div>
    </div>
  );
};

export default Dropdown;
