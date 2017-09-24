import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Splash extends Component {
  render(){
    return(
      <Link to={`/number`}>
        <div className="splash">
        </div>
      </Link>
    );
  }
}

export default Splash;
