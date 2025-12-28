import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ButtonStyle14 = ({ btnText, btnUrl }) => {
  if (!btnText) return null;

  if (btnUrl) {
    return (
      <Link to={btnUrl} className="header-btn14">
        {btnText}
        <i>
          <Icon icon="fa7-solid:arrow-right" width="16" />
        </i>
      </Link>
    );
  }

  return (
    <button type="submit" className="header-btn14">
      {btnText}{" "}
      <i>
        <Icon icon="fa7-solid:arrow-right" width="16" />
      </i>
    </button>
  );
};

export default ButtonStyle14;
