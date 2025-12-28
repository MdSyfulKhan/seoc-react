import { Outlet } from "react-router-dom";
import FooterStyle1 from "../sections/footer/FooterStyle1";
import BodyStyleManager from "../utils/BodyStyleManager";

const footerData = {
  mainClass: "footer8-section-area",
  logoSection: {
    logo: "assets/img/logo/logo9.png",
    description:
      "By optimizing content, leveraging relevant keywords, and adhering to best practices, businesses can secure prominent position (SEO)",
    socialLinks: [
      { title: "Facebook", url: "#", icon: "fa7-brands:facebook-f" },
      { title: "Instagram", url: "#", icon: "fa7-brands:instagram" },
      { title: "LinkedIn", url: "#", icon: "fa7-brands:linkedin-in" },
      { title: "YouTube", url: "#", icon: "fa7-brands:youtube" },
    ],
  },
  aboutLinks: {
    title: "About Link",
    links: [
      { title: "Our Blog", url: "/blog" },
      { title: "About Us", url: "/about" },
      { title: "Services", url: "/services" },
      { title: "Marketing", url: "/marketing" },
      { title: "Testimonials", url: "/testimonials" },
      { title: "Contact Us", url: "/contact" },
    ],
  },
  contactInfo: {
    title: "Get in touch",
    items: [
      {
        type: "email",
        title: "Email",
        value: "Infoseoc@gmail.com",
        url: "mailto:Infoseoc@gmail.com",
        icon: "assets/img/icons/email.svg",
      },
      {
        type: "address",
        title: "Address",
        value: "8708 Technology Forest Pl Suite 125-G, The Woodlands, TX 773",
        url: "#",
        icon: "assets/img/icons/location.svg",
      },
      {
        type: "phone",
        title: "Phone",
        value: "123-456-7890",
        url: "tel:123-456-7890",
        icon: "assets/img/icons/phone.svg",
      },
    ],
  },
  newsletter: {
    title: "Subscribe Our Newsletter",
    form: {
      btnText: "Subscribe",
      btnClass: "header-btn15",
      btnIcon: "fa7-solid:arrow-right",
    },
  },
  copyright: {
    text: "ⓒCopyright 2024 SEOC . All rights reserved",
    links: [
      { title: "Terms & Conditions", url: "#" },
      { title: "Privacy Policy", url: "#" },
    ],
  },
};

const LayoutStyle8 = () => {
  const layout = "homepage8";
  return (
    <>
      <BodyStyleManager layout={layout} />
      <Outlet />
      <FooterStyle1 data={footerData} />
    </>
  );
};

export default LayoutStyle8;
