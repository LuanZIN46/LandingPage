import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          Luan<span><span> </span>Christian</span>
        </div>
        <p className="footer-phrase">
          Construindo o futuro, uma linha de código por vez.
        </p>
        <div className="footer-socials">
          <a href="#" className="social-icon-link">GH</a>
          <a href="#" className="social-icon-link">LI</a>
          <a href="#" className="social-icon-link">EM</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Seu Nome. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
