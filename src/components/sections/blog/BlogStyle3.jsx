import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import perser from "html-react-parser";

const BlogStyle3 = ({ data }) => {
  const { subTitle, title, blogs } = data;

  return (
    <div className="blog3-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 m-auto">
            <div className="blog-header-area heading6 text-center">
              {subTitle && <h5>{perser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{perser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          {blogs?.map((blog, index) => (
            <div
              className="col-lg-6 col-md-6"
              key={blog.id}
              data-aos="zoom-out"
              data-aos-duration={1000 + index * 200}
            >
              <div className="blog2-author-boxarea">
                <div className="img1">
                  <img src={blog.imgUrl} alt={blog.title} />
                </div>

                <div className="blog-content">
                  <Link to="#" className="date">
                    <img src="assets/img/icons/calender1.svg" alt="" />
                    {blog.date}
                  </Link>

                  <Link to={blog.linkUrl} className="head">
                    {blog.title}
                  </Link>

                  <p>{blog.desc}</p>

                  <Link to={blog.linkUrl} className="readmore">
                    Learn More{" "}
                    <i>
                      <Icon icon="fa-solid:arrow-right" />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogStyle3;
