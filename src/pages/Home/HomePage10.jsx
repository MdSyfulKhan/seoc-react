import HeroStyle10 from "../../components/sections/hero/HeroStyle10";

const heroData = {
  title: "Grow Your Business Online",
  desc: " At SEOC, we specialize in driving targeted traffic, and boosting conversions with our expert SEO and digital marketing services.",
  imgUrl: "assets/img/all-images/header-img13.png",
  bgImgUrl: "assets/img/bg/header-bg11.png",
  btnText: "Get Started",
  btnUrl: "/contact",
  playBtnText: "Play Videos",
  video_url: "https://www.youtube.com/embed/jRcfE2xxSAw?autoplay=1",
  content: {
    rating: 5,
    desc: "850+ Reviews",
    designation: "CEO &amp Founder",
    imgUrl: "assets/img/all-images/author-img2.png",
  },
};

const HomePage10 = () => {
  return <HeroStyle10 data={heroData} />;
};

export default HomePage10;
