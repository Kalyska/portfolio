import React from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Carousel = () => {

  const router = useRouter();
  const handleClick = (project => router.push(`/project/${project}`))

  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image className='img' src="/img/phpmon1.png" alt="" fill object-fit='contain' onClick={() => handleClick("phpmon")} /></SwiperSlide>
        <SwiperSlide><Image className='img' src="/img/movieshuffle1.png" alt="" fill object-fit='contain' onClick={() => handleClick("movieshuffle")} /></SwiperSlide>
        <SwiperSlide><Image className='img' src="/img/wizard1.png" alt="" fill object-fit='contain' onClick={() => handleClick("wizard")} /></SwiperSlide>
        <SwiperSlide><Image className='img' src="/img/drink1.png" alt="" fill object-fit='contain' onClick={() => handleClick("drink")} /></SwiperSlide>
        <SwiperSlide><Image className='img' src="/img/cake1.png" alt="" fill object-fit='contain' onClick={() => handleClick("cake")} /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel