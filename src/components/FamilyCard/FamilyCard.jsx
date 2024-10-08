import React from 'react';
import "./FamilyCard.css";
import CommonHeader from '../CommonHeader/CommonHeader';
import CommonSubText from '../CommonSubText/CommonSubText';

let FamilyCard = ({icon, cardNo, text}) => {
    return (
        <div className='FamilyCard'>
            <img src={icon} alt=""/>
            <CommonHeader text={cardNo} />
            <CommonSubText text={text} />
        </div>
    );
};

export default FamilyCard;