import parse from "html-react-parser";
import ButtonStyle1 from "../../button/ButtonStyle1";

const CtaStyle1 = ({ data }) => {
  const { title, subTitle, btnText, btnUrl } = data || {};

  return (
    <div className="cta-section-area">
      <img
        className="cta-bg1 aniamtion-key-2"
        src="assets/img/bg/cta-bg1.png"
        alt=""
      />
      <img
        className="cta-bg2 aniamtion-key-1"
        src="assets/img/bg/cta-bg2.png"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="cta-header-area text-center sp4 heading2">
              {title && <h2 className="text-anime-style-3">{parse(title)}</h2>}
              {subTitle && <p>{parse(subTitle)}</p>}
              {btnText && (
                <div className="btn-area text-center">
                  <ButtonStyle1 btnText={btnText} btnUrl={btnUrl} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaStyle1;
