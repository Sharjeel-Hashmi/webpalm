import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function LaravelDevelopmentIreland() {
  return (
    <div>
      <Helmet>
        <title>Laravel Development Ireland | PHP &amp; Laravel Agency | WebPalm</title>
        <meta
          name="description"
          content="WebPalm is a specialist Laravel development agency in Ireland. We build custom PHP applications, REST APIs, admin portals, and SaaS platforms. Dublin-based, nationwide delivery."
        />
        <meta
          name="keywords"
          content="laravel development ireland, laravel agency ireland, laravel software house, laravel developer ireland, laravel development dublin, backend development agency"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/laravel-development-ireland" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/laravel-development-ireland" />
        <meta property="og:title" content="Laravel Development Ireland | PHP &amp; Laravel Agency | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm is a specialist Laravel development agency in Ireland. We build custom PHP applications, REST APIs, admin portals, and SaaS platforms. Dublin-based, nationwide delivery."
        />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta property="og:site_name" content="WebPalm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laravel Development Ireland | PHP &amp; Laravel Agency | WebPalm" />
        <meta
          name="twitter:description"
          content="WebPalm builds custom Laravel PHP applications, REST APIs, SaaS platforms, and admin portals for Irish businesses. Nationwide delivery from Dublin."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://webpalm.ie/laravel-development-ireland#service",
                "name": "Laravel Development Ireland",
                "serviceType": ["Laravel Development", "PHP Development"],
                "provider": {
                  "@type": "LocalBusiness",
                  "@id": "https://webpalm.ie/#organization",
                  "name": "WebPalm",
                  "url": "https://webpalm.ie",
                  "telephone": "+353899520026",
                  "email": "info@webpalm.ie",
                  "image": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "9 Limelawn Row, Coolmine",
                    "addressLocality": "Dublin 15",
                    "addressRegion": "Leinster",
                    "postalCode": "D15 V6PW",
                    "addressCountry": "IE"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 53.3830452,
                    "longitude": -6.4061491
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/webpalm/",
                    "https://www.facebook.com/people/Webpalm-Technologies/61587374273329/",
                    "https://www.instagram.com/webpalm.tech"
                  ]
                },
                "areaServed": [
                  { "@type": "Country", "name": "Ireland" },
                  { "@type": "City", "name": "Dublin" },
                  { "@type": "City", "name": "Cork" },
                  { "@type": "City", "name": "Galway" },
                  { "@type": "City", "name": "Limerick" }
                ],
                "description": "Custom Laravel PHP development services for Irish businesses including business portals, REST APIs, SaaS platforms, and e-commerce backends.",
                "url": "https://webpalm.ie/laravel-development-ireland"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/laravel-development-ireland#breadcrumb",
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
                    "name": "Laravel Development Ireland",
                    "item": "https://webpalm.ie/laravel-development-ireland"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/laravel-development-ireland#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Laravel and why use it for web development in Ireland?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Laravel is a PHP framework used by WebPalm to build secure, scalable, and maintainable custom web applications. It is ideal for businesses that need complex business logic, database-heavy platforms, or CMS-backed websites without the overhead of proprietary software."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What types of Laravel projects does WebPalm build?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "WebPalm builds custom business portals, inventory management systems, booking platforms, subscription SaaS platforms, REST APIs, Livewire-driven admin panels, and e-commerce backends using Laravel for Irish businesses."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does Laravel development cost in Ireland?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Laravel web application projects at WebPalm range from €3,500 for single-module internal tools to €25,000+ for enterprise-grade multi-tenant SaaS platforms. We provide fixed-price milestone quotes after a free discovery call."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can WebPalm integrate Laravel with third-party APIs and services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. WebPalm integrates Laravel applications with payment gateways (Stripe, PayPal), CRMs (Salesforce, HubSpot), cloud services (AWS, Google Cloud), email platforms, and custom REST or GraphQL APIs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you support and maintain existing Laravel applications?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We provide ongoing maintenance, security patch management, performance optimization, and feature additions for existing Laravel codebases — even projects started by other development teams."
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
        {/* Banner Section */}
        <section
          className="page_banner_section text-center"
          style={{
            backgroundImage: `url(${"assets/images/shapes/bg_pattern_3.svg"})`,
          }}
        >
          <div className="container">
            <span className="badge bg-primary text-white mb-2 px-3 py-2">Ireland &amp; Dublin Laravel Agency</span>
            <h1 className="page_title mb-0 text-white">Laravel Development Ireland | Expert PHP Agency | WebPalm</h1>
            <p className="text-white mt-2 myText">
              Custom Laravel PHP applications, REST APIs, SaaS platforms, and admin portals — built by WebPalm for Irish businesses, nationwide.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-between mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="heading_block mb-3">
                  <div
                    className="heading_focus_text has_underline d-inline-flex"
                    style={{
                      backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                    }}
                  >
                    Ireland's Laravel Specialists
                  </div>
                  <h2 className="heading_text mb-3">
                    Scalable PHP &amp; Laravel Solutions for <mark>Irish Businesses</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we are a specialist Laravel development agency headquartered at <strong>9 Limelawn Row, Coolmine, Dublin 15</strong>. We build bespoke PHP applications, multi-tenant SaaS platforms, and data-driven business portals using Laravel — Ireland's most trusted PHP framework for enterprise-grade projects.
                </p>
                <p>
                  Whether you need a custom inventory system, a booking engine, a subscription platform, or a robust REST API powering a mobile app, our Laravel engineers deliver maintainable, secure, and scalable solutions with milestone-based delivery and fixed-price quotes.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Book a Free Discovery Call">Book a Free Discovery Call</span>
                    <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </Link>
                  <a href="tel:+353899520026" className="btn btn-outline-dark">
                    <span className="btn_label" data-text="Call +353 899520026">Call +353 899520026</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="p-4 bg-white rounded shadow-sm border">
                  <h3 className="h5 text-dark mb-3"><i className="fa-solid fa-location-dot text-primary me-2"></i>WebPalm — Laravel Agency Ireland</h3>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><strong>Address:</strong> 9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland</li>
                    <li className="mb-2"><strong>Phone:</strong> <a href="tel:+353899520026">+353 899520026</a></li>
                    <li className="mb-2"><strong>Email:</strong> <a href="mailto:info@webpalm.ie">info@webpalm.ie</a></li>
                    <li className="mb-2"><strong>Working Hours:</strong> Mon – Fri: 9:00 AM – 6:00 PM</li>
                    <li className="mb-0"><strong>Delivery:</strong> Nationwide across Ireland</li>
                  </ul>
                  <div className="alert alert-info py-2 px-3 small mb-0">
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Dublin, Cork, Galway, Limerick &amp; all of Ireland.
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="row g-4 my-4">
              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-code"></i></div>
                  <h3 className="h5 text-dark mb-2">Custom Laravel Apps</h3>
                  <p className="text-muted small mb-3">
                    PHP/Laravel backend business logic and data management systems — from internal portals to complex multi-module applications.
                  </p>
                  <Link to="/contact" className="small fw-bold text-primary">Get a quote &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-plug"></i></div>
                  <h3 className="h5 text-dark mb-2">REST API Development</h3>
                  <p className="text-muted small mb-3">
                    RESTful and GraphQL APIs for SaaS platforms and mobile app backends — secure, versioned, and production-ready.
                  </p>
                  <Link to="/contact" className="small fw-bold text-primary">Get a quote &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-cloud"></i></div>
                  <h3 className="h5 text-dark mb-2">Laravel SaaS Platforms</h3>
                  <p className="text-muted small mb-3">
                    Multi-tenant subscription platforms, admin dashboards, and Livewire interfaces for Irish SaaS startups and enterprises.
                  </p>
                  <Link to="/contact" className="small fw-bold text-primary">Get a quote &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="row align-items-center justify-content-lg-between mt-5 pt-3">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="heading_block">
                  <h2 className="heading_text">Our Laravel Development <mark>Process</mark></h2>
                  <p className="heading_description mb-2">
                    We follow a structured, milestone-based delivery model that keeps your project on schedule and within budget.
                  </p>
                  <p className="heading_description mb-0">
                    Each Laravel project begins with a free discovery call where we scope requirements, map database architecture, and define API contracts before writing a single line of code.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">01. Discovery</h3>
                        <p className="mb-0">We define your business requirements, data flows, and integration needs in a structured specification.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Architecture</h3>
                        <p className="mb-0">We design the database schema, API structure, and Laravel module architecture before development starts.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Development</h3>
                        <p className="mb-0">Milestone-based sprints with regular demo checkpoints so you see real progress throughout the build.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Launch &amp; Support</h3>
                        <p className="mb-0">We deploy to your chosen infrastructure and provide ongoing maintenance, updates, and feature development.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq_section section_space mt-5">
              <div className="heading_block text-center">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  Laravel F.A.Q.
                </div>
                <h2 className="heading_text mb-0">
                  Laravel Development in Ireland: <mark>Questions &amp; Answers</mark>
                </h2>
                <p className="heading_description mb-0 mt-2">
                  Key information for Irish businesses considering a Laravel PHP development partner.
                </p>
              </div>

              <div className="faq_accordion accordion mt-4" id="laravel_faq_accordion">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="laravelHeadingOne">
                    <div
                      className="accordion-button"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_lar_one"
                      aria-expanded="true"
                      aria-controls="collapse_lar_one"
                    >
                      Q. What is Laravel and why use it for web development in Ireland?
                    </div>
                  </h3>
                  <div
                    id="collapse_lar_one"
                    className="accordion-collapse collapse show"
                    aria-labelledby="laravelHeadingOne"
                    data-bs-parent="#laravel_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Laravel is a PHP framework used by WebPalm to build secure, scalable, and maintainable custom web applications. It is ideal for businesses that need complex business logic, database-heavy platforms, or CMS-backed websites without the overhead of proprietary software.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="laravelHeadingTwo">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_lar_two"
                      aria-expanded="false"
                      aria-controls="collapse_lar_two"
                    >
                      Q. What types of Laravel projects does WebPalm build?
                    </div>
                  </h3>
                  <div
                    id="collapse_lar_two"
                    className="accordion-collapse collapse"
                    aria-labelledby="laravelHeadingTwo"
                    data-bs-parent="#laravel_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        WebPalm builds custom business portals, inventory management systems, booking platforms, subscription SaaS platforms, REST APIs, Livewire-driven admin panels, and e-commerce backends using Laravel for Irish businesses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="laravelHeadingThree">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_lar_three"
                      aria-expanded="false"
                      aria-controls="collapse_lar_three"
                    >
                      Q. How much does Laravel development cost in Ireland?
                    </div>
                  </h3>
                  <div
                    id="collapse_lar_three"
                    className="accordion-collapse collapse"
                    aria-labelledby="laravelHeadingThree"
                    data-bs-parent="#laravel_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Laravel web application projects at WebPalm range from €3,500 for single-module internal tools to €25,000+ for enterprise-grade multi-tenant SaaS platforms. We provide fixed-price milestone quotes after a free discovery call.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="laravelHeadingFour">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_lar_four"
                      aria-expanded="false"
                      aria-controls="collapse_lar_four"
                    >
                      Q. Can WebPalm integrate Laravel with third-party APIs and services?
                    </div>
                  </h3>
                  <div
                    id="collapse_lar_four"
                    className="accordion-collapse collapse"
                    aria-labelledby="laravelHeadingFour"
                    data-bs-parent="#laravel_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. WebPalm integrates Laravel applications with payment gateways (Stripe, PayPal), CRMs (Salesforce, HubSpot), cloud services (AWS, Google Cloud), email platforms, and custom REST or GraphQL APIs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="laravelHeadingFive">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_lar_five"
                      aria-expanded="false"
                      aria-controls="collapse_lar_five"
                    >
                      Q. Do you support and maintain existing Laravel applications?
                    </div>
                  </h3>
                  <div
                    id="collapse_lar_five"
                    className="accordion-collapse collapse"
                    aria-labelledby="laravelHeadingFive"
                    data-bs-parent="#laravel_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. We provide ongoing maintenance, security patch management, performance optimization, and feature additions for existing Laravel codebases — even projects started by other development teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white p-4 p-md-5 rounded shadow-sm border mt-5">
              <h3 className="h3 mb-2">Ready to Build Your Laravel Application in Ireland?</h3>
              <p className="text-muted mb-4">
                Schedule a free discovery call with our Laravel engineers or request a fixed-price milestone quote today.
              </p>
              <Link to="/contact" className="btn btn-primary me-3">
                <span className="btn_label" data-text="Request Free Quote">Request Free Quote</span>
                <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
              </Link>
              <Link to="/pricing" className="btn btn-outline-dark">
                <span className="btn_label" data-text="Explore Pricing Plans">Explore Pricing Plans</span>
              </Link>
            </div>

          </div>
        </section>

        <WhatsAppButton />
      </main>

      <Footer2 />
    </div>
  );
}
