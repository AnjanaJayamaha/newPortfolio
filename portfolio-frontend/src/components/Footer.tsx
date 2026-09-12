import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {currentYear} Anjana Jayamaha. Designed & built with intent.</p>
      </div>
    </footer>
  );
};

export default Footer;
