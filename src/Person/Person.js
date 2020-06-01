import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div style={{margin: "20px"}}>
                <div>I'm {this.props.name}</div>
                {this.props.age ? (<div>My age: {this.props.age}</div>):null}
            </div>
        );
    }
}
export default Person;