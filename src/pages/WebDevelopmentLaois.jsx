import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function WebDevelopmentLaois() {
  return (
    <div>
      <Helmet>
        <title>Web Development Laois | Websites, SEO &amp; Digital Services | WebPalm</title>
        <meta
          name="description"
          content="WebPalm builds websites and web applications for businesses in County Laois. Portlaoise, Portarlington &amp; beyond. Sites from €900, apps from €3,500. Remote delivery + local meetings."
        />
        <meta
          name="keywords"
          content="web development laois, web developer laois, web design laois, website development laois, Portlaoise web developer"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/web-development-laois" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/web-development-laois" />
        <meta property="og:title" content="Web Development Laois | Websites, SEO &amp; Digital Services | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm builds websites and web applications for businesses in County Laois. Portlaoise, Portarlington &amp; beyond. Sites from €900, apps from €3,500."
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
                "@id": "https://webpalm.ie/web-development-laois#localbusiness",
                "name": "WebPalm - Web Development Laois",
                "image": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
                "url": "https://webpalm.ie/web-development-laois",
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
                  { "@type": "AdministrativeArea", "name": "Laois" },
                  { "@type": "City", "name": "Portlaoise" },
                  { "@type": "City", "name": "Portarlington" },
                  { "@type": "City", "name": "Mountmellick" },
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
                "@id": "https://webpalm.ie/web-development-laois#service",
                "name": "Web Development &amp; Digital Services Laois",
                "provider": { "@id": "https://webpalm.ie/web-development-laois#localbusiness" },
                "areaServed": { "@type": "AdministrativeArea", "name": "Laois" },
                "serviceType": "Web Development",
                "description": "Custom website design, React web application development, SEO, social media management, graphic design, and ongoing website maintenance for businesses across County Laois.",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "EUR",
                  "price": "900",
                  "description": "Business websites from €900. E-commerce from €1,500. Bespoke web applications from €3,500."
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/web-development-laois#breadcrumb",
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
                    "name": "Web Development Laois",
                    "item": "https://webpalm.ie/web-development-laois"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/web-development-laois#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does WebPalm provide web development in County Laois?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. WebPalm serves businesses across County Laois including Portlaoise, Portarlington, Mountmellick, Abbeyleix, and Mountrath with custom website design, web application development, and digital marketing services."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does a website cost for a Laois business?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Business websites start at €900, e-commerce platforms from €1,500, and bespoke web applications from €3,500. All include mobile optimisation, GDPR compliance, and SEO-ready structure."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can WebPalm meet with clients in Portlaoise?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We serve the entire Midlands region and are available for in-person meetings in Portlaoise and surrounding Laois towns for project discovery sessions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What digital services does WebPalm offer to Laois businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our services for Laois businesses include custom website development, React web applications, SEO, social media management, graphic design, and ongoing website maintenance support."
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
            <span className="badge bg-primary text-white mb-2 px-3 py-2">County Laois Web Agency</span>
            <h1 className="page_title mb-0 text-white">Web Development Laois | Custom Websites &amp; Apps | WebPalm</h1>
            <p className="text-white mt-2 myText">
              Custom websites, React web applications, SEO, and digital marketing for businesses across County Laois — Portlaoise, Portarlington, Mountmellick &amp; beyond.
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
                    Laois Web Expertise
                  </div>
                  <h2 className="heading_text mb-3">
                    Your Web Development Partner in <mark>the Midlands</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we deliver professional web development, SEO, and digital marketing services to businesses across County Laois — from <strong>Portlaoise and Portarlington</strong> to <strong>Mountmellick, Abbeyleix, and Mountrath</strong>. We serve the entire Midlands region and are available for in-person meetings in Portlaoise for project discovery sessions.
                </p>
                <p>
                  Whether you need a new business website with GDPR compliance built in, a bespoke web application, or a full digital marketing package including social media management and SEO, WebPalm has the expertise to deliver for Laois businesses.
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
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Portlaoise, Portarlington, Mountmellick, Abbeyleix &amp; all of Co. Laois.
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
                    Professional business websites for Laois companies built mobile-first with SEO-ready architecture, GDPR compliance, and packages starting from €900.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-laptop-code"></i></div>
                  <h3 className="h5 text-dark mb-2">Web Applications</h3>
                  <p className="text-muted small mb-3">
                    Bespoke React web applications, booking systems, e-commerce platforms, and customer portals for Laois businesses from €3,500.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-chart-line"></i></div>
                  <h3 className="h5 text-dark mb-2">SEO &amp; Digital Services</h3>
                  <p className="text-muted small mb-3">
                    Technical SEO, local search optimisation, social media management, graphic design, and ongoing website maintenance for Laois businesses.
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
                  The Laois Business <mark>Digital Partner</mark>
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-handshake"></i></div>
                    <h4 className="h6 fw-bold">Midlands Meetings</h4>
                    <p className="text-muted small mb-0">Available for in-person meetings in Portlaoise and surrounding Laois towns for discovery sessions.</p>
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
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-shield-halved"></i></div>
                    <h4 className="h6 fw-bold">GDPR Compliant</h4>
                    <p className="text-muted small mb-0">Every project includes GDPR-compliant architecture, cookie management, and privacy policy integration.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-wrench"></i></div>
                    <h4 className="h6 fw-bold">Ongoing Support</h4>
                    <p className="text-muted small mb-0">Website maintenance, content updates, security monitoring, and performance support after launch.</p>
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
                  How We Deliver for <mark>Laois Businesses</mark>
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="p-4 bg-white rounded shadow-sm border h-100 text-center">
                    <div className="text-primary fw-bold fs-4 mb-2">01</div>
                    <h4 className="h6 fw-bold">Discovery Call or Meeting</h4>
                    <p className="text-muted small mb-0">Video or in-person session in Portlaoise or remotely to scope your project and goals.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="p-4 bg-white rounded shadow-sm border h-100 text-center">
                    <div className="text-primary fw-bold fs-4 mb-2">02</div>
                    <h4 className="h6 fw-bold">Design &amp; Prototype</h4>
                    <p className="text-muted small mb-0">UI/UX wireframes and design mockups reviewed and approved by you before any build begins.</p>
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
                    <p className="text-muted small mb-0">Go-live deployment, SEO submission, and ongoing maintenance support for your Laois business.</p>
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
                  Laois F.A.Q.
                </div>
                <h2 className="heading_text mb-0">
                  Web Development in Laois: <mark>Questions &amp; Answers</mark>
                </h2>
                <p className="heading_description mb-0 mt-2">
                  Key information for Laois businesses looking for a professional web developer and digital partner.
                </p>
              </div>

              <div className="faq_accordion accordion mt-4" id="laois_faq_accordion">
                <div className="accordion-item">
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_lao_one"
                    aria-expanded="true"
                    aria-controls="collapse_lao_one"
                  >
                    Q. Does WebPalm provide web development in County Laois?
                  </div>
                  <div
                    id="collapse_lao_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#laois_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. WebPalm serves businesses across County Laois including Portlaoise, Portarlington, Mountmellick, Abbeyleix, and Mountrath with custom website design, web application development, and digital marketing services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_lao_two"
                    aria-expanded="false"
                    aria-controls="collapse_lao_two"
                  >
                    Q. How much does a website cost for a Laois business?
                  </div>
                  <div
                    id="collapse_lao_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#laois_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Business websites start at €900, e-commerce platforms from €1,500, and bespoke web applications from €3,500. All include mobile optimisation, GDPR compliance, and SEO-ready structure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_lao_three"
                    aria-expanded="false"
                    aria-controls="collapse_lao_three"
                  >
                    Q. Can WebPalm meet with clients in Portlaoise?
                  </div>
                  <div
                    id="collapse_lao_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#laois_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. We serve the entire Midlands region and are available for in-person meetings in Portlaoise and surrounding Laois towns for project discovery sessions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_lao_four"
                    aria-expanded="false"
                    aria-controls="collapse_lao_four"
                  >
                    Q. What digital services does WebPalm offer to Laois businesses?
                  </div>
                  <div
                    id="collapse_lao_four"
                    className="accordion-collapse collapse"
                    data-bs-parent="#laois_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Our services for Laois businesses include custom website development, React web applications, SEO, social media management, graphic design, and ongoing website maintenance support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white p-4 p-md-5 rounded shadow-sm border mt-5">
              <h3 className="h3 mb-2">Ready to Launch Your Laois Business Online?</h3>
              <p className="text-muted mb-4">
                Get a free consultation and a detailed project quote tailored to your Laois business needs.
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
