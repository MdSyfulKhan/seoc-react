import perser from "html-react-parser";
import ButtonStyle18 from "../../button/ButtonStyle18";
import ButtonStyle20 from "../../button/ButtonStyle20";

const HeroStyle12 = ({ data }) => {
  const { title, subTitle, desc, imgUrl1, imgUrl2, btnText, btnUrl } = data;
  return (
    <div className="hero12-section-area">
      {(imgUrl1 || imgUrl2) && (
        <div className="bg1">
          <img src="assets/img/bg/hero-bg1.png" alt="" />
        </div>
      )}
      <img
        src="assets/img/bg/hero-bg2.png"
        alt=""
        className="hero-bg2 aniamtion-key-2"
      />
      <img
        src="assets/img/elements/elements26.png"
        alt=""
        className="elements26"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-header heading17">
              {subTitle && (
                <h5>
                  <img src="assets/img/icons/logo-icon9.svg" alt="" />
                  {perser(subTitle)}
                </h5>
              )}
              <div className="space16" />
              {title && <h2>{perser(title)}</h2>}
              <div className="space24" />
              {desc && <p>{perser(desc)}</p>}
              <div className="space32" />
              {btnText && (
                <div className="btn-area1">
                  <ButtonStyle20 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-2" />
          <div className="col-lg-4">
            <div className="hero-images-area">
              <div className="icons">
                <img
                  src="assets/img/icons/hero-icon1.svg"
                  alt=""
                  className="icons1 aniamtion-key-1"
                />
                <img
                  src="assets/img/icons/hero-icon2.svg"
                  alt=""
                  className="icons2 aniamtion-key-4"
                />
                <img
                  src="assets/img/elements/elements25.png"
                  alt=""
                  className="elements25 aniamtion-key-2"
                />
              </div>
              {imgUrl1 && (
                <div className="img1">
                  <img src={imgUrl1} alt="" />
                </div>
              )}
              {imgUrl2 && (
                <div className="author-img aniamtion-key-5">
                  <img src={imgUrl2} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyle12;
