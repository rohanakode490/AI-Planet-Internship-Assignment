import React, { useEffect, useState } from "react";
import "./Form.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import { DatePicker } from "antd";
import moment from "moment";

const Form = ({id, increment}) => {
  const [char, setchar] = useState(0);
  const [stdate, setstdate] = useState(null);
  const [enddate, setenddate] = useState(null);
  const [img, setImg] = useState(null);

  // For Form validation
  const initialvalues = {
    title: "",
    summary: "",
    description: "",
    hackathon_name: "",
    gitHub_link: "",
    other_link: "",
  };

  const [formvalues, setformvalues] = useState(initialvalues);
  const [formerrors, setformerrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [goto, setgoto] = useState(false);

  const handleTextChange = (event) => {
    setchar(event.target.value.length);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64Image = e.target.result;
      setImg(base64Image);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };

  const handledate = (type, date) => {
    type === "st" ? setstdate(moment(date).format()) : setenddate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformerrors(validate(formvalues));
    setisSubmit(true);
    if (Object.keys(formerrors).length === 0) {
      setgoto(true);
    } else {
      setgoto(false);
    }
  };


  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Username is required";
    }
    if (!values.summary) {
      errors.summary = "Summary is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.hackathon_name) {
      errors.hackathon_name = "Hackathon name is required";
    }
    if (!values.gitHub_link) {
      errors.gitHub_link = "GitHub link is required";
    }
    if (!stdate) {
      errors.stdate = "Start Date is required";
    }
    if (!enddate) {
      errors.enddate = "End Date is required";
    }
    return errors;
  };

  return (
    <div className="page">
      <Navbar />
      <form className="form" onSubmit={handleSubmit}>
        <h1>New Hackthon Submission</h1>

        {/* Title  */}
        <label>
          <p className="label">
            {" "}
            Title<span className="error" maxLength={15}> {formerrors.title}</span>
          </p>
          <input
            type="text"
            name="title"
            className="shortip"
            placeholder="Title of your submission"
            value={formvalues.title}
            onChange={handleChange}
          />
        </label>

        {/* Summary  */}
        <label>
          <p className="label">
            Summary<span className="error">{formerrors.summary}</span>
          </p>
          <input
            type="text"
            name="summary"
            className="shortip"
            placeholder="A short summary of your submission (this will be visible with your submission)"
            value={formvalues.summary}
            onChange={handleChange}
          />
        </label>

        {/* Description */}
        <label>
          <p className="label">
            Description<span className="error">{formerrors.description}</span>
          </p>
          <textarea
            type="text"
            name="description"
            rows={8}
            cols={96}
            maxLength={3000}
            className="write-a-long-description-of-yo-wrapper write-a-long"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            onChange={(e) => {
              handleTextChange(e);
              handleChange(e);
            }}
            value={formvalues.description}
          />
          <div className="characters">{char} / 3,000 characters</div>
        </label>

        {/* Cover Image */}
        <div className="item">
          <div className="label">Cover Image</div>
          <div className="minimum-resolution-360px">
            Minimum resolution: 360px X 360px
          </div>
          <div className="bg">
            <input
              type="file"
              className="upload-icon"
              alt="Img"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* Hackthon Name  */}
        <label>
          <p className="label">
            Hackathon Name
            <span className="error">{formerrors.hackathon_name}</span>
          </p>
          <input
            type="text"
            name="hackathon_name"
            className="shortip"
            placeholder="Enter the name of the hackathon"
            value={formvalues.hackathon_name}
            onChange={handleChange}
          />
        </label>

        <div className="date">
          {/* Hackthon Start Date */}
          <div>
            <p className="label">
              Hackathon Start Date
              <span className="error"> {formerrors.stdate}</span>
            </p>
            <div className="section-01">
              <DatePicker
                className="field"
                type="date"
                placeholder="Select start date"
                name="start_date"
                // value={stdate}
                onChange={(date) => handledate("st", date)}
              />
            </div>
          </div>

          {/* Hackthon End Date */}
          <div>
            <p className="label">
              Hackathon End Date
              <span className="error"> {formerrors.enddate}</span>
            </p>
            <div className="section-01">
              <DatePicker
                className="field"
                type="date"
                placeholder="Select end date"
                name="end_date"
                // value={enddate}
                onChange={(date) => handledate("end", moment(date).format())}
              />
            </div>
          </div>
        </div>

        {/* Github Repository Link */}
        <label>
          <p className="label">
            GitHub Repository
            <span className="error">{formerrors.gitHub_link}</span>
          </p>
          <input
            type="url"
            name="gitHub_link"
            className="shortip"
            placeholder="Enter your submission’s public GitHub repository link"
            value={formvalues.gitHub_link}
            onChange={handleChange}
          />
        </label>

        {/* Other Link  */}
        <label>
          <p className="label">Other Links</p>
          <input
            type="url"
            name="other_link"
            className="shortip"
            placeholder="You can upload a video demo or URL of you demo app here."
            value={formvalues.other_link}
            onChange={handleChange}
          />
        </label>
        <Button
          id={id} 
          increment={increment}
          type={true}
          goto={goto}
          formvalues={formvalues}
          stdate={stdate}
          enddate={enddate}
          img={img}
        />
      </form>
    </div>
  );
};

export default Form;
