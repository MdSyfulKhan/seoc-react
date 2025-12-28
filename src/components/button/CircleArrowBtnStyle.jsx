import { Link } from "react-router-dom";

const ButtonCircleArrowStyle1 = ({ data }) => {
  const { btnUrl, btnImg, btnIcon } = data;

  if (!btnImg || !btnIcon || !btnUrl) return null;

  return (
    <div className="arrow-circle">
      <Link to={btnUrl}>
        <img src={btnImg} alt="" className="elements4 keyframe5" />
        <img src={btnIcon} alt="" className="arrow" />
      </Link>
    </div>
  );
};

export default ButtonCircleArrowStyle1;
