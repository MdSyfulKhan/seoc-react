import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 15 layout configuration
const bodyStyles = {
  homepage1: {
    className: "homepage1-body",
    backgroundImage: "assets/img/bg/homepage1-bg.png",
  },
  homepage2: {
    className: "homepage2-body",
    backgroundImage: "assets/img/bg/homepage2-bg.png",
  },
  homepage3: {
    className: "homepage3-body",
    backgroundImage: "assets/img/bg/homepage3-bg.png",
  },
  homepage4: {
    className: "homepage4-body",
    backgroundImage: "assets/img/bg/homepage4-bg.png",
  },
  homepage5: {
    className: "homepage5-body",
    backgroundImage: "assets/img/bg/homepage5-bg.png",
  },
  homepage6: {
    className: "homepage6-body",
    backgroundImage: "assets/img/bg/homepage6-bg.png",
  },
  homepage7: {
    className: "homepage7-body",
    backgroundImage: "assets/img/bg/homepage7-bg.png",
  },
  homepage8: {
    className: "homepage8-body",
    backgroundImage: "assets/img/bg/homepage8-bg.png",
  },
  homepage9: {
    className: "homepage9-body",
    backgroundImage: "assets/img/bg/homepage9-bg.png",
  },
  homepage10: {
    className: "homepage10-body",
    backgroundImage: "assets/img/bg/homepage10-bg.png",
  },
  homepage11: {
    className: "homepage11-body",
    backgroundImage: "assets/img/bg/homepage11-bg.png",
  },
  homepage12: {
    className: "homepage12-body",
    backgroundImage: "assets/img/bg/homepage12-bg.png",
  },
  homepage13: {
    className: "homepage13-body",
    backgroundImage: "assets/img/bg/homepage13-bg.png",
  },
  homepage14: {
    className: "homepage14-body",
    backgroundImage: "assets/img/bg/homepage14-bg.png",
  },
  homepage15: {
    className: "homepage15-body",
    backgroundImage: "assets/img/bg/homepage15-bg.png",
  },
};

function BodyStyleManager({ layout }) {
  const location = useLocation();

  useEffect(() => {
    const styleConfig = bodyStyles[layout];

    if (styleConfig) {
      document.body.className = styleConfig.className;
      document.body.style.backgroundImage = `url("${styleConfig.backgroundImage}")`;
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    } else {
      // if layout not match it will be cleanup
      document.body.className = "";
      document.body.style.backgroundImage = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundSize = "";
    }
  }, [layout, location.pathname]);

  return null;
}

export default BodyStyleManager;
