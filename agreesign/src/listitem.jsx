
import React, { Component } from 'react';
import './number.css';

import a from './images/a.png';
import b from './images/b.png';
import c from './images/c.png';
import d from './images/d.png';
import e from './images/e.png';
import l from './images/l.png';
import dollarsign from './images/dollarsign.png';

const IMAGES = [a,b,c,d,e,l, dollarsign];

const CONTRACT_TYPES =
["Artist Management Agreement",
"Business Management Agreement",
"Copublishing Agreement",
"Live Performance Agreement",
"Songwriting Partnership Agreement",
"Tour Management Agreement",
"Invoice"];

class ListItem extends Component{

  constructor(props){
    super(props);
    this.state = props;
    this.setForm = props.setForm;
  }

  render(){
    let i = this.state.count;
    let selected = this.state.selected;
    return(
    <div className="li-and-icon">
      <img src={IMAGES[i]} alt="" height="18px" width="18px"/>
      <div className="agreement-li">
        <text>{CONTRACT_TYPES[i]}</text>
        <input className="checkbox" onChange={this.setForm} type="checkbox" name={i}/>
      </div>
  </div>
  );
  }
}

export default ListItem;
