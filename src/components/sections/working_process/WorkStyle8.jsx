import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { useRef } from "react";
import { useReveal } from "../../../hooks/useReveal";

const WorkStyle8 = ({ data }) => {
  const { subTitle, title, image, workSteps } = data;

  const imgUrlRef = useRef(null);
  // Scroll animation
  useReveal(imgUrlRef, { y: 100, duration: 1.5, ease: "power2.out" });

  return (
    <div className="work8-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="work-header text-center heading13">
              {subTitle && <h5>{parser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            {image && (
              <div className="img1 reveal" ref={imgUrlRef}>
                <img src={image.imgUrl} alt={image.alt || "Work Process"} />
              </div>
            )}
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-5">
            <div className="head">
              <h4>SEOC Work Process</h4>
            </div>

            {workSteps?.map((step, index) => {
              const stepNumber = (index + 1).toString().padStart(2, "0");
              const duration = 800 + index * 200;
              const hasAuthorClass = index === 1 ? "auhtor" : "";

              return (
                <div
                  key={step.id}
                  className={`works-boxarea ${hasAuthorClass}`}
                  data-aos="fade-left"
                  data-aos-duration={duration}
                >
                  <div className="list">
                    <h3>{stepNumber}</h3>
                  </div>
                  <div className="content">
                    <Link to={step.linkUrl}>{step.title}</Link>
                    <p>{parser(step.desc)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStyle8;
