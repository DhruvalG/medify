
import React from 'react';
import ResultCard from '../ResultCard/ResultCard';
import Button from '../Button/Button';

let SearchPop = props => {
    let { locations, clickFunction, hospitals, atBookingsPage } = props;
    let displayStates = () => {
        if(atBookingsPage){
            if(!hospitals || !hospitals?.length) return null;

            return hospitals.map(item => {
                let { hospitalName, county, city, rating, hospitalType } = item.data;
                let { time, date } = item.dateTime;
                return (
                    <span className='SearchPopItem SearchPopItem-bookings'>
                        <span>{hospitalName}</span>
                        <span className='resultContent-right resultContent-top'>
                            <Button text={time} buttonClass={`smallButton blueButton-outlined`}/>
                            <Button text={date} buttonClass={`smallButton greenButton-outlined`}/>
                        </span>
                    </span>
                )
            });
        }

        if(!locations || !locations?.length) return null;

        return locations.map(item => <span onClick={() =>  clickFunction(item)} className='SearchPopItem'>{item}</span>)
    }
    return (
        <span className='SearchPop'>
            {displayStates()}    
        </span>
    );
};

export default SearchPop;