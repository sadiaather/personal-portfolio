import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <div className="logo-icon-wrapper">
            <Sparkles className="logo-icon" size={20} />
          </div>
          <span>Sadia<span className="text-gradient">.dev</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Resume
          </NavLink>
          <NavLink to="/contact" className="btn btn-primary nav-cta">
            <span>Contact Me</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button className="nav-mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="nav-mobile-menu glass-panel animate-fade-in">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}
            onClick={() => setIsOpen(false)}
          >
            Resume
          </NavLink>
          <NavLink 
            to="/contact" 
            className="btn btn-primary nav-mobile-cta"
            onClick={() => setIsOpen(false)}
          >
            <span>Contact Me</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>
      )}
    </nav>
  );
}
