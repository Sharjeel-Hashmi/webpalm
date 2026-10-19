import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li className="nav-item dropdown">
      <div className="nav-link-container">
        <Link
          to="/services"
          style={{ padding: '10px 15px' }}
          className="nav-link"
        >
          Services
        </Link>
        <button
          onClick={toggleServicesDropdown}
          className="dropdown-toggle-icon"
          aria-expanded={isOpen}
          aria-label="Toggle services menu"
        >
          <i
            className={isOpen ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}
            style={{ color: "black" }}
          ></i>
        </button>
      </div>

      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to="/web-development" className="dropdown-item">
            Web App & Software Development
          </Link>
        </li>
        <li>
          <Link to="/graphic-designing" className="dropdown-item">
            Graphic Designing & Video Editing
          </Link>
        </li>
        <li>
          <Link to="/search-engine-optimization" className="dropdown-item">
            Search Engine Optimization (SEO)
          </Link>
        </li>
        <li>
          <Link to="/services" className="dropdown-item">
            All Services
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default ServicesDropdown;
