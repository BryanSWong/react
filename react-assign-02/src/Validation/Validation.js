import React from 'react';

const validation = (props) => {
    const text = props.word;
    const limit = 5;
    if(text > limit){
        return (
            <div>
                <p>Text long enough</p>
            </div>
        );
    }

    else {
        return (
            <div>
                <p>Text too short</p>
            </div>
        );
    }
};

export default validation;