import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersons] = useState({
    persons: [
      {name: "Byakuya", age: 27},
      {name: "Ichigo", age: 25},
      {name: "Orihime", age: 26}
    ]
  });

  const switchName = () => {
    personsState.persons[0].name = "Aimad";
    setPersons({
      persons: personsState.persons
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={switchName}>Switch name</button>
        <Person name={personsState.persons[0].name}></Person>
        <Person name={personsState.persons[1].name}></Person>
      </header>
    </div>
  );
}
export default App;
