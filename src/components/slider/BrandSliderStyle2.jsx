import Slider from "react-slick";
import { Link } from "react-router-dom";

const BrandSliderStyle2 = ({ data }) => {
  const firstRowSettings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 3,
    infinite: true,
    cssEase: "linear",
    pauseOnFocus: true,
    pauseOnHover: true,
  };
  const secondSettings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    arrows: false,
    swipe: false,
    slidesToShow: 3,
    infinite: true,
    cssEase: "linear",
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  return (
    <>
      <Slider {...firstRowSettings} className="slider-all-boxarea">
        {data?.map((brandItem, index) => (
          <div key={index} className="slider-boxarea d-flex">
            <div className="content">
              <Link to={brandItem.linkUrl}>{brandItem.title}</Link>
            </div>
            <div className="img1">
              <img src={brandItem.imgUrl} alt={brandItem.title} />
            </div>
          </div>
        ))}
      </Slider>
      <Slider {...secondSettings} className="slider-all-boxarea2">
        {data?.map((brandItem, index) => (
          <div key={index} className="slider-boxarea d-flex">
            <div className="content">
              <Link to={brandItem.linkUrl}>{brandItem.title}</Link>
            </div>
            <div className="img1">
              <img src={brandItem.imgUrl} alt={brandItem.title} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default BrandSliderStyle2;
