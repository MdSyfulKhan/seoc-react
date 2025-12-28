import HeroStyle15 from "../../components/sections/hero/HeroStyle15";

const heroData = {
  subTitle: "<span>New</span>Startups to Achieve Unprecedented Growth",
  title: "Empowering Startups to Innovate &amp; Thrive",
  desc: "We help startups scale, innovate, succeed with comprehensive suite of services tailored to fuel your business journey.",
  imgUrl: "assets/img/all-images/new-img/header-img15.png",
  bgImgUrl: "assets/img/bg/header-bg14.png",
  btnText: "Get Started Today",
  btnUrl: "/contact",
  playBtnText: "Book A Free Consultation",
  video_url: "https://www.youtube.com/embed/jRcfE2xxSAw?autoplay=1",
  content: {
    rating: 5,
    desc: "Rated Best Over <span>15.7k</span> Reviews",
    designation: "CEO &amp Founder",
    imgUrl: "assets/img/all-images/new-img/authror-img1-h15.png",
  },
};

const HomePage15 = () => {
  return <HeroStyle15 data={heroData} />;
};

export default HomePage15;
