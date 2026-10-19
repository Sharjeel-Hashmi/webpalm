import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const ServicesDropdownHeader3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown">
      <div className="services-nav-container d-flex align-items-center">
        <Link to="/services" className="nav-link mylink text-dark">
          Services
        </Link>
        <button
          onClick={toggleDropdown}
          className="dropdown-toggle-icon-header2"
          aria-expanded={isOpen}
          aria-label="Toggle services menu"
        >
          <i
            className={isOpen ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}
            style={{ color: "black" }}
          ></i>
        </button>
      </div>

      <ul style={{ zIndex: '1', marginTop: '34px' }} className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to="/web-development">
            Web App & Software Development
          </Link>
        </li>
        <li>
          <Link to="/graphic-designing">
            Graphic Designing & Video Editing
          </Link>
        </li>
        <li>
          <Link to="/search-engine-optimization">
            Search Engine Optimization (SEO)
          </Link>
        </li>
        <li>
          <Link to="/services">
            All Services
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default ServicesDropdownHeader3;
