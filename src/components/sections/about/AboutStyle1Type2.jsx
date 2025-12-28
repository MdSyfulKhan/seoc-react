import { useRef } from "react";
import perser from "html-react-parser";
import ButtonCircleArrowStyle1 from "../../button/CircleArrowBtnStyle";
import { useReveal } from "../../../hooks/useReveal";
import ButtonStyle16 from "../../button/ButtonStyle16";

const AboutStyle1Type2 = ({ data }) => {
  const { title, desc, imgUrl1, imgUrl2, btnText, btnUrl } = data;

  // refs for reveal elements
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  // apply reveal hook
  useReveal(imgRef1, { xPercent: -100, duration: 1.5 });
  useReveal(imgRef2, { xPercent: -100, duration: 1.5 });

  return (
    <div className="about1-section-area sp1 bg3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="about-images">
              <figure className="image-anime reveal" ref={imgRef1}>
                {imgUrl1 && <img src={imgUrl1} alt="" />}
              </figure>
              <img
                src="assets/img/elements/star1.png"
                alt=""
                className="star1 keyframe5"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about-content-area heading2">
              <ButtonCircleArrowStyle1
                data={{
                  btnUrl: btnUrl,
                  btnImg: "assets/img/elements/elements4.png",
                  btnIcon: "assets/img/icons/arrow.svg",
                }}
              />
              {title && <h2 className="text-anime-style-3">{perser(title)}</h2>}
              {desc && (
                <p data-aos="fade-left" data-aos-duration={1000}>
                  {perser(desc)}
                </p>
              )}
              {btnText && (
                <div
                  className="btn-area"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  <ButtonStyle16 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-3">
            <div className="about-auhtor-images">
              <img
                src="assets/img/elements/elements5.png"
                alt=""
                className="elements5 keyframe5"
              />
              <figure className="image-anime reveal" ref={imgRef2}>
                {imgUrl2 && <img src={imgUrl2} alt="" />}
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="space100 d-lg-block d-none"></div>
    </div>
  );
};

export default AboutStyle1Type2;
