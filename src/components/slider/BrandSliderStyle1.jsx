import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const BrandSliderStyle1 = ({ data }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={40}
      slidesPerView={5}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: { slidesPerView: 2 },
        575: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1199: { slidesPerView: 5 },
      }}
      className="slider-images-area"
    >
      {data?.map((brandItem, index) => (
        <SwiperSlide key={index}>
          <div className="img1">
            <img src={brandItem.imgUrl} alt={brandItem.alt} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSliderStyle1;
