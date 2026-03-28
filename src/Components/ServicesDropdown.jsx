import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css'

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li className="nav-item dropdown">
  <div className="nav-link-container">
    <Link>
    <a style={{padding:'8px 12px'}} className="nav-link" id="services_submenu">
    Services
    </a>
    </Link>
    <button
      onClick={toggleServicesDropdown}
      className="dropdown-toggle-icon"
      aria-expanded={isOpen}
    >
      <box-icon 
        name={isOpen ? 'chevron-up' : 'chevron-down'}
      ></box-icon>
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
  </ul>
</li>

  );
};

export default ServicesDropdown;
