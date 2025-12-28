import { Link } from "react-router-dom";

const ButtonStyle6 = ({ btnText, btnUrl }) => {
  if (!btnText) return null; // no text → nothing shown
  return (
    <Link to={btnUrl} className="header-btn6">
      {btnText}
    </Link>
  );
};

export default ButtonStyle6;
