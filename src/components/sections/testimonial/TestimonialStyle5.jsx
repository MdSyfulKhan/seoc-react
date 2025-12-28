import parser from "html-react-parser";
import TestimonialSliderStyle4 from "../../slider/TestimonialSliderStyle4";

const TestimonialStyle5 = ({ data }) => {
  const { subTitle, title, testimonials, bgImgUrl } = data;

  return (
    <div
      className="testimonial5-section-area sp1 cs_bg"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="testimonial-header-area text-center heading10">
              {subTitle && (
                <h5>
                  <img src="assets/img/icons/logo-icons5.svg" alt="" />
                  {parser(subTitle)}
                </h5>
              )}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 m-auto">
            <TestimonialSliderStyle4 data={testimonials} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialStyle5;
