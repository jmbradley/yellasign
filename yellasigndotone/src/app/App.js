import React, { Component } from "react";
import "./App.css";

///JB imports
import luv from "../assets/atllove.png";
import Form from "../form/Form";
import Sign from "../sign/Sign";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: false,
      inputValues: ["Your Text Here"],
      inputValue: {
        text: ""
      }
    };
  }

  handleClick = () => {
    console.log(this.state.arrow);

    if (this.state.arrow === false) {
      return this.setState({ arrow: true });
    } else {
      return this.setState({ arrow: false });
    }
  };

  handleChange = event => {
    event.preventDefault();
    const inputValues = ["Your Text Here"];
    const index = inputValues.indexOf([0]);
    const newinputValue = event.target.value;
    if (~index) {
      inputValues[index] = newinputValue;
    }
    this.setState({
      inputValue: newinputValue
      // inputValues: { inputValues: [...this.state.inputValues, newinputValue] }
    });
  };

  render() {
    console.log(this.state.inputValues);
    return (
      <div className="App">
        <div className="mainLogo">
          <h1 className="mainLogoH">YellaSign</h1>
          <h3 className="mainLogoHHH">Film and Television Production Signs.</h3>
        </div>
        <img className="luv" src={luv} alt="Luv From ATL" />

        <div className="form-sign">
          <Form
            handleClick={this.handleClick}
            arrow={this.state.arrow}
            handleChange={this.handleChange}
          />
          <div className="sign">
            <Sign arrow={this.state.arrow} signText={this.state.inputValues} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
