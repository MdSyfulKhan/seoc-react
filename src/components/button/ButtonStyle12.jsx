import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ButtonStyle12 = ({ btnText, btnUrl }) => {
  if (!btnText) return null;

  if (btnUrl) {
    return (
      <Link to={btnUrl} className="header-btn12 cs_border_0">
        {btnText}{" "}
        <span className="cs_lh_1">
          <i>
            <Icon icon="fa7-solid:arrow-right" />
          </i>
        </span>
      </Link>
    );
  }

  return (
    <button type="submit" className="header-btn12 cs_border_0">
      {btnText}{" "}
      <span className="cs_lh_1">
        <i>
          <Icon icon="fa7-solid:arrow-right" />
        </i>
      </span>
    </button>
  );
};

export default ButtonStyle12;
