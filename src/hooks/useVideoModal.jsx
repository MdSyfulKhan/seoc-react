import { useState } from "react";

const useVideoModal = (defaultUrl = "about:blank") => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState(defaultUrl);

  //  Modal Open Handler
  const openModal = (videoUrl) => {
    setIframeSrc(videoUrl);
    setIsOpen(true);
  };

  // Modal Close Handler
  const closeModal = () => {
    setIframeSrc(defaultUrl);
    setIsOpen(false);
  };

  return {
    isOpen,
    iframeSrc,
    openModal,
    closeModal,
  };
};

export default useVideoModal;
