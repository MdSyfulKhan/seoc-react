import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle12 from "../../button/ButtonStyle12";
import { useState } from "react";
import AppButton from "../../button/AppButton";

const CaseStyle2 = ({ data, btnClass }) => {
  const { subTitle, title, cases, btnText, btnUrl } = data;
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="case4-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="case4-header heading8 text-center">
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
          <div
            className="col-lg-12"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="cs_case_study_1_list">
              {cases?.map((caseItem, index) => (
                <div
                  key={caseItem.id}
                  className={`cs_case_study cs_style_1 cs_hover_active ${
                    isActive == caseItem.id ? "active" : ""
                  }`}
                  onMouseEnter={() => setIsActive(caseItem.id)}
                  onMouseLeave={() => setIsActive(caseItem.id)}
                >
                  <Link
                    to={caseItem.linkUrl}
                    className={`cs_case_study_thumb ${
                      index === 1
                        ? "cs_case_study_thumb2"
                        : index === 2
                        ? "cs_case_study_thumb3"
                        : index === 3
                        ? "cs_case_study_thumb4"
                        : ""
                    } cs_bg_filed`}
                    style={{ backgroundImage: `url(${caseItem.imgUrl})` }}
                  ></Link>
                  <div className="content-area1">
                    <Link to={caseItem.linkUrl}>{caseItem.title}</Link>
                  </div>
                  <div className="content-area">
                    <img src={caseItem.iconUrl} alt={caseItem.title} />
                    <div className="space16"></div>
                    <Link to={caseItem.linkUrl}>{caseItem.title}</Link>
                    <p>{caseItem.category}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space60 d-lg-block d-none"></div>
            <div className="space34 d-lg-none d-block"></div>

            {btnText && (
              <div
                className="btn-area1 text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <AppButton
                  btnText={btnText}
                  btnUrl={btnUrl}
                  btnClass={btnClass}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStyle2;
