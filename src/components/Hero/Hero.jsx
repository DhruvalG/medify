import React from 'react';
import "./Hero.css"
import heroImage from "../../assets/heroImage.png";
import Button from '../Button/Button';
import SearchComp from '../SearchComp/SearchComp';
import { Link } from 'react-router-dom';

let tagLine = "Skip the travel! Find Online";
let subText = "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.";
let Hero = () => {
    return (
        <div className='Hero'>
            <div className='commonContainer heroBody'>
                <div className='heroTexts'>
                    <h4 className='heroTagline'>{tagLine}</h4>
                    <h1 className='heroHeadline'>
                        Medical <span>Centers</span>
                    </h1>
                    <p className='heroSubtext'>{subText}</p>
                    <Link to="/find"><Button text="find centers" buttonClass="largeButton heroButton"/></Link>
                </div>
                <div className='heroImgDiv'>
                    <img src={heroImage} alt='doctors' className='heroImage'/>
                </div>
                <SearchComp />
            </div>
        </div>
    );
};

export default Hero;