
import React, { Component } from 'react';

const CONTRACT_TYPES =
["type 1", "type 2", "type 3",
"type 4", "type 5", "type 6", "invoice"];

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
    <div>
      {CONTRACT_TYPES[i]}
      <input onChange={this.setForm} type="checkbox" name={i}/>
    </div>);
  }
}

export default ListItem;
