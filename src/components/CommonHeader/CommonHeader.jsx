import React from 'react';
import "./CommonHeader.css";

let CommonHeader = ({text}) => {
    return (
        <h3 className='CommonHeader'>{text}</h3>
    );
};

export default CommonHeader;