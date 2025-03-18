"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="h-[70vh]"
    >
      <SwiperSlide>
        <div className="relative h-full w-full bg-white-800 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
          <h1 className="text-white text-3xl font-bold z-20 relative">Fitness at Your Fingertips</h1>
          <img
            src="/images/hero-slide-1.jpg"
            alt="Fitness Training"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full w-full bg-green-700 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
          <h1 className="text-white text-3xl font-bold z-20 relative">Achieve Your Goals</h1>
          <img
            src="/images/hero-slide-2.jpg"
            alt="Achieving Fitness Goals"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full w-full bg-black-700 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
          <h1 className="text-white text-3xl font-bold z-20 relative">Join the Community</h1>
          <img
            src="/images/hero-slide-3.jpg"
            alt="Join Community"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
