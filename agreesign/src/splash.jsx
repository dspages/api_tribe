import React, { Component } from 'react';
import logo from './images/logo2.png';
import { Link } from 'react-router-dom';

class Splash extends Component {
  render(){
    return(
      <Link to={`/number`}>
        <div className="window">
          <img src={logo} alt="" height="300px" width="300px"/>
          <p>Tap to begin</p>
        </div>
      </Link>
    );
  }
}

export default Splash;
