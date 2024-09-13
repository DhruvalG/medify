import "./Button.css";

let Button = ({text, text2, buttonClass, icon, clickFuntion, formSubmit, rotateIcon}) => {
    return (
        <button 
            className={`Button ${buttonClass}`} 
            onClick={clickFuntion}
            type={formSubmit ? "submit" : null}
        >
            {icon ? <img src={icon} className={rotateIcon ? 'buttonIcon rotateLoad' : 'buttonIcon'} /> : null}
            {text ? <div><p>{text}</p><p>{text2}</p></div> : null}
        </button>
    );
};

export default Button;