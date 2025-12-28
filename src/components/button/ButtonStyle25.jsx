import { Link } from "react-router-dom";

const ButtonStyle25 = ({ btnText, btnUrl }) => {
  if (!btnText) return null;

  if (btnUrl) {
    return (
      <Link to={btnUrl} className="header-btn25">
        {btnText}{" "}
      </Link>
    );
  }

  return (
    <button type="submit" className="header-btn25 cs_border_0">
      {btnText}
    </button>
  );
};

export default ButtonStyle25;
