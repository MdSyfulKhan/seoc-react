import AboutStyle7 from "../../components/sections/about/AboutStyle7";
import BlogStyle6 from "../../components/sections/blog/BlogStyle6";
import BrandStyle5 from "../../components/sections/brands/BrandStyle5";
import CtaStyle6 from "../../components/sections/cta/CtaStyle6";
import HeroStyle7 from "../../components/sections/hero/HeroStyle7";
import PricingStyle2 from "../../components/sections/pricing/PricingStyle2";
import ServiceStyle7 from "../../components/sections/service/ServiceStyle7";
import TestimonialStyle6 from "../../components/sections/testimonial/TestimonialStyle6";
import WorkStyle6 from "../../components/sections/working_process/WorkStyle6";

const heroData = {
  title: "Achieve Digital Excellence with Our Tailored Solutions",
  desc: "Boost your business with our cutting-edge digital marketing and SEO services. Our experienced team is committed to helping you reach your target audience.",
  imgUrl1: "assets/img/all-images/header-img9.png",
  imgUrl2: "assets/img/all-images/header-img10.png",
  bgImgUrl: "assets/img/bg/header-bg7.png",
  content: {
    rating: 5,
    desc: "850+ Reviews",
    designation: "CEO &amp Founder",
    imgUrl: "assets/img/all-images/author-img1.png",
  },
  btnText: "Subscribe",
};

const brandData = {
  title: "We've Worked With Over 100+ Clients Around The World",
  brands: [
    {
      imgUrl: "assets/img/elements/brand-img1.png",
      alt: "Brand 1",
    },
    {
      imgUrl: "assets/img/elements/brand-img2.png",
      alt: "Brand 2",
    },
    {
      imgUrl: "assets/img/elements/brand-img3.png",
      alt: "Brand 3",
    },
    {
      imgUrl: "assets/img/elements/brand-img4.png",
      alt: "Brand 4",
    },
    {
      imgUrl: "assets/img/elements/brand-img5.png",
      alt: "Brand 5",
    },
    {
      imgUrl: "assets/img/elements/brand-img1.png",
      alt: "Brand 1",
    },
    {
      imgUrl: "assets/img/elements/brand-img2.png",
      alt: "Brand 2",
    },
    {
      imgUrl: "assets/img/elements/brand-img3.png",
      alt: "Brand 3",
    },
    {
      imgUrl: "assets/img/elements/brand-img4.png",
      alt: "Brand 4",
    },
    {
      imgUrl: "assets/img/elements/brand-img5.png",
      alt: "Brand 5",
    },
  ],
};

const aboutData = {
  subTitle: "About Us",
  title: "Unveiling the Faces And Mission Of Our Digital Marketing Agency",
  desc: "We're not just another agency – we're your digital growth partners. With years of industry experience and a passion for innovation.",
  btnText: "More About Us",
  btnUrl: "/about",
  features: [
    {
      id: 1,
      text: "Digital Marketing",
    },
    {
      id: 2,
      text: "Marketing Agency",
    },
    {
      id: 3,
      text: "SEO Optimization",
    },
    {
      id: 4,
      text: "First Working Process",
    },
  ],
  images: {
    img1: "assets/img/all-images/about-img7.png",
    img2: "assets/img/all-images/about-img8.png",
  },
  stats: {
    customerSatisfied: 16,
    suffix: "K+",
    counters: [
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
  },
};

const serviceData = {
  subTitle: "Our Service",
  title: "Comprehensive Digital Marketing Solutions to Propel Business Forward",
  services: [
    {
      id: 1,
      title: "Search Engine Optimization",
      desc: "Elevate your online visibility and drive organic <br class='d-lg-block d-none'> traffic with our comprehensive SEO solutions. <br class='d-lg-block d-none'> We employ proven strategies..",
      linkUrl: "/service5",
      imgUrl: "assets/img/all-images/service-img12.png",
    },
    {
      id: 2,
      title: "(PPC) Advertising",
      desc: "Reach your target audience instantly and <br class='d-lg-block d-none'> generate qualified leads with our strategic PPC <br class='d-lg-block d-none'> advertising campaigns.",
      linkUrl: "/service3",
      imgUrl: "assets/img/all-images/service-img13.png",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      desc: "Engage and connect with your audience on <br class='d-lg-block d-none'> social media platforms with our result-driven <br class='d-lg-block d-none'> SMM strategies.",
      linkUrl: "/service5",
      imgUrl: "assets/img/all-images/service-img14.png",
    },
    {
      id: 4,
      title: "Content Marketing",
      desc: "Our content marketing services encompass <br class='d-lg-block d-none'> everything from blog posts and articles to <br class='d-lg-block d-none'> infographics and videos, designed to boost.",
      linkUrl: "/service2",
      imgUrl: "assets/img/all-images/service-img15.png",
    },
    {
      id: 5,
      title: "Web Design & Development",
      desc: "Make a lasting impression with a professionally <br class='d-lg-block d-none'> designed and user-friendly website. Our web <br class='d-lg-block d-none'> design and development...",
      linkUrl: "/service2",
      imgUrl: "assets/img/all-images/service-img16.png",
    },
    {
      id: 6,
      title: "Digital Marketing",
      desc: "Digital marketing encompasses a vast array of <br class='d-lg-block d-none'> strategies and tactics, ranging from search <br class='d-lg-block d-none'> engine optimization (SEO)",
      linkUrl: "/service5",
      imgUrl: "assets/img/all-images/service-img17.png",
    },
  ],
};

const workData = {
  subTitle: "SEO Solution",
  title: "An Amazing Family Of SEO Solution For Every Need",
  processes: [
    {
      id: 1,
      title: "Email Verification",
      desc: "You might not think much about your email, they could actually determine how many people see your emails",
      linkUrl: "#",
      imgUrl: "assets/img/all-images/works-img3.png",
      bgImgUrl: "assets/img/bg/work-bg3.png",
    },
    {
      id: 2,
      title: "Competitor Analysis",
      desc: "If you send a lot of bounced or unwanted emails this will leave a negative mark on your sender history.",
      linkUrl: "#",
      imgUrl: "assets/img/all-images/works-img4.png",
      bgImgUrl: "assets/img/bg/work-bg4.png",
    },
    {
      id: 3,
      title: "Revenue Monitoring",
      desc: "You might not think much about your email, they could actually determine how many people see your emails",
      linkUrl: "#",
      imgUrl: "assets/img/all-images/works-img5.png",
      bgImgUrl: "assets/img/bg/work-bg5.png",
    },
  ],
};

const pricingData = {
  subTitle: "Pricing & Plan",
  title: "SEOC Pricing Plan",
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

const ctaData = {
  subTitle: "Boost",
  title: "Boost Google Search",
  desc: "Unlock the full potential of your website with our expert SEO services designed to boost your Google search rankings. In today's digital age, being visible on search engines is crucial for driving organic traffic and growing your business.",
  btnText: "Lets Find Out",
  btnUrl: "/about",
  imgUrl: "assets/img/all-images/boost-img1.png",
};

const testimonialData = {
  title: "What Our Client Say <br class='d-md-block d-none'> On Google Reviews",
  subTitle: "Testimonial",
  testimonials: [
    {
      id: 1,
      name: "John Doe",
      profileUrl: "team",
      desc: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
      rating: 5,
      logo: "assets/img/icons/google.svg",
      imgUrl: "assets/img/all-images/testimonial-img1.png",
    },
    {
      id: 2,
      name: "John Doe",
      profileUrl: "team",
      desc: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
      rating: 5,
      logo: "assets/img/icons/google.svg",
      imgUrl: "assets/img/all-images/testimonial-img2.png",
    },
    {
      id: 3,
      name: "John Doe",
      profileUrl: "team",
      desc: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
      rating: 5,
      logo: "assets/img/icons/google.svg",
      imgUrl: "assets/img/all-images/testimonial-img1.png",
    },
    {
      id: 4,
      name: "John Doe",
      profileUrl: "team",
      desc: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
      rating: 5,
      logo: "assets/img/icons/google.svg",
      imgUrl: "assets/img/all-images/testimonial-img2.png",
    },
    {
      id: 5,
      name: "John Doe",
      profileUrl: "team",
      desc: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
      rating: 5,
      logo: "assets/img/icons/google.svg",
      imgUrl: "assets/img/all-images/testimonial-img1.png",
    },
    {
      id: 6,
      name: "John Doe",
      profileUrl: "team",
      desc: "Working with SEOC has been a game-changer for our business. Their expertise in SEO and digital marketing has helped us achieve remarkable results and significantly increase our online visibility.",
      rating: 5,
      logo: "assets/img/icons/google.svg",
      imgUrl: "assets/img/all-images/testimonial-img2.png",
    },
  ],
};

const blogData = {
  subTitle: "Blog & News",
  title: "Our Latest Blog & News",
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

const HomePage7 = () => {
  return (
    <>
      <HeroStyle7 data={heroData} />
      <BrandStyle5 data={brandData} />
      <AboutStyle7 data={aboutData} />
      <ServiceStyle7 data={serviceData} />
      <WorkStyle6 data={workData} />
      <PricingStyle2 data={pricingData} />
      <CtaStyle6 data={ctaData} />
      <TestimonialStyle6 data={testimonialData} />
      <BlogStyle6 data={blogData} />
    </>
  );
};

export default HomePage7;
