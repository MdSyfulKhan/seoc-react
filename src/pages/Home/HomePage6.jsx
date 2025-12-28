import PricingStyle1 from "../../components/sections/pricing/PricingStyle1";
import AboutStyle4 from "../../components/sections/about/AboutStyle4";
import BlogStyle4 from "../../components/sections/blog/BlogStyle4";
import CaseStyle2 from "../../components/sections/case_study/CaseStyle2";
import CtaStyle4 from "../../components/sections/cta/CtaStyle4";
import HeroStyle6 from "../../components/sections/hero/HeroStyle6";
import ServiceStyle5 from "../../components/sections/service/ServiceStyle5";
import TestimonialStyle4 from "../../components/sections/testimonial/TestimonialStyle4";
import WorkStyle5 from "../../components/sections/working_process/WorkStyle5";

const heroData = {
  subTitle: "Top #1 SEO & Marketing Agency",
  title:
    'Drive Your Business Forward With Our Expert <img src="assets/img/all-images/header-pera1.png" alt=""><span>Digital Marketing <img src="assets/img/elements/line-img1.png" alt=""></span> Solutions',
  desc: "Welcome to SEOC where we specialize in revolutionizing your online <br class='d-lg-block d-none'> presence through expert SEO and digital marketing solutions.",
  btnText: "START RANKING NOW",
  btnUrl: "/contact",
  btnText2: "GET STARTED NOW",
  btnUrl2: "/contact",
  bgImgUrl: "assets/img/bg/header-bg4.png",
  imgUrl: "assets/img/all-images/header-img7.png",
  author: {
    rating: 5,
    desc: "“We are dedicated, reliable <br> & assigned to grow your business.”",
    author: "CEO & Founder",
    icon: "assets/img/icons/star1.svg",
  },
};

const aboutData = {
  title:
    "Comprehensive SEO & <span>Digital Marketing<img src='assets/img/elements/line-img2.png' alt=''/></span> Solutions.",
  desc: "Welcome to SEOC your trusted partner for comprehensive SEO and digital marketing solutions. With our proven expertise and innovative strategies the digital landscape.",
  imgUrl1: "assets/img/all-images/about-img1.png",
  imgUrl2: "assets/img/all-images/about-img2.png",
  btnText: "Learn More",
  btnUrl: "/about",
};

const serviceData = {
  subTitle: "Our Service",
  title:
    'Our Comprehensive Suite Of Digital Marketing <span>Services. <img src="assets/img/elements/line-img2.png" alt=""></span>',
  btnText: "View More Services",
  btnUrl: "/services",
  services: [
    {
      id: 1,
      title: "Search Engine Optimization",
      desc: "Our team of experts will optimize your site's on-page elements, create high-quality content, and build authoritative backlinks to boost your rankings attract.",
      linkUrl: "/service1",
      iconUrl: "assets/img/icons/service-icon11.svg",
    },
    {
      id: 2,
      title: "Pay-Per-Click(PPC) Advertising",
      desc: "Maximize your ROI with strategic PPC campaigns tailored to your business objectives. Whether you're looking to increase brand awareness,",
      linkUrl: "/service1",
      iconUrl: "assets/img/icons/service-icon12.svg",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      desc: "Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.",
      linkUrl: "/service1",
      iconUrl: "assets/img/icons/service-icon13.svg",
    },
    {
      id: 4,
      title: "Content Marketing",
      desc: "Nurture leads, drive conversions, and build customer loyalty with targeted email marketing campaigns. From automated drip campaigns & personalized newsletters.",
      linkUrl: "/service1",
      iconUrl: "assets/img/icons/service-icon14.svg",
    },
  ],
};

const caseData = {
  subTitle: "Case Study",
  title:
    'Our Handpicked Digital Marketing <span>Case Study <img src="assets/img/elements/line-img2.png" alt=""></span>',
  btnText: "View More Case Study",
  btnUrl: "/cases",
  cases: [
    {
      id: 1,
      title: "Website Design & Development",
      category: "Digital Art. Illustrations",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img1.png",
      iconUrl: "assets/img/icons/case-icon1.svg",
    },
    {
      id: 2,
      title: "SEO",
      category: "Digital Art. Illustrations",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img2.png",
      iconUrl: "assets/img/icons/case-icon1.svg",
    },
    {
      id: 3,
      title: "PPC Advertising",
      category: "Digital Art. Illustrations",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img3.png",
      iconUrl: "assets/img/icons/case-icon1.svg",
    },
    {
      id: 4,
      title: "Social Media Marketing",
      category: "Digital Art. Illustrations",
      linkUrl: "/case-single",
      imgUrl: "assets/img/all-images/case-img4.png",
      iconUrl: "assets/img/icons/case-icon1.svg",
    },
  ],
};

const workData = {
  subTitle: "Work Process",
  title:
    'SEOC Your Path to SEO & Digital <span>Marketing Success <img src="assets/img/elements/line-img1.png" alt=""></span>',
  desc: "From increasing your website's visibility on search engines to engaging with your audience on social media,",
  btnText: "Learn More",
  btnUrl: "/cases",
  imgUrl: "assets/img/all-images/case-img8.png",
  processSteps: [
    {
      id: 1,
      title: "Strategy Development",
      desc: "Based on our findings, we develop <br class='d-lg-block d-none'> customized digital marketing strategy <br class='d-lg-block d-none'> tailored objective.",
      url: "/case-single",
      iconUrl: "assets/img/icons/works-icon4.svg",
    },
    {
      id: 2,
      title: "Monitoring & Optimization",
      desc: "We believe in the power of data-driven <br class='d-lg-block d-none'> decision-making. Throughout the <br class='d-lg-block d-none'> campaign,",
      url: "/case-single",
      iconUrl: "assets/img/icons/works-icon5.svg",
    },
    {
      id: 3,
      title: "Continuous Improvement",
      desc: "Digital marketing is an ever-evolving field, <br class='d-lg-block d-none'> and we're committed to staying ahead of <br class='d-lg-block d-none'> the SEOC curve.",
      url: "/case-single",
      iconUrl: "assets/img/icons/works-icon6.svg",
    },
  ],
};

const pricingData = {
  subTitle: "Pricing & Plan",
  title:
    'SEOC <span>Pricing Plan <img src="assets/img/elements/line-img2.png" alt=""></span>',
  plans: [
    {
      id: 1,
      title: "Basic Plan - Starter",
      desc: "Our SEO and Digital Marketing agency <br class='d-lg-block d-none'> offers a range of pricing plans tailored",
      price: "$999",
      period: "monthly",
      btnText: "Choose Your Plan",
      btnUrl: "/pricing",
      featuresTitle: "Service Include:",
      features: [
        "Keyword Research",
        "One Page Optimization",
        "Basic Analytics Reporting",
      ],
      desc2:
        "Small businesses or startups looking to <br class='d-lg-block d-none'> establish their online presence.",
      isActive: false,
    },
    {
      id: 2,
      title: "Standard Plan - Growth",
      desc: "Our SEO and Digital Marketing agency <br class='d-lg-block d-none'> offers a range of pricing plans tailored",
      price: "$1999",
      period: "monthly",
      btnText: "Choose Your Plan",
      btnUrl: "/pricing",
      featuresTitle: "Service Include:",
      features: [
        "Keyword Research",
        "One Page Optimization",
        "Basic Analytics Reporting",
      ],
      desc2:
        "Small businesses or startups looking to <br class='d-lg-block d-none'> establish their online presence.",
      isActive: true,
    },
    {
      id: 3,
      title: "Premium Plan - Pro",
      desc: "Our SEO and Digital Marketing agency <br class='d-lg-block d-none'> offers a range of pricing plans tailored",
      price: "$2999",
      period: "monthly",
      btnText: "Choose Your Plan",
      btnUrl: "/pricing",
      featuresTitle: "Service Include:",
      features: [
        "Keyword Research",
        "One Page Optimization",
        "Basic Analytics Reporting",
      ],
      desc2:
        "Small businesses or startups looking to <br class='d-lg-block d-none'> establish their online presence.",
      isActive: false,
    },
  ],
};

const testimonialData = {
  subTitle: "Testimonials",
  title:
    '“What Our <span>Client Say” <img src="assets/img/elements/line-img2.png" alt=""></span>',
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
  subTitle: "Blog & News",
  title:
    '"Insights & Updates <span>Digital Marketing <img src="assets/img/elements/line-img1.png" alt=""></span>',
  blogs: [
    {
      id: 1,
      title:
        "Social Media Marketing Strategies to Drive Engagement and Conversions",
      desc: "Discover the latest trends and best practices in social media marketing with our comprehensive guide. Learn how to leverage different.",
      linkUrl: "/blog-single",
      imgUrl: "assets/img/all-images/blog-img6.png",
      author: "John Doe",
      authorLink: "#",
      date: "12 Feb 2024",
      dateLink: "#",
    },
    {
      id: 2,
      title:
        "Content Marketing 101: How to Create Compelling Content That Converts",
      desc: "Unlock the secrets to successful content marketing with our expert tips and strategies. Whether you're a beginner or a seasoned marketer.",
      linkUrl: "/blog-single",
      imgUrl: "assets/img/all-images/blog-img7.png",
      author: "John Doe",
      authorLink: "#",
      date: "12 Feb 2024",
      dateLink: "#",
    },
  ],
};

const ctaData = {
  title:
    'Ready To Take Your SEO To <br class="d-md-block d-none"> The Next Level',
  desc: 'Effective SEO strategies not only elevate a website\'s visibility but also drive <br class="d-md-block d-none"> targeted traffic, enhance user experience,',
  btnText: "Get A Free Consultation",
  btnUrl: "/contact",
};

const HomePage6 = () => {
  return (
    <>
      <HeroStyle6 data={heroData} btnClass="header-btn6" />
      <AboutStyle4 data={aboutData} btnClass="header-btn6" />
      <ServiceStyle5 data={serviceData} btnClass="header-btn6" />
      <CaseStyle2 data={caseData} btnClass="header-btn6" />
      <WorkStyle5 data={workData} btnClass="header-btn6" />
      <PricingStyle1 data={pricingData} btnClass="header-btn6" />
      <TestimonialStyle4 data={testimonialData} />
      <BlogStyle4 data={blogData} />
      <CtaStyle4 data={ctaData} btnClass="header-btn6" />
    </>
  );
};

export default HomePage6;
