import AboutStyle2 from "../../components/sections/about/AboutStyle2";
import BlogStyle2 from "../../components/sections/blog/BlogStyle2";
import BrandStyle2 from "../../components/sections/brands/BrandStyle2";
import CtaStyle2 from "../../components/sections/cta/CtaStyle2";
import HeroStyle2 from "../../components/sections/hero/HeroStyle2";
import ServiceStyle3 from "../../components/sections/service/ServiceStyle3";
import TeamStyle1 from "../../components/sections/team/TeamStyle1";
import TestimonialStyle2 from "../../components/sections/testimonial/TestimonialStyle2";
import WorkStyle1 from "../../components/sections/working_process/WorkStyle1";
import WorkStyle2 from "../../components/sections/working_process/WorkStyle2";

const heroData = {
  title: "Pioneering SEO & Digital Marketing Solutions Agency",
  subTitle: "Top #1 SEO &amp; Marketing Agency",
  desc: "With a dedicated team of experts armed with the latest tools techniques, we specialize in crafting bespoke SEO &amp; digital marketing solutions.",
  imgUrl: "assets/img/all-images/header-img2.png",
  btnText1: "Start Ranking Now",
  btnUrl1: "/contact",
  btnText2: "Contact Now",
  btnUrl2: "/contact",
};

const brandData = {
  title: "Trusted by <br> Top Companies",
  brands: [
    { imgUrl: "assets/img/elements/brand6.png", alt: "Brand 6" },
    { imgUrl: "assets/img/elements/brand7.png", alt: "Brand 7" },
    { imgUrl: "assets/img/elements/brand8.png", alt: "Brand 8" },
    { imgUrl: "assets/img/elements/brand9.png", alt: "Brand 9" },
    { imgUrl: "assets/img/elements/brand10.png", alt: "Brand 10" },
    { imgUrl: "assets/img/elements/brand6.png", alt: "Brand 6" },
    { imgUrl: "assets/img/elements/brand7.png", alt: "Brand 7" },
    { imgUrl: "assets/img/elements/brand8.png", alt: "Brand 8" },
    { imgUrl: "assets/img/elements/brand9.png", alt: "Brand 9" },
    { imgUrl: "assets/img/elements/brand10.png", alt: "Brand 10" },
  ],
};

const aboutData = {
  subTitle: "About Us asdf",
  title: "Meet SEOC Your Trusted SEO & Digital Marketing Partner",
  desc: "We're not just another agency – we're your digital growth partners. With <br class='d-lg-block d-none'> years of industry experience and a passion for innovation, our team is <br class='d-lg-block d-none'> dedicated to delivering measurable results propel your business forward.",
  features: [
    "Digital Marketing",
    "Marketing Agency",
    "SEO Optimization",
    "First Working Process",
  ],
  author: {
    name: "John Doe",
    position: "Owner SEOC",
    imgUrl: "assets/img/all-images/about-img4.png",
    profileUrl: "/team",
  },
  imgUrl: "assets/img/all-images/about-img3.png",
};

const serviceData = {
  subTitle: "Services",
  title:
    "Elevating Your Online Presence With Expert SEO & Digital Marketing Services",
  btnText: "View More Services",
  btnUrl: "/services",
  services: [
    {
      id: 1,
      title: "Search Engine Optimization",
      iconUrl: "assets/img/icons/service-icon5.svg",
      desc: "Elevate your online visibility and drive organic traffic with our comprehensive SEO solutions. We employ proven strategies to...",
      linkUrl: "/service1",
    },
    {
      id: 2,
      title: "(PPC) Advertising",
      iconUrl: "assets/img/icons/service-icon6.svg",
      desc: "Reach your target audience instantly and generate qualified leads with our strategic PPC advertising campaigns.",
      linkUrl: "/service1",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      iconUrl: "assets/img/icons/service-icon7.svg",
      desc: "Engage and connect with your audience on social media platforms with our result-driven SMM strategies.",
      linkUrl: "/service1",
    },
    {
      id: 4,
      title: "Content Marketing",
      iconUrl: "assets/img/icons/service-icon8.svg",
      desc: "Our content marketing services encompass everything from blog posts and articles to infographics and videos, designed to boost.",
      linkUrl: "/service1",
    },
    {
      id: 5,
      title: "Web Design & Development",
      iconUrl: "assets/img/icons/service-icon9.svg",
      desc: "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development...",
      linkUrl: "/service1",
    },
    {
      id: 6,
      title: "Digital Marketing",
      iconUrl: "assets/img/icons/service-icon10.svg",
      desc: "Digital marketing encompasses a vast array of strategies and tactics, ranging from search engine optimization (SEO)",
      linkUrl: "/service1",
    },
  ],
};

const workData = {
  subTitle: "Why Choose Us",
  title: "Why Partner With SEOC Your Path To SEO & Digital Marketing Success",
  sections: [
    {
      id: 1,
      title: "Proven Track Record",
      desc: "We've helped businesses of all sizes achieve their digital goals with our data-driven strategies and personalized approach.",
      btnText: "View Our Services",
      btnUrl: "/service1",
      imgUrl: "assets/img/all-images/choose-img1.png",
      services: [
        "SEO",
        "PPC Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Web Design",
        "Development",
        "Digital Marketing",
        "Search Engine Optimization",
      ],
    },
    {
      id: 2,
      title: "Tailored Solutions",
      desc: "We understand that every business is unique. That's why we craft customized strategies tailored to your specific objectives, audience, and industry.",
      btnText: "View Our Services",
      btnUrl: "/service1",
      imgUrl: "assets/img/all-images/choose-img2.png",
      services: [
        "SEO",
        "PPC Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Web Design",
        "Development",
        "Digital Marketing",
        "Search Engine Optimization",
      ],
    },
    {
      id: 3,
      title: "Transparent Communication",
      desc: "We believe in transparent communication and keep you informed every step of the way, providing detailed reports and insights into your campaign performance.",
      btnText: "View Our Services",
      btnUrl: "/service1",
      imgUrl: "assets/img/all-images/choose-img4.png",
      services: [
        "SEO",
        "PPC Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Web Design",
        "Development",
        "Digital Marketing",
        "Search Engine Optimization",
      ],
    },
  ],
};

const workData2 = {
  subTitle: "Work Process",
  title: "Why Partner with SEOC Your Path to SEO & Digital Marketing Success",
  imgUrl: "assets/img/all-images/work-img1.png",
  processes: [
    {
      id: 1,
      title: "Strategy Development",
      iconUrl: "assets/img/icons/works-icon1.png",
      desc: "Based on our findings, we develop customized <br class='d-lg-block d-none'> digital marketing strategy tailored objective.",
      linkUrl: "/case-single",
    },
    {
      id: 2,
      title: "Monitoring & Optimization",
      iconUrl: "assets/img/icons/works-icon2.png",
      desc: "We believe in the power of data-driven decision-making. Throughout the campaign,",
      linkUrl: "/case-single",
    },
    {
      id: 3,
      title: "Continuous Improvement",
      iconUrl: "assets/img/icons/works-icon3.png",
      desc: "Digital marketing is an ever-evolving field, and we're committed to staying ahead of the curve.",
      linkUrl: "/case-single",
    },
  ],
};

const teamData = {
  subTitle: "Our Team",
  title: "Meet With Our Expert Team",
  teamMembers: [
    {
      id: 1,
      name: "John Doe",
      position: "CEO & Founder",
      imgUrl: "assets/img/all-images/team-img1.png",
      profileUrl: "/team",
      socialLinks: [
        { name: "Facebook", icon: "assets/img/icons/facebook1.svg", url: "#" },
        {
          name: "Instagram",
          icon: "assets/img/icons/instagram2.svg",
          url: "#",
        },
        { name: "LinkedIn", icon: "assets/img/icons/linkedin2.svg", url: "#" },
        { name: "Twitter", icon: "assets/img/icons/twitter1.svg", url: "#" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Digital Marketing Officer",
      imgUrl: "assets/img/all-images/team-img2.png",
      profileUrl: "/team",
      socialLinks: [
        { name: "Facebook", icon: "assets/img/icons/facebook1.svg", url: "#" },
        {
          name: "Instagram",
          icon: "assets/img/icons/instagram2.svg",
          url: "#",
        },
        { name: "LinkedIn", icon: "assets/img/icons/linkedin2.svg", url: "#" },
        { name: "Twitter", icon: "assets/img/icons/twitter1.svg", url: "#" },
      ],
    },
    {
      id: 3,
      name: "Sarah Thompson",
      position: "Web Designer",
      imgUrl: "assets/img/all-images/team-img3.png",
      profileUrl: "/team",
      socialLinks: [
        { name: "Facebook", icon: "assets/img/icons/facebook1.svg", url: "#" },
        {
          name: "Instagram",
          icon: "assets/img/icons/instagram2.svg",
          url: "#",
        },
        { name: "LinkedIn", icon: "assets/img/icons/linkedin2.svg", url: "#" },
        { name: "Twitter", icon: "assets/img/icons/twitter1.svg", url: "#" },
      ],
    },
    {
      id: 4,
      name: "David Garcia",
      position: "Content Writer",
      imgUrl: "assets/img/all-images/team-img4.png",
      profileUrl: "/team",
      socialLinks: [
        { name: "Facebook", icon: "assets/img/icons/facebook1.svg", url: "#" },
        {
          name: "Instagram",
          icon: "assets/img/icons/instagram2.svg",
          url: "#",
        },
        { name: "LinkedIn", icon: "assets/img/icons/linkedin2.svg", url: "#" },
        { name: "Twitter", icon: "assets/img/icons/twitter1.svg", url: "#" },
      ],
    },
  ],
};

const testimonialData = {
  subTitle: "Testimonials",
  title: "What Our Client Say",
  testimonials: [
    {
      id: 1,
      name: "Orlando Schulist",
      position: "Company Owner",
      desc: "Partnering with SEOC has been a transformative experience for our business. Their comprehensive approach to digital marketing has not only elevated our online presence but also streamlined our marketing efforts across multiple channels.",
      rating: 3,
      imgUrl: "assets/img/all-images/testimonial-img3.png",
      profileUrl: "/team",
    },
    {
      id: 2,
      name: "Ms. Timmy Harvey",
      position: "Company Owner",
      desc: "We've had the pleasure of working with [Your Company Name] for several years now, and they have consistently exceeded our expectations in every aspect. From the initial consultation to ongoing support, their team has demonstrated a deep understanding.",
      rating: 5,
      imgUrl: "assets/img/all-images/testimonial-img4.png",
      profileUrl: "/team",
    },
    {
      id: 3,
      name: "Orlando Schulist",
      position: "Company Owner",
      desc: "Partnering with SEOC has been a transformative experience for our business. Their comprehensive approach to digital marketing has not only elevated our online presence but also streamlined our marketing efforts across multiple channels.",
      rating: 5,
      imgUrl: "assets/img/all-images/testimonial-img3.png",
      profileUrl: "/team",
    },
  ],
};

const blogData = {
  subTitle: "Our Blog",
  title: "5 Effective Strategies For Boosting Your Website Traffic",
  blogs: [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      desc: "SEO remains one of the most powerful tools for driving organic traffic to your website. By optimizing your website keywords,",
      imgUrl: "assets/img/all-images/blog-img4.png",
      date: "15 Feb 2024",
      linkUrl: "/blog-single",
    },
    {
      id: 2,
      title: "Social Media Marketing",
      desc: "Social media platforms offer a powerful way to connect with your audience and drive traffic to your website.",
      imgUrl: "assets/img/all-images/blog-img5.png",
      date: "15 Feb 2024",
      linkUrl: "/blog-single",
    },
  ],
};

const ctaData = {
  title: "Ready to Take Your SEO To The Next Level",
  desc: "Effective SEO strategies not only elevate a website's visibility but also drive targeted traffic, enhance user experience,",
  btnText: "Get Started Now",
  btnUrl: "/contact",
  images: {
    bgImgUrl: "assets/img/bg/bg1.png",
    imgUrl: "assets/img/all-images/cta-img1.png",
  },
};

const HomePage2 = () => {
  return (
    <>
      <HeroStyle2 data={heroData} />
      <BrandStyle2 data={brandData} />
      <AboutStyle2 data={aboutData} />
      <ServiceStyle3 data={serviceData} />
      <WorkStyle1 data={workData} />
      <WorkStyle2 data={workData2} />
      <TeamStyle1 data={teamData} />
      <TestimonialStyle2 data={testimonialData} />
      <BlogStyle2 data={blogData} />
      <CtaStyle2 data={ctaData} />
    </>
  );
};

export default HomePage2;
