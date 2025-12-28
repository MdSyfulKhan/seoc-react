import { Icon } from "@iconify/react";

const PlayButtonStyle2 = ({ handleOpenModal, video_url, btnText }) => {
  if (!btnText) return null;
  return (
    <button
      className="header-btn25 btn2 popup-youtube"
      onClick={() => handleOpenModal(video_url)}
    >
      <span className="play">
        <i>
          <Icon icon="fa7-solid:video" />
        </i>
      </span>
      <span className="text">{btnText}</span>
    </button>
  );
};

export default PlayButtonStyle2;
