
import React, { Component } from 'react';
import './number.css';
import { Link } from 'react-router-dom';
import question from './images/question.png';
import gentlemannn from './images/gentlemannn.png';
import sketchy from './images/sketchy.png';

class NumberCheck extends Component{

  constructor(){
    super();
    this.state = {img: question};
    this.updatePicture = this.updatePicture.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
  }

  updatePicture(event){
    this.setState({img: gentlemannn});
  }

  updateNumber(event){

  }

  render(){
    return (
      <div className="window">
        <div className="top-bar">
          AgreeSign App
        </div>
        <div className="content-item">
          <img src={this.state.img} alt="" height="300px" width="300px"/>
        </div>
        <div className="input-box">
          <label> Phone Number
          <input type="text"></input>
          </label>
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
