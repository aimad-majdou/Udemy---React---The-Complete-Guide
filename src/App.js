import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersons] = useState({
    persons: [
      {name: "Byakuya", age:20},
      {name: "Ichigo", age: null},
      {name: "Orihime", age: null}
    ],
    isDisplayed: false
  });

  const showNames = () => {
    setPersons({
      persons: personsState.persons,
      isDisplayed: !personsState.isDisplayed
    });
  }

  const changeAge = (index, event) => {
    personsState.persons[index].age = event.target.value;
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
          personsState.persons.map((person, index) => 
            <Person name={person.name} age={person.age} changed={changeAge.bind(this, index)}></Person>
          )
          : null
        }
      </header>
    </div>
  );
}
export default App;
