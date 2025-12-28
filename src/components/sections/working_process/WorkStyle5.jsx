import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle12 from "../../button/ButtonStyle12";
import { useRef } from "react";
import { useReveal } from "../../../hooks/useReveal";
import { Icon } from "@iconify/react";
import AppButton from "../../button/AppButton";

const WorkStyle5 = ({ data, btnClass }) => {
  const imgRef = useRef(null);
  // apply reveal hook
  useReveal(imgRef, { xPercent: -100, duration: 1.5 });

  const { subTitle, title, desc, btnText, btnUrl, imgUrl, processSteps } = data;

  return (
    <div className="works4-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="works4-header heading8">
              {subTitle && (
                <h5 data-aos="fade-up" data-aos-duration="800">
                  <img src="assets/img/icons/logo-icons3.svg" alt="" />
                  {parser(subTitle)}
                </h5>
              )}
              {title && (
                <h2 className="text-anime-style-1">
                  {parser(title)}
                  <span>
                    <img src="assets/img/elements/line-img1.png" alt="" />
                  </span>
                </h2>
              )}
              <div className="space10 d-lg-block d-none"></div>
              {desc && (
                <p data-aos="fade-up" data-aos-duration="1000">
                  {parser(desc)}
                </p>
              )}
              <div className="space32"></div>
              {btnText && (
                <div
                  className="btn-area1"
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

          <div className="col-lg-1"></div>

          <div className="col-lg-7">
            {imgUrl && (
              <div className="case-images">
                <figure className="image-anime reveal" ref={imgRef}>
                  <img src={imgUrl} alt="Work Process" />
                </figure>
              </div>
            )}
          </div>

          <div className="space50"></div>
        </div>

        <div className="row">
          {processSteps?.map((step, index) => (
            <div
              key={step.id}
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={800 + index * 200}
            >
              <div className="works-author-boxarea">
                <div className="icons">
                  <img src={step.iconUrl} alt={step.title} />
                </div>
                <div className="space24"></div>
                <div className="content-area">
                  <Link to={step.url}>{step.title}</Link>
                  <p>{parser(step.desc)}</p>
                  <Link to={step.url} className="readmore">
                    Learn More{" "}
                    <i>
                      <Icon icon="fa7-solid:arrow-right" />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WorkStyle5;
