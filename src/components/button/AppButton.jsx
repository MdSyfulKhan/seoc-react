import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const AppButton = ({ btnClass, btnText, btnUrl }) => {
  if (!btnText) return null;

  if (btnUrl) {
    return (
      <Link to={btnUrl} className={`${btnClass}`}>
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
    <button className={`${btnClass} cs_border_0`}>
      {btnText}{" "}
      <span className="cs_lh_1">
        <i>
          <Icon icon="fa7-solid:arrow-right" width="16" />
        </i>
      </span>
    </button>
  );
};

export default AppButton;
