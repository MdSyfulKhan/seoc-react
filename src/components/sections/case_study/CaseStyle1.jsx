import perser from "html-react-parser";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaseStyle1 = ({ data }) => {
  const { title, subTitle, cases } = data;
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="case1-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="case-header-area heading2 text-center">
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
          <div
            className="col-lg-12"
            data-aos="zoom-out"
            data-aos-duration="1200"
          >
            <div className="cs_case_study_1_list">
              {cases?.slice(0, 7).map((caseItem, index) => (
                <div
                  className={`cs_case_study cs_style_1 cs_hover_active ${
                    isActive == caseItem.id ? "active" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-duration={caseItem}
                  key={index}
                  onMouseEnter={() => setIsActive(caseItem.id)}
                  onMouseLeave={() => setIsActive(caseItem.id)}
                >
                  <Link
                    to={caseItem.linkUrl}
                    className={`cs_case_study_thumb cs_bg_filed`}
                    style={{ backgroundImage: `url(${caseItem.imgUrl})` }}
                  ></Link>

                  <div className="content-area1">
                    <Link to={caseItem.linkUrl}>{caseItem.title}</Link>
                  </div>
                  <div className="content-area">
                    <Link to={caseItem.linkUrl}>{caseItem.title}</Link>
                    <p>{caseItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStyle1;
