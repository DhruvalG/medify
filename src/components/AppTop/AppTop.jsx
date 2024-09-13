import "./AppTop.css";
let text = " The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness."
let AppTop = () => {
    return (
        <div className='AppTop'>
            <p> {text} </p>  
        </div>
    );
};

export default AppTop;