
import React, { Component } from 'react';
import './number.css';
import { Link } from 'react-router-dom';
import question from './images/ENTER.png';
import gentlemannn from './images/CLEAR.png';
import sketchy from './images/CAUTION.png';
import gigsign from './images/gigsignsignsign.png';
import {phoneCheck} from './api_util.js';



class NumberCheck extends Component{

  constructor(){
    super();
    this.state = {img: question, number: ""};
    this.updatePicture = this.updatePicture.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
  }

  updatePicture(event){
    phoneCheck(this.state.number).then(
      (response) => {
        if (response.safety === "unsafe")
        {this.setState({img: sketchy});}
        else
        {this.setState({img: gentlemannn});}
      }
    );

  }

  updateNumber(event){
    this.setState({number: event.target.value});
  }

  render(){
    return (
      <div className="window">
        <div className="top-bar">
          GigSign App
        </div>
        <div className="content-item">
          <img src={this.state.img} alt="" height="300px" width="300px"/>
        </div>
        <div className="input-box">
          <text className="input-label"> Phone Number</text>
          <input type="text" onChange={this.updateNumber}></input>
        </div>
        <div className="interface">
          <button className="interface-option" onClick={this.updatePicture}>
            Check number!
          </button>
          <Link to={`/contract`}>
            <button className="interface-option">
              Move forward
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NumberCheck;
