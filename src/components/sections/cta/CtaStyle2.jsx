import { Link } from "react-router-dom";
import perser from "html-react-parser";
import ButtonStyle3 from "../../button/ButtonStyle3";

const CtaStyle2 = ({ data }) => {
  const { title, desc, btnText, btnUrl, images } = data;

  return (
    <div className="cta2-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-author-area">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cta2-header heading4">
                    {title && (
                      <h2 className="text-anime-style-3">{perser(title)}</h2>
                    )}
                    {desc && (
                      <p data-aos="fade-up" data-aos-duration="1000">
                        {perser(desc)}
                      </p>
                    )}
                    <div className="space24"></div>
                    {btnText && (
                      <div
                        className="btn-area"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        <ButtonStyle3 btnText={btnText} btnUrl={btnUrl} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-2"></div>

                <div className="col-lg-4">
                  <div
                    className="images"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    <img
                      src="assets/img/elements/elements6.png"
                      alt=""
                      className="elements6 aniamtion-key-2"
                    />
                    <img
                      src="assets/img/elements/elements7.png"
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

export default CtaStyle2;
