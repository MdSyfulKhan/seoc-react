import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { Icon } from "@iconify/react";

const BlogStyle8 = ({ data }) => {
  const { subTitle, title, blogs } = data;

  return (
    <div className="blog9-scetion-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="blog-hedaer-area heading14 text-center">
              {subTitle && (
                <h5>
                  <img src="assets/img/icons/logo-icons7.svg" alt="" />
                  {parser(subTitle)}
                </h5>
              )}
              {title && <h2 className="text-anime-style-3">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          {blogs?.map((post, index) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div
                className="blog-author-boxarea"
                data-aos="fade-up"
                data-aos-duration={800 + index * 200}
              >
                <div className="img1">
                  <img src={post.imgUrl} alt={post.title} />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <Link to={post.authorLink}>
                          <img src={post.authorIcon} alt={post.author} />
                          {post.author}
                        </Link>
                      </li>
                      <li>
                        <Link to={post.dateLink}>
                          <img src={post.dateIcon} alt={post.date} />
                          {post.date}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to={post.linkUrl}>{post.title}</Link>
                  <p>{post.desc}</p>
                  <Link to={post.linkUrl} className="readmore">
                    {post.btnText}
                    <i>
                      <Icon icon="fa7-solid:arrow-right" />
                    </i>
                  </Link>
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

export default BlogStyle8;
