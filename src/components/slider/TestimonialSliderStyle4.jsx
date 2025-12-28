import { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSliderStyle4 = ({ data: testimonials }) => {
  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  const thumbSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    asNavFor: mainSlider.current,
  };

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    arrows: false,
    asNavFor: thumbSlider.current,
  };

  const handleNext = () => {
    mainSlider.current?.slickNext();
    thumbSlider.current?.slickNext();
  };

  const handlePrev = () => {
    mainSlider.current?.slickPrev();
    thumbSlider.current?.slickPrev();
  };

  return (
    <div
      className="testimonial-sliders text-center"
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      {/* Thumbnail Slider */}
      <div className="testimonial-nav">
        <Slider ref={thumbSlider} {...thumbSettings}>
          {testimonials?.map((testimonial, index) => (
            <div key={index} className="single-testimonial-nav">
              <img src={testimonial.imgUrl} alt={testimonial.author} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Slider */}
      <div className="slider-testimonial">
        <Slider ref={mainSlider} {...mainSettings}>
          {testimonials?.map((testimonial, index) => (
            <div key={index} className="single-testimonial">
              <h5>{testimonial.desc}</h5>
              <div className="author">
                <Link to={testimonial.authorLink}>{testimonial.author}</Link>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <div className="testimonial-arrows">
          <div className="testimonial-prev-arrow slick-arrow">
            <button onClick={handlePrev}>
              <Icon icon="fa7-solid:angle-left" width="20" />
            </button>
          </div>

          <div className="testimonial-next-arrow slick-arrow">
            <button onClick={handleNext}>
              <Icon icon="fa7-solid:angle-right" width="20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderStyle4;
