import perser from "html-react-parser";
import ButtonStyle17 from "../../button/ButtonStyle17";
import Rating from "../../utils/Rating";
import VideoModal from "../../videoModal/VideoModal";
import PlayButtonStyle1 from "../../button/PlayButtonStyle1";
import useVideoModal from "../../../hooks/useVideoModal";

const HeroStyle10 = ({ data }) => {
  const {
    title,
    desc,
    imgUrl,
    bgImgUrl,
    btnText,
    btnUrl,
    video_url,
    playBtnText,
    content,
  } = data;
  const { isOpen, iframeSrc, openModal, closeModal } = useVideoModal();
  return (
    <>
      <div
        className="hero10-section-area"
        style={{ backgroundImage: `url(${bgImgUrl})` }}
      >
        <img
          src="assets/img/elements/elements18.png"
          alt=""
          className="elements18"
        />
        <div className="bg1">
          <img src="assets/img/elements/elements19.png" alt="" />
        </div>
        <div className="bg2-elements">
          <img src="assets/img/elements/elements20.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="hero-header-area heading15">
                {title && (
                  <h1 className="text-anime-style-3">{perser(title)}</h1>
                )}
                {desc && (
                  <p data-aos="fade-left" data-aos-duration={800}>
                    {perser(desc)}
                  </p>
                )}
                <div className="space32" />
                {(btnText || playBtnText) && (
                  <div
                    className="btn-area1"
                    data-aos="fade-left"
                    data-aos-duration={1000}
                  >
                    <ButtonStyle17 btnText={btnText} btnUrl={btnUrl} />
                    <PlayButtonStyle1
                      handleOpenModal={openModal}
                      video_url={video_url}
                      btnText={playBtnText}
                    />
                  </div>
                )}
                <div className="space32" />
                {content && (
                  <div className="auhtor-area">
                    {content.imgUrl && (
                      <div className="img1">
                        <img src={content.imgUrl} alt="" />
                      </div>
                    )}
                    <div className="text">
                      {content.rating && <Rating rating={content.rating} />}
                      {content.desc && <p>{content.desc}</p>}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-6">
              {imgUrl && (
                <div className="imges">
                  <img src={imgUrl} alt="" className="aniamtion-key-1" />
                </div>
              )}
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

export default HeroStyle10;
