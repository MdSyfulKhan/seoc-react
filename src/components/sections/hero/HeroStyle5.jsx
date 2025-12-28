import perser from "html-react-parser";
import ButtonStyle9 from "../../button/ButtonStyle9";
import ButtonStyle10 from "../../button/ButtonStyle10";

const HeroStyle5 = ({ data }) => {
  const {
    title,
    subTitle,
    desc,
    imgUrl,
    bgImgUrl,
    btnText1,
    btnUrl1,
    btnText2,
    btnUrl2,
  } = data;
  return (
    <div
      className="hero5-section-area"
      style={{
        backgroundImage: `url(${bgImgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="header-content-area heading9">
              {subTitle && (
                <h5>
                  <img src="assets/img/icons/logo-icons5.svg" alt="" />
                  {perser(subTitle)}
                </h5>
              )}
              {title && <h1 className="text-anime-style-2">{perser(title)}</h1>}
              {desc && (
                <p data-aos="fade-left" data-aos-duration={1000}>
                  {perser(desc)}
                </p>
              )}
              {(btnText1 || btnText2) && (
                <div
                  className="btn-area1"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  <ButtonStyle9 btnText={btnText1} btnUrl={btnUrl1} />
                  <ButtonStyle10 btnText={btnText2} btnUrl={btnUrl2} />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-images-area">
              {imgUrl && (
                <>
                  <div className="imges">
                    <img
                      src={imgUrl}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration={1000}
                    />
                  </div>
                  <div className="imges1">
                    <img src="assets/img/bg/header-bg6.png" alt="" />
                  </div>
                </>
              )}

              <div className="auhtor-images">
                <div className="img1">
                  <img
                    src="assets/img/all-images/auhtor-img1.png"
                    alt=""
                    className="author-img1 aniamtion-key-2"
                  />
                  <img
                    src="assets/img/icons/sound-icons3.svg"
                    alt=""
                    className="sound-icons3 aniamtion-key-1"
                  />
                  <img
                    src="assets/img/icons/lite-icons2.svg"
                    alt=""
                    className="lite-icons2 aniamtion-key-1"
                  />
                  <img
                    src="assets/img/elements/elements11.svg"
                    alt=""
                    className="elements11"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyle5;
