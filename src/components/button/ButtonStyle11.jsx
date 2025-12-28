import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ButtonStyle11 = ({ btnText, btnUrl }) => {
  if (!btnText) return null; // no text → nothing shown

  if (btnUrl) {
    return (
      <Link to={btnUrl} className="header-btn11">
        {btnText}
        <span>
          <i>
            <Icon icon="fa7-solid:arrow-right" />
          </i>
        </span>
      </Link>
    );
  }
  return (
    <button type="submit" className="header-btn11">
      {btnText}
      <span>
        <i>
          <Icon icon="fa7-solid:arrow-right" />
        </i>
      </span>
    </button>
  );
};

export default ButtonStyle11;
