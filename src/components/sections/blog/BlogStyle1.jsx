import { Icon } from "@iconify/react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const BlogStyle1 = ({ data }) => {
  const { title, subTitle, blogs } = data;

  return (
    <div className="blog1-scetion-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="blog-hedaer-area heading2 text-center">
              <img
                src="assets/img/elements/star2.png"
                alt="star"
                className="star2 keyframe5"
              />
              <img
                src="assets/img/elements/star2.png"
                alt="star"
                className="star3 keyframe5"
              />
              {title && <h2 className="text-anime-style-3">{parse(title)}</h2>}
              {subTitle && (
                <p data-aos="fade-up" data-aos-duration="1000">
                  {parse(subTitle)}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          {blogs.map((blog, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos={blog.animation}
              data-aos-duration={800 + blog.id * 100}
            >
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src={blog.imgUrl} alt={blog.title} />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to="#">
                          <img
                            src="assets/img/icons/contact1.svg"
                            alt="author"
                          />
                          {blog.author}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src="assets/img/icons/calender1.svg"
                            alt="date"
                          />
                          {blog.date}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to={blog.linkUrl}>{blog.title}</Link>
                  <p>{blog.desc}</p>
                  <Link to={blog.linkUrl} className="readmore">
                    Read More <Icon icon="fa7-solid:arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="space30 d-lg-none d-block"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogStyle1;
