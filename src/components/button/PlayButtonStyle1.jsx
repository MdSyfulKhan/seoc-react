import { Icon } from "@iconify/react";

const PlayButtonStyle1 = ({ handleOpenModal, video_url, btnText }) => {
  if (!btnText) return null;
  return (
    <button
      className="video-btn popup-youtube"
      onClick={() => handleOpenModal(video_url)}
    >
      <span className="play">
        <i>
          <Icon icon="fa7-solid:play" />
        </i>
      </span>
      <span className="text">{btnText}</span>
    </button>
  );
};

export default PlayButtonStyle1;
