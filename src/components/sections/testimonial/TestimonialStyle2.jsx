import perser from "html-react-parser";
import TestimonialSliderStyle2 from "../../slider/TestimonialSliderStyle2";

const TestimonialStyle2 = ({ data }) => {
  const { subTitle, title, testimonials } = data;

  return (
    <div className="testimonial2-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 m-auto">
            <div className="testimonial-header heading4 text-center">
              {subTitle && <h5>{perser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{perser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="col-lg-6 m-auto">
          <TestimonialSliderStyle2 data={testimonials} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialStyle2;
