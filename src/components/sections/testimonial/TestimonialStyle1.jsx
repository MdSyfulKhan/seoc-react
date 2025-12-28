import perser from "html-react-parser";
import TestimonialSliderStyle1 from "../../slider/TestimonialSliderStyle1";

const TestimonialStyle1 = ({ data }) => {
  const { title, subTitle, testimonials } = data;

  return (
    <div className="testimonial1-section-area sp6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="testimonial-header heading2 text-center">
              <img
                src="assets/img/elements/star2.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="assets/img/elements/star2.png"
                alt=""
                className="star3 keyframe5"
              />
              {title && <h2 className="text-anime-style-3">{perser(title)}</h2>}
              {subTitle && (
                <p data-aos="fade-up" data-aos-duration="1000">
                  {perser(subTitle)}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-8 m-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <TestimonialSliderStyle1 data={testimonials} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialStyle1;
