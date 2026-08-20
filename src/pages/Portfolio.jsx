import React from "react";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  return (
    <div>
      <Helmet>
        {/* <!-- Title --> */}
        <title>Portfolio | Web Design & Development Projects by WebPalm</title>

        {/* <!-- Meta Tags --> */}
        <meta
          name="description"
          content="Explore WebPalm’s portfolio of creative and functional web projects including e-commerce sites, booking platforms, real estate portals, and custom web apps. See our proven expertise in delivering modern, results-driven solutions."
        />
        <meta
          name="keywords"
          content="WebPalm portfolio, web design projects Dublin, e-commerce website design, booking system development, real estate website design, Laravel development, WordPress website design, Shopify store design, custom web apps, Dublin web development"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="telephone=+353894205316" />
        <meta
          name="google-site-verification"
          content="BuCuVdE1zHdoW0k5Ir0R2r4-SBqauodqFgDWxgma758"
        />
        <meta
          name="thumbnail"
          content="assets/images/Techco_page_thumbnail.webp"
        />

        {/* <!-- Open Graph Tags --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/portfolio" />
        <meta
          property="og:title"
          content="Portfolio | Web Design & Development Projects by WebPalm"
        />
        <meta
          property="og:description"
          content="Discover WebPalm’s portfolio showcasing innovative web design and development projects, from e-commerce and booking platforms to real estate portals and custom web apps."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta
          property="og:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Web design and development portfolio by WebPalm"
        />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Portfolio | Web Design & Development Projects by WebPalm"
        />
        <meta
          name="twitter:description"
          content="Discover WebPalm’s portfolio showcasing innovative web design and development projects, from e-commerce and booking platforms to real estate portals and custom web apps."
        />
        <meta
          name="twitter:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
      </Helmet>
      <Header />
      <main className="page_content">
        {/* <!-- Page Banner Section - Start
        ================================================== --> */}
        <section
          className="page_banner_section text-center"
          style={{
            backgroundImage: `url(${"assets/images/shapes/bg_pattern_3.svg"})`,
          }} >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Our Portfolio</h1>
            <p className="text-white mt-2 myText">
              At WebPalm, we’ve delivered a wide range of dynamic and
              user-friendly web projects — from modern business websites and
              e-commerce platforms to custom web apps. Each project reflects our
              focus on creativity, functionality, and results. Take a look at
              our work to see how we bring ideas to life with smart web
              solutions.
            </p>
          </div>
        </section>
        {/* <!-- Page Banner Section - End
        ================================================== --> */}

        {/* <!-- Portfolio Section - Start
        ================================================== --> */}
        <section className="portfolio_section section_space bg-light">
          <div className="container">
            <div className="filter_elements_nav">
              <ul className="unordered_list justify-content-center">
                <li className="active" data-filter="all">
                  See All
                </li>
                <li data-filter="technology">Technology</li>
                <li data-filter="helpdesk">Helpdesk</li>
                <li data-filter="analysis">Analysis</li>
                <li data-filter="marketing">Marketing</li>
              </ul>
            </div>
            <div className="filter_elements_wrapper row">
              <div className="col-lg-6 technology">
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <a
                      href="https://www.flourbakery.com/"
                      target="_blank"
                      className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_24.png"
                        alt="Image of a bakery website homepage with Easter specials, catering options, online ordering buttons, and a recipe book promo section"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <a>
                        Bakery Website Design | Ordering & Delivery Features
                      </a>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <a>
                          <i className="fa-solid fa-tags"></i>React App Design
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa-solid fa-pie"></i>Bakery
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 helpdesk">
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <a
                      href="https://hcrs.ie/"
                      target="_blank"
                      className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_16.png"
                        alt="Image of a clean job board website design with search fields, category filters, and candidate login interface"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <a>
                        Explore Our Job Website Design for Modern Recruitment
                      </a>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <a>
                          <i className="fa-solid fa-tags"></i>Laravel Website
                          Design
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa-regular fa-users"></i> Job Site
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 analysis">
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <a
                      href="https://physiofast.ie/"
                      target="_blank"
                      className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_25.png"
                        alt="Patient dashboard interface for a physiotherapy website, showing appointment lists, doctor schedules, fees, and printable booking details"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <a>
                        Physio Appointment Website | Patient Dashboard & Booking
                        Management
                      </a>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <a>
                          <i className="fa-solid fa-tags"></i>Laravel Website
                          Design
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa-solid fa-user-doctor"></i> Doctors
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 marketing">
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <a
                      href="https://estateway.in/"
                      target="_blank"
                      className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_26.png"
                        alt="Image of a real estate website homepage displaying featured luxury properties with pricing, locations, and sales inquiry contact details"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <a>
                        Real Estate Website Design | Showcase Properties &
                        Listings
                      </a>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <a>
                          <i className="fa-solid fa-tags"></i>Laravel Website
                          Design
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa-solid fa-building"></i> Real Estate
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 technology">
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <a
                      href="https://saraldiagnostics.com/"
                      target="_blank"
                      className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_20.png"
                        alt="Image of a diagnostic center website homepage featuring service listings (MRI, CT scans), online booking, and home sample collection options"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <a>
                        Diagnostic Center Website Design | Easy Booking & Report
                        Access
                      </a>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <a>
                          <i className="fa-solid fa-tags"></i> Laravel Website
                          Design
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa-solid fa-hospital"></i> Diagnostic
                          Centre
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 helpdesk">
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <a
                      href="https://camelo.com/"
                      target="_blank"
                      className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_22.png"
                        alt="Homepage of a custom car builder website showcasing rugged SUVs, build packages, and a ‘Craft Your Adventure’ call-to-action"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <a>
                        Bespoke Car Builder Website Design | Custom SUVs &
                        Adventure Crafted
                      </a>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <a>
                          <i className="fa-solid fa-tags"></i> WordPress Website
                          Design
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa-solid fa-car-wrench"></i> Custom
                          Build Sprinter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 analysis">
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <a
                      href="https://bosscashcars.com/"
                      target="_blank"
                      className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_13.png"
                        alt="Image of a junk car removal website homepage featuring a vehicle selection form, service highlights, and instant contact options"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <a>
                        Junk Car Removal Website Design | Fast Quotes &
                        Hassle-Free Process
                      </a>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <a>
                          <i className="fa-solid fa-tags"></i> WordPress Website
                          Design
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa-solid fa-building"></i> Automobile
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 marketing">
                <div className="portfolio_block portfolio_layout_2">
                  <div className="portfolio_image">
                    <a
                      href="https://www.thefabricstore.pk/"
                      target="_blank"
                      className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_21.png"
                        alt="Image of a modern clothing store website homepage featuring new arrivals, unstitched outfits, formal wear categories, and product price listings"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                      <a>
                        Clothing Store Design | Trendy Collections & Seamless
                        Shopping
                      </a>
                    </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <a>
                          <i className="fa-solid fa-tags"></i> Shopify Store
                          Design
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa-solid fa-building"></i> Clothing
                          Brand
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Portfolio Section - End
        ================================================== --> */}

        {/* <!-- Call To Action Section - Start
        ================================================== --> */}
        <section
          className="calltoaction_section parallaxie"
          style={{
            backgroundImage: `url(${"assets/images/backgrounds/bg_image_1.webp"})`,
          }}
        >
          <div className="container text-center">
            <div className="heading_block text-white">
              <h2 className="heading_text">Ready to Work, Let's Chat</h2>
              <p className="heading_description mb-0">
                Our team of experts is ready to collaborate with you every step
                of the way, from initial consultation to implementation.
              </p>
            </div>
            <Link to={"/contact"}>
              <a className="btn btn-primary">
                <span className="btn_label" data-text="Contact Us Today!">
                  Contact Us TODAY!
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </a>
            </Link>
          </div>
        </section>
        {/* <!-- Call To Action Section - End
        ================================================== --> */}
        <a
          className="hotline_block"
          href="https://wa.me/353899520026"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "50px",
            right: "20px",
            zIndex: "1000",
          }}
        >
          <span className="hotline_icon">
            <i class="fa-brands fa-whatsapp fa-beat fa-lg" style={{color: "rgb(235, 238, 244)" , }}></i>
          </span>
        </a>
      </main>
      <Footer2 />
    </div>
  );
}
