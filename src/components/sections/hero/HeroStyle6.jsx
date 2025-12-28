import parser from "html-react-parser";
import AppButton from "../../button/AppButton";
import Rating from "../../utils/Rating";

const HeroStyle6 = ({ data, btnClass }) => {
  const {
    subTitle,
    title,
    desc,
    imgUrl,
    bgImgUrl,
    btnText,
    btnUrl,
    btnText2,
    btnUrl2,
    author,
  } = data;

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
                <h5 data-aos="fade-up" data-aos-duration="800">
                  <img src="assets/img/icons/logo-icons3.svg" alt="" />
                  {parser(subTitle)}
                </h5>
              )}
              {title && <h1 className="text-anime-style-1">{parser(title)}</h1>}
              <div className="space20"></div>
              {desc && (
                <p data-aos="fade-up" data-aos-duration="1000">
                  {parser(desc)}
                </p>
              )}
              {btnText && btnText2 && (
                <div
                  className="btn-area1"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <AppButton
                    btnClass={btnClass}
                    btnText={btnText}
                    btnUrl={btnUrl}
                  />
                  <AppButton
                    btnClass="header-btn7"
                    btnText={btnText2}
                    btnUrl={btnUrl2}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space60"></div>

          <div className="col-lg-12">
            <div className="header-images-area">
              <div className="bg1">
                <img src={bgImgUrl} alt="Background" />
              </div>
              <div className="img1" data-aos="zoom-in" data-aos-duration="1200">
                <img
                  src={imgUrl}
                  alt=""
                  className="header-img7"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
              </div>
              <div className="img2">
                <img
                  src="assets/img/all-images/header-img6.png"
                  alt=""
                  className="header-img6 aniamtion-key-2"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                />
                <img
                  src="assets/img/elements/elements10.png"
                  alt=""
                  className="elements10"
                />
              </div>
              <div className="img3">
                <img
                  src="assets/img/all-images/header-img4.png"
                  alt=""
                  className="header-img6 aniamtion-key-1"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                />
                <img
                  src="assets/img/elements/elements9.png"
                  alt=""
                  className="elements10"
                />
              </div>
              {/* Left Side Image */}
              <div className="img4">
                <img
                  src="assets/img/all-images/header-img5.png"
                  alt=""
                  className="header-img6 aniamtion-key-2"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
                <img
                  src="assets/img/icons/sound-icons2.svg"
                  alt=""
                  className="elements10 aniamtion-key-5"
                />
              </div>
              {/* author Content */}
              {author && (
                <div
                  className="content"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <Rating rating={author.rating} />
                  <p>{parser(author.desc)}</p>
                  <span>
                    <img src={author.icon} alt="" />
                    {author.author}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyle6;
