import { Link } from "react-router-dom";

const ButtonStyle3 = ({ btnText, btnUrl }) => {
  if (!btnText) return null; // no text → nothing shown
  return (
    <Link to={btnUrl} className="header-btn3">
      {btnText}
    </Link>
  );
};

export default ButtonStyle3;
