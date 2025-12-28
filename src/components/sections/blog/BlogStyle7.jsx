import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle15 from "../../button/ButtonStyle15";
import { Icon } from "@iconify/react";

const BlogStyle7 = ({ data }) => {
  const { subTitle, title, blogs } = data;

  return (
    <div className="blog8-scetion-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="blog-hedaer-area heading13 text-center">
              {subTitle && <h5>{parser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          {blogs?.map((blog, index) => (
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-author-boxarea"
                data-aos={"fade-up"}
                data-aos-duration={800 + index * 200}
              >
                <div className="img1">
                  <img src={blog.imgUrl} alt={blog.title} />
                </div>

                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to={blog.categoryLink}>#{blog.category}</Link>
                      </li>
                      <li>
                        <Link to={blog.authorLink}>
                          <img src={blog.authorIcon} alt={blog.author} />
                          {blog.author}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <Link to={blog.linkUrl}>{blog.title}</Link>
                  <p>{blog.desc}</p>
                  <Link to={blog.linkUrl} className="header-btn15">
                    {blog.btnText}{" "}
                    <i>
                      <Icon icon="fa7-solid:arrow-right" width="16" />
                    </i>
                  </Link>

                  <div className="date">
                    <Link to={blog.dateLink}>{blog.date}</Link>
                  </div>
                </div>
              </div>

              {index < 2 && <div className="space30 d-lg-none d-block"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogStyle7;
