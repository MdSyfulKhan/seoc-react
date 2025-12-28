import { Link } from "react-router-dom";

const ButtonStyle5 = ({ btnText, btnUrl }) => {
  if (!btnText) return null; // no text → nothing shown
  return (
    <Link to={btnUrl} className="header-btn5">
      {btnText}
    </Link>
  );
};

export default ButtonStyle5;
