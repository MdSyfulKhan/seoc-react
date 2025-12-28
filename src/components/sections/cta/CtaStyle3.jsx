import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle3 from "../../button/ButtonStyle3";
import ButtonStyle5 from "../../button/ButtonStyle5";

const CtaStyle3 = ({ data }) => {
  const { title, desc, btnText, btnUrl, images } = data;

  return (
    <div className="cta3-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-author-area">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cta2-header heading6">
                    {title && (
                      <h2 className="text-anime-style-3">{parser(title)}</h2>
                    )}
                    {desc && (
                      <p data-aos="fade-up" data-aos-duration="1200">
                        {parser(desc)}
                      </p>
                    )}
                    <div className="space24"></div>
                    {btnText && (
                      <div
                        className="btn-area"
                        data-aos="fade-up"
                        data-aos-duration="1400"
                      >
                        <ButtonStyle5 btnText={btnText} btnUrl={btnUrl} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-2"></div>

                <div className="col-lg-4">
                  <div className="images">
                    <img
                      src="assets/img/elements/elements8.png"
                      alt=""
                      className="elements6 aniamtion-key-2"
                    />
                    <img
                      src="assets/img/elements/star6.png"
                      alt=""
                      className="elements7 keyframe5"
                    />
                    <img
                      src={images.bgImgUrl}
                      alt=""
                      className="bg1 aniamtion-key-5"
                    />
                    <img src={images.imgUrl} alt="" className="cta-img1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaStyle3;
