import React, { Component } from 'react';

import {getApiMessage} from './api';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputvalue : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.getApiMessage = this.getApiMessage.bind(this);
  }
  getApiMessage() {
    getApiMessage(this.state.inputvalue)
    .then(res => {
      console.log('The current time is: ' + res);
    })
    .catch(err => console.log('There was an error:' + err));
  }
  handleChange(event){
    if(event && event.target.value){
      this.setState({
        inputvalue : event.target.value
      });
    }else{
      this.setState({
        inputvalue : ""
      });
    }    
  }
  render() {
    return (
      <div className="App">
        <form>
          <label>Name</label>
          <input id="input" type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
          <input id="button" value="click" type="button" onClick={this.getApiMessage}/>
        </form>
        <span>{this.state.inputvalue}</span>
      </div>
    );
  }
}

export default App;
