import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Places', href: '/places' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <img src="/travellogo.png" alt="Travel Logo" />
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="auth-buttons">
          <a href="/auth" className="auth-link">Sign in</a>
          <a href="/auth" className="auth-btn">Sign up</a>
        </div>

        <button 
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
