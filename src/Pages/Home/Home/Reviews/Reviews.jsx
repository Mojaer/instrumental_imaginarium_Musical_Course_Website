import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../../assets/review/images.jpeg'
import img2 from '../../../../assets/review/reiew2.jpeg'
import img3 from '../../../../assets/review/reiview3.jpeg'
import img4 from '../../../../assets/review/reiew4.jpeg'
import Rating from 'react-rating';
import { BsStar, BsStarFill } from "react-icons/bs";


const Reviews = () => {
    return (
        <section>
            <h1 className="text-3xl font-semibold my-10 uppercase text-center">Student Review </h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <article className='md:w-4/6 my-7 mx-auto'>
                        <img className='w-48 h-48 rounded-full mx-auto mb-7' src={img1} alt="image" />
                        <div className='md:w-4/5 text-center mx-auto'>
                            <h1 className='text-xl my-3 font-semibold'>Victoria Kensington-Smith</h1>
                            <p>Imaginary Imporium offers an enchanting musical journey. Their passionate instructors create a magical atmosphere, fostering creativity and skill development. The curriculum is comprehensive and tailored to individual needs. I highly recommend this</p>
                            <div className='text-xl my-3'>
                                <Rating
                                    placeholderRating={3.8}
                                    emptySymbol={<BsStar></BsStar>}
                                    placeholderSymbol={<BsStarFill></BsStarFill>}
                                    fullSymbol={<BsStarFill></BsStarFill>}
                                    readonly />
                            </div>

                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='md:w-4/6 my-7 mx-auto'>
                        <img className='w-48 h-48 rounded-full mx-auto mb-7' src={img2} alt="image" />
                        <div className='md:w-4/5 text-center mx-auto'>
                            <h1 className='text-xl my-3 font-semibold'> Maximilian Winchester IV</h1>
                            <p>Imaginary Imporium exceeded my expectations. The faculty is composed of highly skilled musicians who genuinely care about their students progress. The learning environment is inspiring and the facilities are top-notch. A remarkable institution.</p>
                            <div className='text-xl my-3'>
                                <Rating
                                    placeholderRating={4}
                                    emptySymbol={<BsStar></BsStar>}
                                    placeholderSymbol={<BsStarFill></BsStarFill>}
                                    fullSymbol={<BsStarFill></BsStarFill>}
                                    readonly />
                            </div>

                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='md:w-4/6 my-7 mx-auto'>
                        <img className='w-48 h-48 rounded-full mx-auto mb-7' src={img3} alt="image" />
                        <div className='md:w-4/5 text-center mx-auto'>
                            <h1 className='text-xl my-3 font-semibold'>Penelope Montgomery-Jones</h1>
                            <p> Imaginary Imporium is a hidden gem for aspiring musicians. The instructors are knowledgeable and patient, making learning enjoyable. They offer diverse music programs, ensuring a well-rounded education. This institution is a true musical haven</p>
                            <div className='text-xl my-3'>
                                <Rating
                                    placeholderRating={5}
                                    emptySymbol={<BsStar></BsStar>}
                                    placeholderSymbol={<BsStarFill></BsStarFill>}
                                    fullSymbol={<BsStarFill></BsStarFill>}
                                    readonly />
                            </div>

                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='md:w-4/6 my-7 mx-auto'>
                        <img className='w-48 h-48 rounded-full mx-auto mb-7' src={img4} alt="image" />
                        <div className='md:w-4/5 text-center mx-auto'>
                            <h1 className='text-xl my-3 font-semibold'>Theodore von Steinberg</h1>
                            <p>Imaginary Imporium provides an exceptional musical education. The facultys expertise and personalized approach bring out the best in every student. The performances and recitals showcase the institutions commitment to excellence.</p>
                            <div className='text-xl my-3'>
                                <Rating
                                    placeholderRating={4.5}
                                    emptySymbol={<BsStar></BsStar>}
                                    placeholderSymbol={<BsStarFill></BsStarFill>}
                                    fullSymbol={<BsStarFill></BsStarFill>}
                                    readonly />
                            </div>

                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className='md:w-4/6 my-7 mx-auto'>
                        <img className='w-48 h-48 rounded-full mx-auto mb-7' src={img1} alt="image" />
                        <div className='md:w-4/5 text-center mx-auto'>
                            <h1 className='text-xl my-3 font-semibold'>Victoria Kensington-Smith</h1>
                            <p>Imaginary Imporium offers an enchanting musical journey. Their passionate instructors create a magical atmosphere, fostering creativity and skill development. The curriculum is comprehensive and tailored to individual needs. I highly recommend this</p>
                            <div className='text-xl my-3'>
                                <Rating
                                    placeholderRating={4.5}
                                    emptySymbol={<BsStar></BsStar>}
                                    placeholderSymbol={<BsStarFill></BsStarFill>}
                                    fullSymbol={<BsStarFill></BsStarFill>}
                                    readonly />
                            </div>

                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Reviews;