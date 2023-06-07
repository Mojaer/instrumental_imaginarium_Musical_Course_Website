import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import img1 from '../../../assets/Banner/main.png'
import img2 from '../../../assets/Banner/utilize.png'
import img3 from '../../../assets/Banner/coaches.png'




const Banner = () => {


    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,

                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded-xl' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src={img3} alt="" />
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default Banner;