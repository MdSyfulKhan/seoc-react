import parser from "html-react-parser";
import { useState } from "react";
import Select from "react-select";
import ButtonStyle11 from "../../button/ButtonStyle11";

const ContactStyle2 = ({ data }) => {
  const { subTitle, title, contactInfo, formInfo } = data || {};
  const [selectedService, setSelectedService] = useState(null);

  const handleChange = (option) => {
    setSelectedService(option);
  };

  return (
    <div className="contact5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="contact-header-area text-center heading10">
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
          {/* Left Column - Contact Info */}
          <div className="col-lg-5" data-aos="zoom-in" data-aos-duration="1200">
            <div className="contact-info-area">
              <h3>{contactInfo?.heading}</h3>
              <p>{contactInfo?.desc}</p>
              <div className="space32"></div>

              {contactInfo?.items?.map((item, index) => (
                <div key={item.id || index}>
                  <div className="contact-auhtor-box">
                    <div className="icons">
                      <img src={item.iconUrl} alt={item.title} />
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <a href={item.linkUrl}>{parser(item.linkText)}</a>
                    </div>
                  </div>
                  {index < contactInfo.items.length - 1 && (
                    <div className="space40"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-lg-7" data-aos="zoom-in" data-aos-duration="1200">
            <div className="contact-boxarea">
              <h3>{formInfo?.heading}</h3>
              <p>{parser(formInfo?.desc)}</p>
              <form action="https://api.web3forms.com/submit" method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <Select
                        value={selectedService}
                        onChange={handleChange}
                        options={formInfo?.selectOptions}
                        placeholder="Service Type"
                        name="serviceType"
                        className="country-area nice-select6"
                        classNamePrefix="select"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea
                        placeholder="Your Message"
                        name="message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <ButtonStyle11 btnText={formInfo?.btnText} />
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

export default ContactStyle2;
