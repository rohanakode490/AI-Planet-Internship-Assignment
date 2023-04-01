import React, { useState } from "react";
import "./Form.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import { DatePicker } from "antd";

const Form = () => {
  const [char, setchar] = useState(0);

  const handleTextChange = (event) => {
    setchar(event.target.value.length);
  };
  return (
    <div className="page">
      <Navbar />
      <form className="form">
        <h1>New Hackthon Submission</h1>
        {/* Title  */}
        <label>
          <p className="label"> Title</p>
          <input
            type="text"
            name="title"
            className="shortip"
            placeholder="Title of your submission"
          />
        </label>

        {/* Summary  */}
        <label>
          <p className="label"> Summary</p>
          <input
            type="text"
            name="summary"
            className="shortip"
            placeholder="A short summary of your submission (this will be visible with your submission)"
          />
        </label>

        {/* Description */}
        <div className="item">
          <div className="description-form">Description</div>
          <textarea
            type="text"
            rows={8}
            cols={96}
            maxLength={3000}
            className="write-a-long-description-of-yo-wrapper write-a-long"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            onChange={handleTextChange}
          />
          <div className="characters">{char} / 3,000 characters</div>
        </div>

        {/* Cover Image */}
        <div className="item">
          <div className="cover-image">Cover Image</div>
          <div className="minimum-resolution-360px">
            Minimum resolution: 360px X 360px
          </div>
          <div className="bg">
            <input type="file" className="upload-icon" alt="" />
          </div>
        </div>

        {/* Hackthon Name  */}
        <label>
          <p className="label"> Hackathon Name</p>
          <input
            type="text"
            name="summary"
            className="shortip"
            placeholder="Enter the name of the hackathon"
          />
        </label>

        <div className="date">
          {/* Hackthon Start Date */}
          <div>
            <p className="label">Hackathon Start Date</p>
            <div className="section-01">
              <DatePicker className="field" placeholder="Select start date" />
            </div>
          </div>

          {/* Hackthon End Date */}
          <div>
            <p className="label">Hackathon End Date</p>
            <div className="section-01">
              <DatePicker className="field" placeholder="Select start date" />
            </div>
          </div>
        </div>

        {/* Github Repository Link */}
        <label>
          <p className="label"> GitHub Repository</p>
          <input
            type="text"
            name="summary"
            className="shortip"
            placeholder="Enter your submission’s public GitHub repository link"
          />
        </label>

        {/* Other Link  */}
        <label>
          <p className="label"> Other Links</p>
          <input
            type="text"
            name="summary"
            className="shortip"
            placeholder="You can upload a video demo or URL of you demo app here."
          />
        </label>
        <div style={{ borderTop: "15px solid #ccc ", marginLeft: 20, marginRight: 20, background:"green" }}></div>
        <Button type={true} />
      </form>
    </div>
  );
};

export default Form;
