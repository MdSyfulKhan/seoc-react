import perser from "html-react-parser";
import { Link } from "react-router-dom";
import ButtonStyle1 from "../../button/ButtonStyle1";
import { Icon } from "@iconify/react";

const ServiceStyle2 = ({ data }) => {
  const { title, subTitle, mainContent, cards } = data;

  return (
    <div className="service2-section-area sp6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="service2-header heading2 text-center">
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
          <div className="col-lg-7">
            <div
              className="images-content-area"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="img1">
                <img src={mainContent.imgUrl} alt="" />
              </div>

              <div className="content-area">
                {mainContent.heading && <h5>{mainContent.heading}</h5>}
                {mainContent.linkText && (
                  <Link
                    to={mainContent.linkUrl}
                    className="text text-anime-style-3"
                  >
                    {mainContent.linkText}
                  </Link>
                )}
                {mainContent.desc && (
                  <p data-aos="fade-up" data-aos-duration="1000">
                    {mainContent.desc}
                  </p>
                )}
                <div
                  className="btn-area"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  {mainContent.btnText && (
                    <ButtonStyle1
                      btnText={mainContent.btnText}
                      btnUrl={mainContent.linkUrl}
                    />
                  )}
                </div>
              </div>

              {mainContent.linkUrl && (
                <div className="arrow-area">
                  <Link to={mainContent.linkUrl}>
                    <Icon icon="fa7-solid:arrow-right" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="service-all-boxes">
              <div className="row">
                {cards.map((card, index) => (
                  <div className="col-lg-12 col-md-6" key={index}>
                    <div
                      className={`${
                        index === 0
                          ? "service2-auhtor-boxarea"
                          : index === 1
                          ? "service2-auhtor2-boxarea"
                          : "service2-auhtor-boxarea" // 3rd, 4th ... same as first
                      }`}
                      data-aos="zoom-out"
                      data-aos-duration={card.duration}
                    >
                      <div className="arrow">
                        <Link to={card.linkUrl}>
                          <Icon icon="fa7-solid:arrow-right" />
                        </Link>
                      </div>
                      <div className="content-area">
                        <h5>{card.heading}</h5>
                        <Link to={card.linkUrl}>{card.linkText}</Link>
                        <p>{card.desc}</p>
                      </div>
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

export default ServiceStyle2;
