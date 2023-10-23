// AppRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout"; // Import the Layout component
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import TestimonialsAndReviews from "./components/TestimonialsAndReviews";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Layout>
        {" "}
        {/* Use the Layout component as a wrapper for your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/testimonials-and-reviews" element={<TestimonialsAndReviews />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Additional routes can be defined here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
