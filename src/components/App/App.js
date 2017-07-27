import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
  sendData(){

    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>Welcome to Be-Productive</h2>
        </div>
        <p className="App-intro">
          <input type="text" ref="action" />
          <button type="button" onClick={this.sendData.bind(this)}>Send</button>
        </p>
      </div>
    );
  }
}

export default App;
