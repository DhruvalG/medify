import React, { useContext } from 'react';
import "./SearchResults.css";
import checkIcon from "../../assets/checkBadge.svg"
import CommonSubText from "../CommonSubText/CommonSubText";
import ResultCard from '../ResultCard/ResultCard';
import { FoundHospitalsContext } from '../../contexts/AllContexts';

let headline0 = "Search with State and City name for Hospitals above"
let headline = "medical centers available in";
let subText = "Book appointments with minimum wait-time & verified doctor details";
let SearchResults = () => {
    
    let [foundHospitals, setFoundHospitals] = useContext(FoundHospitalsContext);
    let displayCards = () => {
        if(!foundHospitals) return null;
        if(foundHospitals?.hospitals?.length == 0) return null;

        return foundHospitals.hospitals.map(item => {
            return (
                <ResultCard 
                    hospitalName={item["Hospital Name"]}
                    county={item["County Name"]}
                    city={item["City"]}
                    rating={item["Hospital overall rating"]}
                    hospitalType={item["Hospital Type"]}
                />
            )
        });
    }
    return (
        <div className='SearchResults' >
            <div className='commonContainer resultsBody'>
                <div className='resultsHead'>
                    <h5>{foundHospitals.noSearchYet ? headline0 : `${foundHospitals?.hospitals?.length} medical centers available in ${foundHospitals?.stateName}`}</h5>
                    <p>
                        <img src={checkIcon} alt='check icon' className='checkIcon'/>
                        <span>{subText}</span>
                    </p>
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

export default SearchResults;