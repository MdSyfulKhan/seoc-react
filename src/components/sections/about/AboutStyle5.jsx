import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle11 from "../../button/ButtonStyle11";
import { useReveal } from "../../../hooks/useReveal";
import { useRef } from "react";

const AboutStyle5 = ({ data }) => {
  const {
    subTitle,
    title,
    aboutTitle,
    aboutDesc,
    btnText,
    btnUrl,
    imgUrl1,
    imgUrl2,
    skills,
  } = data;

  // refs for reveal elements
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  // apply reveal hook
  useReveal(imgRef1, { xPercent: -100, duration: 1.5 });
  useReveal(imgRef2, { xPercent: -100, duration: 1.5 });

  return (
    <div className="about5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="about5-header text-center heading10">
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

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-all-images-area">
              <img
                src="assets/img/elements/elements12.png"
                alt=""
                className="elements12 keyframe5"
              />
              <img
                src="assets/img/elements/elements13.png"
                alt=""
                className="elements13 keyframe5"
              />
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="img1 image-anime reveal" ref={imgRef1}>
                    <img src={imgUrl1} alt="About" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="img2 image-anime reveal" ref={imgRef2}>
                    <div className="space100"></div>
                    <img src={imgUrl2} alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about5-content-area heading10">
              {aboutTitle && (
                <h3 className="text-anime-style-3">{parser(aboutTitle)}</h3>
              )}

              {aboutDesc && (
                <p data-aos="fade-left" data-aos-duration="1000">
                  {parser(aboutDesc)}
                </p>
              )}

              <div className="space32"></div>

              {skills && skills.length > 0 && (
                <div className="about5-boxarea">
                  <div className="row">
                    {skills.map((skill, index) => (
                      <div className="col-lg-12" key={skill.id}>
                        <div
                          className="about5-boxes"
                          data-aos="fade-left"
                          data-aos-duration={1200 + index * 100}
                        >
                          <h3>{skill.title}</h3>
                          <div
                            className={`about5-bar${index === 1 ? "2" : ""}`}
                          >
                            <span
                              className={`about5-per${index === 1 ? "2" : ""}`}
                              style={{ width: `${skill.percentage}%` }}
                            >
                              <span className="per">{skill.percentage}%</span>
                            </span>
                          </div>
                        </div>
                        {index === 0 && <div className="space40"></div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space32"></div>

              {btnText && (
                <div
                  className="btn-area1"
                  data-aos="fade-left"
                  data-aos-duration="1400"
                >
                  <ButtonStyle11 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutStyle5;
