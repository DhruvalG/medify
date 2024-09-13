
import React, { useContext, useEffect } from 'react';
import "./Bookings.css";
import { BookingsContext } from '../../contexts/AllContexts';
import ResultCard from '../ResultCard/ResultCard';

let Bookings = () => {
    let [bookings, setBookings] = useContext(BookingsContext);
    let displayCards = () => {
        if(bookings?.length == 0) return null;

        return bookings.map(item => {
            const { hospitalName, county, city, rating, hospitalType } = item.data;
            return (
                <ResultCard 
                    hospitalName={hospitalName}
                    county={county}
                    city={city}
                    rating={rating}
                    hospitalType={hospitalType}
                    atBookingsPage={true}
                    bookedDate={item.dateTime.date}
                    bookedTime={item.dateTime.time}
                />
            )
        });
    }
    useEffect(() => {
        let localBookings = localStorage.getItem("bookings");
        if(localBookings){
            setBookings(JSON.parse(localBookings));
        }
    }, []);
    
    return (
        <div className='SearchResults' >
            <div className='commonContainer resultsBody'>
                <div className='resultsHead'>
                    <h5></h5>
                </div>
                <div className='cardAndSensodyne'>
                    <aside className='resultCardsArray'>
                        {displayCards()}
                    </aside>
                    <aside className='sensodyne'></aside>
                </div>
            </div>
        </div>
    );
};

export default Bookings;