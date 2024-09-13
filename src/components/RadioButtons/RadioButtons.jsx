import React from 'react';
import "./RadioButtons.css"

let RadioButtons = () => {
    return (
        <div className='RadioButtons'>
                <input className='radioButton' type="radio" id="radioButton1" name="radioButton" /> 
                <input className='radioButton' type="radio" id="radioButton2" name="radioButton" />
                <input className='radioButton' type="radio" id="radioButton3" name="radioButton" />
        </div>
    );
};

export default RadioButtons;