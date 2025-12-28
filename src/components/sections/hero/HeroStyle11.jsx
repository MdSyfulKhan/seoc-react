import perser from "html-react-parser";
import ButtonStyle18 from "../../button/ButtonStyle18";

const HeroStyle11 = ({ data }) => {
  const { title, subTitle, desc, imgUrl, bgImgUrl, btnText, btnUrl } = data;
  return (
    <div
      className="hero11-section-area"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <img
        src="assets/img/elements/elements22.png"
        alt=""
        className="elements22 aniamtion-key-1"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="hero-header">
              {subTitle && (
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  <img src="assets/img/icons/logo-icons2.svg" alt="" />
                  {perser(subTitle)}
                </h5>
              )}
              <div className="space24" />
              {title && <h1 className="text-anime-style-3">{perser(title)}</h1>}
              <div className="space16" />
              {desc && (
                <p data-aos="fade-left" data-aos-duration={1000}>
                  {perser(desc)}
                </p>
              )}
              <div className="space32" />
              {btnText && (
                <div
                  className="btn-area"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  <ButtonStyle18 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-6">
            <div className="images">
              {/*className: "reveal" ref={bottomRef} d-inline-block new added */}
              {imgUrl && (
                <div className="img d-inline-block">
                  <img src={imgUrl} alt="" />
                </div>
              )}
              <img
                src="assets/img/elements/elements21.png"
                alt=""
                className="elements21"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyle11;
