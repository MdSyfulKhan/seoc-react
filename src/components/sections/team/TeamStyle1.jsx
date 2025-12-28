import { Link } from "react-router-dom";
import perser from "html-react-parser";

const TeamStyle1 = ({ data }) => {
  const { subTitle, title, teamMembers } = data;

  return (
    <div className="team2-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="team2-header-area text-center heading4">
              {subTitle && <h5>{perser(subTitle)}</h5>}
              {title && <h2 className="text-anime-style-3">{perser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers?.map((member, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={member.id}
              data-aos="zoom-in"
              data-aos-duration={800 + index * 200}
            >
              <div className="team-boxarea">
                <div className="img1">
                  <img src={member.imgUrl} alt={member.name} />
                </div>

                <ul
                  style={{ backgroundImage: "url(assets/img/bg/iconsbg.png)" }}
                >
                  {member.socialLinks?.map((social, socialIndex) => (
                    <li key={socialIndex}>
                      <a href={social.url}>
                        <img src={social.icon} alt={social.name} />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="content">
                  <Link to={member.profileUrl}>{member.name}</Link>
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

export default TeamStyle1;
