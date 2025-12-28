import perser from "html-react-parser";
import ButtonStyle5 from "../../button/ButtonStyle5";
import ButtonStyle4Type2 from "../../button/ButtonStyle4Type2";

const HeroStyle3 = ({ data }) => {
  const {
    title,
    subTitle,
    desc,
    imgUrl,
    btnText1,
    btnUrl1,
    btnText2,
    btnUrl2,
  } = data;
  return (
    <div className="hero3-section-area">
      <img
        src="assets/img/elements/star2.png"
        alt=""
        className="star3 keyframe5"
      />
      <img
        src="assets/img/elements/star2.png"
        alt=""
        className="star4 keyframe5"
      />
      <img src="assets/img/bg/header-bg2.png" alt="" className="header-bg2" />
      <img src="assets/img/bg/header-bg3.png" alt="" className="header-bg3" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="header-main-area heading5">
              {subTitle && (
                <h5>
                  <img src="assets/img/icons/logo-icons2.svg" alt="" />
                  {perser(subTitle)}
                </h5>
              )}
              {title && <h1 className="text-anime-style-3">{perser(title)}</h1>}
              {desc && (
                <p data-aos="fade-left" data-aos-duretion={1000}>
                  {perser(desc)}
                </p>
              )}
              {(btnText1 || btnText2) && (
                <div
                  className="btn-area"
                  data-aos="fade-left"
                  data-aos-duretion={1200}
                >
                  <ButtonStyle4Type2 btnText={btnText1} btnUrl={btnUrl1} />
                  <ButtonStyle5 btnText={btnText2} btnUrl={btnUrl2} />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-5">
            <div
              className="header-images-area"
              data-aos="zoom-in"
              data-aos-duretion={1000}
            >
              <img
                src="assets/img/elements/elements8.png"
                alt=""
                className="elements6 aniamtion-key-1"
              />
              <img
                src="assets/img/elements/star5.png"
                alt=""
                className="star5 keyframe5"
              />
              {imgUrl && (
                <div className="img1">
                  <img
                    src="assets/img/bg/header-imgbg3.png"
                    alt=""
                    className="header-imgbg2"
                  />
                  <img src={imgUrl} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyle3;
