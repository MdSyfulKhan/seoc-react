import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle15 from "../../button/ButtonStyle15";
import FunfactStyle1 from "../../utils/FunfactStyle1";

const AboutStyle8 = ({ data }) => {
  const { subTitle, title, desc, btnText, btnUrl, imgUrl, stats } = data;

  return (
    <div className="about8-section-area">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Stats */}
          <div className="col-lg-2">
            <div className="counter-area">
              <div className="row">
                {stats?.map((stat, index) => (
                  <div
                    key={stat.id}
                    className="col-lg-12 col-md-6 col-6"
                    data-aos="fade-left"
                    data-aos-duration={800 + index * 100}
                  >
                    <div
                      className={`counter-box ${
                        index === stats.length - 1 ? "after" : ""
                      }`}
                    >
                      <FunfactStyle1
                        value={stat?.value}
                        suffix={stat?.suffix}
                      />
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            {imgUrl && (
              <div
                className="images"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img src={imgUrl} alt={imgUrl} />
              </div>
            )}
          </div>

          <div className="col-lg-6">
            <div className="about8-header heading13">
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
                  className="btn-area1"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <ButtonStyle15 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStyle8;
