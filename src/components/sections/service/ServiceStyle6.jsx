import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle11 from "../../button/ButtonStyle11";

const ServiceStyle6 = ({ data }) => {
  const { subTitle, title, services, btnText, btnUrl } = data;

  return (
    <div className="service5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-header text-center heading10">
              {subTitle && (
                <h5>
                  <img src="assets/img/icons/logo-icons6.svg" alt="" />
                  {parser(subTitle)}
                </h5>
              )}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          {services?.map((service, index) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={800 + index * 200}
            >
              <div className={`service-author-boxarea box${service.id}`}>
                <h4>{`0` + service.id}</h4>
                <div className="space40"></div>
                <div className="img1 image-anime">
                  <img src={service.imgUrl} alt={service.title} />
                </div>
                <div className="space40"></div>
                <div className="content-area">
                  <Link to={service.linkUrl}>{service.title}</Link>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {btnText && (
            <div className="col-lg-12">
              <div className="space30"></div>
              <div
                className="btn-area1 text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <ButtonStyle11 btnText={btnText} btnUrl={btnUrl} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceStyle6;
