import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Rating from "../utils/Rating";

const TestimonialSliderStyle2 = ({ data }) => {
  return (
    <div className="testimonial2-owl-carousel-area">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={2000}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        autoplay={false}
        pagination={{
          clickable: true,
        }}
        className="owl-carousel overflow-initial"
      >
        {data?.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-author-box">
              <Rating rating={testimonial.rating} />
              <p className="pera">"{testimonial.desc}"</p>
              <div className="content-area">
                <div className="images-content">
                  <div className="img1">
                    <img src={testimonial.imgUrl} alt={testimonial.name} />
                  </div>
                  <div className="content">
                    <Link to={testimonial.profileUrl}>{testimonial.name}</Link>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
                <img
                  src="assets/img/icons/quito1.svg"
                  alt=""
                  className="quito1"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSliderStyle2;
