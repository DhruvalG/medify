import React from 'react';
import "./CommonSubText.css";

let CommonSubText = ({text, customClass}) => {
    return (
        <p className={`CommonSubText ${customClass}`}>{text}</p>
    );
};

export default CommonSubText;