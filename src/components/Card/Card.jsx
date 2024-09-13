import "./Card.css";

let Card = props => {
    let { image, text, customStyle, cardClass } = props;
    return (
        <div className={`Card ${customStyle} ${cardClass}`}> 
            <img src={image} className='cardImage'/>
            <span className='cardText'>{text}</span>
        </div>
    );
};

export default Card;