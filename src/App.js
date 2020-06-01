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
    ],
    isDisplayed: false
  });

  const showNames = () => {
    setPersons({
      persons: personsState.persons,
      isDisplayed: !personsState.isDisplayed
    });
  }

  const changeAge = (event) => {
    personsState.persons[0].age = event.target.value;
    setPersons({
      persons: personsState.persons,
      isDisplayed: personsState.isDisplayed
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={showNames}>{personsState.isDisplayed ? "Hide names": "Show names"}</button>
        { personsState.isDisplayed ?
          <div>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} changed={changeAge}></Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>></Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>></Person>
          </div>
          : null
        }
      </header>
    </div>
  );
}
export default App;
