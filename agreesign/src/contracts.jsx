import React, { Component } from 'react';
import './number.css';
import ListItem from './listitem.jsx';
import {sendMail} from './api_util.js';

const DEFAULT_STATE = {selected:
  [false, false, false, false, false, false, false],
  email: ""};

class Contract extends Component{
  constructor(){
    super();
    this.setForm = this.setForm.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.state = DEFAULT_STATE;
  }

  setForm(event){
    let target = parseInt(event.target.name);
    let selected = this.state.selected;
    let bool = !selected[target];
    selected[parseInt(event.target.name)] = bool;
    this.setState({selected: selected});
  }

  changeEmail(event){
    this.setState({email: event.target.value});
  }

  sendForm(event){
    console.log(`
      sending form type ${this.state.selected} to ${this.state.email}`);
      sendMail(this.state.email,this.state.selected).then(
        ()=>{
          console.log("Mail sent!");
          this.props.history.push("./conclude");
        }
      );
  }

  render(){
    let listItems = [];
    for (var i = 0; i < 7; i++) {
      listItems.push(
        <ListItem
          key={i}
          count={i}
          selected={this.state.selected}
          setForm={this.setForm}
          />
      );
    }
    return(
      <div className="window">
        {listItems}
        <div>
          <text className="input-label">Email</text>
          <input type="text" onChange={this.changeEmail}></input>
        </div>
        <button className="interface-option" onClick={this.sendForm}>Send Forms</button>
      </div>
    );
  }
}

export default Contract;
