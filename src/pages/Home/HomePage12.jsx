import HeroStyle12 from "../../components/sections/hero/HeroStyle12";

const heroData = {
  subTitle: "Top #1 SEO & Marketing Agency",
  title: "Expert Consulting For Future-Ready Businesses",
  desc: "We specialize in transforming businesses through innovative <br class='d-lg-block d-none'/> strategies and tailored solutions with deep understanding.",
  imgUrl1: "assets/img/all-images/new-img/header-img12.png",
  imgUrl2: "assets/img/all-images/new-img/auhtor-img12.png",
  btnText: "Start Ranking Now",
  btnUrl: "/contact",
};

const HomePage12 = () => {
  return <HeroStyle12 data={heroData} />;
};

export default HomePage12;
