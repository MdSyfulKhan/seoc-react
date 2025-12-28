import { Outlet } from "react-router-dom";
import BodyStyleManager from "../utils/BodyStyleManager";
import FooterStyle2 from "../sections/footer/FooterStyle2";

const footerData = {
  mainClass: "footer12-section-area",
  logoSection: {
    logo: "assets/img/logo/logo13.png",
    description:
      "Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.",
    socialLinks: [
      { title: "Facebook", url: "#", icon: "fa7-brands:facebook-f" },
      { title: "Instagram", url: "#", icon: "fa7-brands:instagram" },
      { title: "LinkedIn", url: "#", icon: "fa7-brands:linkedin-in" },
      { title: "YouTube", url: "#", icon: "fa7-brands:youtube" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { title: "About Us", url: "/about" },
      { title: "Our Services", url: "/services" },
      { title: "Our Solution", url: "/services" },
      { title: "Our Blog", url: "/blog" },
      { title: "Contact Us", url: "/contact" },
    ],
  },
  serviceLinks: {
    title: "Our Services",
    links: [
      { title: "Accounting Finance", url: "/services" },
      { title: "Business Consulting", url: "/services" },
      { title: "Technology Services", url: "/services" },
      { title: "Logistics Services", url: "/services" },
      { title: "Front Line Support", url: "/services" },
    ],
  },
  contactInfo: {
    title: "Contact Us",
    items: [
      {
        type: "phone",
        title: "Phone",
        value: "+1 123 456 7890",
        url: "tel:+11234567890",
        icon: "fa7-solid:phone-volume",
      },
      {
        type: "address",
        title: "Address",
        value: "421 Allen, Mexico 4233",
        url: "#",
        icon: "fa7-solid:location-dot",
      },
      {
        type: "email",
        title: "Email",
        value: "seocstaffngagency@com",
        url: "mailto:seocstaffngagency@com",
        icon: "fa7-solid:envelope",
      },
      {
        type: "website",
        title: "Website",
        value: "seocstaffngagency@com",
        url: "mailto:seocstaffngagency@com",
        icon: "fa7-solid:globe",
      },
    ],
  },
  copyright: {
    text: "ⓒCopyright 2024 SEOC . All rights reserved",
    links: [],
  },
};

const LayoutStyle12 = () => {
  const layout = "homepage12";
  return (
    <>
      <BodyStyleManager layout={layout} />
      <Outlet />
      <FooterStyle2 data={footerData} />
    </>
  );
};

export default LayoutStyle12;
