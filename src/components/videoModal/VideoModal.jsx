const VideoModal = ({ isTrue, iframeSrc, handelClose }) => {
  return (
    <div className={`cs-video_popup ${isTrue === true ? "active" : ""}`}>
      <div className="cs-video_popup_overlay" />
      <div className="cs-video_popup_content">
        <div className="cs-video_popup_layer" />
        <div className="cs-video_popup_container">
          <div className="cs-video_popup_align">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={iframeSrc} />
            </div>
          </div>
          <div className="cs-video_popup_close" onClick={handelClose} />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
