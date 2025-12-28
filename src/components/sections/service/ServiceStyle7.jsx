import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { Icon } from "@iconify/react";

const ServiceStyle7 = ({ data }) => {
  const { subTitle, title, services } = data;

  return (
    <div className="service7-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-header text-center heading12">
              {subTitle && <h5>{parser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        {services?.map((service, index) => (
          <div
            key={index}
            className="all-service-box"
            data-aos="fade-up"
            data-aos-duration={800 + index * 100}
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="service-main-boxarea">
                  <div className="service-images">
                    <div className="img1">
                      <img src={service.imgUrl} alt={service.title} />
                    </div>
                    <div className="text">
                      <Link to={service.linkUrl}>{service.title}</Link>
                    </div>
                  </div>
                  <div className={`pera box${index + 1}`}>
                    <p>{parser(service.desc)}</p>
                  </div>
                  <div className="arrow">
                    <Link to={service.linkUrl}>
                      <i>
                        <Icon icon="fa7-solid:arrow-right" />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStyle7;
