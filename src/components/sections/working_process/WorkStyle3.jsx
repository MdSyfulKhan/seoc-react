import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { useReveal } from "../../../hooks/useReveal";

const WorkStyle3 = ({ data }) => {
  const { subTitle, title, sections } = data;
  const [activeTab, setActiveTab] = useState(0);

  // Create refs for each section's image
  const imgRefs = sections?.map(() => useRef(null)) || [];

  // Apply reveal animation to each image ref
  imgRefs.forEach((ref) => {
    useReveal(ref, { xPercent: -100, duration: 1.5 });
  });

  return (
    <div className="work3-section-area sp1">
      <img src="assets/img/bg/work-bg1.png" alt="" className="work-bg1" />
      <img src="assets/img/bg/work-bg2.png" alt="" className="work-bg2" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="work-header-area text-center heading6">
              {subTitle && <h5>{parser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {sections?.map((section, index) => (
              <div key={section.id}>
                <div
                  className={`choose-section-area ${
                    index > 0 ? "choose2" : ""
                  }`}
                  data-aos="zoom-out"
                  data-aos-duration={1000 + index * 200}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="choose-list-area">
                        <h3>{section.title}</h3>
                        <ul className="choose-auhtor">
                          {section.services?.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <a
                                href="javascript:void(0);"
                                className={
                                  serviceIndex === activeTab ? "active" : ""
                                }
                                onClick={() => setActiveTab(serviceIndex)}
                              >
                                {service}
                              </a>
                            </li>
                          ))}
                        </ul>
                        <p>{section.desc}</p>
                        <div className="btn-area">
                          <Link to={section.btnUrl} className="header-btn5">
                            {section.btnText}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                      <div className="images">
                        <img
                          src="assets/img/elements/elements8.png"
                          alt=""
                          className="elements6 aniamtion-key-2"
                        />
                        <img
                          src="assets/img/elements/star5.png"
                          alt=""
                          className="star4 keyframe5"
                        />
                        <div className="img1" ref={imgRefs[index]}>
                          <img src={section.imgUrl} alt={section.title} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index < sections.length - 1 && <div className="space50"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStyle3;
