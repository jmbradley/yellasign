import React from 'react';
// import { Form, Text } from 'react-form';



import './Form.css';

function Form(props) {
    return (
        <div className="form">
          <form className="form-fields">
            <h2 className="formheader">Enter Info Below</h2>
              <div className="form-group">
                <input type="text" id="dynamic-label-input" placeholder="Name"/>
                <label htmlFor="dynamic-label-input">Name</label>
              </div>
              <div className="form-group">
                <input type="text" id="dynamic-label-input" placeholder="Company"/>
                <label htmlFor="dynamic-label-input">Company</label>
              </div>
              <div className="form-group">
                <input type="number" id="dynamic-label-input" placeholder="Number of Signs"/>
                <label htmlFor="dynamic-label-input">Number of Signs</label>
              </div>
              <div className="form-group">
                <input type="text" id="dynamic-label-input" placeholder="Sign Text"/>
                <label htmlFor="dynamic-label-input">Sign Text</label>
              </div>
              <div className="form-group2">
                <label className ="form-group" htmlFor="dateneeded">Date Signs Needed</label>
                <input type="date" name="dateneeded" id="dateneeded"/>
              </div>
              <div className="container">
                <p>Arrow Selector<br/>(Slide for Arrow Choices)</p>
                <label className="switch">
                  <input type="checkbox" className="switch-input" onClick={props.handleClick}/>
                  <span className="switch-label" data-on="UniArrow" data-off="BiArrow" ></span>
                  <span className="switch-handle"></span>
                </label>
              </div>
              <br/>
            <button type="submit" className="btn">
              Submit Request
            </button>
          </form>
        </div>
    )};

export default Form;
    
