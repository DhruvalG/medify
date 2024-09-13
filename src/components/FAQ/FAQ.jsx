import React from 'react';
import "./FAQ.css";
import FAQImg from "../../assets/faq.png";
import FAQHeart from "../../assets/faqHeart.svg";
import smiley from "../../assets/smiley.svg";
import plus from "../../assets/plus.svg";
import CommonSuperText from '../CommonSuperText/CommonSuperText';
import CommonHeader from '../CommonHeader/CommonHeader';
import Button from '../Button/Button';

let text1 = "Why choose our medical for your family?";
let text2 = "Why we are different from others?";
let text3 = "Trusted & experience senior care & love";
let text4 = "How to get appointment for emergency";

let FAQ = () => {
    let faqData = [ text1, text2, text3, text4 ];
    let displyFaqs = () => {
        return faqData.map(item => {
            return (
                <div className='faqQuestion'>
                    <span className=''>{item}</span>
                    <img src={plus} alt='plus icon' />
                </div>
            )
        })
    }
    return (
        <div className='FAQ'>
            <div className='commonContainer FAQBody'>
                <CommonSuperText text={"Get Your Answer"} />
                <CommonHeader text={"Frequently Asked Questions"} />
                <div className='FAQLowerBody'>
                    <div className='FAQ-1'>
                        <div className="FAQImg">
                            <img src={FAQHeart} alt={"FAQHeart"} className=" FAQemoticon FAQHeart"/>
                            <Button text="84k+ Happy Patients" buttonClass="largeButton whiteButton FAQSmileyButton FAQemoticon" icon={smiley} />
                        </div>
                    </div>
                    <div className="FAQ-2">
                        {displyFaqs()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;