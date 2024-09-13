import React, { useState } from 'react';
import "./Navbar.css"
import sheildIcon from "../../assets/sheildWhite.svg";
import menuIcon from "../../assets/hamburger.svg";
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

let Navbar = props => {
    let { atHomePage, atFindPage, atBookingsPage, backColor } = props;
    let [menuPoisition, setMenuPosition] = useState("hideMenu");
    let navLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];
    let displayLinks = () => {
        return navLinks.map(item => {
            let goto = "#"
            if(item == "Find Doctors") goto = "/find"
            return (
                <Link to={goto}>
                    <span className='navLink'><span className='navLink-inner'>{item}</span></span>
                </Link>
            )
        })
    }
    let handleMenuClick = () => {
        if(menuPoisition === "menuLeft" || menuPoisition === "hideMenu") setMenuPosition("menuRight");
        else setMenuPosition("menuLeft");
    }
    let displayMenuList = () => {
        let arr = [], delay = 0, transitionDelay;
        navLinks.forEach((item, index) => {
            transitionDelay = {transitionDelay: `${delay++}00ms`} 
            let goto = "#";
            if(item == "Find Doctors") goto = "/find";
            return arr.push(
                <Link onClick={handleMenuClick} to={goto} style={transitionDelay} className={`menuItem ${menuPoisition}`}>
                    {item}
                </Link>
            )
        });

        arr.push(<Link to="/bookings" style={transitionDelay} className={`menuItem ${menuPoisition} menuItem-forBookings`}><Button text="my bookings" buttonClass="largeButton "/></Link>);

        return arr;
    } 

    let NavbarBottom = () => {
        if(atHomePage) return null;

        return (
            <div className='navbarBottom'>
                <span className='navbarBottomPatch'></span>
            </div>
        )
    }

    let NavSearch = () => {
        if(atFindPage) return (
            <div className={"NavSearch"}>
                <SearchBar />
            </div>
        )
    }

    let BookingSearch = () => {
        if(atBookingsPage) return (
            <div className={"BookingSearch"}>
                <span className='bookingsHeadline'>My Bookings</span>
                <div className='navSearchWrapper'>
                    <SearchBar atBookingsPage={true}/>
                </div>
            </div>
        )
    }

    return (

        <>
        <nav className={`${backColor}`}>
            <div className="commonContainer">
            <div className='mainNav'>
                <Link to="/">
                    <div className='logo'>
                        <Button icon={sheildIcon} buttonClass="logoButton"/>
                        <span className='logoText'>medify</span>
                    </div>
                </Link>
                <div className='navMenuButton'>
                    <Button clickFuntion={handleMenuClick} buttonClass='whiteButton inheritBackground' icon={menuIcon} />
                </div>
                <div className='navBody'>
                    <div className='navLinksDiv'>{displayLinks()}</div>
                    <Link to="/bookings">
                        <Button text="my bookings" buttonClass="largeButton "/>
                    </Link>
                </div>
            </div>
            
            <div className='menuListWrapper'>
                {displayMenuList()}
            </div>
            </div>
            <NavSearch />
            <BookingSearch />
        </nav>
        <NavbarBottom />
        </>
    );
};

export default Navbar;