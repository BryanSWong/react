import React from 'react';
import './Person.css';

const userOutput = (props) => {
    return <div className="Person">
        <p>{props.name}</p>
        <p>Random comment is put here</p>
    </div>;
};

export default userOutput;