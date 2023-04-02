import React from "react";
import "./Dashboard.css";
import { Insight } from "../../assets";
import Button from "../Button/Button";

const Dashboard = () => {
  return (
    <main className="dash">
      <div className="left">
        <h1 className="heading">Hackathon Submissions</h1>
        <h6 className="dash-description">
          Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque
          in parturient purus feugiat faucibus. Congue laoreet duis porta turpis
          eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae.
        </h6>
        <Button title="Submission" type={false}/>
      </div>
      <div className="right">
        <img src={Insight} alt="" />
      </div>
    </main>
  );
};

export default Dashboard;
