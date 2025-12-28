import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Rating from "../utils/Rating";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const TestimonialSliderStyle3 = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        speed={1500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        className="testimonial-swiper"
      >
        {data?.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-boxarea">
              {/* <img src="assets/img/icons/quito2.svg" alt="" className="quito" /> */}
              <i className="quote">
                <Icon
                  className="quote"
                  icon="fa7-solid:quote-left"
                  width="60"
                  height="60"
                />
              </i>

              <p>{testimonial.desc}</p>
              <div className="space48"></div>
              <div className="auhtor-logo">
                <div className="text">
                  <Link to={testimonial.authorLink}>{testimonial.author}</Link>
                  <Rating rating={testimonial.rating} />
                </div>
                <div className="logo">
                  <img src={testimonial.logoUrl} alt={testimonial.author} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper_arrows">
        <button className="swiper-button-prev">
          <Icon icon="fa7-solid:angle-left" height={20} width={20} />
        </button>
        <button className="swiper-button-next">
          <Icon icon="fa7-solid:angle-right" height={20} width={20} />
        </button>
      </div>
    </>
  );
};
