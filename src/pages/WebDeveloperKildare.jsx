import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function WebDeveloperKildare() {
  return (
    <div>
      <Helmet>
        <title>Web Developer Kildare | Websites, Apps &amp; Social Media | WebPalm</title>
        <meta
          name="description"
          content="WebPalm is a web developer serving County Kildare — Naas, Newbridge, Athy &amp; beyond. Custom websites from €900, web apps from €3,500+, SEO &amp; social media management. Free quote."
        />
        <meta
          name="keywords"
          content="web developer kildare, web development kildare, social media management kildare, social media management naas, web design kildare"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/web-developer-kildare" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/web-developer-kildare" />
        <meta property="og:title" content="Web Developer Kildare | Websites, Apps &amp; Social Media | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm is a web developer serving County Kildare — Naas, Newbridge, Athy &amp; beyond. Custom websites from €900, web apps from €3,500+, SEO &amp; social media management."
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
                "@id": "https://webpalm.ie/web-developer-kildare#localbusiness",
                "name": "WebPalm - Web Developer Kildare",
                "image": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
                "url": "https://webpalm.ie/web-developer-kildare",
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
                  { "@type": "AdministrativeArea", "name": "Kildare" },
                  { "@type": "City", "name": "Naas" },
                  { "@type": "City", "name": "Newbridge" },
                  { "@type": "City", "name": "Athy" },
                  { "@type": "City", "name": "Maynooth" },
                  { "@type": "City", "name": "Leixlip" },
                  { "@type": "City", "name": "Celbridge" },
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
                "@id": "https://webpalm.ie/web-developer-kildare#service",
                "name": "Web Development &amp; Social Media Management Kildare",
                "provider": { "@id": "https://webpalm.ie/web-developer-kildare#localbusiness" },
                "areaServed": { "@type": "AdministrativeArea", "name": "Kildare" },
                "serviceType": "Web Development",
                "description": "Custom website design, React web application development, e-commerce builds, SEO, and social media management for businesses across County Kildare.",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "EUR",
                  "price": "900",
                  "description": "Business websites from €900. Bespoke web applications from €3,500."
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/web-developer-kildare#breadcrumb",
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
                    "name": "Web Developer Kildare",
                    "item": "https://webpalm.ie/web-developer-kildare"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/web-developer-kildare#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is there a web developer near me in Kildare?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. WebPalm serves businesses throughout County Kildare including Naas, Newbridge, Athy, Maynooth, Leixlip, Celbridge, and Kilcullen. Our Dublin 15 office is 25 minutes from Naas, and we offer on-site meetings across Kildare."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What web development services are available in Kildare?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "WebPalm provides custom website design, React web application development, e-commerce builds, SEO, and social media management for businesses in Kildare. Business websites start from €900."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you handle social media management for Kildare businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We manage Facebook, Instagram, LinkedIn, and X (Twitter) accounts for Kildare businesses, covering content creation, scheduling, paid ads, and performance reporting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I meet a web developer in Naas or Kildare town?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We regularly visit clients across Naas, Newbridge, Kildare town, and Athy for discovery sessions and project reviews. Contact us to arrange an in-county meeting."
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
            <span className="badge bg-primary text-white mb-2 px-3 py-2">County Kildare Web Agency</span>
            <h1 className="page_title mb-0 text-white">Web Developer Kildare | Custom Websites &amp; Apps</h1>
            <p className="text-white mt-2 myText">
              WebPalm serves businesses across County Kildare — Naas, Newbridge, Athy, Maynooth, Leixlip &amp; Celbridge — with custom websites, web applications, and social media management.
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
                    Kildare Web Expertise
                  </div>
                  <h2 className="heading_text mb-3">
                    Your Local Web Developer, <mark>25 Minutes from Naas</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we work with Kildare businesses from sole traders in <strong>Naas</strong> to growing enterprises in <strong>Newbridge, Athy, Maynooth, Leixlip, Celbridge, and Kilcullen</strong>. Our Dublin 15 office is 25 minutes from Naas town centre — close enough to meet on-site, experienced enough to deliver world-class digital solutions.
                </p>
                <p>
                  Whether you need a professional business website, a custom React web application, or a full social media management package, WebPalm delivers results that drive growth for Kildare businesses.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Book Kildare Consultation">Book Kildare Consultation</span>
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
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Naas, Newbridge, Athy, Maynooth, Leixlip, Celbridge &amp; all of Co. Kildare.
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
                    Professional websites for Kildare businesses built mobile-first with on-page SEO. From €900 for a business site to €2,500 for a full corporate platform.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-laptop-code"></i></div>
                  <h3 className="h5 text-dark mb-2">Web Applications</h3>
                  <p className="text-muted small mb-3">
                    Custom React and Next.js web apps for Kildare businesses — booking systems, customer portals, e-commerce platforms, and SaaS tools from €3,500.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-brands fa-instagram"></i></div>
                  <h3 className="h5 text-dark mb-2">Social Media Management</h3>
                  <p className="text-muted small mb-3">
                    Facebook, Instagram, LinkedIn, and X (Twitter) management for Kildare businesses. Content creation, scheduling, paid ads, and monthly performance reports.
                  </p>
                  <Link to="/social-media-management" className="small fw-bold text-primary">Learn more &rarr;</Link>
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
                  The Kildare Business <mark>Digital Partner</mark>
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-handshake"></i></div>
                    <h4 className="h6 fw-bold">On-Site Meetings</h4>
                    <p className="text-muted small mb-0">We visit Naas, Newbridge, Athy, and across Kildare for discovery sessions and reviews.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-euro-sign"></i></div>
                    <h4 className="h6 fw-bold">Fixed-Price Projects</h4>
                    <p className="text-muted small mb-0">No surprise invoices. Websites from €900, web apps from €3,500, all scoped upfront.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-chart-line"></i></div>
                    <h4 className="h6 fw-bold">Local SEO Experts</h4>
                    <p className="text-muted small mb-0">We rank Kildare businesses on Google for local searches that bring real customers through the door.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="iconbox_block text-center p-4 bg-white rounded shadow-sm border h-100">
                    <div className="text-primary fs-2 mb-3"><i className="fa-solid fa-share-nodes"></i></div>
                    <h4 className="h6 fw-bold">Social Media Growth</h4>
                    <p className="text-muted small mb-0">Full social media management packages tailored for Kildare SMEs and local businesses.</p>
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
                  How We Work with <mark>Kildare Businesses</mark>
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="p-4 bg-white rounded shadow-sm border h-100 text-center">
                    <div className="text-primary fw-bold fs-4 mb-2">01</div>
                    <h4 className="h6 fw-bold">Discovery Call or Meeting</h4>
                    <p className="text-muted small mb-0">Video or in-person session in Kildare to scope your project, goals, and budget.</p>
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
                    <p className="text-muted small mb-0">Go-live deployment, SEO submission, and ongoing support for your Kildare business.</p>
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
                  Kildare F.A.Q.
                </div>
                <h2 className="heading_text mb-0">
                  Web Development in Kildare: <mark>Questions &amp; Answers</mark>
                </h2>
                <p className="heading_description mb-0 mt-2">
                  Key information for Kildare businesses looking for a local web developer and digital partner.
                </p>
              </div>

              <div className="faq_accordion accordion mt-4" id="kildare_faq_accordion">
                <div className="accordion-item">
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_kil_one"
                    aria-expanded="true"
                    aria-controls="collapse_kil_one"
                  >
                    Q. Is there a web developer near me in Kildare?
                  </div>
                  <div
                    id="collapse_kil_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#kildare_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. WebPalm serves businesses throughout County Kildare including Naas, Newbridge, Athy, Maynooth, Leixlip, Celbridge, and Kilcullen. Our Dublin 15 office is 25 minutes from Naas, and we offer on-site meetings across Kildare.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_kil_two"
                    aria-expanded="false"
                    aria-controls="collapse_kil_two"
                  >
                    Q. What web development services are available in Kildare?
                  </div>
                  <div
                    id="collapse_kil_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#kildare_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        WebPalm provides custom website design, React web application development, e-commerce builds, SEO, and social media management for businesses in Kildare. Business websites start from €900.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_kil_three"
                    aria-expanded="false"
                    aria-controls="collapse_kil_three"
                  >
                    Q. Do you handle social media management for Kildare businesses?
                  </div>
                  <div
                    id="collapse_kil_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#kildare_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. We manage Facebook, Instagram, LinkedIn, and X (Twitter) accounts for Kildare businesses, covering content creation, scheduling, paid ads, and performance reporting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_kil_four"
                    aria-expanded="false"
                    aria-controls="collapse_kil_four"
                  >
                    Q. Can I meet a web developer in Naas or Kildare town?
                  </div>
                  <div
                    id="collapse_kil_four"
                    className="accordion-collapse collapse"
                    data-bs-parent="#kildare_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. We regularly visit clients across Naas, Newbridge, Kildare town, and Athy for discovery sessions and project reviews. Contact us to arrange an in-county meeting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white p-4 p-md-5 rounded shadow-sm border mt-5">
              <h3 className="h3 mb-2">Ready to Launch Your Kildare Web Project?</h3>
              <p className="text-muted mb-4">
                Get a free consultation with our team and a detailed quote tailored to your Kildare business.
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
