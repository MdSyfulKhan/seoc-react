import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ButtonStyle17 = ({ btnText, btnUrl }) => {
  if (!btnText) return null; // no text → nothing shown
  return (
    <Link to={btnUrl} className="header-btn17">
      {btnText}
      <span>
        <i>
          <Icon icon="fa7-solid:arrow-right" />
        </i>
      </span>
    </Link>
  );
};

export default ButtonStyle17;
