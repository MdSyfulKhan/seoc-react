import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const FooterStyle3 = ({ data }) => {
  const { mainClass, footerColumns, logoSection } = data;

  return (
    <div className={mainClass}>
      <div className="container">
        <div className="row">
          {footerColumns?.map((column, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer-link-area">
                <h2>{column.title}</h2>
                <ul>
                  {column.links?.map((link, i) => (
                    <li key={i}>
                      {link.url ? (
                        <Link to={link.url}>{link.title}</Link>
                      ) : (
                        <span>{link.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="space50" />

        <div className="row">
          <div className="col-lg-12">
            <div className="footer-logo-area text-center">
              <img src={logoSection.logo} alt="Footer Logo" />
              <p>{logoSection.text}</p>
              <ul>
                {logoSection.socialLinks?.map((social, index) => (
                  <li key={index}>
                    <Link to={social.url}>
                      <i>
                        <Icon icon={social.icon} height={18} />
                      </i>
                    </Link>
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

export default FooterStyle3;
