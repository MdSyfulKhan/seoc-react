import { Link } from "react-router-dom";

const ButtonStyle4 = ({ btnText, btnUrl }) => {
  if (!btnText) return null; // no text → nothing shown
  return (
    <Link to={btnUrl} className="header-btn4">
      {btnText}
    </Link>
  );
};

export default ButtonStyle4;
