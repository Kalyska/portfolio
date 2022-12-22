import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Carousel=()=> {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/3.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel