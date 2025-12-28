import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// plugin-files
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper-bundle.css";
import "odometer/themes/odometer-theme-default.css";

// custom sass file
import "./scss/style.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
