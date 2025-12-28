import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle12 from "../../button/ButtonStyle12";
import { Icon } from "@iconify/react";

const ServiceStyle5Type2 = ({ data }) => {
  const { subTitle, title, services, btnText, btnUrl } = data;

  return (
    <div className="service4-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="service4-header heading8 text-center">
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
          <div className="col-lg-12">
            <div className="service-auhtor-boxes-area">
              <div className="bg-images">
                <div className="img1">
                  <img
                    src="assets/img/bg/service-bg1.png"
                    alt=""
                    className="pulse-border"
                  />
                </div>
                <div
                  className="icons"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <img src="assets/img/icons/logo-icons4.svg" alt="" />
                </div>
              </div>

              <div className="row service-layout-5">
                {services?.slice(0, 4).map((service, index) => (
                  <div
                    key={service.id}
                    className="col-lg-5 col-md-6"
                    data-aos="zoom-out"
                    data-aos-duration={1000 + index * 200}
                  >
                    <div className="service-box-area">
                      <div className="icons-area">
                        <div className="icons">
                          <img src={service.iconUrl} alt={service.title} />
                        </div>
                        <div className="number">
                          <h4>{service.id}</h4>
                        </div>
                      </div>
                      <div className="content-area">
                        <Link to={service.linkUrl}>{service.title}</Link>
                        <p>{service.desc}</p>
                        <Link to={service.linkUrl} className="readmore">
                          Learn More{" "}
                          <i>
                            <Icon icon="fa7-solid:arrow-right" />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {btnText && (
                  <div className="col-lg-12">
                    <div className="space50 d-md-block d-none"></div>
                    <div
                      className="btn-area1 text-center"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <ButtonStyle12 btnText={btnText} btnUrl={btnUrl} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStyle5Type2;
