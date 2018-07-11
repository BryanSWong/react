import React from 'react';

const char = (props) => {
    return <div>
        <div onClick={props.clicked}>{props.letter}</div>
    </div>
};

export default char;