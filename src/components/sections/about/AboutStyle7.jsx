import parser from "html-react-parser";
import ButtonStyle13 from "../../button/ButtonStyle13";
import { useOdometer } from "../../../hooks/useOdometer";
import FunfactStyle1 from "../../utils/FunfactStyle1";
import { Icon } from "@iconify/react";

const AboutStyle7 = ({ data }) => {
  const { subTitle, title, desc, features, btnText, btnUrl, images, stats } =
    data;

  return (
    <div className="about7-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="about-header text-center heading12">
              {subTitle && <h5>{parser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="about-pera-list">
              {desc && (
                <p data-aos="fade-right" data-aos-duration="800">
                  {parser(desc)}
                </p>
              )}
              <div className="space8"></div>

              {features && features.length > 0 && (
                <div data-aos="fade-right" data-aos-duration="1000">
                  <ul>
                    {features.map((feature, index) => (
                      <li key={feature.id || index}>
                        <i>
                          <Icon
                            icon="fa7-solid:circle-check"
                            height={20}
                            width={20}
                          />
                        </i>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space32"></div>

              {btnText && (
                <div
                  className="btn-area1"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <ButtonStyle13 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-images">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="img1">
                    <img src={images?.img1} alt="About" />
                    <div className="counter-area">
                      <FunfactStyle1
                        value={stats?.customerSatisfied}
                        suffix={stats?.suffix}
                      />
                      <p>Customer Satisfied</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="space80 d-lg-block d-none"></div>
                  <div className="space30 d-lg-none d-block"></div>
                  <div className="img2">
                    <img src={images?.img2} alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="counter-boxarea">
              <div className="row">
                {stats?.counters?.map((counter, index) => (
                  <div
                    className="col-lg-12 col-md-6 col-6"
                    key={index}
                    data-aos="zoom-out"
                    data-aos-duration={800 + index * 100}
                  >
                    <div className="counter-box">
                      <FunfactStyle1
                        value={counter.value}
                        suffix={counter.suffix}
                      />
                      <p>{counter.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStyle7;
