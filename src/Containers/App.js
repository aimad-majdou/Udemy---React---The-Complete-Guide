import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Persons from '../Components/Persons/Persons';

class App extends Component {

  state = {
    persons: [
      {id: "1", name: "Byakuya", age: 20},
      {id: "2", name: "Ichigo", age: ""},
      {id: "3", name: "Orihime", age: ""}
    ],
    isDisplayed: false
  };

  showNames = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed
    });
  }

  changeAge = (event, index) => {
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

    const buttonStyle = {
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#f44336",
      color: "white",
      padding: "16px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      transitionDuration: "0.4s",
      cursor: "pointer",
      borderColor: "white",
      marginBottom: "50px"
  }
    return (
      <div className="App">
        <header className="App-header">
          <button style={buttonStyle} onClick={this.showNames} key="key1">{this.state.isDisplayed ? "Hide names": "Show names"}</button>
            { this.state.isDisplayed ?
              <Persons persons={this.state.persons} removePerson={this.removePerson} changeAge={this.changeAge}/> : null
            }
        </header>
      </div>
    );
  }
}
export default Radium(App);
