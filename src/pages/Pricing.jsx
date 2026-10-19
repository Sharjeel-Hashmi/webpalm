import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import ParallaxSection from "./ParallaxSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WhatsAppButton from "../Components/WhatsAppButton";

export default function Pricing() {
  return (
    <>
      <Helmet>
        {/* <!-- Title --> */}
        <title>
          Pricing Plans | WebPalm - Affordable Web Development in Dublin
        </title>

        {/*  Meta Tags  */}
        <meta
          name="description"
          content="Discover WebPalm’s flexible pricing plans for startups, small businesses, and enterprises. From static websites to full-scale custom web apps, we deliver quality at competitive rates."
        />
        <meta
          name="keywords"
          content="web development pricing Dublin, affordable website design, custom web app cost, WebPalm packages, static website price, dynamic website cost Ireland, web design plans, professional website pricing"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="telephone=+353894205316" />
        <meta
          name="google-site-verification"
          content="BuCuVdE1zHdoW0k5Ir0R2r4-SBqauodqFgDWxgma758"
        />
        <link rel="canonical" href="https://webpalm.ie/pricing" />
        <meta
          name="thumbnail"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />

        {/* <!-- Open Graph Tags --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/pricing" />
        <meta
          property="og:title"
          content="Pricing Plans | WebPalm - Affordable Web Development in Dublin"
        />
        <meta
          property="og:description"
          content="Choose from WebPalm’s Starter, Professional, Premium, or Elite plans — all designed to deliver high-quality, scalable, and SEO-ready websites and applications."
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
          content="WebPalm affordable pricing plans for websites and web apps"
        />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pricing Plans | WebPalm - Affordable Web Development in Dublin"
        />
        <meta
          name="twitter:description"
          content="Choose from WebPalm’s Starter, Professional, Premium, or Elite plans — all designed to deliver high-quality, scalable, and SEO-ready websites and applications."
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
                "@type": "WebPage",
                "@id": "https://webpalm.ie/pricing#webpage",
                "url": "https://webpalm.ie/pricing",
                "name": "Pricing Plans | WebPalm - Affordable Web Development in Dublin",
                "description": "Discover WebPalm's flexible pricing plans for startups, small businesses, and enterprises. From static websites to full-scale custom web apps.",
                "isPartOf": {
                  "@id": "https://webpalm.ie/#website"
                },
                "breadcrumb": {
                  "@id": "https://webpalm.ie/pricing#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/pricing#breadcrumb",
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
                    "name": "Pricing",
                    "item": "https://webpalm.ie/pricing"
                  }
                ]
              },
              {
                "@type": "OfferCatalog",
                "@id": "https://webpalm.ie/pricing#catalog",
                "name": "WebPalm Web Development & Engineering Packages",
                "provider": {
                  "@id": "https://webpalm.ie/#organization"
                },
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Starter Plan",
                    "description": "Static website up to 4 pages, mobile-responsive, SEO-ready structure, contact form setup, 3-day turnaround.",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://webpalm.ie/pricing"
                  },
                  {
                    "@type": "Offer",
                    "name": "Professional Plan",
                    "description": "Dynamic mobile-responsive website up to 7 pages with blog/portfolio, custom branding, SEO structure, 5-day delivery.",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://webpalm.ie/pricing"
                  },
                  {
                    "@type": "Offer",
                    "name": "Premium Plan",
                    "description": "Fully custom dynamic web application with admin panels, user authentication, role management, and REST APIs.",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://webpalm.ie/pricing"
                  },
                  {
                    "@type": "Offer",
                    "name": "Elite Plan",
                    "description": "Enterprise SaaS applications, large-scale platforms, real-time features, custom architecture, SLA support.",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://webpalm.ie/pricing"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/pricing#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is included in WebPalm's web development packages?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "All packages include responsive mobile-first design, Core Web Vitals optimization, on-page SEO setup, cross-browser compatibility, domain and hosting configuration, and post-launch technical support."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are there any hidden fees or recurring subscriptions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. WebPalm provides transparent fixed-price milestone quotes. Hosting, domain registration, and optional ongoing maintenance SLA retainers are clearly documented upfront."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the payment schedule work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Projects typically follow a milestone-based schedule: 50% upfront deposit to commence architecture and design, with the remaining 50% due upon project completion, quality testing, and final client sign-off."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer custom pricing for specialized enterprise applications?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. For complex enterprise portals, SaaS applications, or multi-vendor platforms, we provide custom tailored estimates after a comprehensive requirements and scope discovery session."
                    }
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
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Pricing Plan</h1>
            <p className="text-white mt-2 myPara">
              WebPalm offers flexible pricing plans tailored to suit businesses
              of all sizes, from startups to enterprises. Each plan includes
              priority support, and scalable options to match your growth.
            </p>
          </div>
        </section>
        {/* <!-- Page Banner Section - End
        ================================================== --> */}

        {/* <!-- Pricing Section - Start
        ================================================== --> */}
        <section className="pricing_section section_space  bg-light">
          <div className="container margincontainer">
            <h1 className="heading_text text-center mb-5"> Our Pricing Packages</h1>
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="pricing_block text-center">
                  <div className="table_head flex-column">
                    <div className="pricing_block_title">
                      <h3 className="pricing_package_title">Starter Plan</h3>
                      <p className="pricing_package_description mb-0">
                        Perfect for individuals and startups looking to
                        establish a strong online presence.
                      </p>
                    </div>
                    <Link to="/contact" className="btn btn-primary">
                      <span className="btn_label" data-text="GET NOW">
                        GET A FREE QUOTE
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                  <ul className="icon_list unordered_list_block d-inline-flex">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Beautifully designed static website (up to 4 pages)
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Fully mobile-responsive and optimized for speed
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Clean, modern layout tailored to your brand
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        SEO-ready structure for better Google visibility
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Contact form setup included
                      </span>
                    </li>
                    <li className="delete">
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Delivered within 3 days
                      </span>
                    </li>
                    {/* <li className="delete">
                                    <span className="icon_list_icon">
                                      <i className="fa-regular fa-circle-check"></i>
                                    </span>
                                    <span className="icon_list_text"> Cloud Services. </span>
                                  </li> */}
                  </ul>
                  <p
                    className="pricing_package_description mb-5"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    Great For: Personal websites, resumes, or landing pages
                  </p>
                 
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing_block text-center">
                  <div className="table_head flex-column">
                    <div className="pricing_block_title">
                      <h3 className="pricing_package_title">Professional Plan</h3>
                      <p className="pricing_package_description mb-0">
                        Step up your game with a dynamic, easy-to-manage
                        website.
                      </p>
                    </div>
                    <Link to="/contact" className="btn btn-primary">
                      <span className="btn_label" data-text="GET NOW">
                        GET A FREE QUOTE
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                  <ul className="icon_list unordered_list_block d-inline-flex">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Beautiful Mobile-Responsive website (up to 7 pages)
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Custom design with tailored branding
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        SEO-ready structure for better Google visibility
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Blog or portfolio feature included
                      </span>
                    </li>

                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Clean, modern layout tailored to your brand
                      </span>
                    </li>

                    <li className="delete">
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Social media integration
                      </span>
                    </li>
                    <li className="delete">
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Delivered within 5 days
                      </span>
                    </li>
                  </ul>
                  <p
                    className="pricing_package_description mb-4"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    Great For: Small businesses, bloggers, creatives, service
                    providers
                  </p>
                 
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing_block text-center">
                  <div className="table_head flex-column">
                    <div className="pricing_block_title">
                      <h3 className="pricing_package_title">Premium Plan</h3>
                      <p className="pricing_package_description mb-0">
                        For those who need advanced functionality and full
                        control.
                      </p>
                    </div>
                   <Link to="/contact" className="btn btn-primary">
                      <span className="btn_label" data-text="GET NOW">
                        GET A FREE QUOTE
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                  <ul className="icon_list unordered_list_block d-inline-flex">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        {" "}
                        Fully-Custom Dynamic website Development
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Custom frontend + backend development
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        User login systems, role-based access, and admin panels
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        API integrations and dynamic data handling
                      </span>
                    </li>
                    <li className="delete">
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Performance-optimized and scalable architecture
                      </span>
                    </li>
                    <li className="delete">
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Delivered within 7–10 days
                      </span>
                    </li>
                  </ul>
                  <p
                    className="pricing_package_description mb-4"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    Great for: Internal tools, dashboards, simple portals (not
                    full SaaS)
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="pricing_block text-center">
                  <div className="table_head flex-column">
                    <div className="pricing_block_title">
                      <h3 className="pricing_package_title">
                        Elite Plan
                      </h3>
                      <p className="pricing_package_description mb-0">
                        Full-scale, custom web apps built for performance,
                        scalability, and growth.
                      </p>
                    </div>
                     <Link to="/contact" className="btn btn-primary">
                      <span className="btn_label" data-text="GET NOW">
                        GET A FREE QUOTE
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                  <ul className="icon_list unordered_list_block d-inline-flex">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        {" "}
                        Full-featured Web application advanced frameworks
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Complex dashboards, analytics, or custom features
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Secure authentication, role management, and APIs
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Real-time features (chat, notifications, etc.)
                      </span>
                    </li>
                    <li className="delete">
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Built for scalability and long-term growth
                      </span>
                    </li>
                    <li className="delete">
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      <span className="icon_list_text">
                        Timeline & pricing based on project scope
                      </span>
                    </li>
                  </ul>
                  <p
                    className="pricing_package_description mb-3"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    Great for: SaaS applications, enterprise tools, large-scale platforms
                  </p>
                 
                </div>
              </div>
              {/* <div className="col-lg-6">
                <div className="business_consulting_hero_image">
                  <img
                    className="hero_image"
                    src="assets/images/hero/business_consulting_hero_image_1.webp"
                    alt="Business Consulting"
                  />

                  <div
                    className="funfact_block capsule_layout wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div className="funfact_content">
                      <div className="counter_value">
                        <span className="odometer" data-count="22">0</span>
                        <span>M+</span>
                      </div>
                      <h3 className="funfact_title mb-0">Happy Customer</h3>
                    </div>
                    <div className="funfact_icon">
                      <img
                        src="assets/images/icons/icon_user_3.svg"
                        alt="WebPalm - User Icon"
                      />
                    </div>
                  </div>
                  <div
                    className="funfact_block capsule_layout wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="funfact_icon">
                      <img
                        src="assets/images/icons/icon_wallet.svg"
                        alt="WebPalm - Wallet Icon"
                      />
                    </div>
                    <div className="funfact_content">
                      <h3 className="funfact_title mb-0">Company Value</h3>
                      <div className="counter_value">
                        <span>$</span>
                        <span className="odometer" data-count="500000">0</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="funfact_block capsule_layout wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="funfact_content pt-2 pb-1">
                      <h3 className="funfact_title mb-0 text-center">
                        Success Rate
                      </h3>
                      <div className="counter_value justify-content-center">
                        <span className="odometer" data-count="98">0</span>
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* <!-- Pricing Section - End
        ================================================== --> */}

        {/* <!-- Policy Section - Start
        ================================================== --> */}
        <section className="policy_section section_space">
          <div className="container">
            <div className="heading_block">
              <div className="row justify-content-lg-between">
                <div className="col-lg-6">
                  <h2 className="heading_text mb-0">
                    Celebrating Features Discover What Sets Us
                  </h2>
                </div>
                <div className="col-lg-5">
                  <p className="heading_description mb-0">
                    We take pride in celebrating the features that set us apart
                    and make us a leader in the IT solutions. What truly
                    distinguishes us is our unwavering commitment to innovation,
                    excellence, and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="row pricing_policy_wrap">
              <div className="col-lg-4">
                <div className="iconbox_block">
                  <div className="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_doc.svg"
                      alt="Doc SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Rich Documentation</h3>
                    <p className="mb-0">
                      Comprehensive, clean project documentation and technical handovers for full code ownership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block">
                  <div className="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_analysis.svg"
                      alt="Analysis SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Fastest Delivery</h3>
                    <p className="mb-0">
                      We deliver your project quickly and efficiently — always
                      within the committed timeline.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block">
                  <div className="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_headphone_2.svg"
                      alt="Headphone SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Free 1 Month Support</h3>
                    <p className="mb-0">
                      We Provide 1 Month Free Support for Our Clients on Every
                      Project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Policy Section - End
        ================================================== --> */}

        {/* <!-- Client Logo Section - Start
        ================================================== --> */}

        {/* <!-- Client Logo Section - End
        ================================================== --> */}

                {/* <!-- FAQ Section - Start
        ================================================== --> */}
        <section className="faq_section section_decoration section_space">
          <div className="container">
            <div className="heading_block text-center">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{
                  backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                }}
              >
                F.A.Q.
              </div>
              <h2 className="heading_text mb-0">
                Frequently Asked <mark>Questions</mark>
              </h2>
              <p className="heading_description mb-0 mt-2">
                Transparent answers about our web development pricing, payment milestones, and deliverables in Dublin.
              </p>
            </div>

            <div className="faq_accordion accordion" id="pricing_faq_accordion">
              <div className="accordion-item">
                <div
                  className="accordion-button"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_pr_one"
                  aria-expanded="true"
                  aria-controls="collapse_pr_one"
                >
                  Q. What is included in WebPalm's web development packages?
                </div>
                <div
                  id="collapse_pr_one"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#pricing_faq_accordion"
                >
                  <div className="accordion-body">
                    <div className="text_a">A.</div>
                    <p>
                      All packages include responsive mobile-first design, Core Web Vitals optimization, on-page SEO setup, cross-browser compatibility, domain and hosting configuration, and post-launch technical support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_pr_two"
                  aria-expanded="false"
                  aria-controls="collapse_pr_two"
                >
                  Q. Are there any hidden fees or recurring subscriptions?
                </div>
                <div
                  id="collapse_pr_two"
                  className="accordion-collapse collapse"
                  data-bs-parent="#pricing_faq_accordion"
                >
                  <div className="accordion-body">
                    <div className="text_a">A.</div>
                    <p>
                      No. WebPalm provides transparent fixed-price milestone quotes. Hosting, domain registration, and optional ongoing maintenance SLA retainers are clearly documented upfront.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_pr_three"
                  aria-expanded="false"
                  aria-controls="collapse_pr_three"
                >
                  Q. How does the payment schedule work?
                </div>
                <div
                  id="collapse_pr_three"
                  className="accordion-collapse collapse"
                  data-bs-parent="#pricing_faq_accordion"
                >
                  <div className="accordion-body">
                    <div className="text_a">A.</div>
                    <p>
                      Projects typically follow a milestone-based schedule: 50% upfront deposit to commence architecture and design, with the remaining 50% due upon project completion, quality testing, and final client sign-off.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_pr_four"
                  aria-expanded="false"
                  aria-controls="collapse_pr_four"
                >
                  Q. Do you offer custom pricing for specialized enterprise applications?
                </div>
                <div
                  id="collapse_pr_four"
                  className="accordion-collapse collapse"
                  data-bs-parent="#pricing_faq_accordion"
                >
                  <div className="accordion-body">
                    <div className="text_a">A.</div>
                    <p>
                      Yes. For complex enterprise portals, SaaS applications, or multi-vendor platforms, we provide custom tailored estimates after a comprehensive requirements and scope discovery session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- FAQ Section - End
        ================================================== --> */}

        <ParallaxSection />
        {/* <!-- Call To Action Section - End
        ================================================== --> */}
        <WhatsAppButton />
      </main>
      <Footer2 />
    </>
  );
}
