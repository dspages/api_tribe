
import React, { Component } from 'react';
import './number.css';

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
    <div className="agreement-li">
      <text>{CONTRACT_TYPES[i]}</text>
      <input onChange={this.setForm} type="checkbox" name={i}/>
    </div>);
  }
}

export default ListItem;
