import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import { PageWrapper } from "./PageWrapper";
import { Routes, Route } from 'react-router-dom';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <PageWrapper>
      <Routes>
          <Route path="/react-portfolio" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </PageWrapper>
    </div>
  );
}
