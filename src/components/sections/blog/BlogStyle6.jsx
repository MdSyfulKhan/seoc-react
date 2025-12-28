import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { Icon } from "@iconify/react";

const BlogStyle6 = ({ data }) => {
  const { subTitle, title, blogs } = data;

  return (
    <div className="blog7-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 m-auto">
            <div className="blog4-header text-center heading12">
              {subTitle && (
                <h5 data-aos="fade-up" data-aos-duration="1000">
                  {parser(subTitle)}
                </h5>
              )}
              {title && <h2 className="text-anime-style-1">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          {blogs?.map((blog, index) => (
            <div
              key={blog.id}
              className="col-lg-6 col-md-6"
              data-aos="zoom-out"
              data-aos-duration={1000 + index * 200}
            >
              <div className="blog-auhtor-boxarea">
                <div className="blog-content-area">
                  <ul>
                    <li>
                      <Link to={blog.authorLink}>
                        <i>
                          <Icon icon="fa7-solid:circle-user" />
                        </i>
                        {blog.author}
                      </Link>
                    </li>
                    <li>
                      <Link to={blog.dateLink}>
                        <i>
                          <Icon icon="fa7-solid:calendar-alt" />
                        </i>
                        {blog.date}
                      </Link>
                    </li>
                  </ul>
                  <div className="space16"></div>
                  <Link to={blog.linkUrl}>{blog.title}</Link>
                  <div className="space16"></div>
                  <p>{blog.desc}</p>
                  <Link to={blog.linkUrl} className="readmore">
                    Learn More{" "}
                    <i>
                      <Icon icon="fa7-solid:arrow-right" />
                    </i>
                  </Link>
                </div>
                <div className="space24"></div>
                <div className="img1">
                  <figure className="image-anime">
                    <img src={blog.imgUrl} alt={blog.title} />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogStyle6;
