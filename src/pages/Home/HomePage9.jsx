import AboutStyle1Type2 from "../../components/sections/about/AboutStyle1Type2";
import BlogStyle8 from "../../components/sections/blog/BlogStyle8";
import BrandStyle5 from "../../components/sections/brands/BrandStyle5";
import CtaStyle8 from "../../components/sections/cta/CtaStyle8";
import HeroStyle9 from "../../components/sections/hero/HeroStyle9";
import PricingStyle3 from "../../components/sections/pricing/PricingStyle3";
import ServiceStyle6Type2 from "../../components/sections/service/ServiceStyle6Type2";
import SolutionStyle1 from "../../components/sections/solution/SolutionStyle1";
import TestimonialStyle5Type2 from "../../components/sections/testimonial/TestimonialStyle5Type2";

const heroData = {
  heroTopData: {
    title: "Skyrocket Your Online Growth With Premier SEO Services",
    bgImgUrl: "assets/img/bg/header-img9.png",
  },
  heroBottomData: {
    title:
      "Grow Your Online Presence With Customized SEO And Digital Marketing Solution's.",
    subTitle: "Top #1 SEO &amp; Marketing Agency",
    btnText: "Learn More",
    btnUrl: "/about",
    funFactInfo: [
      { numberText: 500, title: "Campaigns", suffix: "+" },
      { numberText: 98, title: "Client Satisfaction", suffix: "%" },
      { numberText: 25, title: "Country Reach", suffix: "+" },
    ],
    sliderData: [
      "assets/img/all-images/header-img12.png",
      "assets/img/all-images/header-img12.png",
      "assets/img/all-images/header-img12.png",
      "assets/img/all-images/header-img12.png",
    ],
  },
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
  title: "Comprehensive SEO & Digital Marketing Solutions.",
  desc: "Welcome to SEOC your trusted partner for comprehensive SEO and digital marketing solutions. With our proven expertise and innovative strategies the digital landscape.",
  imgUrl1: "assets/img/all-images/about-img1.png",
  imgUrl2: "assets/img/all-images/about-img2.png",
  btnText: "Learn More",
  btnUrl: "/about",
};

const serviceData = {
  subTitle: "Our SEO Services",
  title:
    "Elevating Your Online Presence With Expert SEO & Digital Marketing Services",
  btnText: "More Services",
  btnUrl: "/service1",
  services: [
    {
      id: 1,
      title: "Social Media Marketing",
      desc: "Build a strong brand presence & engage with your audience on social media platforms. We create strategic social media campaigns.",
      linkUrl: "/service2",
      imgUrl: "assets/img/all-images/service-img2.png",
    },
    {
      id: 2,
      title: "Search Engine Optimization",
      desc: "Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.",
      linkUrl: "/service5",
      imgUrl: "assets/img/all-images/service-img3.png",
    },
    {
      id: 3,
      title: "Website Design & Development",
      desc: "Make a lasting impression with professionally designed and user-friendly website. Our web design and development services website.",
      linkUrl: "/service2",
      imgUrl: "assets/img/all-images/service-img4.png",
    },
  ],
};

const solutionData = {
  subTitle: "SEO Solution",
  title: "An Amazing Family Of SEO Solution For Every Need",
  solutions: [
    {
      id: 1,
      title: "Email Verification",
      desc: "You might not think much about your email, they could <br class='d-lg-block d-none'> actually determine how many people see your emails.",
      linkUrl: "/service1",
      btnText: "View Our Service",
      imgUrl: "assets/img/all-images/solution-img1.png",
    },
    {
      id: 2,
      title: "Competitor Analysis",
      desc: "If you send a lot of bounced or unwanted emails this <br class='d-lg-block d-none'> will leave a negative mark on your sender history.",
      linkUrl: "/service1",
      btnText: "View Our Service",
      imgUrl: "assets/img/all-images/solution-img2.png",
    },
    {
      id: 3,
      title: "Revenue Monitoring",
      desc: "Verify your list means that you'll no longer <br class='d-lg-block d-none'> send to dead email addresses.",
      linkUrl: "/service1",
      btnText: "View Our Service",
      imgUrl: "assets/img/all-images/solution-img3.png",
    },
  ],
};

const pricingData = {
  subTitle: "Pricing",
  title: "SEOC Special Pricing Plan",
  plans: [
    {
      id: 1,
      title: "Basic Plan - Starter",
      desc: "Our SEO and Digital Marketing agency <br class='d-lg-block d-none'> offers a range of pricing plans tailored",
      price: "$999",
      period: "monthly",
      btnText: "Choose Your Plan",
      linkUrl: "/pricing",
      featuresTitle: "Service Include:",
      features: [
        "Keyword Research",
        "One Page Optimization",
        "Basic Analytics Reporting",
      ],
      targetDesc:
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
      linkUrl: "/pricing",
      featuresTitle: "Service Include:",
      features: [
        "Keyword Research",
        "One Page Optimization",
        "Basic Analytics Reporting",
      ],
      targetDesc:
        "Growing businesses seeking to expand their reach and drive more traffic & conversions.",
      isActive: true,
    },
    {
      id: 3,
      title: "Premium Plan - Pro",
      desc: "Our SEO and Digital Marketing agency <br class='d-lg-block d-none'> offers a range of pricing plans tailored",
      price: "$2999",
      period: "monthly",
      btnText: "Choose Your Plan",
      linkUrl: "/pricing",
      featuresTitle: "Service Include:",
      features: [
        "Keyword Research",
        "One Page Optimization",
        "Basic Analytics Reporting",
      ],
      targetDesc:
        "Established businesses looking to dominate their industry online achieve maximum ROI.",
      isActive: false,
    },
  ],
};

const testimonialData = {
  subTitle: "Testimonials",
  title: "Client Success Stories: Hear What Our Clients Have To Say",
  testimonials: [
    {
      id: 1,
      desc: "“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results.”",
      author: "Leslie Alexander",
      position: "CEO, Business Administ",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img5.png",
    },
    {
      id: 2,
      desc: "“The SEO strategies implemented by SEOC have significantly increased our organic traffic and conversion rates. Their team is professional, responsive, and truly understands our business goals.”",
      author: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img6.png",
    },
    {
      id: 3,
      desc: "“Excellent service and remarkable results. Our website ranking improved dramatically within just 3 months, and we've seen a 200% increase in qualified leads. Worth every penny!”",
      author: "Michael Chen",
      position: "Founder, StartupXYZ",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img7.png",
    },
    {
      id: 4,
      desc: "“Professional team with outstanding digital marketing skills. They truly understand our business needs and delivered customized solutions that exceeded our expectations.”",
      author: "Emily Rodriguez",
      position: "Operations Manager, RetailPlus",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img8.png",
    },
    {
      id: 5,
      desc: "“The best investment we've made for our online presence. ROI has been phenomenal - we achieved 300% growth in organic traffic within 6 months of working with SEOC.”",
      author: "David Wilson",
      position: "CTO, InnovateTech",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img9.png",
    },
    {
      id: 6,
      desc: "“Working with SEOC has been a game-changer for our business. Their expertise and dedication have helped us achieve unprecedented growth in our online presence. I highly recommend to any business looking to boost their online visibility and drive meaningful results.”",
      author: "Leslie Alexander",
      position: "CEO, Business Administ",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img5.png",
    },
    {
      id: 7,
      desc: "“The SEO strategies implemented by SEOC have significantly increased our organic traffic and conversion rates. Their team is professional, responsive, and truly understands our business goals.”",
      author: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img6.png",
    },
    {
      id: 8,
      desc: "“Excellent service and remarkable results. Our website ranking improved dramatically within just 3 months, and we've seen a 200% increase in qualified leads. Worth every penny!”",
      author: "Michael Chen",
      position: "Founder, StartupXYZ",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img7.png",
    },
    {
      id: 9,
      desc: "“Professional team with outstanding digital marketing skills. They truly understand our business needs and delivered customized solutions that exceeded our expectations.”",
      author: "Emily Rodriguez",
      position: "Operations Manager, RetailPlus",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img8.png",
    },
    {
      id: 10,
      desc: "“The best investment we've made for our online presence. ROI has been phenomenal - we achieved 300% growth in organic traffic within 6 months of working with SEOC.”",
      author: "David Wilson",
      position: "CTO, InnovateTech",
      authorLink: "/team",
      imgUrl: "assets/img/all-images/testimonial-img9.png",
    },
  ],
};

const blogData = {
  subTitle: "Our Blog",
  title: "Our Latest Blog & News",
  blogs: [
    {
      id: 1,
      title: "10 Essential SEO Tips to Boost Your Website's Ranking",
      desc: "Are you looking to improve your website's visibility and attract more organic traffic?",
      author: "Ben Stokes",
      authorLink: "#",
      authorIcon: "assets/img/icons/contact1.svg",
      date: "16 August 2023",
      dateLink: "#",
      dateIcon: "assets/img/icons/calender1.svg",
      btnText: "Read More",
      linkUrl: "/blog-single",
      imgUrl: "assets/img/all-images/blog-img1.png",
    },
    {
      id: 2,
      title: "The Power of PPC Advertising: How to Maximize Your ROI",
      desc: "Unlock the full potential of your digital marketing strategy with the power of PPC.",
      author: "Ben Stokes",
      authorLink: "#",
      authorIcon: "assets/img/icons/contact1.svg",
      date: "16 August 2023",
      dateLink: "#",
      dateIcon: "assets/img/icons/calender1.svg",
      btnText: "Read More",
      linkUrl: "/blog-single",
      imgUrl: "assets/img/all-images/blog-img2.png",
    },
    {
      id: 3,
      title: "The Importance of Responsive Web Design in the Mobile Age",
      desc: "Where mobile devices dominate internet usage, responsive web design more crucial.",
      author: "Ben Stokes",
      authorLink: "#",
      authorIcon: "assets/img/icons/contact1.svg",
      date: "16 August 2023",
      dateLink: "#",
      dateIcon: "assets/img/icons/calender1.svg",
      btnText: "Read More",
      linkUrl: "/blog-single",
      imgUrl: "assets/img/all-images/blog-img3.png",
    },
  ],
};

const ctaData = {
  title: "Elevate Your Brand Online Partner with Us for Proven Digital Success",
  desc: "At SEOC, we believe that your brand has the potential to achieve greatness online. Our proven SEO and digital marketing strategies are designed to elevate your brand & drive significant growth.",
  btnText: "Schedule A Consultation",
  btnUrl: "/contact",
  imgUrl: "assets/img/all-images/cta-img2.png",
};

const HomePage9 = () => {
  return (
    <>
      <HeroStyle9 data={heroData} />
      <BrandStyle5 data={brandData} />
      <AboutStyle1Type2 data={aboutData} />
      <ServiceStyle6Type2 data={serviceData} />
      <SolutionStyle1 data={solutionData} />
      <PricingStyle3 data={pricingData} />
      <TestimonialStyle5Type2 data={testimonialData} />
      <BlogStyle8 data={blogData} />
      <CtaStyle8 data={ctaData} />
    </>
  );
};

export default HomePage9;
