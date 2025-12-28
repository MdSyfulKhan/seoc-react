import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const FooterStyle2 = ({ data }) => {
  const {
    mainClass,
    logoSection,
    quickLinks,
    contactInfo,
    serviceLinks,
    copyright,
  } = data;

  return (
    <div className={mainClass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-log-area">
              <img src={logoSection.logo} alt="Logo" className="logo" />
              <div className="space24" />
              <p>{logoSection.description}</p>
              <div className="space24" />
              <ul>
                {logoSection?.socialLinks?.map((social, index) => (
                  <li key={index}>
                    <Link to={social.url}>
                      <i>
                        <Icon icon={social.icon} height={16} />
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="space30 d-md-none d-block" />
            <div className="footer-content-area footer1">
              <h3>{quickLinks.title}</h3>
              <ul>
                {quickLinks?.links?.map((linkItem, index) => (
                  <li key={index}>
                    <Link to={linkItem.url}>{linkItem.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="space30 d-lg-none d-block" />
            <div className="footer-content-area">
              <h3>{serviceLinks.title}</h3>
              <ul>
                {serviceLinks?.links?.map((linkItem, index) => (
                  <li key={index}>
                    <Link to={linkItem.url}>
                      <span>{linkItem.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="space30 d-lg-none d-block" />
            <div className="footer-contact-area">
              <h3>{contactInfo.title}</h3>
              {contactInfo.items?.map((item, index) => (
                <div className="icons-area" key={index}>
                  <div className="icons">
                    <i>
                      <Icon icon={item.icon} />
                    </i>
                  </div>
                  <div className="text">
                    <a href={item.url}>{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space80 d-lg-block d-none" />
        <div className="space40 d-lg-none d-block" />
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area">
              <div className="pera">
                <p>{copyright.text}</p>
                <ul>
                  {copyright?.links?.map((linkItem, index) => (
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
    </div>
  );
};

export default FooterStyle2;
