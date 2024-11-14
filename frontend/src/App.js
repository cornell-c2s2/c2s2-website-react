// import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/index.css";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/layout.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Sponsors from "./components/sponsors.js";
import Apply from "./components/apply.js"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/apply" element={<Apply />} />
      </Route>
    </Routes>
  );
}

export default App;
