import React, { useContext, useEffect, useRef, useState } from 'react';
import axios, { all } from 'axios';
import "./SearchBar.css"
import searchIcon from "../../assets/search.svg"
import location from "../../assets/location.svg"
import loadingIcon from "../../assets/loading.svg";
import Button from '../Button/Button';
import { findLocations, findBookings } from '../../functions/functions';
import SearchPop from './SearchPop';
import { BookingsContext, FoundHospitalsContext } from '../../contexts/AllContexts';

let api = "https://meddata-backend.onrender.com";
let allSates = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","DC","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","PR","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","VI","Wyoming","AS","GU","MP"]

let SearchBar = props => {
    let { customClass, atBookingsPage, atHomePage } = props;
    let [bookings, setBookings] = useContext(BookingsContext)
    let [foundHospitals, setFoundHospitals] = useContext(FoundHospitalsContext)
    let [stateName, setStateName] = useState("");
    let [cityName, setCityName] = useState("");
    let [hospitalName, setHospitalName] = useState("");
    let [filteredStates, setFilteredStates] = useState([]);
    let [allCities, setAllCities] = useState([]);
    let [filteredCities, setFilteredCities] = useState([]);
    let [disableCityInput, setDisableCityInput] = useState(undefined);
    let [filteredHospitals, setFilteredHospitals] = useState([]);
    let [fetchingHospitals, setFetchingHospitals] = useState(false)
    let stateName_onChange = useRef(false);
    let cityName_onChange = useRef(false);
    let fetchingCities = useRef(false);
    useEffect(()=> {
        if(stateName_onChange.current) filterStatesFunc();
    }, [stateName])

    useEffect(()=> {
        if(cityName_onChange.current) filterCitiesFunc();
    }, [cityName])

    useEffect(() => {
        filterBookingsFunc();
    }, [hospitalName])

    let handleSubmit = async event => {
        event.preventDefault();
        getLocationData("hospitals")        
    }

    let getLocationData = async (dataType, location) => {
        if(dataType == "cities"){
            fetchingCities.current = true;
            let cities = await axios.get(`${api}/cities/${location}`);
            setAllCities(cities.data);
            fetchingCities.current = false;
            setDisableCityInput(undefined);
        }
        if(dataType === "hospitals"){
            setFetchingHospitals(true);
            const hospitals = await axios.get(`${api}/data?state=${stateName}&city=${cityName}`);
            setFoundHospitals({hospitals: hospitals.data, cityName, stateName});
            setFetchingHospitals(false);
        }
    }
    let handleChange = event => {
        let {value, name} = event.target;
        
        if(name === "state"){
            stateName_onChange.current = true;
            setStateName(value)
            setDisableCityInput("disableCityInput");
            cityName_onChange.current = false;
            setCityName("")
        }

        if(name === "city"){
            cityName_onChange.current = true;
            setCityName(value)
        }

        if(name === "hospitalName"){
            setHospitalName(value);
        }
    }
    let filterStatesFunc = () => {
        
        let foundStates = findLocations(allSates, stateName);
        setFilteredStates(foundStates);
    }

    let filterCitiesFunc = () => {
        
        let foundCities = findLocations(allCities, cityName);
        setFilteredCities(foundCities);
    }

    let filterBookingsFunc = () => {
        
        let hospitals = findBookings(bookings, hospitalName);
        setFilteredHospitals(hospitals);
    }

    let clickStateSuggestions = (nameOfState) => {
        setFilteredStates([]);
        stateName_onChange.current = false;
        
        setStateName(nameOfState)

        getLocationData("cities", nameOfState);
    }
    let clickCitySuggetions = (nameOfCity) => {
        setFilteredCities([]);
        cityName_onChange.current = false;
        
        setCityName(nameOfCity)
    }

    let displayInputs = () => {
        if(atBookingsPage){
            return (
            <span className='inputWrapper'>
                <img src={location}/>
                <input 
                type='text' 
                value={hospitalName} 
                name='hospitalName' 
                onChange={handleChange}
                placeholder='Search By Hospital'
                id='hospitalName'
                required
                />
                <SearchPop atBookingsPage={true} hospitals={filteredHospitals} clickFunction={clickStateSuggestions}/>
            </span>
        )
    }
        return( 
            <>
            <span className='inputWrapper'>
                <img src={location}/>
                <input 
                type='text' 
                value={stateName} 
                name='state' 
                onChange={handleChange}
                placeholder='state'
                id='state'
                required
                />
                <SearchPop locations={filteredStates} clickFunction={clickStateSuggestions}/>
            </span>
            
            <span className={`inputWrapper ${disableCityInput}`}>
                <img src={fetchingCities.current ? loadingIcon : location} className={fetchingCities.current ? 'rotateLoad' : null}/>
                <input 
                type='text' 
                value={cityName} 
                name='city' 
                onChange={handleChange}
                placeholder={fetchingCities.current ? "Fetching cities..." :'city'}
                required
                disabled={displayInputs ? false : true}
                />
                <SearchPop locations={filteredCities} clickFunction={clickCitySuggetions}/>
            </span>
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={`SearchBar ${customClass}`}>
            {displayInputs()}

            <Button 
            formSubmit="true" 
            text={fetchingHospitals ? "Fetching..." : "search" }
            icon={fetchingHospitals ? loadingIcon : searchIcon} 
            buttonClass={"longButton"}
            rotateIcon={fetchingHospitals ? true : false}
            />
        </form>
    );
};

export default SearchBar;