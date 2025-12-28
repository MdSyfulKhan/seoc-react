import perser from "html-react-parser";
import { Link } from "react-router-dom";

const ServiceStyle1 = ({ data }) => {
  const { title, subTitle, services } = data;
  return (
    <div className="service1-section-area sp9">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="service-header-area heading2 text-center">
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
                <p data-aos="fade-up" data-aos-duration={1000}>
                  {perser(subTitle)}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="service-all-boxes-area">
              {services?.slice(0, 4).map((service, index) => (
                <div
                  className={`service-boxarea box${service.id}`}
                  data-aos="zoom-in"
                  data-aos-duration={800 + index * 200}
                  key={index}
                >
                  <Link to={service.btnUrl}>{service.title}</Link>
                  <div className="space40" />
                  <img src={service.imgUrl} alt="" />
                  <div className="space40" />
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStyle1;
