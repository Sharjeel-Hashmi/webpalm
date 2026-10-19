import React from "react";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WhatsAppButton from "../Components/WhatsAppButton";

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
        <link rel="canonical" href="https://webpalm.ie/portfolio" />
        <meta
          name="thumbnail"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
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
      
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://webpalm.ie/portfolio#webpage",
                "url": "https://webpalm.ie/portfolio",
                "name": "Portfolio | Web Design & Development Projects by WebPalm",
                "description": "Explore WebPalm's portfolio of web design and development projects including e-commerce platforms, booking portals, and custom web applications.",
                "isPartOf": {
                  "@id": "https://webpalm.ie/#website"
                },
                "breadcrumb": {
                  "@id": "https://webpalm.ie/portfolio#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/portfolio#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://webpalm.ie/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Portfolio",
                    "item": "https://webpalm.ie/portfolio"
                  }
                ]
              },
              {
                "@type": "ItemList",
                "@id": "https://webpalm.ie/portfolio#projects",
                "name": "Featured Client Web Projects",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "EduNest - EdTech Learning Management & Student Portal",
                    "url": "https://webpalm.ie/portfolio/edunest"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "FitFlow - Health & Gym Member Management Platform",
                    "url": "https://webpalm.ie/portfolio/fitflow"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "PropVista - Real Estate Platform & Automated Property Listings",
                    "url": "https://webpalm.ie/portfolio/propvista"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Flour Bakery - Online Ordering & Delivery Platform",
                    "url": "https://www.flourbakery.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "HCRS - Healthcare Recruitment & Job Board Portal",
                    "url": "https://hcrs.ie/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "PhysioFast - Patient Dashboard & Appointment Booking",
                    "url": "https://physiofast.ie/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "EstateWay - Real Estate Property Showcase & Management",
                    "url": "https://estateway.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Saral Diagnostics - Diagnostic Centre Booking & Report Portal",
                    "url": "https://saraldiagnostics.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 9,
                    "name": "Camelo - Custom Sprinter Van & Adventure Vehicle Builder",
                    "url": "https://camelo.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 10,
                    "name": "Boss Cash Cars - Automotive Valuation & Fast Quote Portal",
                    "url": "https://bosscashcars.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 11,
                    "name": "The Fabric Store - E-Commerce Fashion & Clothing Boutique",
                    "url": "https://www.thefabricstore.pk/"
                  }
                ]
              }
            ]
          })}
        </script>
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
            {/* Featured Case Studies */}
            <div className="heading_block text-center mb-5">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{
                  backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                }}
              >
                Featured Stories
              </div>
              <h2 className="heading_text mb-0">
                Client Success <mark>Case Studies</mark>
              </h2>
              <p className="heading_description mb-0 mt-2">
                Explore in-depth technical breakdowns and measurable business outcomes from our custom web solutions.
              </p>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded overflow-hidden">
                  <img
                    src="assets/images/case/Edunest.jpg"
                    alt="EduNest LMS Platform"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body p-4 d-flex flex-column">
                    <span className="badge bg-primary text-white mb-2 align-self-start">EdTech & E-Learning</span>
                    <h3 className="h5 card-title text-dark">EduNest Learning Platform</h3>
                    <p className="card-text text-muted small flex-grow-1">
                      Engineered a cloud-native student LMS achieving +210% course enrollments and sub-second page latency.
                    </p>
                    <Link to="/portfolio/edunest" className="btn btn-outline-primary btn-sm mt-3">
                      Read Full Case Study &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded overflow-hidden">
                  <img
                    src="assets/images/case/fitflow.jpg"
                    alt="FitFlow Fitness Platform"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body p-4 d-flex flex-column">
                    <span className="badge bg-primary text-white mb-2 align-self-start">Health & Gym Tech</span>
                    <h3 className="h5 card-title text-dark">FitFlow Booking Engine</h3>
                    <p className="card-text text-muted small flex-grow-1">
                      Built real-time class reservation and membership management delivering +180% active member retention.
                    </p>
                    <Link to="/portfolio/fitflow" className="btn btn-outline-primary btn-sm mt-3">
                      Read Full Case Study &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded overflow-hidden">
                  <img
                    src="assets/images/case/propvista.jpg"
                    alt="PropVista Real Estate Portal"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body p-4 d-flex flex-column">
                    <span className="badge bg-primary text-white mb-2 align-self-start">Real Estate PropTech</span>
                    <h3 className="h5 card-title text-dark">PropVista Property Portal</h3>
                    <p className="card-text text-muted small flex-grow-1">
                      Designed interactive geospatial map search with instant valuation tools yielding +240% qualified leads.
                    </p>
                    <Link to="/portfolio/propvista" className="btn btn-outline-primary btn-sm mt-3">
                      Read Full Case Study &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-5" />
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
                      target="_blank" rel="noopener noreferrer" className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_24.png"
                        alt="Bakery website homepage with Easter specials, catering options, online ordering buttons, and a recipe book promo section"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                        Bakery Website Design | Ordering & Delivery Features
                      </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <span>
                          <i className="fa-solid fa-tags"></i>React App Design
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-pie"></i>Bakery
                        </span>
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
                      target="_blank" rel="noopener noreferrer" className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_16.png"
                        alt="Clean job board website design with search fields, category filters, and candidate login interface"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                        Explore Our Job Website Design for Modern Recruitment
                      </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <span>
                          <i className="fa-solid fa-tags"></i>Laravel Website
                          Design
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-users"></i> Job Site
                        </span>
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
                      target="_blank" rel="noopener noreferrer" className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_25.png"
                        alt="Patient dashboard interface for a physiotherapy website, showing appointment lists, doctor schedules, fees, and printable booking details"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                        Physio Appointment Website | Patient Dashboard & Booking
                        Management
                      </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <span>
                          <i className="fa-solid fa-tags"></i>Laravel Website
                          Design
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-user-doctor"></i> Doctors
                        </span>
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
                      target="_blank" rel="noopener noreferrer" className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_26.png"
                        alt="Real estate website homepage displaying featured luxury properties with pricing, locations, and sales inquiry contact details"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                        Real Estate Website Design | Showcase Properties &
                        Listings
                      </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <span>
                          <i className="fa-solid fa-tags"></i>Laravel Website
                          Design
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-building"></i> Real Estate
                        </span>
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
                      target="_blank" rel="noopener noreferrer" className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_20.png"
                        alt="Diagnostic center website homepage featuring service listings (MRI, CT scans), online booking, and home sample collection options"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                        Diagnostic Center Website Design | Easy Booking & Report
                        Access
                      </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <span>
                          <i className="fa-solid fa-tags"></i> Laravel Website
                          Design
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-hospital"></i> Diagnostic
                          Centre
                        </span>
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
                      target="_blank" rel="noopener noreferrer" className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_22.png"
                        alt="Homepage of a custom car builder website showcasing rugged SUVs, build packages, and a ‘Craft Your Adventure’ call-to-action"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                        Bespoke Car Builder Website Design | Custom SUVs &
                        Adventure Crafted
                      </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <span>
                          <i className="fa-solid fa-tags"></i> WordPress Website
                          Design
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-car-wrench"></i> Custom
                          Build Sprinter
                        </span>
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
                      target="_blank" rel="noopener noreferrer" className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_13.png"
                        alt="Junk car removal website homepage featuring a vehicle selection form, service highlights, and instant contact options"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                        Junk Car Removal Website Design | Fast Quotes &
                        Hassle-Free Process
                      </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <span>
                          <i className="fa-solid fa-tags"></i> WordPress Website
                          Design
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-building"></i> Automobile
                        </span>
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
                      target="_blank" rel="noopener noreferrer" className="portfolio_image_wrap bg-light"
                    >
                      <img
                        src="assets/images/portfolio/portfolio_item_image_21.png"
                        alt="Modern clothing store website homepage featuring new arrivals, unstitched outfits, formal wear categories, and product price listings"
                      />
                    </a>
                  </div>
                  <div className="portfolio_content">
                    <h3 className="portfolio_title">
                        Clothing Store Design | Trendy Collections & Seamless
                        Shopping
                      </h3>
                    <ul className="category_list unordered_list">
                      <li>
                        <span>
                          <i className="fa-solid fa-tags"></i> Shopify Store
                          Design
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-building"></i> Clothing
                          Brand
                        </span>
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
            <Link to="/contact" className="btn btn-primary">
              <span className="btn_label" data-text="Contact Us Today!">
                Contact Us TODAY!
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </section>
        {/* <!-- Call To Action Section - End
        ================================================== --> */}
        <WhatsAppButton />
      </main>
      <Footer2 />
    </div>
  );
}
