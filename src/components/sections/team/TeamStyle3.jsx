import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { Icon } from "@iconify/react";

const TeamStyle3 = ({ data }) => {
  const { subTitle, title, teamMembers } = data;

  return (
    <div className="team5-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 m-auto">
            <div className="team-header text-center heading10">
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
          {teamMembers?.map((member, index) => (
            <div
              key={member.id}
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration={800 + index * 200}
            >
              <div className="team5-author-boxarea">
                <div className="imges image-anime">
                  <img src={member.imgUrl} alt={member.name} />
                </div>

                <div className="team-sociala-area">
                  <div className="icons">
                    <div className={`plus hidden`}>
                      <Icon icon="fa7-solid:plus" />
                    </div>
                    <div className={`minus hidden}`}>
                      <Icon icon="fa7-solid:minus" />
                    </div>
                  </div>

                  <div className={`social-icons show`}>
                    <ul>
                      {member.socialLinks?.map((social, index) => (
                        <li key={index}>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={social.iconUrl} alt={social.platform} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="content-area">
                  <Link to={member.linkUrl}>{member.name}</Link>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamStyle3;
