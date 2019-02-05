import React, { Component } from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person"><p onClick={props.click}>Im a {props.name}. I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} />
        </div>

    );
};

export default person;