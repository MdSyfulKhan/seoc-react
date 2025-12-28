import perser from "html-react-parser";
import ButtonStyle16 from "../../../button/ButtonStyle16";
import HeroSliderStyle1 from "../../../slider/HeroSliderStyle1";

const HeroBottomAreaStyle1 = ({ data }) => {
  const { title, subTitle, btnText, btnUrl, funFactInfo, sliderData } = data;
  return (
    <div className="homepage-bottom-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="header-author-area">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="header-area">
                    {subTitle && (
                      <h5>
                        <img src="assets/img/icons/logo-icons2.svg" alt="" />
                        {subTitle}
                      </h5>
                    )}
                    <div className="space16" />
                    {title && (
                      <h2 className="text-anime-style-3">{perser(title)}</h2>
                    )}
                    <div className="space32" />
                    {btnText && (
                      <div className="btn-area1">
                        <ButtonStyle16 btnText={btnText} btnUrl={btnUrl} />
                      </div>
                    )}

                    <div className="space32" />
                    <div className="counter-boxarea">
                      <div className="row">
                        {funFactInfo?.slice(0, 3).map((funfactItem, index) => (
                          <div className="col-lg-4 col-md-4 col-6" key={index}>
                            <div className="counter-box">
                              <h2>
                                <span className="counter">
                                  {funfactItem.numberText}
                                </span>
                                {funfactItem.suffix}
                              </h2>
                              <div className="space16" />
                              <p>{funfactItem.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header-bottom-img relative">
                    <HeroSliderStyle1 data={sliderData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottomAreaStyle1;
