import React from 'react';
import sheildIcon from "../../assets/sheildWhite.svg";
import LogoImage from "../../assets/Logo.svg"
import Button from '../Button/Button';

let Logo = ({width}) => {
    return (
        <div className='logo'>
            <img src={LogoImage} width={width} alt='logo image' className='appLogo'/>
            <span className='logoText'>medify</span>
        </div>
    );
};

export default Logo;