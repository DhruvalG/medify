import React, { useContext, useState } from 'react';
import "./ResultCard.css";
import hospitalImg from "../../assets/hospitalCircle.svg";
import likeIcon from "../../assets/like.svg";
import Button from '../Button/Button';
import Slots from '../Slots/Slots';
import { BookingsContext } from '../../contexts/AllContexts';

let resultCardOffer = "Consultation fee at clinic";


let ResultCard = props => {
    let { hospitalName, county, city, rating, hospitalType, atBookingsPage, bookedDate, bookedTime } = props;
    let [bookings, setBookings] = useContext(BookingsContext)
    let [dateTime, setDateTime] = useState({date: "", time: ""});
    let [slotsON, setSlotsON] = useState(false);
    let handleCardClick = () => {
        if(atBookingsPage) return;
        setSlotsON(!slotsON)
    };
    let handleButton = () => {
        if(atBookingsPage) return;

        if(!slotsON) return setSlotsON(true);

        if(!dateTime.date.length || !dateTime.time.length){
            return alert("Select Slot Date to book.");
        }
        
        let saveBookings = [...bookings, {
            dateTime, data: { hospitalName, county, city, rating, hospitalType }
        }]
        localStorage.setItem("bookings", JSON.stringify(saveBookings))

        setBookings(saveBookings);

        alert("New Booking Created!");
    }
    let displayRightSideOfCard = () => {
        if(atBookingsPage){
            return(
                <div className='resultContent-right resultContent-top'>
                    <Button text={bookedTime} buttonClass={`smallButton blueButton-outlined`}/>
                    <Button text={bookedDate} buttonClass={`smallButton greenButton-outlined`}/>
                </div>
            )
        }
        return (
            <div className='resultContent-right'>
                <span className='available'>Available Today</span>
                <Button clickFuntion={handleButton} buttonClass={"bookingButton longButton"} text={"Book FREE Center Visit"}/>
            </div>
        )
    }
    let slotClick = (date, time) => {
        console.log({date, time})
        setDateTime({time, date});
    }
    return (

        <div className='ResultCardWrapper'>
            <div className='ResultCard' onClick={handleCardClick}>
                <div className='resultCardImageWrapper'>
                    <img src={hospitalImg} alt="hospital icon" />
                </div>
                <div className='resultCardContent'>
                    <div className='resultContent-left'>
                        <h6 className='resultCardTitle'>{hospitalName}</h6>
                        <div className='resultLocation'>
                            <span className='resultCity'>{`${county}, ${city}`}</span>
                            <span className='resultCardSubtext'>{hospitalType}</span>
                            <span className='resultCardSubtext'>more</span>
                        </div>
                        <div className='resultCardOfferLine'>
                            <span className='FREE'>FREE</span>
                            <span className='strikeThrough'>₹500</span>
                            <span>{resultCardOffer}</span>
                        </div>
                        <Button buttonClass={"smallButton greenButton rating"} text={rating} icon={likeIcon} />
                    </div>
                    {displayRightSideOfCard()}
                </div>
            </div>
            <Slots dateTime={dateTime} slotsON={slotsON} slotClick={slotClick}/>
        </div>
    );
};

export default ResultCard;