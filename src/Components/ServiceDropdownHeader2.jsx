import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const ServicesDropdownHeader2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown">
      <div className="services-nav-container">
        <Link className="text-dark">
        <a className='nav-link mylink' id='services_submenu'>
        Services
        </a>
        </Link>
        <button
          onClick={toggleDropdown}
          className="dropdown-toggle-icon-header2"
          aria-expanded={isOpen}
        >
          <box-icon
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            color="black"
          ></box-icon>
        </button>
      </div>

      <ul style={{zIndex:'1',marginTop:'50px'}} className={`dropdown-menu drpmenu ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to="/web-development">
            Web App & Software Development
          </Link>
        </li>
        <li>
          <Link to="/graphic-designing">
            Graphic Design & Video Editing
          </Link>
        </li>
        <li>
          <Link to="/search-engine-optimization">
            Search Engine Optimization (SEO)
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default ServicesDropdownHeader2;
