import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function WebDevelopmentDublin() {
  return (
    <div>
      <Helmet>
        <title>Web Development Company Dublin | Custom Websites & Apps | WebPalm</title>
        <meta
          name="description"
          content="WebPalm is a leading web development company in Dublin, based in Coolmine D15. We engineer bespoke websites, custom React/Next.js web apps, and enterprise software for businesses across Dublin and Ireland."
        />
        <meta
          name="keywords"
          content="web development Dublin, web design Dublin, custom web application Dublin, Dublin 15 web agency, Coolmine web design, software development company Ireland, React developers Dublin, local SEO Dublin, WebPalm Dublin"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/web-development-dublin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/web-development-dublin" />
        <meta property="og:title" content="Web Development Company Dublin | Custom Websites & Apps | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm delivers high-performance web development and software engineering for Irish businesses from our Dublin 15 headquarters."
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
                "@id": "https://webpalm.ie/web-development-dublin#localbusiness",
                "name": "WebPalm - Web Development Dublin",
                "image": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
                "url": "https://webpalm.ie/web-development-dublin",
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
                  { "@type": "City", "name": "Dublin" },
                  { "@type": "AdministrativeArea", "name": "Dublin 15" },
                  { "@type": "AdministrativeArea", "name": "Fingal" },
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
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/web-development-dublin#breadcrumb",
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
                    "name": "Web Development Dublin",
                    "item": "https://webpalm.ie/web-development-dublin"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/web-development-dublin#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Why choose a Dublin-based web development agency like WebPalm?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Partnering with WebPalm gives you direct access to local Dublin engineers who understand the Irish market, local consumer behavior, GDPR data regulations, and provide face-to-face consultations in Dublin."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does a custom website or web app cost in Dublin?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "WebPalm offers transparent, competitive pricing tailored for Irish businesses. Standard business websites range from €900 to €2,500, while bespoke web applications and SaaS platforms typically range from €3,500 upwards depending on features."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can we meet in person in Dublin to discuss our web project?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! We welcome in-person discovery meetings across Dublin, including our office in Coolmine D15, Blanchardstown, the IFSC, Grand Canal Dock, or at your Dublin office."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you assist Irish businesses with the Local Enterprise Office (LEO) Trading Online Voucher?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, WebPalm builds e-commerce and digital platforms fully compliant with LEO Trading Online Voucher (TOV) grant specifications, providing necessary quotes and technical roadmaps."
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
            <span className="badge bg-primary text-white mb-2 px-3 py-2">Dublin, Ireland Agency</span>
            <h1 className="page_title mb-0 text-white">Web Development Company Dublin</h1>
            <p className="text-white mt-2 myText">
              Custom websites, scalable web applications, and digital growth strategies engineered in Coolmine, Dublin 15 for ambitious Irish businesses.
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
                    Local Dublin Expertise
                  </div>
                  <h2 className="heading_text mb-3">
                    Empowering Irish Businesses with <mark>World-Class Software</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we partner with Irish startups, SMEs, and established commercial enterprises across Dublin to design, develop, and scale high-performing digital solutions. Headquartered at <strong>9 Limelawn Row, Coolmine, Dublin 15</strong>, our team combines local responsiveness with global software engineering standards.
                </p>
                <p>
                  Whether you need a dynamic corporate website, a high-converting e-commerce shop, an internal business portal, or a scalable SaaS web application, we build mobile-first platforms optimized for Google rankings and Core Web Vitals.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Book Dublin Consultation">Book Dublin Consultation</span>
                    <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </Link>
                  <a href="tel:+353899520026" className="btn btn-outline-dark">
                    <span className="btn_label" data-text="Call +353 899520026">Call +353 899520026</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="p-4 bg-white rounded shadow-sm border">
                  <h3 className="h5 text-dark mb-3"><i className="fa-solid fa-location-dot text-primary me-2"></i>Dublin Office & Details</h3>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><strong>Address:</strong> 9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland</li>
                    <li className="mb-2"><strong>Direct Line:</strong> <a href="tel:+353899520026">+353 899520026</a></li>
                    <li className="mb-2"><strong>Support Line:</strong> <a href="tel:+353894205316">+353 894205316</a></li>
                    <li className="mb-2"><strong>Email:</strong> <a href="mailto:info@webpalm.ie">info@webpalm.ie</a></li>
                    <li className="mb-0"><strong>Working Hours:</strong> Mon – Fri: 9:00 AM – 6:00 PM</li>
                  </ul>
                  <div className="alert alert-info py-2 px-3 small mb-0">
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Dublin 15, City Centre, South Dublin, Fingal & Nationwide Ireland.
                  </div>
                </div>
              </div>
            </div>

            {/* Dublin Services Grid */}
            <div className="row g-4 my-4">
              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-laptop-code"></i></div>
                  <h3 className="h5 text-dark mb-2">Custom Web Apps</h3>
                  <p className="text-muted small mb-3">
                    Engineered in React 19, Next.js, Node.js, and Python. We build fast, scalable web software with complex business logic and robust REST APIs.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-chart-line"></i></div>
                  <h3 className="h5 text-dark mb-2">Dublin SEO & AEO</h3>
                  <p className="text-muted small mb-3">
                    Dominate local search rankings across Dublin. We engineer on-page SEO, Google Business Profile setups, and Answer Engine Optimization (AEO).
                  </p>
                  <Link to="/search-engine-optimization" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-palette"></i></div>
                  <h3 className="h5 text-dark mb-2">Branding & UI/UX</h3>
                  <p className="text-muted small mb-3">
                    Memorable visual identities, vector logos, and intuitive UI/UX design systems that turn visitors into loyal customers.
                  </p>
                  <Link to="/graphic-designing" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Dublin Local FAQ Section */}
            <div className="faq_section section_space mt-5">
              <div className="heading_block text-center">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  Dublin F.A.Q.
                </div>
                <h2 className="heading_text mb-0">
                  Web Development in Dublin: <mark>Questions & Answers</mark>
                </h2>
                <p className="heading_description mb-0 mt-2">
                  Key information for businesses seeking web development and software engineering partners in Ireland.
                </p>
              </div>

              <div className="faq_accordion accordion mt-4" id="dublin_faq_accordion">
                <div className="accordion-item">
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_dub_one"
                    aria-expanded="true"
                    aria-controls="collapse_dub_one"
                  >
                    Q. Why choose a Dublin-based web development agency like WebPalm?
                  </div>
                  <div
                    id="collapse_dub_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#dublin_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Partnering with WebPalm gives you direct access to local Dublin engineers who understand the Irish market, local consumer behavior, GDPR data regulations, and provide face-to-face consultations in Dublin.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_dub_two"
                    aria-expanded="false"
                    aria-controls="collapse_dub_two"
                  >
                    Q. How much does a custom website or web app cost in Dublin?
                  </div>
                  <div
                    id="collapse_dub_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#dublin_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        WebPalm offers transparent, competitive pricing tailored for Irish businesses. Standard business websites range from €900 to €2,500, while bespoke web applications and SaaS platforms typically range from €3,500 upwards depending on features.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_dub_three"
                    aria-expanded="false"
                    aria-controls="collapse_dub_three"
                  >
                    Q. Can we meet in person in Dublin to discuss our web project?
                  </div>
                  <div
                    id="collapse_dub_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#dublin_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes! We welcome in-person discovery meetings across Dublin, including our office in Coolmine D15, Blanchardstown, the IFSC, Grand Canal Dock, or at your Dublin office.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_dub_four"
                    aria-expanded="false"
                    aria-controls="collapse_dub_four"
                  >
                    Q. Do you assist Irish businesses with the Local Enterprise Office (LEO) Trading Online Voucher?
                  </div>
                  <div
                    id="collapse_dub_four"
                    className="accordion-collapse collapse"
                    data-bs-parent="#dublin_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes, WebPalm builds e-commerce and digital platforms fully compliant with LEO Trading Online Voucher (TOV) grant specifications, providing necessary quotes and technical roadmaps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dublin Call to Action */}
            <div className="text-center bg-white p-4 p-md-5 rounded shadow-sm border mt-5">
              <h3 className="h3 mb-2">Ready to Launch Your Dublin Web Project?</h3>
              <p className="text-muted mb-4">
                Schedule a discovery call with our Dublin team or request a detailed technical milestone quote.
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
