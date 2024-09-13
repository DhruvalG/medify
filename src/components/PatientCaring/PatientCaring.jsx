import "./PatientCaring.css";
import blueTick from "../../assets/blueTick.svg";
import phoneIcon from "../../assets/phone.svg";
import Button from '../Button/Button';
import CommonSubText from '../CommonSubText/CommonSubText';
import CommonSuperText from '../CommonSuperText/CommonSuperText';


let superText = "HELPING PATIENTS FROM AROUND THE GLOBE!!";
let subText = "Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.";
let note1 = "Stay Updated About Your Health"
let note2 = "Check Your Results Online"
let note3 = "Manage Your Appointments"
let PatientCaring = () => {
    return (
        <div className='PatientCaring'>
            <div className='commonContainer PatientCaringBody'>
                <div className='patientImgDiv patientCaringImgDiv'>
                    <div className='pateintCareImage pateintCareImage1'></div>
                    <div className='pateintCareImage pateintCareImage2'></div>
                    <Button text="Free Consultation" text2="Consultation with the best!" buttonClass="largeButton whiteButton pateintCareButton heroImgButton" icon={phoneIcon} />
                </div>
                <div className='patientCaringTexts'>
                    <CommonSuperText text={superText} />
                    <h1 className='heroHeadline patientCaringHeadLine'>
                        Patient <span>Caring</span>
                    </h1>
                    <CommonSubText text={subText} customClass={"patientCaringSubtext"} />
                    <div className='noteList'>
                        <div className='noteListItem'><img src={blueTick} /><span>{note1}</span></div>
                        <div className='noteListItem'><img src={blueTick} /><span>{note2}</span></div>
                        <div className='noteListItem'><img src={blueTick} /><span>{note3}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientCaring;