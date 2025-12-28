import BrandSliderStyle1 from "../../slider/BrandSliderStyle1";
import parser from "html-react-parser";

const BrandStyle5 = ({ data }) => {
  const { title, brands } = data;
  return (
    <div className="slider7-section-area sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 m-auto">
            <div className="sldier-head text-center">
              {title && <p className="text-anime-style-3">{parser(title)}</p>}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="slider-images-area">
              <BrandSliderStyle1 data={brands} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStyle5;
