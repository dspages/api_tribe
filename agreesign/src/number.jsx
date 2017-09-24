
import React, { Component } from 'react';
import './number.css';
import { Link } from 'react-router-dom';

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
            Check number!
          </button>
          <Link to={`/document`}>
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
