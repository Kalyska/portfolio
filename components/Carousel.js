import React from "react";
import {useRouter} from'next/router';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Carousel=()=>  {

  const router= useRouter();
  const handleClick= (project=> router.push(`/project/${project}`))

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
        <SwiperSlide><img src="img/wizard1.png" onClick={() => handleClick("wizard")} /></SwiperSlide>
        <SwiperSlide><img src="img/drink1.png" onClick={() => handleClick("drink")}/></SwiperSlide>
        <SwiperSlide><img src="img/cake1.png" onClick={() => handleClick("cake")}/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel