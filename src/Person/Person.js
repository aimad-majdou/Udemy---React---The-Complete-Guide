import React, { Component } from 'react';

class Person extends Component {
    render() {
        return <p>I'm {this.props.name}</p>;
    }
}
export default Person;