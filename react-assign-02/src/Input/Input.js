import React from 'react';

const Input = (props) => {
    return <div>
        <input onChange={props.changed}/>
        <p>{props.word}</p>
        </div>
};

export default Input;