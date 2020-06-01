import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div>
                <div style={{margin: "20px"}}>
                    <div>I'm {this.props.name}</div>
                    <input type="text" onChange={this.props.changed} value={this.props.age} />
                    {this.props.age ? (<div>My age: {this.props.age}</div>):null}
                </div>
            </div>
        );
    }
}
export default Person;