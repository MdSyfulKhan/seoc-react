import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ButtonStyle16 = ({ btnText, btnUrl }) => {
  if (!btnText) return null;

  if (btnUrl) {
    return (
      <Link to={btnUrl} className="header-btn16">
        {btnText}{" "}
        <span className="cs_lh_1">
          <i>
            <Icon icon="fa7-solid:arrow-right" width="16" />
          </i>
        </span>
      </Link>
    );
  }

  return (
    <button type="submit" className="header-btn16">
      {btnText}{" "}
      <span className="cs_lh_1">
        <i>
          <Icon icon="fa7-solid:arrow-right" width="16" />
        </i>
      </span>
    </button>
  );
};

export default ButtonStyle16;
