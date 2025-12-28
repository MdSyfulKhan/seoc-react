import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle15 from "../../button/ButtonStyle15";

const ServiceStyle8 = ({ data }) => {
  const { subTitle, title, services, btnText, btnUrl } = data;

  return (
    <div className="service8-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="service-header-area heading13 text-center">
              {subTitle && <h5>{parser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="service-all-boxes-area">
              {services?.map((service, index) => (
                <div
                  className={`service-boxarea box${index + 1}`}
                  data-aos="zoom-in"
                  data-aos-duration={800 + index * 200}
                  key={index}
                >
                  <Link to={service.linkUrl}>{service.title}</Link>
                  <div className={index === 2 ? "space66" : "space40"}></div>
                  <img src={service.iconUrl} alt={service.title} />
                  <div className="space40"></div>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="space40"></div>
            {btnText && (
              <div className="btn-area1 text-center">
                <ButtonStyle15 btnText={btnText} btnUrl={btnUrl} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStyle8;
