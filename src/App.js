import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Aimad"}, 
      {name: "Ichigo"},
      {name: "Orihime"}
    ]
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Person name="Aimad"></Person>
        </header>
      </div>
    );
  }
}

export default App;
