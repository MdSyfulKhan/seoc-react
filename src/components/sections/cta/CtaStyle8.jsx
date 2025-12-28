import parser from "html-react-parser";
import ButtonStyle16 from "../../button/ButtonStyle16";
import { useReveal } from "../../../hooks/useReveal";
import { useRef } from "react";

const CtaStyle8 = ({ data }) => {
  const { title, desc, btnText, btnUrl, imgUrl } = data;
  const imgRef = useRef(null);
  // apply reveal hook
  useReveal(imgRef, { xPercent: -100, duration: 1 });
  return (
    <div className="cta9-section-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="images reveal image-anime" ref={imgRef}>
              <img src={imgUrl} alt="CTA Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cta-content-area">
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
              <div className="space16"></div>
              {desc && <p>{parser(desc)}</p>}
              <div className="space32"></div>
              {btnText && (
                <div className="btn-area1">
                  <ButtonStyle16 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaStyle8;
