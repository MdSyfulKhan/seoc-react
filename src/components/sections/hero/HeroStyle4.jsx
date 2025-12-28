import perser from "html-react-parser";
import { Icon } from "@iconify/react";
import { useFormSubmit } from "../../../hooks/useFormSubmit";
import AppButton from "../../button/AppButton";

const HeroStyle4 = ({ data, btnClass }) => {
  const { title, subTitle, desc, btnText } = data;
  const handleOnSubmit = useFormSubmit();

  return (
    <div className="hero4-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="hero4-header text-center heading7">
              <img
                src="assets/img/elements/plus.png"
                alt=""
                className="plus keyframe5"
              />
              {subTitle && (
                <h5 data-aos="fade-up" data-aos-duration={800}>
                  <img src="assets/img/icons/logo-icons3.svg" alt="" />
                  {perser(subTitle)}
                </h5>
              )}
              {title && <h1 className="text-anime-style-1">{perser(title)}</h1>}
              <div className="space20" />
              {desc && (
                <p data-aos="fade-up" data-aos-duration={1000}>
                  {perser(desc)}
                </p>
              )}
            </div>
          </div>
          <div className="space60" />
          <div className="col-lg-12">
            <div className="header-images-area">
              <div className="bg-2">
                <img src="assets/img/bg/bg2.png" alt="" />
              </div>
              <div className="form-area">
                <form onSubmit={handleOnSubmit}>
                  <div className="input-area">
                    <span className="cs_lh_1">
                      <i>
                        <Icon icon="fa7-solid:link" />
                      </i>
                    </span>
                    <input type="text" placeholder="https:// yoursite.com" />
                  </div>
                  <div className="input-area">
                    <span className="cs_lh_1">
                      <i>
                        <Icon icon="fa7-solid:envelope" />
                      </i>
                    </span>
                    <input type="email" placeholder="youremail@domain.com" />
                  </div>
                  {btnText && (
                    <div className="btn-area">
                      <AppButton
                        btnClass={btnClass}
                        btnText={btnText}
                        btnUrl={"/contact"}
                      />
                    </div>
                  )}
                </form>
              </div>
              <div className="img2">
                <img
                  src="assets/img/all-images/header-img6.png"
                  alt=""
                  className="header-img6 aniamtion-key-2"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                />
                <img
                  src="assets/img/elements/elements10.png"
                  alt=""
                  className="elements10"
                />
              </div>
              <div className="img4 others">
                <img
                  src="assets/img/all-images/header-img5.png"
                  alt=""
                  className="header-img6 aniamtion-key-2"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                />
                <img
                  src="assets/img/icons/sound-icons2.svg"
                  alt=""
                  className="elements10 aniamtion-key-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyle4;
