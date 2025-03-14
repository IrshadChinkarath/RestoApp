import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Dishes from "../pages/Dishes/Dishes";
import Booking from "../pages/Booking/Booking";
import AboutUs from "../pages/AboutUs/AboutUs"
import NotFound from "../pages/404/404"

function LayoutRoutes() {
  return (
    <Router>
      <Header backgroundColor="#fed801" colour="#5A6473" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/services" element={<Booking />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default LayoutRoutes;
