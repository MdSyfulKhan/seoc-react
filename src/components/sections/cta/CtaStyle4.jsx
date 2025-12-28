import parser from "html-react-parser";
import ButtonStyle12 from "../../button/ButtonStyle12";
import AppButton from "../../button/AppButton";

const CtaStyle4 = ({ data, btnClass }) => {
  const { title, desc, btnText, btnUrl } = data;

  return (
    <div className="cta4-section-area">
      <img
        src="assets/img/bg/cta-bg5.png"
        alt=""
        className="cta-bg1 aniamtion-key-2"
      />
      <img
        src="assets/img/bg/cta-bg4.png"
        alt=""
        className="cta-bg2 aniamtion-key-1"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="cta-header-area text-center sp4 heading2">
              {title && <h2 className="text-anime-style-1">{parser(title)}</h2>}
              {desc && (
                <p data-aos="fade-up" data-aos-duration="1000">
                  {parser(desc)}
                </p>
              )}
              {btnText && (
                <div
                  className="btn-area text-center"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <AppButton
                    btnClass={btnClass}
                    btnText={btnText}
                    btnUrl={btnUrl}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaStyle4;
