import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ButtonStyle23Type2 = ({ btnText, btnUrl }) => {
  if (!btnText) return null;

  if (btnUrl) {
    return (
      <Link to={btnUrl} className="header-btn23 btn2">
        {btnText}{" "}
        <span className="cs_lh_1">
          <i>
            <Icon icon="fa7-solid:angle-right" height="16" />
          </i>
        </span>
      </Link>
    );
  }

  return (
    <button type="submit" className="header-btn23 btn2 cs_border_0">
      {btnText}{" "}
      <span className="cs_lh_1">
        <i>
          <Icon icon="fa7-solid:angle-right" height="16" />
        </i>
      </span>
    </button>
  );
};

export default ButtonStyle23Type2;
