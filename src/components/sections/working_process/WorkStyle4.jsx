import { Link } from "react-router-dom";
import perser from "html-react-parser";
import { useReveal } from "../../../hooks/useReveal";
import { useRef } from "react";

const WorkStyle4 = ({ data }) => {
  const { subTitle, title, imgUrl, processes } = data;

  // refs for reveal elements
  const imgRef = useRef(null);

  // apply reveal hook
  useReveal(imgRef, { xPercent: -100, duration: 1.5 });

  return (
    <div className="work4-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="work2-header text-center heading6">
              {subTitle && <h5>{perser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{perser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="work-images reveal" ref={imgRef}>
              {imgUrl && <img src={imgUrl} alt="" />}
            </div>
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-5">
            <div className="all-boxes-area">
              {processes?.map((process, index) => (
                <div key={process.id}>
                  <div
                    className={`work-process-area ${
                      index === 1 ? "work2" : ""
                    }`}
                    data-aos="fade-left"
                    data-aos-duration={1200 + index * 200}
                  >
                    <div className="icons">
                      <img src={process.iconUrl} alt={process.title} />
                    </div>
                    <div className="content-area">
                      <Link to={process.linkUrl}>{process.title}</Link>
                      <p>{perser(process.desc)}</p>
                    </div>
                  </div>
                  {index < processes.length - 1 && (
                    <div className="space30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStyle4;
