import parser from "html-react-parser";

import ButtonStyle15 from "../../button/ButtonStyle15";
import CaseStudySliderStyle1 from "../../slider/CaseStudySliderStyle1";

const CaseStyle8 = ({ data }) => {
  const { subTitle, title, btnText, btnUrl, cases } = data;

  return (
    <div className="case8-section-area sp1">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Header */}
          <div className="col-lg-4">
            <div className="case-header heading13">
              {subTitle && (
                <h5 data-aos="fade-up" data-aos-duration="1000">
                  {parser(subTitle)}
                </h5>
              )}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
              {btnText && (
                <div
                  className="btn-area1"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <ButtonStyle15 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="case-study-sliderarea">
              <CaseStudySliderStyle1 cases={cases} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStyle8;
