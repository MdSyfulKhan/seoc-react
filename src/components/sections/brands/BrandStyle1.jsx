import perser from "html-react-parser";
import BrandSliderStyle1 from "../../slider/BrandSliderStyle1";

const BrandStyle1 = ({ data }) => {
  const { title, brands } = data;
  return (
    <div className="slider-section-area sp5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="sldier-head">
              <p>{perser(title)}</p>
            </div>
          </div>
          <div className="col-lg-10">
            <BrandSliderStyle1 data={brands} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStyle1;
