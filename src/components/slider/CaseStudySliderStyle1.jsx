import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Icon } from "@iconify/react";

// Swiper styles (must)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CaseStudySliderStyle1 = ({ cases }) => {
  const swiperConfig = {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    pagination: { clickable: true },
    breakpoints: {
      320: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
      991: { slidesPerView: 2 },
    },
  };

  return (
    <Swiper {...swiperConfig} className="case-swiper">
      {cases?.map((caseStudy, index) => (
        <SwiperSlide key={caseStudy?.id || index}>
          <div className="author-case-area">
            <div className="img1">
              <img src={caseStudy.imgUrl} alt={caseStudy.title} />
            </div>

            <div className="content-area">
              <div className="content">
                <Link to={caseStudy.linkUrl}>{caseStudy.title}</Link>
                <div className="space16"></div>
                <p>{parser(caseStudy.desc)}</p>
              </div>

              <div className="arrow">
                <Link to={caseStudy.linkUrl}>
                  <i>
                    <Icon icon="fa7-solid:arrow-right" width={16} />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaseStudySliderStyle1;
