import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import FAQ from '../FAQ/FAQ';
import AppTop from '../AppTop/AppTop';
import Navbar from '../Navbar/Navbar';

let FindPage = () => {
    return (
        <>
            <AppTop />  
            <Navbar atFindPage={true} backColor="whiteBack" />

            <SearchResults />

            <FAQ />
        </>
    );
};

export default FindPage;