import parser from "html-react-parser";
import ButtonStyle9 from "../../button/ButtonStyle9";
import ButtonStyle10 from "../../button/ButtonStyle10";

const CtaStyle5 = ({ data }) => {
  const { title, desc, bgImgUrl, btnText, btnUrl, btnText2, btnUrl2 } = data;

  return (
    <div
      className="cta5-section-area sp1 cs_bg"
      style={{ background: `url(${bgImgUrl})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="cta-header-area text-center heading10">
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
              {desc && (
                <p data-aos="fade-up" data-aos-duration="1000">
                  {parser(desc)}
                </p>
              )}
              <div
                className="btn-area1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <ButtonStyle9 btnText={btnText} btnUrl={btnUrl} />
                <ButtonStyle10 btnText={btnText2} btnUrl={btnUrl2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaStyle5;
