import "./CardHolder.css"
import OfferCard from '../OfferCard/OfferCard';
import PersonCard from '../PersonCard/PersonCard';
import CommonHeader from '../CommonHeader/CommonHeader';
import { doctorsData } from '../../allVariables';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
let CardHolder = ({type, headlibe, classForMargin}) => {
    let displayCards = () => {
        if(type === "offers"){
            return (
                <>
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={2}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={2}/></SwiperSlide>
                </>
            )
        }else{return (
            doctorsData.map((item, idx) => {
                let {name, specialization, image} = item
                return (
                    <SwiperSlide key={`${name}Image`} className='doctorsSlide'>
                        <PersonCard cardNo={idx+1} key={`${name}Image`} name={name} specialization={specialization} image={image} />
                    </SwiperSlide>
                )
            })
        )
        }
    }
    return (
        <div className={`CardHolder ${classForMargin}`}>
            {type === "persons" ? <CommonHeader text={"Our Medical Specialist"} /> : null}
            <div className='cardHolderWrapper commonContainer'>
                <Swiper
                    initialSlide={0}
                    spaceBetween={10}
                    centeredSlides={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    width={type === "offers" ? 393 : 398}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[ Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {displayCards()}
                </Swiper>
            </div>
        </div>
    );
};

export default CardHolder;