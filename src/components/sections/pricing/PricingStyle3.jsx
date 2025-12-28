import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle16 from "../../button/ButtonStyle16";

const PricingStyle3 = ({ data }) => {
  const { subTitle, title, plans } = data;

  return (
    <div className="pricing9-section-area sp2">
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="pricing-header text-center heading14">
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

      <div className="container">
        <div className="row">
          {plans?.map((plan, index) => {
            const duration = 800 + index * 200;

            return (
              <div
                key={plan.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={duration}
              >
                <div
                  className={`pricing-boxarea ${plan.isActive ? "active" : ""}`}
                >
                  <h4>{plan.title}</h4>
                  <p>{parser(plan.desc)}</p>
                  <h1>
                    {plan.price} <span>/{plan.period}</span>
                  </h1>

                  <div className="btn-area1">
                    <ButtonStyle16
                      btnText="Choose Your Plan"
                      btnUrl={plan.linkUrl}
                    />
                  </div>

                  <div className="space32"></div>

                  <div className="list-area">
                    <h5>{plan.featuresTitle}</h5>
                    <ul>
                      {plan.features?.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <img
                            src="assets/img/icons/check4.svg"
                            alt=""
                            className="check2"
                          />
                          <img
                            src="assets/img/icons/check5.svg"
                            alt=""
                            className="check3"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space24"></div>

                  <p className="pera">{parser(plan.targetDesc)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingStyle3;
