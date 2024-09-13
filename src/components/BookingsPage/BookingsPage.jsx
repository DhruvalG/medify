import React from 'react';
import Bookings from '../Bookings/Bookings';
import AppTop from '../AppTop/AppTop';
import Navbar from '../Navbar/Navbar';

let BookingsPage = () => {
    return (
        <>
            <AppTop />  
            <Navbar atBookingsPage={true} backColor="whiteBack" />
            
            <Bookings />
        </>
    );
};

export default BookingsPage;