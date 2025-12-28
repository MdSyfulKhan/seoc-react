import perser from "html-react-parser";

const HeroTopAreaStyle1 = ({ data }) => {
  const { title, bgImgUrl } = data;
  return (
    <div
      className="hero9-section-area"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 m-auto">
            <div className="hero9-header heading3 text-center">
              {title && <h1 className="text-anime-style-3">{perser(title)}</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTopAreaStyle1;
