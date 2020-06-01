import React from 'react';
import Person from './Person/Person';


const persons = (props) => props.persons.map((person, index) => {
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
    buttonStyle[":hover"] = {
        backgroundColor: "white",
        color: "black",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#f44336"
      }

    return (
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} key={person.id}>
        <div style={{border: "2px solid white"}}><Person name={person.name} age={person.age} changed={props.changeAge.bind(this, index)} ></Person></div>
        <div style={{maxWidth: "50%", marginLeft: "20px"}}><button style={buttonStyle} key={"b" + index} onClick={props.removePerson.bind(this, index)}>Remove</button></div>
      </div>
    )
})

export default persons;