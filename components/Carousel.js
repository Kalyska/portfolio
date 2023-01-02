import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Carousel=()=>  {
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
        <SwiperSlide><img src="img/wizard1.png" onClick/></SwiperSlide>
        <SwiperSlide><img src="img/drink1.png" /></SwiperSlide>
        <SwiperSlide><img src="img/cake1.png" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel