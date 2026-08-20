import React, { useState } from "react";
import { Link } from 'react-router-dom'
import '../pages/Home.css'
import ServicesDropdown from './ServicesDropdown'
import ServicesDropdownHeader3 from './ServiceDropdownHeader3'


export default function Header1() {

   const [openIcons, setOpenIcons] = useState({
      "nav-icon1": false,
      "nav-icon2": false,
      "nav-icon3": false,
      "nav-icon4": false,
    });
  
    const handleToggle = (id) => {
      setOpenIcons((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleServicesDropdown = (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
  
  return (
    
      <header className="site_header site_header_2">
         <div className="header_bottom stricky original">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-5">
                <div className="site_logo">
                  <a href="https://webpalm.ie/" className='site_link'>
                    <img style={{maxWidth:'180px'}}
                      src="./assets/images/site_logo/site_logo_002.png"
                      alt="Software Company – WebPalm – IT Solutions & Technology, Business Consulting"
                    />
                    <img
                      src="./assets/images/site_logo/site_logo_002.png"  
                      alt="Software Company – WebPalm – IT Solutions & Technology, Business Consulting"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                    id="main_menu_dropdown"
                  >
                    <ul
                      className="main_menu_list unordered_list justify-content-center"
                    >
                      <li className="active">
                       <Link to={'/'}>
                        <a
                          className="nav-link"
                          id="home_submenu"
                          role="button"
                          // data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Home
                        </a>
                        </Link>
                      </li>

                      <li className="">
                        <Link to={"/about"}>
                        <a className="nav-link" href="#" id="portfolio_submenu"  role="button"  aria-expanded="false">
                        About Us
                        </a>
                        </Link>
                      </li>
          
                      <li className="">
                        <Link to={"/portfolio"}>
                        <a className="nav-link" href="#" id="portfolio_submenu"  role="button"  aria-expanded="false">
                          Portfolio
                        </a>
                        </Link>
                      </li>
                     <ServicesDropdown/>

                     <li className="">
                        <Link to={"/pricing"}>
                        <a className="nav-link" href="#" id="portfolio_submenu"  role="button"  aria-expanded="false">
                          Pricing
                        </a>
                        </Link>
                      </li>

                     <li className="">
                        <Link to={"/career"}>
                        <a className="nav-link" href="#" id="portfolio_submenu"  role="button"  aria-expanded="false">
                          Career
                        </a>
                        </Link>
                      </li>
                      <li><Link to={"/contact"}><a>Contact</a></Link></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-3 col-5">
                <ul
                  className="header_btns_group unordered_list justify-content-end"
                >
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
                    <Link to={"/contact"}>
                    <a className="btn btn-primary">
                      <span className="btn_label" data-text="Get A Free Quote">Get A Free Quote</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom stricky stricked-menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2 col-5">
                <div className="site_logo">
                  <a className="site_link" href="#">
                    <img style={{maxWidth:'170px'}}
                      src="./assets/images/site_logo/site_logo_002.png"
                      alt="Software Company – WebPalm – IT Solutions & Technology, Business Consulting"
                    />
                    <img style={{maxWidth:'170px'}}
                      src="./assets/images/site_logo/site_logo_002.png"
                      alt="Software Company – WebPalm – IT Solutions & Technology, Business Consulting"
                    />
                  </a>
                </div>
              </div>
                                        {/* <!-- NAVBAR DIV  --> */}
              <div className="col-xl-6 col-lg-7 col-2">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                    id="main_menu_dropdown"
                  >
                    <ul
                      className="main_menu_list unordered_list justify-content-center nolist"
                    >
              {/* <!-- HOME DROPDOWN  --> */}
                      <li>
                        <Link to={'/'}>
                        <a
                          className="nav-link"
                          id="home_submenu"
                          role="button"
                          // data-bs-toggle="dropdown"
                          aria-expanded="false"> Home</a></Link>
                       
                      </li>
                          
                                                {/* <!-- About  --> */}
                      <li className="">
                        <Link to={"/about"}>
                        <a className="nav-link" href="#" id="portfolio_submenu"  role="button"  aria-expanded="false">
                          About Us
                        </a>
                        </Link>
                      </li>
                     <li className="">
                      <Link to={"/portfolio"}>
                        <a
                          className="nav-link"
                          href="#"
                          id="portfolio_submenu"
                          role="button"
                          aria-expanded="false" 
                           > Portfolio</a>
                           </Link>
                      </li>
                     {/* <!-- SERVICES DROPDOWN --> */}
                     <ServicesDropdownHeader3/>
                    
                     <li className="">
                        <Link to={"/pricing"}>
                        <a className="nav-link" href="#" id="portfolio_submenu"  role="button"  aria-expanded="false">
                          Pricing
                        </a>
                        </Link>
                      </li>
                      <li className="">
                        <Link to={"/career"}>
                        <a className="nav-link" href="#" id="portfolio_submenu"  role="button"  aria-expanded="false">
                          Career
                        </a>
                        </Link>
                      </li>
                                                 {/* <!-- CONTACT NAVLINK  --> */}
                      <li><Link to={"/contact"}><a>Contact</a></Link></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-xl-3 col-lg-3 col-5">
                <ul
                  className="header_btns_group unordered_list justify-content-end">
                  <li>
                    <button
                      className="mobile_menu_btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#main_menu_dropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                      <i className="far fa-bars"></i>
                    </button>
                  </li>
                  <li>
                    <Link to={"/contact"}>
                    <a className="btn btn-outline-light">
                      <span className="btn_label" data-text="Get A Free Quote"
                        >Get A Free Quote</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      
  )
}
