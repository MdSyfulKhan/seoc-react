import { Link } from "react-router-dom";

const ButtonStyle4Type2 = ({ btnText, btnUrl }) => {
  if (!btnText) return null; // no text → nothing shown
  return (
    <Link to={btnUrl} className="header-btn4 btn2">
      {btnText}
    </Link>
  );
};

export default ButtonStyle4Type2;
