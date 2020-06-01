import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Byakuya", age:20},
      {name: "Ichigo", age: null},
      {name: "Orihime", age: null}
    ],
    isDisplayed: false
  };

  showNames = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed
    });
  }

  changeAge = (index, event) => {
    const persons = [...this.state.persons];
    persons[index].age = event.target.value;
    this.setState({
      persons: persons
    });
  }

  removePerson = (index) => {
     const persons = [...this.state.persons];
     persons.splice(index, 1);
     this.setState({
       persons: persons
     })
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.showNames}>{this.state.isDisplayed ? "Hide names": "Show names"}</button>
            { this.state.isDisplayed ?
              this.state.persons.map((person, index) => {
                return (
                  <div style={{display: "flex"}}>
                    <div><Person name={person.name} age={person.age} changed={this.changeAge.bind(this, index)}></Person></div>
                    <div><button style={{height:"100%"}} onClick={this.removePerson.bind(this, index)}>Remove</button></div>
                  </div>
                )
            })
              : null
            }
        </header>
      </div>
    );
  }
}
export default App;
