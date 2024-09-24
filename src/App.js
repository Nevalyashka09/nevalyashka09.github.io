import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./portfolioComponents/Header";
import Footer from "./portfolioComponents/Footer";
import ContactSection from "./portfolioComponents/ContactSection";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CodeSamples from "./pages/CodeSamples";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/code-samples" element={<CodeSamples />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
