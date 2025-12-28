import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Rating from "../utils/Rating";
import { Link } from "react-router-dom";

const TestimonialSliderStyle1 = ({ data }) => {
  return (
    <div className="testimonials-slider-area owl-carousel">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        speed={1500}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1 },
          767: { slidesPerView: 2 },
          991: { slidesPerView: 1 },
        }}
      >
        {data?.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-boxarea" key={index}>
              <div className="row">
                <div className="col-lg-5">
                  <div className="pera">
                    <p>{testimonial.desc}</p>
                    <div className="space100"></div>
                    <div className="space30"></div>
                    <div className="list-area">
                      <div className="list">
                        <Rating rating={testimonial.rating} />
                        <Link to={testimonial.profileUrl}>
                          {testimonial.name}
                        </Link>
                      </div>
                      <img src={testimonial.logo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="images">
                    <img src={testimonial.imgUrl} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSliderStyle1;
