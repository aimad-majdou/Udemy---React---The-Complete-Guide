import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    render() {
        return (
            <Aux>
                <div>I'm {this.props.name}</div>
                <input type="text" onChange={this.props.changed} value={this.props.age} />
                {this.props.age ? (<div>My age: {this.props.age}</div>):null}
            </Aux>
        );
    }
}
export default Person;