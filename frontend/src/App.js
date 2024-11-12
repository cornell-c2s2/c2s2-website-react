import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/layout.tsx";
import Home from "./components/home.tsx";
import About from "./components/about.tsx";
import Sponsors from "./components/sponsors.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="sponsors" element={<Sponsors />} />
      </Route>
    </Routes>
  );
}

export default App;
