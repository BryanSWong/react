import React from 'react';

const userInput = (props) => {
    return <input type="text" value={props.name} onChange={props.changed} />
};

export default userInput;