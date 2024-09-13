import React from 'react';
import "./SearchComp.css";
import doctorImage from "../../assets/doctor.svg";
import laboratoryImage from "../../assets/laboratory.svg";
import hospitalImage from "../../assets/hospital.svg";
import medicalStore from "../../assets/medical.svg";
import ambulance from "../../assets/ambulance.svg";
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

let SearchComp = () => {
    let cardsImages = [
        {image: doctorImage, text:"doctors"},
        {image: laboratoryImage, text:"labs"},
        {image: hospitalImage, text:"hospitals", customStyle: "cardSelected"},
        {image: medicalStore, text:"medical store"},
        {image: ambulance, text:"ambulance"},
        
    ]
    const displayCards = () => cardsImages.map(item => <Card customStyle={item.customStyle} image={item.image} text={item.text} /> );


    return (
        <div className='SearchComp'>
            <div className='commonContainer SearchCompBody'>
                <Link to="/find">
                    <SearchBar atHomePage={true}/>
                </Link>
                <div className='cardsDivWrapper'>
                    <p>You may be looking for</p>
                    <div className='cardsDiv'>
                        {displayCards()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchComp;