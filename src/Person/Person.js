import React from 'react';
import './Person.css'

//ES6 way of writing the function as Arrow function:
const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;