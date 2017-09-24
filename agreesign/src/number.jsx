
import React, { Component } from 'react';
import './number.css';
import { Link } from 'react-router-dom';
import question from './images/question.png';
import gentlemannn from './images/gentlemannn.png';
import sketchy from './images/sketchy.png';
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
        if (response === "safe")
        {this.setState({img: gentlemannn});}
        else
        {this.setState({img: sketchy});}
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
