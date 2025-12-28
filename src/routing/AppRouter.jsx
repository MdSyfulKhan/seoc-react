import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutStyle1 from "../components/layout/LayoutStyle1";
import LayoutStyle2 from "../components/layout/LayoutStyle2";
import LayoutStyle3 from "../components/layout/LayoutStyle3";
import LayoutStyle15 from "../components/layout/LayoutStyle15";
import LayoutStyle14 from "../components/layout/LayoutStyle14";
import LayoutStyle13 from "../components/layout/LayoutStyle13";
import LayoutStyle12 from "../components/layout/LayoutStyle12";
import LayoutStyle11 from "../components/layout/LayoutStyle11";
import LayoutStyle10 from "../components/layout/LayoutStyle10";
import LayoutStyle9 from "../components/layout/LayoutStyle9";
import LayoutStyle8 from "../components/layout/LayoutStyle8";
import LayoutStyle7 from "../components/layout/LayoutStyle7";
import LayoutStyle6 from "../components/layout/LayoutStyle6";
import LayoutStyle5 from "../components/layout/LayoutStyle5";
import LayoutStyle4 from "../components/layout/LayoutStyle4";
import HomePage from "../pages/Home/HomePage";
import HomePage2 from "../pages/Home/HomePage2";
import HomePage3 from "../pages/Home/HomePage3";
import HomePage4 from "../pages/Home/HomePage4";
import HomePage5 from "../pages/Home/HomePage5";
import HomePage6 from "../pages/Home/HomePage6";
import HomePage7 from "../pages/Home/HomePage7";
import HomePage8 from "../pages/Home/HomePage8";
import HomePage9 from "../pages/Home/HomePage9";
import HomePage10 from "../pages/Home/HomePage10";
import HomePage11 from "../pages/Home/HomePage11";
import HomePage12 from "../pages/Home/HomePage12";
import HomePage13 from "../pages/Home/HomePage13";
import HomePage14 from "../pages/Home/HomePage14";
import HomePage15 from "../pages/Home/HomePage15";
import ContactPage from "../pages/ContactPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutStyle1 />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="/home-2" element={<LayoutStyle2 />}>
          <Route index element={<HomePage2 />} />
        </Route>
        <Route path="/home-3" element={<LayoutStyle3 />}>
          <Route index element={<HomePage3 />} />
        </Route>
        <Route path="/home-4" element={<LayoutStyle4 />}>
          <Route index element={<HomePage4 />} />
        </Route>
        <Route path="/home-5" element={<LayoutStyle5 />}>
          <Route index element={<HomePage5 />} />
        </Route>
        <Route path="/home-6" element={<LayoutStyle6 />}>
          <Route index element={<HomePage6 />} />
        </Route>
        <Route path="/home-7" element={<LayoutStyle7 />}>
          <Route index element={<HomePage7 />} />
        </Route>
        <Route path="/home-8" element={<LayoutStyle8 />}>
          <Route index element={<HomePage8 />} />
        </Route>
        <Route path="/home-9" element={<LayoutStyle9 />}>
          <Route index element={<HomePage9 />} />
        </Route>
        <Route path="/home-10" element={<LayoutStyle10 />}>
          <Route index element={<HomePage10 />} />
        </Route>
        <Route path="/home-11" element={<LayoutStyle11 />}>
          <Route index element={<HomePage11 />} />
        </Route>
        <Route path="/home-12" element={<LayoutStyle12 />}>
          <Route index element={<HomePage12 />} />
        </Route>
        <Route path="/home-13" element={<LayoutStyle13 />}>
          <Route index element={<HomePage13 />} />
        </Route>
        <Route path="/home-14" element={<LayoutStyle14 />}>
          <Route index element={<HomePage14 />} />
        </Route>
        <Route path="/home-15" element={<LayoutStyle15 />}>
          <Route index element={<HomePage15 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
