import { Link } from "react-router-dom";

const ButtonStyle7 = ({ btnText, btnUrl }) => {
  if (!btnText) return null; // no text → nothing shown
  return (
    <Link to={btnUrl} className="header-btn7">
      {btnText}
    </Link>
  );
};

export default ButtonStyle7;
