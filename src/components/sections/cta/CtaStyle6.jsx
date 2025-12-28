import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle13 from "../../button/ButtonStyle13";

const CtaStyle6 = ({ data }) => {
  const { subTitle, title, desc, btnText, btnUrl, imgUrl } = data;

  return (
    <div className="boost-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="boost-header heading12">
              {subTitle && (
                <h5 data-aos="fade-right" data-aos-duration="800">
                  {parser(subTitle)}
                </h5>
              )}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
              {desc && (
                <p data-aos="fade-right" data-aos-duration="1000">
                  {parser(desc)}
                </p>
              )}
              <div className="space32"></div>
              {btnText && (
                <div
                  className="bnt-area1"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <ButtonStyle13 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-7">
            {imgUrl && (
              <div
                className="images image-anime"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img src={imgUrl} alt={imgUrl} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaStyle6;
