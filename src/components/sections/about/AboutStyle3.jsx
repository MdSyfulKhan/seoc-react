import perser from "html-react-parser";
import { useReveal } from "../../../hooks/useReveal";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const AboutStyle3 = ({ data }) => {
  const { title, subTitle, desc, features, author, imgUrl } = data;

  // refs for reveal elements
  const imgRef = useRef(null);

  // apply reveal hook
  useReveal(imgRef, { xPercent: -100, duration: 1.5 });

  return (
    <div className="about3-section-area sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-images-area reveal" ref={imgRef}>
              {imgUrl && <img src={imgUrl} alt="" />}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-header-area heading6">
              {subTitle && <h5>{perser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{perser(title)}</h2>}
              {desc && (
                <p data-aos="fade-left" data-aos-duration="1000">
                  {perser(desc)}
                </p>
              )}

              <h3 data-aos="fade-left" data-aos-duration="1100">
                Our Best Service Benefits :
              </h3>

              {features && (
                <div
                  className="list-area"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <ul>
                    {features.slice(0, 2).map((feature, index) => (
                      <li key={index}>
                        <i>
                          <Icon
                            icon="fa7-solid:circle-check"
                            height={20}
                            width={20}
                          />
                        </i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {features.slice(2, 4).map((feature, index) => (
                      <li key={index}>
                        <i>
                          <Icon
                            icon="fa7-solid:circle-check"
                            height={20}
                            width={20}
                          />
                        </i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {author && (
                <div
                  className="images-area"
                  data-aos="fade-left"
                  data-aos-duration="1400"
                >
                  <div className="img">
                    <img src={author.imgUrl} alt="" />
                  </div>
                  <div className="content-area">
                    <Link to={author.profileUrl}>{author.name}</Link>
                    <p>{author.position}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStyle3;
