import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { Icon } from "@iconify/react";

const CaseStyle3 = ({ data }) => {
  const { subTitle, title, cases } = data;

  return (
    <div className="case5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="case5-header text-center heading10">
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
          <div className="col-lg-12">
            {cases?.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="case-widget-area"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-duration={1000 + index * 200}
              >
                <div className="content-area">
                  <span>{(index + 1).toString().padStart(2, "0")}</span>
                  <div className="main-content">
                    <Link to={caseStudy.linkUrl}>{caseStudy.title}</Link>
                    <p>{parser(caseStudy.desc)}</p>
                  </div>
                </div>
                <div className={`hidden-img img${index + 1}`}>
                  <Link to={caseStudy.linkUrl}>
                    <img src={caseStudy.imgUrl} alt={caseStudy.title} />
                  </Link>
                </div>
                <div className="arrow-btn">
                  <Link to={caseStudy.linkUrl}>
                    <i>
                      <Icon
                        icon="fa7-solid:arrow-right"
                        height={20}
                        width={20}
                      />
                    </i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStyle3;
