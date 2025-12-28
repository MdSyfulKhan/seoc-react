import perser from "html-react-parser";
import ButtonStyle1 from "../../button/ButtonStyle1";
import { useState } from "react";
import Select from "react-select";

const ContactStyle1 = ({ data }) => {
  const { title, subTitle, contactInfo, formInfo } = data || {};
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleChange = (option) => {
    setSelectedCountry(option);
  };

  return (
    <div className="contact1-section-area sp6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="contact-header-area text-center heading2">
              <img
                src="assets/img/elements/star2.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="assets/img/elements/star2.png"
                alt=""
                className="star3 keyframe5"
              />
              {title && <h2 className="text-anime-style-3">{perser(title)}</h2>}
              {subTitle && <p>{perser(subTitle)}</p>}
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-lg-5">
            <div className="contact-info-area">
              <h3>{contactInfo?.heading}</h3>
              <p>{contactInfo?.desc}</p>
              <div className="space32"></div>

              {contactInfo.items.map((item, index) => (
                <div className="contact-auhtor-box" key={index}>
                  <div className="icons">
                    <img src={item.iconUrl} alt="" />
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <a href={item.linkUrl}>{perser(item.linkText)}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="col-lg-7">
            <div className="contact-boxarea">
              <form action="https://api.web3forms.com/submit" method="POST">
                <h3>{formInfo?.heading}</h3>
                <p>{formInfo?.desc}</p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="First Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <Select
                        value={selectedCountry}
                        onChange={handleChange}
                        options={formInfo.selectOptions}
                        placeholder="Select a country"
                        name="country"
                        className="country-area nice-select6"
                      />
                      {/* <select
                        name="country"
                        id="country"
                        className="country-area nice-select6"
                      >
                        {formInfo.selectOptions.map((option, index) => (
                          <option
                            key={index}
                            value={option === "Service Type" ? 1 : ""}
                          >
                            {option}
                          </option>
                        ))}
                      </select> */}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea placeholder="Your Message" required></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <ButtonStyle1 btnText={formInfo.btnText} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStyle1;
