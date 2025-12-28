import parser from "html-react-parser";
import AppButton from "../../button/AppButton";
import { Icon } from "@iconify/react";

const PricingStyle1 = ({ data, btnClass }) => {
  const { subTitle, title, plans } = data;

  return (
    <div className="pricing-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 m-auto">
            <div className="pricing-header heading8 text-center">
              {subTitle && (
                <h5 data-aos="fade-up" data-aos-duration="1000">
                  <img src="assets/img/icons/logo-icons3.svg" alt="" />
                  {parser(subTitle)}
                </h5>
              )}
              {title && (
                <h2 className="text-anime-style-1">
                  {parser(title)}
                  <span>
                    <img src="assets/img/elements/line-img2.png" alt="" />
                  </span>
                </h2>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          {plans?.map((plan, index) => (
            <div
              key={plan.id}
              className="col-lg-4 col-md-6"
              data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
              data-aos-duration={800 + index * 200}
            >
              <div
                className={`pricing-boxarea ${plan.isActive ? "active" : ""}`}
              >
                <h4>{plan.title}</h4>
                <p>{parser(plan.desc)}</p>
                <h1>
                  {plan.price} <span>/{plan.period}</span>
                </h1>
                <div className="space32"></div>
                <div className="btn-area1">
                  <AppButton
                    btnText={plan.btnText}
                    btnUrl={plan.btnUrl}
                    btnClass={btnClass}
                  />
                </div>
                <div className="space32"></div>
                <div className="list-area">
                  <h5>{plan.featuresTitle}</h5>
                  <ul>
                    {plan.features?.map((feature, index) => (
                      <li key={index}>
                        <i>
                          <Icon
                            icon="fa7-solid:circle-check"
                            height={20}
                            width={20}
                          />
                        </i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space24"></div>
                <p className="pera">{parser(plan.desc2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingStyle1;
