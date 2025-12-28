import perser from "html-react-parser";
import { Icon } from "@iconify/react";
import ButtonStyle25 from "../../button/ButtonStyle25";
import VideoModal from "../../videoModal/VideoModal";
import Rating from "../../utils/Rating";
import PlayButtonStyle2 from "../../button/PlayButtonStyle2";
import useVideoModal from "../../../hooks/useVideoModal";

const HeroStyle15 = ({ data }) => {
  const {
    title,
    subTitle,
    desc,
    imgUrl,
    bgImgUrl,
    btnText,
    btnUrl,
    playBtnText,
    video_url,
    content,
  } = data;
  const { isOpen, iframeSrc, openModal, closeModal } = useVideoModal();

  return (
    <>
      <div
        className="hero15-section-area"
        style={{ backgroundImage: `url(${bgImgUrl})` }}
      >
        {imgUrl && (
          <img src="assets/img/bg/hero-bg3.png" alt="" className="hero-bg3" />
        )}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero15-header">
                {subTitle && (
                  <h5>
                    {perser(subTitle)}
                    <i>
                      <Icon icon="fa7-solid:angle-right" />
                    </i>
                  </h5>
                )}
                <div className="space20" />
                {title && (
                  <h1>
                    {perser(title)}
                    <img
                      src="assets/img/elements/elementors37.png"
                      alt=""
                      className="keyframe5"
                    />
                  </h1>
                )}
                <div className="space24" />
                {desc && <p>{`"${perser(desc)}"`}</p>}
                <div className="space32" />
                {(btnText || playBtnText) && (
                  <div className="btn-area1">
                    <ButtonStyle25 btnText={btnText} btnUrl={btnUrl} />
                    <PlayButtonStyle2
                      handleOpenModal={openModal}
                      video_url={video_url}
                      btnText={playBtnText}
                    />
                  </div>
                )}

                <div className="space32" />
                {content && (
                  <div className="author-area">
                    {content.imgUrl && <img src={content.imgUrl} alt="" />}
                    <div className="list-area">
                      {content.rating && (
                        <div className="cs_rating_wrapper">
                          {content.rating && <Rating rating={content.rating} />}
                          {<span>{parseFloat(content.rating).toFixed(1)}</span>}
                        </div>
                      )}
                      {content.desc && <p>{perser(content.desc)}</p>}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="images15-area">
                {imgUrl && (
                  <div className="img1">
                    <img src={imgUrl} alt="" />
                  </div>
                )}

                <div className="elements-img">
                  <img
                    src="assets/img/elements/elements32.png"
                    alt=""
                    className="elements32 aniamtion-key-1"
                  />
                  <img
                    src="assets/img/elements/elements34.png"
                    alt=""
                    className="elements34 aniamtion-key-5"
                  />
                  <img
                    src="assets/img/elements/elements35.png"
                    alt=""
                    className="elements35 aniamtion-key-2"
                  />
                  <img
                    src="assets/img/elements/elements36.png"
                    alt=""
                    className="elements36 aniamtion-key-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <VideoModal
          isTrue={isOpen}
          iframeSrc={iframeSrc}
          handelClose={closeModal}
        />
      )}
    </>
  );
};

export default HeroStyle15;
