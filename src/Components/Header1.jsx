import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import ServicesDropdown from './ServicesDropdown';
import ServicesDropdownHeader3 from './ServiceDropdownHeader3';

export default function Header1() {
  const [openIcons, setOpenIcons] = useState({
    "nav-icon3": false,
  });

  const handleToggle = (id) => {
    setOpenIcons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <header className="site_header site_header_2">
      <div className="header_bottom stricky original">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="site_logo">
                <Link to="/" className="site_link">
                  <img
                    style={{ maxWidth: '180px' }}
                    src="./assets/images/site_logo/site_logo_002.png"
                    alt="WebPalm - Web Application & Software Development in Dublin"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li className="active">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio" className="nav-link">
                        Portfolio
                      </Link>
                    </li>
                    <ServicesDropdown />
                    <li>
                      <Link to="/pricing" className="nav-link">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="/career" className="nav-link">
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <div
                      id="nav-icon3"
                      className={`nav-icon3 ${
                        openIcons["nav-icon3"] ? "open" : ""
                      }`}
                      onClick={() => handleToggle("nav-icon3")}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </button>
                </li>
                <li>
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Get A Free Quote">
                      Get A Free Quote
                    </span>
                    <span className="btn_icon ms-2">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- STICKY HEADER --> */}
      <div className="header_bottom stricky stricked-menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2 col-5">
              <div className="site_logo">
                <Link className="site_link" to="/">
                  <img
                    style={{ maxWidth: '170px' }}
                    src="./assets/images/site_logo/site_logo_002.png"
                    alt="WebPalm - Web Application & Software Development in Dublin"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown_sticky_1"
                >
                  <ul className="main_menu_list unordered_list justify-content-center nolist">
                    <li>
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio" className="nav-link">
                        Portfolio
                      </Link>
                    </li>
                    <ServicesDropdownHeader3 />
                    <li>
                      <Link to="/pricing" className="nav-link">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="/career" className="nav-link">
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-xl-3 col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown_sticky_1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li>
                  <Link to="/contact" className="btn btn-outline-light">
                    <span className="btn_label" data-text="Get A Free Quote">
                      Get A Free Quote
                    </span>
                    <span className="btn_icon ms-2">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
