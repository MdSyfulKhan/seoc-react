import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const FooterStyle1 = ({ data }) => {
  const {
    mainClass,
    bgImgUrl,
    logoSection,
    aboutLinks,
    contactInfo,
    newsletter,
    copyright,
  } = data;

  return (
    <div
      className={mainClass}
      {...(bgImgUrl ? { style: { backgroundImage: `url(${bgImgUrl})` } } : {})}
    >
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area">
              <img src={logoSection.logo} alt="Logo" className="logo" />
              <p>{logoSection.description}</p>
              <ul>
                {logoSection.socialLinks.map((social, index) => (
                  <li key={index}>
                    <Link to={social.url}>
                      <i>
                        <Icon icon={social.icon} />
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About Links */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-logo-area1">
              <h3>{aboutLinks.title}</h3>
              <ul>
                {aboutLinks.links.map((linkItem, index) => (
                  <li key={index}>
                    <Link to={linkItem.url}>{linkItem.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area2">
              <h3>{contactInfo.title}</h3>
              <ul>
                {contactInfo.items.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>
                      <img src={item.icon} alt="" />
                      <span>{item.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo-area3">
              <h3>{newsletter.title}</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter Your email" />
                <button className={newsletter.form.btnClass}>
                  {newsletter.form.btnText}
                  {newsletter.form.btnIcon && (
                    <span>
                      <i>
                        <Icon icon={newsletter.form.btnIcon} />
                      </i>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="space80 d-lg-block d-none" />
        <div className="space40 d-lg-none d-block" />

        {/* Copyright */}
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area">
              <p>{copyright.text}</p>
              <ul>
                {copyright.links.map((linkItem, index) => (
                  <li key={index}>
                    <Link to={linkItem.url}>{linkItem.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterStyle1;
