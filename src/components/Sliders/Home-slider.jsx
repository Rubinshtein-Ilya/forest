import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
	FreeMode,
	Navigation,
	Thumbs,
} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './Cosines-slider.scss'
import photo1 from '/images/active-photo/1.png'
import photo2 from '/images/active-photo/2.png'




const HomeSlider = ({setIsHomeSlader, setIsOverlay}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handleClick = () => {
		setIsHomeSlader(false); 
		setIsOverlay(false);
	  };


    return (
        <div className="big-cosines-wrapper">
            
             <div className="big-cosines-slider">
            
            <div className="slider-close-btn" onClick={handleClick}>&times;</div>
            <Swiper
                className='home-swiper2'
                modules={[
                    FreeMode,
                    Navigation,
                    Thumbs,
                ]}
                loop={true}
                spaceBetween={32}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                navigation={{
                    nextEl: '.home-next-button',
                    prevEl: '.home-prev-button',
                }}
            >
                    <SwiperSlide>
                        <img src={photo1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={photo2}/>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={2}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="home-swiper"
                    navigation={{
                        nextEl: '.home-next-button',
                        prevEl: '.home-prev-button',
                    }}
                   
                >
                    <SwiperSlide>
                        <img src={photo1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={photo2}/>
                    </SwiperSlide>
                </Swiper>
                <div className='big-cosiness__navigation'>
                    <button className='home-prev-button'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='26'
                            height='12'
                            viewBox='0 0 26 12'
                            fill='none'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M0.292893 6.70711C-0.0976309 6.31658 -0.0976309 5.68342 0.292893 5.29289L4.29289 1.29289C4.68342 0.902369 5.31658 0.902369 5.70711 1.29289C6.09763 1.68342 6.09763 2.31658 5.70711 2.70711L2.41421 6L5.70711 9.29289C6.09763 9.68342 6.09763 10.3166 5.70711 10.7071C5.31658 11.0976 4.68342 11.0976 4.29289 10.7071L0.292893 6.70711Z'
                                fill='#232221'
                            />
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M4 6C4 5.44772 4.44772 5 5 5L25 5C25.5523 5 26 5.44772 26 6C26 6.55229 25.5523 7 25 7L5 7C4.44772 7 4 6.55228 4 6Z'
                                fill='#232221'
                            />
                        </svg>
                    </button>
                    <button className='home-next-button'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='26'
                            height='12'
                            viewBox='0 0 26 12'
                            fill='none'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M25.7071 6.70711C26.0976 6.31658 26.0976 5.68342 25.7071 5.29289L21.7071 1.29289C21.3166 0.902369 20.6834 0.902369 20.2929 1.29289C19.9024 1.68342 19.9024 2.31658 20.2929 2.70711L23.5858 6L20.2929 9.29289C19.9024 9.68342 19.9024 10.3166 20.2929 10.7071C20.6834 11.0976 21.3166 11.0976 21.7071 10.7071L25.7071 6.70711Z'
                                fill='#F7FDFB'
                            />
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M22 6C22 5.44772 21.5523 5 21 5L1 5C0.447716 5 -1.85108e-08 5.44772 -1.19249e-08 6C-5.33895e-09 6.55229 0.447716 7 1 7L21 7C21.5523 7 22 6.55228 22 6Z'
                                fill='#F7FDFB'
                            />
                        </svg>
                    </button>
                </div>
          
        </div>
        </div>
       

    )
}

export default HomeSlider;