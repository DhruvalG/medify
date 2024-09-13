import React from 'react';
import "./TabPanel.css"
import Button from '../Button/Button';

let morningTimings = ["08:00", "08:30", "09:00", "09:30", "10:00"]
let afternoonTimings = ["13:00", "13:30", "14:00", "14:30", "15:00"]
let eveningTimings = ["18:00", "18:30", "19:00", "19:30", "20:00"]

let SlotSession = props => {
  let { type, timings, suffix, slotClick, slotDate, dateTime } = props;
  let displayButtons = () => {
    return timings.map(item => {
      let buttonColor = "blueButton-outlined";
      if(dateTime.time == item && slotDate == dateTime.date) buttonColor = "blueButton-filled"
      return <Button clickFuntion={()=> slotClick(slotDate, item)} text={`${item} ${suffix}`} buttonClass={`smallButton ${buttonColor}`}/>
    })
  }
  return (
    <div className='slotSession'>
      <span className='sessionType'>{type}</span>
      <span className='timeButtonsArray'>{displayButtons()}</span>
    </div>
  )
}

let TabPanel = props => {
    let { children, value, index, customClass, slotClick, slotDate, dateTime, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        className={`TabPanel ${customClass}`}
      >
        {value === index && (
          <>
            <SlotSession dateTime={dateTime} slotDate={slotDate} slotClick={slotClick} type="Morining" timings = {morningTimings} suffix="AM"/>
            <span className='slotDivider'></span>
            <SlotSession dateTime={dateTime} slotDate={slotDate} slotClick={slotClick} type="Afternoon" timings = {afternoonTimings} suffix="PM"/>
            <span className='slotDivider'></span>
            <SlotSession dateTime={dateTime} slotDate={slotDate} slotClick={slotClick} type="Evening" timings = {eveningTimings} suffix="PM"/>
          </>
        )}
      </div>
    );
};

export default TabPanel;