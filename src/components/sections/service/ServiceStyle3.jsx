import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import perser from "html-react-parser";
import ButtonStyle3 from "../../button/ButtonStyle3";

const ServiceStyle3 = ({ data }) => {
  const { subTitle, title, services, btnText, btnUrl } = data;

  return (
    <div className="service1-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-header-area text-center heading4">
              {subTitle && <h5>{perser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{perser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          {services?.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={service.id}
              data-aos="zoom-in"
              data-aos-duration={800 + (index % 3) * 200}
            >
              <div className="service2-boxarea">
                <div className="icons">
                  <img src={service.iconUrl} alt={service.title} />
                </div>
                <div className="space32"></div>
                <div className="content">
                  <Link to={service.linkUrl}>{service.title}</Link>
                  <p>{service.desc}</p>
                  <Link to={service.linkUrl} className="readmore">
                    Learn More{" "}
                    <i>
                      <Icon icon="fa-solid:arrow-right" />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="space30"></div>
            {btnText && (
              <div
                className="btn-area1 text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <ButtonStyle3 btnText={btnText} btnUrl={btnUrl} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStyle3;
