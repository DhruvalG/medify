import React from 'react';
import "./CommonSuperText.css"

let CommonSuperText = ({text, transform}) => {
    return (
        <div className={`CommonSuperText ${transform}`}>{text}</div>
    );
};

export default CommonSuperText;