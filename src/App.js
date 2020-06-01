import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersons] = useState({
    persons: [
      {name: "Byakuya", age:20},
      {name: "Ichigo"},
      {name: "Orihime"}
    ]
  });

  const switchName = (newName) => {
    personsState.persons[0].name = newName;
    setPersons({
      persons: personsState.persons
    });
  }

  const changeAge = (event) => {
    personsState.persons[0].age = event.target.value;
    setPersons({
      persons: personsState.persons
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={switchName.bind(this, "Aimad")}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} changed={changeAge}></Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>></Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>></Person>
      </header>
    </div>
  );
}
export default App;
