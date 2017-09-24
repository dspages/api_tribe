
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class VenueMenu extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="window">
        <list className="vertical-menu">
          <li className="venue">
            <Link to="number">
              <text>Venue 1</text>
            </Link>
          </li>
          <li className="venue">
            <Link to="number">
              <text>Venue 2</text>
            </Link>
          </li>
          <li className="venue">
            <Link to="number">
              <text>Venue 3</text>
            </Link>
          </li>
          <li className="venue">
            <Link to="number">
              <text>Venue 4</text>
            </Link>
          </li>
          <li className="venue">
            <Link to="number">
              <text>Venue 5</text>
            </Link>
          </li>
        </list>
      </div>
    );
  }

}

export default VenueMenu;
