
import React, { Component } from 'react';
import './number.css';

class NumberCheck extends Component{
  render(){
    return (
      <div className="window">
        <div className="top-bar">
          AgreeSign App
        </div>
        <div className="content-item">
          <img src="./logo2.png" alt="" height="300px" width="300px"/>
        </div>
        <div className="input-box">
          <label> Phone Number 
          <input type="text"></input>
          </label>
        </div>
        <div className="interface">
          <button className="interface-option">
            Reject
          </button>
          <button className="interface-option">
            Move forward
          </button>
        </div>
      </div>
    );
  }
}

export default NumberCheck;
