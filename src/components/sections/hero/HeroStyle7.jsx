import perser from "html-react-parser";
import ButtonStyle14 from "../../button/ButtonStyle14";
import { Icon } from "@iconify/react";
import Rating from "../../utils/Rating";
import { useFormSubmit } from "../../../hooks/useFormSubmit";

const HeroStyle7 = ({ data }) => {
  const { title, desc, imgUrl1, imgUrl2, bgImgUrl, btnText, content } = data;
  const handleOnSubmit = useFormSubmit();
  return (
    <div
      className="hero7-section-area"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero7-header heading3">
              {title && <h1 className="text-anime-style-3">{perser(title)}</h1>}
              {desc && <p>{perser(desc)}</p>}
              <div className="space32" />
              <form onSubmit={handleOnSubmit}>
                <span className="cs_lh_1">
                  <i className="cs_lh_1">
                    <Icon icon="fa7-solid:globe" width="14" />
                  </i>
                </span>
                <input type="text" placeholder="your website.com" />
                <ButtonStyle14 btnText={btnText} />
              </form>
              <div className="space32" />
              {content && (
                <div className="author-images">
                  {content.imgUrl && (
                    <div className="img1">
                      <img src={content.imgUrl} alt="" />
                    </div>
                  )}
                  {(content.rating || content.desc) && (
                    <div className="stars">
                      {content.rating && <Rating rating={content.rating} />}
                      {content.desc && <p>{content.desc}</p>}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            {(imgUrl1 || imgUrl2) && (
              <div className="header7-images">
                {imgUrl1 && (
                  <div className="img1">
                    <img src={imgUrl1} alt="" className="header-img9" />
                  </div>
                )}
                {imgUrl2 && (
                  <div className="img2">
                    <img src={imgUrl2} alt="" className="header-img10" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyle7;
