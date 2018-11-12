import React from 'react';
// import { Form, Text } from 'react-form';

/////Do we want to use formcarry? Look into customization....btw it jives well with
/// REACT(and is well documented)....check into reporting offered by formcarry

import './Form.css';

function Form(props) {
    return (
        <div className="form">
          <form className="form-fields" action="https://formcarry.com/s/jdcIJfC6e3R" method="POST" accept-charset="UTF-8" >
            <h2 className="formheader">↓ Info Here ↓</h2><br/>
            <h2 className="formheader">↓</h2>
              <div className="form-group">
                <input type="text" id="dynamic-label-input" placeholder="Name" name="Customer Name"/>
                <label htmlFor="dynamic-label-input">Name</label>
              </div>
              <div className="form-group">
                <input type="text" id="dynamic-label-input" placeholder="Company" name="Company Name"/>
                <label htmlFor="dynamic-label-input">Company</label>
              </div>
              <div className="form-group">
                <input type="text" id="dynamic-label-input" placeholder="Email Address" name="Email Address"/>
                <label htmlFor="dynamic-label-input">Email Address</label>
              </div>
              <div className="form-group">
                <input type="number" min= "1" id="dynamic-label-input" placeholder="Number of Signs" name="Number of Signs"/>
                <label htmlFor="numberofsigns">Number of Signs</label>
              </div>
              <div className="form-group">
                <input type="text" id="dynamic-label-input" placeholder="Sign Text" htmlFor="signtext"/>
                <label>Sign Text</label>
              </div>
              <div className="form-group2">
                <label className ="form-group" htmlFor="Date Needed">Date Signs Needed</label>
                <input type="date" name="dateneeded" id="dateneeded" />
              </div>
              <div className="container">
                <p>Arrow Selector<br/>(Slide for Arrow Choices)</p>
                <label className="switch">
                  <input type="checkbox" className="switch-input" onClick={props.handleClick} />
                  <span className="switch-label" data-on="BiArrow" data-off="UniArrow" htmlFor="Type of Arrow" ></span>
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
    
