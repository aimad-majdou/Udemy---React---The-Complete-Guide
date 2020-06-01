import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

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
      cursor: "pointer"
  }

  const hideButtonStyle = {...buttonStyle};
  hideButtonStyle.borderColor = "white";
  hideButtonStyle.marginBottom = "50px";

  buttonStyle[":hover"] = {
    backgroundColor: "white",
    color: "black",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#f44336"
  }

    return (
      <div className="App">
        <header className="App-header">
          <button style={hideButtonStyle} onClick={this.showNames} key="key1">{this.state.isDisplayed ? "Hide names": "Show names"}</button>
            { this.state.isDisplayed ?
              this.state.persons.map((person, index) => {
                return (
                  <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} key={person.id}>
                    <div style={{border: "2px solid white"}}><Person name={person.name} age={person.age} changed={this.changeAge.bind(this, index)} ></Person></div>
                    <div style={{maxWidth: "50%", marginLeft: "20px"}}><button style={buttonStyle} key={"b" + index} onClick={this.removePerson.bind(this, index)}>Remove</button></div>
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
export default Radium(App);
