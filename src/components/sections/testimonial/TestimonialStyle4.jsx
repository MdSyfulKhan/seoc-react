import parser from "html-react-parser";
import { TestimonialSliderStyle3 } from "../../slider/TestimonialSliderStyle3";

const TestimonialStyle4 = ({ data }) => {
  const { subTitle, title, testimonials } = data;

  return (
    <div className="testimonial4-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 m-auto">
            <div className="testimonia4-header text-center heading8">
              {subTitle && (
                <h5 data-aos="fade-up" data-aos-duration="1000">
                  <img src="assets/img/icons/logo-icons3.svg" alt="" />
                  {parser(subTitle)}
                </h5>
              )}
              {title && (
                <h2 className="text-anime-style-1">
                  {parser(title)}
                  <span>
                    <img src="assets/img/elements/line-img2.png" alt="" />
                  </span>
                </h2>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-12"
            data-aos="zoom-out"
            data-aos-duration="1200"
          >
            <div className="testimonial4-slider-area position-relative">
              <TestimonialSliderStyle3 data={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialStyle4;
