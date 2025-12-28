import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle15 from "../../button/ButtonStyle15";
import ButtonStyle15Type2 from "../../button/ButtonStyle15Type2";

const CtaStyle7 = ({ data }) => {
  const { title, desc, btnText, btnUrl, btnText2, btnUrl2, imgUrl, imgUrl2 } =
    data;

  return (
    <div className="cta8-section-area sp1">
      <img src={imgUrl} alt="" className="cta-bg2 aniamtion-key-1" />
      <img src={imgUrl2} alt="" className="cta-bg1 aniamtion-key-2" />

      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="cta-header-area text-center heading2">
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}

              {desc && (
                <p data-aos="fade-up" data-aos-duration="1000">
                  {parser(desc)}
                </p>
              )}

              <div
                className="btn-area text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <ButtonStyle15 btnText={btnText} btnUrl={btnUrl} />
                <ButtonStyle15Type2 btnText={btnText2} btnUrl={btnUrl2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaStyle7;
