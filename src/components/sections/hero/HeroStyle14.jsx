import perser from "html-react-parser";
import ButtonStyle23 from "../../button/ButtonStyle23";
import ButtonStyle23Type2 from "../../button/ButtonStyle23Type2";

const HeroStyle14 = ({ data }) => {
  const {
    title,
    subTitle,
    desc,
    cardText,
    imgUrl,
    bgImgUrl,
    btnText1,
    btnUrl1,
    btnText2,
    btnUrl2,
  } = data;
  return (
    <div
      className="hero14-section-area"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <img
        src="assets/img/elements/elements27.png"
        alt=""
        className="elements27 aniamtion-key-2"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="hero-header14 heading21">
              {subTitle && (
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  {perser(subTitle)}
                </h5>
              )}
              {title && <h1 className="text-anime-style-3">{perser(title)}</h1>}
              {desc && (
                <p data-aos="fade-left" data-aos-duration={1000}>
                  {perser(desc)}
                </p>
              )}
              <div
                className="btn-area1"
                data-aos="fade-left"
                data-aos-duration={1200}
              >
                <div className="space30" />
                <ButtonStyle23 btnText={btnText1} btnUrl={btnUrl1} />
                <ButtonStyle23Type2 btnText={btnText2} btnUrl={btnUrl2} />
              </div>
            </div>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-6">
            <div className="header-images-area">
              <div className="img1">
                {imgUrl && <img src={imgUrl} alt="" className="header-img" />}
                <img
                  src="assets/img/elements/elements28.png"
                  alt=""
                  className="elements28 aniamtion-key-2"
                />
                <img
                  src="assets/img/elements/elements29.png"
                  alt=""
                  className="keyframe5 elements29"
                />
                {cardText && (
                  <div className="others-box aniamtion-key-1">
                    <div className="icons">
                      <img src="assets/img/icons/check15.svg" alt="" />
                    </div>
                    <p>{perser(cardText)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyle14;
