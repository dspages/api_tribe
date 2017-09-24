
import React, { Component } from 'react';
import './number.css';
import { Link } from 'react-router-dom';

class Conclude extends Component{

  render(){
    return(
      <Link to={`/`}>
        <div className="window">
          <h2>Mail sent!</h2>
          <h3>Tap to return to start</h3>
        </div>
      </Link>
    );
  }
}

export default Conclude;
