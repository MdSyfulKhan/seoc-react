import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { Icon } from "@iconify/react";
import { useReveal } from "../../../hooks/useReveal";
import { useRef } from "react";

const BlogStyle5 = ({ data }) => {
  const { subTitle, title, blogs } = data;

  // Apply reveal animation to each image ref
  const imageRefs = blogs?.map(() => useRef(null)) || [];
  imageRefs.forEach((ref) => {
    useReveal(ref, {
      xPercent: -100,
      duration: 1.5,
      start: "top 70%",
    });
  });

  return (
    <div className="blog5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 m-auto">
            <div className="blog-header-area text-center heading10">
              {subTitle && (
                <h5>
                  <img src="assets/img/icons/logo-icons6.svg" alt="" />
                  {parser(subTitle)}
                </h5>
              )}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="blog-all-section">
              {blogs?.map((blog, index) => (
                <div key={index}>
                  <div
                    className="row align-items-center"
                    data-aos="fade-up"
                    data-aos-duration={1000 + index * 200}
                  >
                    <div className="col-lg-4 col-md-6">
                      <div
                        className="imges1 image-anime reveal"
                        ref={imageRefs[index]}
                      >
                        <img src={blog.imgUrl} alt={blog.title} />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <div className="content-area">
                        <div className="main-content">
                          <h5>{blog.category}</h5>
                          <Link to={blog.linkUrl}>{parser(blog.title)}</Link>
                          <Link to={blog.authorLink} className="text">
                            <img src={blog.authorImg} alt={blog.author} />
                            {blog.author}
                          </Link>
                        </div>
                        <div className="arrow">
                          <Link to={blog.linkUrl}>
                            <i>
                              <Icon
                                icon="fa7-solid:arrow-right"
                                height={20}
                                width={20}
                              />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < 2 && <div className="space60"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogStyle5;
