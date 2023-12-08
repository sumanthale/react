import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

import Skills from "../components/Skills";
import Technology from "../components/Technology";

export default function ROUTES() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/tech" element={<Technology />} />
      <Route exact path="/contact" element={<Contact />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
