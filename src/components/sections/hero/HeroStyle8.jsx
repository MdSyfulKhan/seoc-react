import perser from "html-react-parser";
import ButtonStyle15 from "../../button/ButtonStyle15";
import { Icon } from "@iconify/react";
import { useFormSubmit } from "../../../hooks/useFormSubmit";
import { useRef } from "react";
import { useReveal } from "../../../hooks/useReveal";

const HeroStyle8 = ({ data }) => {
  const { title, desc, imgUrl, bgImgUrl, btnText } = data;
  const imgRef = useRef(null);
  // Scroll animation
  useReveal(imgRef, { y: 100, duration: 1.5, ease: "power2.out" });

  const handleOnSubmit = useFormSubmit();

  return (
    <div
      className="hero8-section-area"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <img
        src="assets/img/elements/elements16.png"
        alt=""
        className="elements16 keyframe5"
      />
      <img
        src="assets/img/elements/elements17.png"
        alt=""
        className="elements17 aniamtion-key-2"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="hero8-header text-center heading1">
              {title && <h1 className="text-anime-style-3">{perser(title)}</h1>}
              {desc && <p>{perser(desc)}</p>}
              <div className="space32" />
              <form onSubmit={handleOnSubmit}>
                <span className="global cs_lh_1">
                  <Icon icon="fa7-solid:globe" width="16" />
                </span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Website URL"
                />
                {btnText && (
                  <div className="btn-area1">
                    <ButtonStyle15 btnText={btnText} />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/img/elements/star8.png"
        alt=""
        className="star8 keyframe6"
      />
      <img
        src="assets/img/elements/star8.png"
        alt=""
        className="star9 keyframe6"
      />
      <div className="space80" />
      {imgUrl && (
        <div className="bottom-img d-inline-block reveal" ref={imgRef}>
          <img src={imgUrl} alt="" />
        </div>
      )}
    </div>
  );
};

export default HeroStyle8;
