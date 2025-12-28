import { Link } from "react-router-dom";
import parser from "html-react-parser";

const WorkStyle6 = ({ data }) => {
  const { subTitle, title, processes } = data;

  return (
    <div className="works7-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="works7-header heading12 text-center">
              {subTitle && <h5>{parser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          {processes?.map((processe, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={800 + index * 200}
            >
              <div className="works-author-boxarea">
                <Link to={processe.linkUrl}>{processe.title}</Link>
                <p>{processe.desc}</p>
                <div className="space24"></div>
                <div className="img1">
                  <img src={processe.imgUrl} alt={processe.title} />
                </div>
                <div className="img2">
                  <img src={processe.bgImgUrl} alt={processe.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WorkStyle6;
