import React, { Component } from 'react';

import './App.css';


import { database } from '../../firebase-config.js';

class App extends Component {
  
  constructor(props){

    super(props);
    this.state = {task: "Nothing here"};
  }

  sendData(){

    let motivationRef = database.ref().child('motivation');
    let newMotivationRef = motivationRef.push();


    

    newMotivationRef.set({
      task: this.refs.task.value
    });


    newMotivationRef.on('value', function(snapshot) {
      
      this.setState({
        task: snapshot.val().task
      }); 

    }.bind(this))
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
}

export default App;
