import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react";

const HeroSliderStyle1 = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        speed={1500}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={24}
        className="hero-swiper"
      >
        {data?.map((slideImgUrl, index) => (
          <SwiperSlide key={index}>
            <img className="w-100" src={slideImgUrl} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper_arrows">
        <button className="swiper-button-prev">
          <Icon icon="fa7-solid:angle-left" height="14" />
        </button>
        <button className="swiper-button-next">
          <Icon icon="fa7-solid:angle-right" height="14" />
        </button>
      </div>
    </>
  );
};

export default HeroSliderStyle1;
