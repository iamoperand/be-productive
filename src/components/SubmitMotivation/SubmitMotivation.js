import React, { Component } from 'react';

import './SubmitMotivation.css';


import { database } from '../../firebase-config.js';

class SubmitMotivation extends Component {
  
  constructor(props){

    super(props);
    this.state = {task: "..."};
  }

  sendData(){

    let motivationRef = database.ref().child('motivation');
    let newMotivationRef = motivationRef.push();

    newMotivationRef.set({
      task: this.refs.task.value
    });

    
  }
  
  render() {
   
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>Welcome to Be-Productive</h2>
        </div>
        <p className="App-intro">
          <input type="text" ref="task" />
          <button type="button" onClick={this.sendData.bind(this)}>Send</button>
        </p>

        <div className="App-intro">
          
          <h2>Task</h2>
          <span>{this.state.task}</span>

        </div>
      </div>
    );
  }

  componentDidMount(){

    let motivationRef = database.ref().child('motivation');
    motivationRef.on('child_added', function(snapshot){
      console.log("Inside componentDidMount onSubscribe");  
      this.setState({
        task: snapshot.val().task
      }); 

      }.bind(this));
    
    
  }
}

export default SubmitMotivation;
