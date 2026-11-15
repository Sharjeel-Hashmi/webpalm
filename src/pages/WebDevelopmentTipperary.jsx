import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function WebDevelopmentTipperary() {
  return (
    <div>
      <Helmet>
        <title>Web Development Tipperary | Custom Websites &amp; Digital Services | WebPalm</title>
        <meta
          name="description"
          content="WebPalm delivers web development, SEO, and digital marketing services to businesses in Tipperary. Websites from €900. Remote-first delivery with on-site visits available. Free quote."
        />
        <meta
          name="keywords"
          content="web development tipperary, web developer tipperary, web design tipperary, website development tipperary"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/web-development-tipperary" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/web-development-tipperary" />
        <meta property="og:title" content="Web Development Tipperary | Custom Websites &amp; Digital Services | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm delivers web development, SEO, and digital marketing services to businesses in Tipperary. Websites from €900. Remote-first delivery with on-site visits available."
        />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "ProfessionalService"],
                "@id": "https://webpalm.ie/web-development-tipperary#localbusiness",
                "name": "WebPalm - Web Development Tipperary",
                "image": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
                "url": "https://webpalm.ie/web-development-tipperary",
                "telephone": "+353899520026",
                "email": "info@webpalm.ie",
                "priceRange": "€€",
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
                "areaServed": [
                  { "@type": "AdministrativeArea", "name": "Tipperary" },
                  { "@type": "City", "name": "Clonmel" },
                  { "@type": "City", "name": "Thurles" },
                  { "@type": "City", "name": "Nenagh" },
                  { "@type": "City", "name": "Cashel" },
                  { "@type": "Country", "name": "Ireland" }
                ],
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ],
                "sameAs": [
                  "https://www.linkedin.com/company/webpalm/",
                  "https://www.facebook.com/people/Webpalm-Technologies/61587374273329/",
                  "https://www.instagram.com/webpalm.tech"
                ]
              },
              {
                "@type": "Service",
                "@id": "https://webpalm.ie/web-development-tipperary#service",
                "name": "Web Development &amp; Digital Marketing Tipperary",
                "provider": { "@id": "https://webpalm.ie/web-development-tipperary#localbusiness" },
                "areaServed": { "@type": "AdministrativeArea", "name": "Tipperary" },
                "serviceType": "Web Development",
                "description": "Custom website design, web application development, SEO, and digital marketing for businesses across County Tipperary including Clonmel, Thurles, Nenagh, Tipperary town, Cashel, and Carrick-on-Suir.",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "EUR",
                  "price": "900",
                  "description": "Business websites from €900. E-commerce from €1,500. Bespoke web applications from €3,500."
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/web-development-tipperary#breadcrumb",
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
                    "name": "Web Development Tipperary",
                    "item": "https://webpalm.ie/web-development-tipperary"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/web-development-tipperary#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does WebPalm serve businesses in Tipperary?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. WebPalm provides web development, custom web application builds, SEO, and digital marketing for businesses across County Tipperary including Clonmel, Thurles, Nenagh, Tipperary town, Cashel, and Carrick-on-Suir."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What does a business website cost in Tipperary?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Business websites built by WebPalm start at €900, e-commerce sites from €1,500, and bespoke web applications from €3,500. All projects include SEO-ready architecture and mobile optimisation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I get web development done remotely for my Tipperary business?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Most projects are delivered fully remotely via video calls, shared project portals, and dedicated Slack channels. We also visit Tipperary for major project kick-offs on request."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide SEO services in Tipperary?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. WebPalm provides technical SEO, local search optimization, Google Business Profile management, and content strategy for businesses in Tipperary competing in both local and national search."
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
            <span className="badge bg-primary text-white mb-2 px-3 py-2">County Tipperary Web Agency</span>
            <h1 className="page_title mb-0 text-white">Web Development Tipperary | WebPalm</h1>
            <p className="text-white mt-2 myText">
              Custom websites, web applications, SEO, and digital marketing services for businesses across County Tipperary — remote-first delivery with on-site visits available.
            </p>
          </div>
        </section>

        {/* Local Agency Introduction */}
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
                    Tipperary Web Expertise
                  </div>
                  <h2 className="heading_text mb-3">
                    Serving Tipperary Businesses with <mark>Digital Solutions That Work</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we deliver professional web development, SEO, and digital marketing for businesses across County Tipperary — from <strong>Clonmel and Thurles</strong> to <strong>Nenagh, Tipperary town, Cashel, and Carrick-on-Suir</strong>. Based in Dublin 15, we work remotely with Tipperary clients and visit on-site for major project kick-offs.
                </p>
                <p>
                  Whether you need a new business website, a bespoke web application, or a comprehensive local SEO strategy, WebPalm builds digital platforms that rank on Google and generate real business results for Tipperary companies.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Get a Free Quote">Get a Free Quote</span>
                    <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </Link>
                  <a href="tel:+353899520026" className="btn btn-outline-dark">
                    <span className="btn_label" data-text="Call +353 899520026">Call +353 899520026</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="p-4 bg-white rounded shadow-sm border">
                  <h3 className="h5 text-dark mb-3"><i className="fa-solid fa-location-dot text-primary me-2"></i>WebPalm Office &amp; Contact</h3>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><strong>Address:</strong> 9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland</li>
                    <li className="mb-2"><strong>Direct Line:</strong> <a href="tel:+353899520026">+353 899520026</a></li>
                    <li className="mb-2"><strong>Support Line:</strong> <a href="tel:+353894205316">+353 894205316</a></li>
                    <li className="mb-2"><strong>Email:</strong> <a href="mailto:info@webpalm.ie">info@webpalm.ie</a></li>
                    <li className="mb-0"><strong>Working Hours:</strong> Mon – Fri: 9:00 AM – 6:00 PM</li>
                  </ul>
                  <div className="alert alert-info py-2 px-3 small mb-0">
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Clonmel, Thurles, Nenagh, Cashel, Tipperary town &amp; all of Co. Tipperary.
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="row g-4 my-4">
              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-globe"></i></div>
                  <h3 className="h5 text-dark mb-2">Custom Websites</h3>
                  <p className="text-muted small mb-3">
                    Professional, mobile-first business websites for Tipperary companies. SEO-ready from day one, with packages starting from €900.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-laptop-code"></i></div>
                  <h3 className="h5 text-dark mb-2">Web Applications</h3>
                  <p className="text-muted small mb-3">
                    Bespoke React and Next.js web applications for Tipperary businesses — booking systems, e-commerce platforms, and customer portals from €3,500.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-chart-line"></i></div>
                  <h3 className="h5 text-dark mb-2">SEO &amp; Digital Marketing</h3>
                  <p className="text-muted small mb-3">
                    Technical SEO, local search optimisation, Google Business Profile management, and content strategy to help Tipperary businesses rank nationally and locally.
                  </p>
                  <Link to="/search-engine-optimization" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Why Choose WebPalm */}
            <div className="section_space mt-5">
              <div className="heading_block text-center mb-4">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  Why WebPalm
                </div>
                <h2 className="heading_text mb-0">
                  Tipperary Businesses <mark>Choose WebPalm</mark>
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-video"></i></div>
                    <h4 className="h6 fw-bold">Remote-First Delivery</h4>
                    <p className="text-muted small mb-0">Most projects delivered via video calls, shared portals, and Slack — no travel required from you.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-euro-sign"></i></div>
                    <h4 className="h6 fw-bold">Transparent Pricing</h4>
                    <p className="text-muted small mb-0">Websites from €900, e-commerce from €1,500, web apps from €3,500 — all scoped and fixed upfront.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
                    <h4 className="h6 fw-bold">SEO-Ready Builds</h4>
                    <p className="text-muted small mb-0">Every website ships with technical SEO, structured data, and Core Web Vitals optimisation built in.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-handshake"></i></div>
                    <h4 className="h6 fw-bold">On-Site Visits Available</h4>
                    <p className="text-muted small mb-0">We travel to Tipperary for major project kick-offs, workshops, and client reviews on request.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Process */}
            <div className="section_space mt-5">
              <div className="heading_block text-center mb-4">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  Our Process
                </div>
                <h2 className="heading_text mb-0">
                  How We Deliver for <mark>Tipperary Businesses</mark>
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="p-4 bg-white rounded shadow-sm border h-100 text-center">
                    <div className="text-primary fw-bold fs-4 mb-2">01</div>
                    <h4 className="h6 fw-bold">Discovery Call</h4>
                    <p className="text-muted small mb-0">Video or in-person session to scope your project, goals, and technical requirements.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="p-4 bg-white rounded shadow-sm border h-100 text-center">
                    <div className="text-primary fw-bold fs-4 mb-2">02</div>
                    <h4 className="h6 fw-bold">Design &amp; Prototype</h4>
                    <p className="text-muted small mb-0">UI/UX mockups and interactive prototypes reviewed and approved before build begins.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="p-4 bg-white rounded shadow-sm border h-100 text-center">
                    <div className="text-primary fw-bold fs-4 mb-2">03</div>
                    <h4 className="h6 fw-bold">Build &amp; Test</h4>
                    <p className="text-muted small mb-0">Agile development with regular demos, QA testing, and performance optimisation throughout.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="p-4 bg-white rounded shadow-sm border h-100 text-center">
                    <div className="text-primary fw-bold fs-4 mb-2">04</div>
                    <h4 className="h6 fw-bold">Launch &amp; Support</h4>
                    <p className="text-muted small mb-0">Go-live deployment, SEO submission, and ongoing maintenance for your Tipperary business.</p>
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
                  Tipperary F.A.Q.
                </div>
                <h2 className="heading_text mb-0">
                  Web Development in Tipperary: <mark>Questions &amp; Answers</mark>
                </h2>
                <p className="heading_description mb-0 mt-2">
                  Key information for Tipperary businesses seeking a professional web development and digital marketing partner.
                </p>
              </div>

              <div className="faq_accordion accordion mt-4" id="tipperary_faq_accordion">
                <div className="accordion-item">
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_tip_one"
                    aria-expanded="true"
                    aria-controls="collapse_tip_one"
                  >
                    Q. Does WebPalm serve businesses in Tipperary?
                  </div>
                  <div
                    id="collapse_tip_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#tipperary_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. WebPalm provides web development, custom web application builds, SEO, and digital marketing for businesses across County Tipperary including Clonmel, Thurles, Nenagh, Tipperary town, Cashel, and Carrick-on-Suir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_tip_two"
                    aria-expanded="false"
                    aria-controls="collapse_tip_two"
                  >
                    Q. What does a business website cost in Tipperary?
                  </div>
                  <div
                    id="collapse_tip_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#tipperary_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Business websites built by WebPalm start at €900, e-commerce sites from €1,500, and bespoke web applications from €3,500. All projects include SEO-ready architecture and mobile optimisation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_tip_three"
                    aria-expanded="false"
                    aria-controls="collapse_tip_three"
                  >
                    Q. Can I get web development done remotely for my Tipperary business?
                  </div>
                  <div
                    id="collapse_tip_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#tipperary_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. Most projects are delivered fully remotely via video calls, shared project portals, and dedicated Slack channels. We also visit Tipperary for major project kick-offs on request.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_tip_four"
                    aria-expanded="false"
                    aria-controls="collapse_tip_four"
                  >
                    Q. Do you provide SEO services in Tipperary?
                  </div>
                  <div
                    id="collapse_tip_four"
                    className="accordion-collapse collapse"
                    data-bs-parent="#tipperary_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. WebPalm provides technical SEO, local search optimization, Google Business Profile management, and content strategy for businesses in Tipperary competing in both local and national search.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white p-4 p-md-5 rounded shadow-sm border mt-5">
              <h3 className="h3 mb-2">Ready to Grow Your Tipperary Business Online?</h3>
              <p className="text-muted mb-4">
                Get a free consultation and a detailed project quote tailored to your Tipperary business needs.
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
