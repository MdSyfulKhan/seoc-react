import parser from "html-react-parser";
import ButtonStyle13 from "../../button/ButtonStyle13";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import { Icon } from "@iconify/react";

const PricingStyle2 = ({ data }) => {
  const { subTitle, title, plans } = data;

  return (
    <div className="pricing7-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 m-auto">
            <div className="pricing-header heading12 text-center">
              {subTitle && (
                <h5 data-aos="fade-up" data-aos-duration="1000">
                  {parser(subTitle)}
                </h5>
              )}
              {title && <h2 className="text-anime-style-1">{parser(title)}</h2>}
            </div>
          </div>
        </div>

        <div className="row">
          {plans?.map((plan, index) => (
            <div
              key={index}
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
                  <ButtonStyle13 btnText={plan.btnText} btnUrl={plan.btnUrl} />
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

export default PricingStyle2;
