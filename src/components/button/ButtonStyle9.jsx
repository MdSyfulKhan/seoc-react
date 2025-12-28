import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ButtonStyle9 = ({ btnText, btnUrl }) => {
  if (!btnText) return null; // no text → nothing shown
  return (
    <Link to={btnUrl} className="header-btn9">
      {btnText}
      <span>
        <i>
          <Icon icon="fa7-solid:arrow-right" width={16} />
        </i>
      </span>
    </Link>
  );
};

export default ButtonStyle9;
