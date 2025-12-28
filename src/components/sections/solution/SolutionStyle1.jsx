import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ButtonStyle16 from "../../button/ButtonStyle16";

const SolutionStyle1 = ({ data }) => {
  const { subTitle, title, solutions } = data;
  console.log(solutions);

  return (
    <div className="solution9-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="solution-header text-center heading14">
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
        {/* solution-boxarea */}
        <div className="row">
          <div className="col-lg-10 m-auto">
            {solutions?.map((solution, index) => (
              <div key={index}>
                <div
                  className={
                    index === 0
                      ? "solution-boxarea"
                      : `solution-boxarea${solution.id}`
                  }
                >
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div
                        className="img1"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        <img src={solution.imgUrl} alt={solution.title} />
                      </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                      <div className="step-header">
                        <h5 data-aos="fade-left" data-aos-duration="800">
                          <img src="assets/img/icons/logo-icons2.svg" alt="" />{" "}
                          Step {solution.id}
                        </h5>
                        <div className="space16"></div>
                        <h2 data-aos="fade-left" data-aos-duration="1000">
                          {solution.title}
                        </h2>
                        <div className="space16"></div>
                        <p data-aos="fade-left" data-aos-duration="1100">
                          {parser(solution.desc)}
                        </p>
                        <div className="space32"></div>
                        <div data-aos="fade-left" data-aos-duration="1200">
                          <ButtonStyle16
                            btnText={solution.btnText}
                            btnUrl={solution.linkUrl}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add spacing between solutions except the last one */}
                {index < solutions.length - 1 && (
                  <div className="space32"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionStyle1;
