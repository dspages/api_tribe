
import React, { Component } from 'react';
import './number.css';

import a from './images/a.png';
import b from './images/b.png';
import c from './images/c.png';
import d from './images/d.png';
import e from './images/e.png';
import l from './images/l.png';
import dollarsign from './images/dollarsign.png';

import k_1 from './piano_keys/a.mp3';
import k_2 from './piano_keys/b.mp3';
import k_3 from './piano_keys/c.mp3';
import k_4 from './piano_keys/d.mp3';
import k_5 from './piano_keys/e.mp3';
import k_6 from './piano_keys/f.mp3';
import k_7 from './piano_keys/g.mp3';

const SOUNDS = [k_1,k_2,k_3,k_4,k_5,k_6,k_7];

const IMAGES = [a,b,c,d,e,l,dollarsign];

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
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    var audio = new Audio(SOUNDS[this.state.count]);
    audio.play();
    this.setForm;
  }

  render(){
    let i = this.state.count;
    let selected = this.state.selected;
    return(
    <div className="li-and-icon">
      <audio src={SOUNDS[i]}/>
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
