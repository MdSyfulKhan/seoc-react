import perser from "html-react-parser";
import ButtonStyle21 from "../../button/ButtonStyle21";
import ButtonStyle21Type2 from "../../button/ButtonStyle21Type2";

const HeroStyle13 = ({ data }) => {
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
    <div className="hero13-section-area">
      {imgUrl && (
        <div className="img2">
          <img
            src="assets/img/bg/header-bg13.png"
            alt=""
            className="header-bg13"
          />
        </div>
      )}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero13-header heading19">
              {subTitle && (
                <h5>
                  <img src="assets/img/icons/logo-icons8.svg" alt="" />
                  {perser(subTitle)}
                </h5>
              )}
              <div className="space16" />
              {title && <h2>{perser(title)}</h2>}
              <div className="space24" />
              {desc && <p>{perser(desc)}</p>}
              <div className="space32" />
              {(btnText1 || btnText2) && (
                <div className="btn-area1">
                  <ButtonStyle21 btnText={btnText1} btnUrl={btnUrl1} />
                  <ButtonStyle21Type2 btnText={btnText2} btnUrl={btnUrl2} />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-5">
            {imgUrl && (
              <div className="img1">
                <img src={imgUrl} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyle13;
