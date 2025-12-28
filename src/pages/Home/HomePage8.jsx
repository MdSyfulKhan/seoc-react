import AboutStyle8 from "../../components/sections/about/AboutStyle8";
import BlogStyle7 from "../../components/sections/blog/BlogStyle7";
import CaseStyle8 from "../../components/sections/case_study/CaseStyle4";
import CtaAnalysisStyle1 from "../../components/sections/cta/CtaAnalysisStyle1";
import CtaStyle7 from "../../components/sections/cta/CtaStyle7";
import CtaStyle8 from "../../components/sections/cta/CtaStyle8";
import HeroStyle8 from "../../components/sections/hero/HeroStyle8";
import ServiceStyle8 from "../../components/sections/service/ServiceStyle8";
import TestimonialStyle8 from "../../components/sections/testimonial/TestimonialStyle8";
import WorkStyle8 from "../../components/sections/working_process/WorkStyle8";

const heroData = {
  title: "Drive Traffic, Boost Sales, Grow Your Brand",
  desc: "Experience unparalleled growth with comprehensive SEO and digital marketing services.",
  imgUrl: "assets/img/all-images/header-img11.png",
  bgImgUrl: "assets/img/bg/header-bg8.png",
  btnText: "Get Instant Result",
  btnUrl: "Get Instant Result",
};

const aboutData = {
  subTitle: "About Us",
  title: "Meet the Experts Behind Your Online Success",
  desc: "SEOC is more than just an SEO and digital marketing agency – we are a team of passionate professionals committed to your success. Our journey began with a simple goal: to help businesses navigate the complex digital landscape and achieve measurable growth.",
  btnText: "Discover More",
  btnUrl: "/about",
  imgUrl: "assets/img/all-images/about-img9.png",
  stats: [
    {
      id: 1,
      value: 500,
      suffix: "+",
      label: "Campaigns",
    },
    {
      id: 2,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
    },
    {
      id: 3,
      value: 25,
      suffix: "+",
      label: "Country Reach",
    },
    {
      id: 4,
      value: 15,
      suffix: "+",
      label: "Certified Experts",
    },
  ],
};

const serviceData = {
  subTitle: "Our Service",
  title: "Unveiling The Faces And Mission Of Our Digital Marketing Agency",
  btnText: "View More Service",
  btnUrl: "/service1",
  services: [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      desc: "Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.",
      linkUrl: "/service5",
      iconUrl: "assets/img/icons/service-icons19.svg",
    },
    {
      id: 2,
      title: "Pay-Per-Click (PPC) Advertising",
      desc: "Reach your audience instantly and drive qualified leads with targeted PPC campaigns. Our experts craft compelling ad copy and optimize.",
      linkUrl: "/service3",
      iconUrl: "assets/img/icons/service-icons20.svg",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      desc: "Build a strong brand presence and engage with your audience on social media platforms. We create strategic social media campaigns to boost brand.",
      linkUrl: "/service2",
      iconUrl: "assets/img/icons/service-icons21.svg",
    },
    {
      id: 4,
      title: "Website Design and Development",
      desc: "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development services ensure website.",
      linkUrl: "/service4",
      iconUrl: "assets/img/icons/service-icons22.svg",
    },
  ],
};

const caseData = {
  subTitle: "Case Study",
  title: "Our Case Studies",
  btnText: "Schedule a Consultation",
  btnUrl: "/case",
  cases: [
    {
      id: 1,
      title: "SEO Optimization",
      desc: "We began by optimizing Steve <br> Jons website for relevant...",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img19.png",
    },
    {
      id: 2,
      title: "SEO Optimization",
      desc: "We began by optimizing Steve <br> Jons website for relevant...",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img20.png",
    },
    {
      id: 3,
      title: "SEO Optimization",
      desc: "We began by optimizing Steve <br> Jons website for relevant...",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img21.png",
    },
    {
      id: 4,
      title: "SEO Optimization",
      desc: "We began by optimizing Steve <br> Jons website for relevant...",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img19.png",
    },
    {
      id: 5,
      title: "SEO Optimization",
      desc: "We began by optimizing Steve <br> Jons website for relevant...",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img20.png",
    },
    {
      id: 6,
      title: "SEO Optimization",
      desc: "We began by optimizing Steve <br> Jons website for relevant...",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img21.png",
    },
  ],
};

const workData = {
  subTitle: "Work Process",
  title:
    "Why Partner With SEOC Your Path To <br class='d-lg-block d-none'> SEO & Digital Marketing Success",
  image: {
    imgUrl: "assets/img/all-images/work-img6.png",
    alt: "Work Process",
  },
  workSteps: [
    {
      id: 1,
      title: "Strategy Development",
      desc: "Based on our findings, we develop customized <br class='d-lg-block d-none'> digital marketing strategy tailored objective.",
      linkUrl: "/case-single",
    },
    {
      id: 2,
      title: "Monitoring & Optimization",
      desc: "We believe in the power of data-driven <br class='d-lg-block d-none'> decision-making. Throughout the campaign.",
      linkUrl: "/case-single",
    },
    {
      id: 3,
      title: "Continuous Improvement",
      desc: "Digital marketing is an ever-evolving field, and <br class='d-lg-block d-none'> we're committed to staying ahead of the curve.",
      linkUrl: "/case-single",
    },
  ],
};

const ctaAnalysisData = {
  subTitle: "Competitor",
  title: "Competitor Analysis",
  bgImgUrl: "assets/img/bg/cta-bg1.png",
  bgImgUrl2: "assets/img/bg/cta-bg2.png",
  btnText: "Analyze Now",
  suggestions: ["Marketing", "Laptop", "iPhone"],
};

const testimonialData = {
  subTitle: "Testimonials",
  title: "What Our Client Say",
  testimonials: [
    {
      id: 1,
      desc: "Working with SEOC has been a game-changer for our business. Their strategic approach to SEO digital marketing has significantly increased our online visibility and lead generation.”",
      author: "Sarah L.",
      authorLink: "/team",
      rating: 4,
      logoUrl: "assets/img/icons/google1.svg",
    },
    {
      id: 2,
      desc: "“We've been partnering with SEOC for over a year now, and the results speak for themselves. Their comprehensive digital marketing solutions have helped us achieve measurable growth.",
      author: "David M.",
      authorLink: "/team",
      rating: 4,
      logoUrl: "assets/img/icons/google1.svg",
    },
    {
      id: 3,
      desc: '"As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us."',
      author: "Emily R.",
      authorLink: "/team",
      rating: 5,
      logoUrl: "assets/img/icons/google1.svg",
    },
    {
      id: 4,
      desc: "Working with SEOC has been a game-changer for our business. Their strategic approach to SEO digital marketing has significantly increased our online visibility and lead generation.”",
      author: "Sarah L.",
      authorLink: "/team",
      rating: 5,
      logoUrl: "assets/img/icons/google1.svg",
    },
    {
      id: 5,
      desc: "“We've been partnering with SEOC for over a year now, and the results speak for themselves. Their comprehensive digital marketing solutions have helped us achieve measurable growth.",
      author: "David M.",
      authorLink: "/team",
      rating: 5,
      logoUrl: "assets/img/icons/google1.svg",
    },
    {
      id: 6,
      desc: '"As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us."',
      author: "Emily R.",
      authorLink: "/team",
      rating: 5,
      logoUrl: "assets/img/icons/google1.svg",
    },
  ],
};

const blogData = {
  subTitle: "Our Blog",
  title: "Our Latest Blog & Articles",
  blogs: [
    {
      id: 1,
      title: "10 Essential SEO Tips to Boost Your Website's Ranking",
      desc: "Are you looking to improve your website's visibility and attract more organic traffic?",
      category: "SEO",
      categoryLink: "#",
      author: "Anderson",
      authorLink: "#",
      authorIcon: "assets/img/icons/contact1.svg",
      btnText: "Read More",
      linkUrl: "/blog-single",
      date: "09, MAY 2024",
      dateLink: "#",
      imgUrl: "assets/img/all-images/blog-img1.png",
    },
    {
      id: 2,
      title: "The Power of PPC Advertising: How to Maximize Your ROI",
      desc: "Unlock the full potential of your digital marketing strategy with the power of PPC.",
      category: "PPC",
      categoryLink: "#",
      author: "Jon Doe",
      authorLink: "#",
      authorIcon: "assets/img/icons/contact1.svg",
      btnText: "Read More",
      linkUrl: "/blog-single",
      date: "10, MAY 2024",
      dateLink: "#",
      imgUrl: "assets/img/all-images/blog-img2.png",
    },
    {
      id: 3,
      title: "The Importance of Responsive Web Design in the Mobile Age",
      desc: "Where mobile devices dominate internet usage, responsive web design more crucial.",
      category: "Web Design",
      categoryLink: "#",
      author: "William Lee",
      authorLink: "#",
      authorIcon: "assets/img/icons/contact1.svg",
      btnText: "Read More",
      linkUrl: "/blog-single",
      date: "12, MAY 2024",
      dateLink: "#",
      imgUrl: "assets/img/all-images/blog-img3.png",
    },
  ],
};

const ctaData = {
  title: "Start Your Journey To Online Success Today",
  desc: "Your business deserves to shine in the digital world. SEOC is here to make that happen. Our proven <br class='d-lg-block d-none'> strategies and personalized approach ensure that your unique needs are met.",
  imgUrl: "assets/img/bg/cta-bg2.png",
  imgUrl2: "assets/img/bg/cta-bg1.png",
  btnText: "Get Started Today",
  btnUrl: "#",
  btnText2: "Request a Consultation",
  btnUrl2: "#",
};

const HomePage8 = () => {
  return (
    <>
      <HeroStyle8 data={heroData} />
      <AboutStyle8 data={aboutData} />
      <ServiceStyle8 data={serviceData} />
      <CaseStyle8 data={caseData} />
      <WorkStyle8 data={workData} />
      <CtaAnalysisStyle1 data={ctaAnalysisData} />
      <TestimonialStyle8 data={testimonialData} />
      <BlogStyle7 data={blogData} />
      <CtaStyle7 data={ctaData} />
    </>
  );
};

export default HomePage8;
