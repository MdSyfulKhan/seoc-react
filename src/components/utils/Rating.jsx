import { Icon } from "@iconify/react";

const Rating = ({ rating }) => {
  return (
    <ul className="cs_rating_style_1">
      {[...Array(rating)]?.map((_, index) => (
        <li key={index}>
          <i>
            <Icon icon="fa7-solid:star" width="16" />
          </i>
        </li>
      ))}
    </ul>
  );
};

export default Rating;
