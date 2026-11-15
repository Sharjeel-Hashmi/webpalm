import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function WebDevelopmentIreland() {
  return (
    <div>
      <Helmet>
        <title>Web Development Company Ireland | Bespoke Websites &amp; Apps | WebPalm</title>
        <meta
          name="description"
          content="WebPalm builds custom websites, React web apps, and enterprise software for businesses across Ireland. Dublin-based, nationally serviced. Websites from €900. Request a free quote."
        />
        <meta
          name="keywords"
          content="web development ireland, web developer ireland, web development services ireland, website development ireland, web development company ireland"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/web-development-ireland" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/web-development-ireland" />
        <meta property="og:title" content="Web Development Company Ireland | Bespoke Websites &amp; Apps | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm builds custom websites, React web apps, and enterprise software for businesses across Ireland. Dublin-based, nationally serviced. Websites from €900."
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
                "@id": "https://webpalm.ie/web-development-ireland#localbusiness",
                "name": "WebPalm - Web Development Company Ireland",
                "image": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
                "url": "https://webpalm.ie/web-development-ireland",
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
                  { "@type": "Country", "name": "Ireland" },
                  { "@type": "City", "name": "Dublin" },
                  { "@type": "City", "name": "Cork" },
                  { "@type": "City", "name": "Galway" },
                  { "@type": "City", "name": "Limerick" },
                  { "@type": "City", "name": "Waterford" }
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
                "@id": "https://webpalm.ie/web-development-ireland#service",
                "name": "Web Development Services Ireland",
                "provider": { "@id": "https://webpalm.ie/web-development-ireland#localbusiness" },
                "areaServed": { "@type": "Country", "name": "Ireland" },
                "serviceType": "Web Development",
                "description": "Bespoke website design, custom React and Next.js web applications, Laravel-powered business platforms, SEO, and enterprise software for Irish businesses nationwide.",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "EUR",
                  "price": "900",
                  "description": "Business websites from €900. Bespoke web applications from €3,500."
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/web-development-ireland#breadcrumb",
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
                    "name": "Web Development Ireland",
                    "item": "https://webpalm.ie/web-development-ireland"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/web-development-ireland#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What web development services does WebPalm offer across Ireland?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "WebPalm delivers bespoke websites, custom React and Next.js web applications, Laravel-powered business platforms, and enterprise software for Irish businesses nationwide. Projects range from €900 for business websites to €3,500+ for full web application builds."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can a Dublin web development company work with clients across Ireland?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. WebPalm serves clients across all 32 counties. We hold video discovery calls, deliver fully remotely, and visit client sites nationwide for major project kick-offs or workshops."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to build a website or web app in Ireland?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A standard business website takes 2 to 4 weeks. A bespoke web application or SaaS platform typically takes 6 to 16 weeks depending on scope, integrations, and feedback cycles."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you support Irish businesses with the LEO Trading Online Voucher?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. WebPalm provides full documentation and compliant deliverables for Local Enterprise Office (LEO) Trading Online Voucher (TOV) applications, reducing upfront web project costs for eligible Irish businesses."
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
            <span className="badge bg-primary text-white mb-2 px-3 py-2">Ireland-Wide Web Agency</span>
            <h1 className="page_title mb-0 text-white">Web Development Company Ireland</h1>
            <p className="text-white mt-2 myText">
              Custom websites, scalable React web applications, and enterprise software built in Dublin — delivered to businesses across all 32 counties of Ireland.
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
                    Ireland-Wide Expertise
                  </div>
                  <h2 className="heading_text mb-3">
                    Serving Irish Businesses from <mark>Dublin to Cork & Beyond</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we partner with startups, SMEs, and established enterprises across Ireland to design, develop, and scale high-performing digital solutions. Headquartered at <strong>9 Limelawn Row, Coolmine, Dublin 15</strong>, our team combines local responsiveness with global software engineering standards.
                </p>
                <p>
                  Whether you are based in <strong>Cork, Galway, Limerick, Waterford</strong>, or anywhere across all 32 counties, we deliver bespoke websites, React and Next.js web applications, and Laravel-powered business platforms that rank on Google and convert visitors into customers.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Request a Free Quote">Request a Free Quote</span>
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
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Cork, Galway, Limerick, Waterford &amp; all 32 counties of Ireland.
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
                    Business websites, landing pages, and corporate platforms built mobile-first with SEO-ready architecture. Packages from €900 for Irish SMEs.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-laptop-code"></i></div>
                  <h3 className="h5 text-dark mb-2">Web Applications</h3>
                  <p className="text-muted small mb-3">
                    Engineered in React 19 and Next.js with Node.js or Python backends. Scalable SaaS platforms, internal portals, and customer-facing web apps from €3,500.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-server"></i></div>
                  <h3 className="h5 text-dark mb-2">Laravel / Backend Platforms</h3>
                  <p className="text-muted small mb-3">
                    Robust business platforms, CRM systems, booking engines, and REST APIs built with Laravel — the industry standard for Irish enterprise web software.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
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
                  National Reach, <mark>Local Expertise</mark>
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-map-location-dot"></i></div>
                    <h4 className="h6 fw-bold">All 32 Counties</h4>
                    <p className="text-muted small mb-0">We serve every county in Ireland — remotely and on-site for major kick-offs.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-euro-sign"></i></div>
                    <h4 className="h6 fw-bold">Transparent Pricing</h4>
                    <p className="text-muted small mb-0">Fixed-price milestones with no hidden fees. Websites from €900, web apps from €3,500.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-shield-halved"></i></div>
                    <h4 className="h6 fw-bold">GDPR Compliant</h4>
                    <p className="text-muted small mb-0">Every project is built with Irish and EU data protection regulations in mind from day one.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-award"></i></div>
                    <h4 className="h6 fw-bold">LEO TOV Ready</h4>
                    <p className="text-muted small mb-0">Full documentation for Local Enterprise Office Trading Online Voucher applications.</p>
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
                  How We Deliver <mark>Across Ireland</mark>
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
                    <p className="text-muted small mb-0">UI/UX wireframes and interactive prototypes reviewed and approved by you before development begins.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="p-4 bg-white rounded shadow-sm border h-100 text-center">
                    <div className="text-primary fw-bold fs-4 mb-2">03</div>
                    <h4 className="h6 fw-bold">Build &amp; Test</h4>
                    <p className="text-muted small mb-0">Agile development sprints with regular demos, QA testing, and performance optimisation.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="p-4 bg-white rounded shadow-sm border h-100 text-center">
                    <div className="text-primary fw-bold fs-4 mb-2">04</div>
                    <h4 className="h6 fw-bold">Launch &amp; Support</h4>
                    <p className="text-muted small mb-0">Go-live deployment, SEO submission, and ongoing maintenance support for your Irish business.</p>
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
                  Ireland F.A.Q.
                </div>
                <h2 className="heading_text mb-0">
                  Web Development in Ireland: <mark>Questions &amp; Answers</mark>
                </h2>
                <p className="heading_description mb-0 mt-2">
                  Key information for businesses across Ireland seeking a reliable web development partner.
                </p>
              </div>

              <div className="faq_accordion accordion mt-4" id="ireland_faq_accordion">
                <div className="accordion-item">
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_ire_one"
                    aria-expanded="true"
                    aria-controls="collapse_ire_one"
                  >
                    Q. What web development services does WebPalm offer across Ireland?
                  </div>
                  <div
                    id="collapse_ire_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#ireland_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        WebPalm delivers bespoke websites, custom React and Next.js web applications, Laravel-powered business platforms, and enterprise software for Irish businesses nationwide. Projects range from €900 for business websites to €3,500+ for full web application builds.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_ire_two"
                    aria-expanded="false"
                    aria-controls="collapse_ire_two"
                  >
                    Q. Can a Dublin web development company work with clients across Ireland?
                  </div>
                  <div
                    id="collapse_ire_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#ireland_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. WebPalm serves clients across all 32 counties. We hold video discovery calls, deliver fully remotely, and visit client sites nationwide for major project kick-offs or workshops.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_ire_three"
                    aria-expanded="false"
                    aria-controls="collapse_ire_three"
                  >
                    Q. How long does it take to build a website or web app in Ireland?
                  </div>
                  <div
                    id="collapse_ire_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#ireland_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        A standard business website takes 2 to 4 weeks. A bespoke web application or SaaS platform typically takes 6 to 16 weeks depending on scope, integrations, and feedback cycles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_ire_four"
                    aria-expanded="false"
                    aria-controls="collapse_ire_four"
                  >
                    Q. Do you support Irish businesses with the LEO Trading Online Voucher?
                  </div>
                  <div
                    id="collapse_ire_four"
                    className="accordion-collapse collapse"
                    data-bs-parent="#ireland_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. WebPalm provides full documentation and compliant deliverables for Local Enterprise Office (LEO) Trading Online Voucher (TOV) applications, reducing upfront web project costs for eligible Irish businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white p-4 p-md-5 rounded shadow-sm border mt-5">
              <h3 className="h3 mb-2">Ready to Grow Your Irish Business Online?</h3>
              <p className="text-muted mb-4">
                Get a free consultation with our team and a detailed quote tailored to your project requirements.
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
