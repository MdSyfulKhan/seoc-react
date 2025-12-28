import { Outlet } from "react-router-dom";
import FooterStyle1 from "../sections/footer/FooterStyle1";
import BodyStyleManager from "../utils/BodyStyleManager";
import FooterStyle3 from "../sections/footer/FooterStyle3";

const footerData = {
  mainClass: "footer15-section-area sp8",
  footerColumns: [
    {
      title: "Quick Links",
      links: [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about" },
        { title: "Services", url: "/services" },
        { title: "Blog", url: "/blog" },
        { title: "Testimonials", url: "/testimonials" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { title: "Business Strategy", url: "#" },
        { title: "Content Creation", url: "#" },
        { title: "Product Development", url: "#" },
        { title: "Design & Development", url: "#" },
        { title: "Startup Mentorship", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "FAQ’S", url: "/faq" },
        { title: "Case Studies", url: "/case" },
        { title: "Startup Toolkit", url: "#" },
        { title: "Ebooks And Guides", url: "#" },
        { title: "Startup Mentorship", url: "#" },
      ],
    },
    {
      title: "Quick Services",
      links: [
        { title: "UI Design", url: "#" },
        { title: "Web Design", url: "#" },
        { title: "Branding", url: "#" },
        { title: "Webflow", url: "#" },
        { title: "Development", url: "#" },
      ],
    },
    {
      title: "New York",
      links: [
        { title: "1447 Street Charleston, New York", url: "#" },
        { title: "+2 258-254-257", url: "tel:+2258-254-257" },
        { title: "info@seocagency.com", url: "mailto:info@seocagency.com" },
      ],
    },
    {
      title: "London",
      links: [
        { title: "857 Street Western, London", url: "#" },
        { title: "+2 258-254-257", url: "tel:+2258-254-257" },
        { title: "info@seocagency.com", url: "mailto:info@seocagency.com" },
      ],
    },
  ],
  logoSection: {
    logo: "assets/img/logo/logo16.png",
    text: "© 2024 SEOC, Inc. All Rights Reserved.",
    socialLinks: [
      { title: "GitHub", url: "#", icon: "fa7-brands:github" },
      { title: "Facebook", url: "#", icon: "fa7-brands:facebook-f" },
      { title: "Twitter", url: "#", icon: "fa7-brands:twitter" },
      { title: "Dribbble", url: "#", icon: "fa7-brands:dribbble" },
    ],
  },
};

const LayoutStyle15 = () => {
  const layout = "homepage15";
  return (
    <>
      <BodyStyleManager layout={layout} />
      <Outlet />
      <FooterStyle3 data={footerData} />
    </>
  );
};

export default LayoutStyle15;
