import React from "react";
// import { Form, Text } from 'react-form';

/////Do we want to use formcarry? Look into customization....btw it jives well with
/// REACT(and is well documented)....check into reporting offered by formcarry

import "./Form.css";

function Form(props) {
  return (
    <div className="form">
      <form
        className="form-fields"
        action="https://formcarry.com/s/jdcIJfC6e3R"
        method="POST"
        accepcharset="UTF-8"
      >
        <h2 className="formheader">Order Form</h2>
        <div className="form-group">
          <input
            type="text"
            id="dynamic-label-input"
            placeholder="Name"
            name="Customer Name"
            required
          />
          <label htmlFor="dynamic-label-input">Name</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="dynamic-label-input"
            placeholder="Company"
            name="Company Name"
            required
          />
          <label htmlFor="dynamic-label-input">Company</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="dynamic-label-input"
            placeholder="Email Address"
            name="Email Address"
            required
          />
          <label htmlFor="dynamic-label-input">Email Address</label>
        </div>
        <div className="form-group">
          <input
            type="number"
            min="1"
            id="dynamic-label-input"
            placeholder="Number of Signs"
            name="Number of Signs"
            required
          />
          <label htmlFor="numberofsigns">Number of Signs</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="dynamic-label-input"
            placeholder="**Your Text Here**"
            htmlFor="signtext"
            name="signText"
            onChange={props.handleChange}
            required
          />
          <label>Sign Text</label>
        </div>
        <div className="form-group2">
          <label className="form-group" htmlFor="dateneeded">
            Date Signs Needed
          </label>
          <input type="date" name="Date Needed" id="dateneeded" />
        </div>
        <label className="form-group" htmlFor="dateneeded">
          Special Requests?
        </label>
        <textarea
          type="text"
          placeholder="Let us know!"
          className="comments"
          id="comments"
          name="Comments"
        />
        <div className="container">
          <p>
            Arrow Selector
            <br />
            (Slide for Arrow Choices)
          </p>
          <label className="switch" htmlFor="BiArrow">
            <input
              type="checkbox"
              className="switch-input"
              id="BiArrow"
              onClick={props.handleClick}
              name="Type of Arrow"
            />
            <span
              className="switch-label"
              data-on="BiArrow"
              data-off="UniArrow"
            />
            <span className="switch-handle" />
          </label>
        </div>
        <br />
        <button type="submit" className="btn">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default Form;
