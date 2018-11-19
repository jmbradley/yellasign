import React, { Component } from 'react';
import './App.css';

///JB imports
import luv from '../assets/atllove.png';
import Form from '../form/Form';
import Sign from '../sign/Sign';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: false,
      inputValue:''
      };
    }


handleClick = () => {
  console.log(this.state.arrow);

    if(this.state.arrow === false) {

      return this.setState({arrow:true});
    }
    else {
      return this.setState({arrow:false});
    }
  }

  render() {
    return (
      <div className="App">
          <div className="mainLogo">
            <h1 className="mainLogoH">YellaSign</h1>
            <h3 className="mainLogoHHH">Film and Television Production Signs.</h3>
          </div>
            <img className="luv" src={luv} alt="Luv From ATL"/>

          <div className="form-sign">
              <Form handleClick={this.handleClick} arrow={this.state.arrow}/>
            <div className="sign">
              <Sign arrow={this.state.arrow}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
