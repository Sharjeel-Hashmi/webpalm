import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function GraphicDesignDublin() {
  return (
    <div>
      <Helmet>
        <title>Graphic Design Dublin | Branding, Logos &amp; Visual Identity | WebPalm</title>
        <meta
          name="description"
          content="WebPalm is a graphic design studio in Dublin creating logos, brand identities, marketing creatives, and social media visuals for Irish businesses. Free consultation available."
        />
        <meta
          name="keywords"
          content="graphic design dublin, graphic design services dublin, dublin graphic design, graphic design dublin ireland, graphic design services dublin ireland, graphic design near me, graphic designer near me dublin"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/graphic-design-dublin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/graphic-design-dublin" />
        <meta property="og:title" content="Graphic Design Dublin | Branding, Logos &amp; Visual Identity | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm is a graphic design studio in Dublin creating logos, brand identities, marketing creatives, and social media visuals for Irish businesses. Free consultation available."
        />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta property="og:site_name" content="WebPalm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Graphic Design Dublin | Branding, Logos &amp; Visual Identity | WebPalm" />
        <meta
          name="twitter:description"
          content="Logos, brand identities, social media visuals, and marketing creatives for Dublin businesses. Free consultation from WebPalm's graphic design studio."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "ProfessionalService"],
                "@id": "https://webpalm.ie/graphic-design-dublin#localbusiness",
                "name": "WebPalm - Graphic Design Dublin",
                "image": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
                "url": "https://webpalm.ie/graphic-design-dublin",
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
                "@id": "https://webpalm.ie/graphic-design-dublin#service",
                "name": "Graphic Design Dublin",
                "serviceType": ["Graphic Design", "Branding"],
                "provider": { "@id": "https://webpalm.ie/graphic-design-dublin#localbusiness" },
                "areaServed": [
                  { "@type": "City", "name": "Dublin" },
                  { "@type": "AdministrativeArea", "name": "Dublin 15" },
                  { "@type": "Country", "name": "Ireland" }
                ],
                "description": "Logo design, brand identity, social media visuals, and marketing collateral for Dublin businesses. Free consultation available.",
                "url": "https://webpalm.ie/graphic-design-dublin"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/graphic-design-dublin#breadcrumb",
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
                    "name": "Graphic Design Dublin",
                    "item": "https://webpalm.ie/graphic-design-dublin"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/graphic-design-dublin#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What graphic design services does WebPalm offer in Dublin?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "WebPalm offers logo design, brand identity systems, business stationery, social media template design, marketing brochures, presentation design, packaging concepts, and digital advertising creatives for Dublin businesses. All design work is supplied in print-ready and web-optimised formats."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does graphic design cost in Dublin?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Logo design projects start from €350, complete brand identity packages from €750, social media template sets from €200, and marketing collateral packages from €500. WebPalm provides fixed-price quotations after a free consultation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I see examples of graphic design work done for Dublin businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. WebPalm's portfolio includes branding, motion design, and digital creatives for Irish businesses across healthcare, real estate, education, e-commerce, and professional services. Visit our portfolio page for case studies and selected work."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide graphic design for social media content in Dublin?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We create on-brand social media templates, promotional post designs, story and reel graphics, and consistent visual content calendars for Dublin businesses on Instagram, LinkedIn, Facebook, and TikTok."
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
            <span className="badge bg-primary text-white mb-2 px-3 py-2">Dublin Graphic Design Studio</span>
            <h1 className="page_title mb-0 text-white">Graphic Design Dublin | Branding &amp; Visual Identity | WebPalm</h1>
            <p className="text-white mt-2 myText">
              Logos, brand identities, social media visuals, and marketing creatives for Dublin businesses — built to look sharp and perform better.
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
                    Dublin Design Studio
                  </div>
                  <h2 className="heading_text mb-3">
                    Design That Makes Your Dublin Business <mark>Easier to Trust</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we are a graphic design studio based at <strong>9 Limelawn Row, Coolmine, Dublin 15</strong>. We create logos, brand identity systems, marketing collateral, and social media visuals for Dublin businesses that want to look established, credible, and consistent across every platform.
                </p>
                <p>
                  Whether you are launching a new brand or refreshing an existing one, our designers work from a clear brief — understanding your business, your audience, and your goals before creating a visual direction that makes your brand easier to recognise and act on.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Book Free Consultation">Book Free Consultation</span>
                    <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </Link>
                  <a href="tel:+353899520026" className="btn btn-outline-dark">
                    <span className="btn_label" data-text="Call +353 899520026">Call +353 899520026</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="p-4 bg-white rounded shadow-sm border">
                  <h3 className="h5 text-dark mb-3"><i className="fa-solid fa-location-dot text-primary me-2"></i>WebPalm — Graphic Design Dublin</h3>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><strong>Address:</strong> 9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland</li>
                    <li className="mb-2"><strong>Phone:</strong> <a href="tel:+353899520026">+353 899520026</a></li>
                    <li className="mb-2"><strong>Email:</strong> <a href="mailto:info@webpalm.ie">info@webpalm.ie</a></li>
                    <li className="mb-2"><strong>Working Hours:</strong> Mon – Fri: 9:00 AM – 6:00 PM</li>
                    <li className="mb-0"><strong>Consultation:</strong> Free, no obligation</li>
                  </ul>
                  <div className="alert alert-info py-2 px-3 small mb-0">
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Dublin 15, City Centre, South Dublin &amp; all of Ireland.
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="row g-4 my-4">
              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-pen-nib"></i></div>
                  <h3 className="h5 text-dark mb-2">Logo &amp; Brand Identity</h3>
                  <p className="text-muted small mb-3">
                    Logos, colour systems, typography guidelines, and brand guides that help your Dublin business feel established and immediately recognisable.
                  </p>
                  <Link to="/contact" className="small fw-bold text-primary">Get a quote &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-mobile-screen"></i></div>
                  <h3 className="h5 text-dark mb-2">Social Media Design</h3>
                  <p className="text-muted small mb-3">
                    Platform-optimised post templates, story frames, and digital ad creatives for Instagram, LinkedIn, Facebook, and TikTok.
                  </p>
                  <Link to="/contact" className="small fw-bold text-primary">Get a quote &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-print"></i></div>
                  <h3 className="h5 text-dark mb-2">Print &amp; Digital Collateral</h3>
                  <p className="text-muted small mb-3">
                    Brochures, flyers, presentations, business cards, and digital marketing assets — supplied in print-ready and web-optimised formats.
                  </p>
                  <Link to="/contact" className="small fw-bold text-primary">Get a quote &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="row align-items-center justify-content-lg-between mt-5 pt-3">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="heading_block">
                  <h2 className="heading_text">A Design Process Built Around <mark>Your Business</mark></h2>
                  <p className="heading_description mb-2">
                    We do not make design decisions in isolation. Every concept is shaped by your brand goals, your audience, and the platforms the design will live on.
                  </p>
                  <p className="heading_description mb-0">
                    That gives you work that looks strong and supports your actual business — whether the aim is more enquiries, stronger brand recognition, or more social engagement across Dublin.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">01. Brief</h3>
                        <p className="mb-0">We learn who the brand is, who it needs to reach, and what should feel clearer or stronger in the market.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Concepts</h3>
                        <p className="mb-0">We explore visual directions and creative themes before refining the strongest option with your feedback.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Revisions</h3>
                        <p className="mb-0">We work through revisions with a practical eye until the final direction aligns perfectly with your goals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Delivery</h3>
                        <p className="mb-0">Final files in print-ready and web-optimised formats, ready to use across all your digital and physical channels.</p>
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
                  Graphic Design F.A.Q.
                </div>
                <h2 className="heading_text mb-0">
                  Graphic Design in Dublin: <mark>Questions &amp; Answers</mark>
                </h2>
                <p className="heading_description mb-0 mt-2">
                  Key information for Dublin businesses looking for a local graphic design partner.
                </p>
              </div>

              <div className="faq_accordion accordion mt-4" id="gd_dublin_faq_accordion">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="gdHeadingOne">
                    <div
                      className="accordion-button"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_gd_one"
                      aria-expanded="true"
                      aria-controls="collapse_gd_one"
                    >
                      Q. What graphic design services does WebPalm offer in Dublin?
                    </div>
                  </h3>
                  <div
                    id="collapse_gd_one"
                    className="accordion-collapse collapse show"
                    aria-labelledby="gdHeadingOne"
                    data-bs-parent="#gd_dublin_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        WebPalm offers logo design, brand identity systems, business stationery, social media template design, marketing brochures, presentation design, packaging concepts, and digital advertising creatives for Dublin businesses. All design work is supplied in print-ready and web-optimised formats.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="gdHeadingTwo">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_gd_two"
                      aria-expanded="false"
                      aria-controls="collapse_gd_two"
                    >
                      Q. How much does graphic design cost in Dublin?
                    </div>
                  </h3>
                  <div
                    id="collapse_gd_two"
                    className="accordion-collapse collapse"
                    aria-labelledby="gdHeadingTwo"
                    data-bs-parent="#gd_dublin_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Logo design projects start from €350, complete brand identity packages from €750, social media template sets from €200, and marketing collateral packages from €500. WebPalm provides fixed-price quotations after a free consultation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="gdHeadingThree">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_gd_three"
                      aria-expanded="false"
                      aria-controls="collapse_gd_three"
                    >
                      Q. Can I see examples of graphic design work done for Dublin businesses?
                    </div>
                  </h3>
                  <div
                    id="collapse_gd_three"
                    className="accordion-collapse collapse"
                    aria-labelledby="gdHeadingThree"
                    data-bs-parent="#gd_dublin_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. WebPalm's portfolio includes branding, motion design, and digital creatives for Irish businesses across healthcare, real estate, education, e-commerce, and professional services. Visit our portfolio page for case studies and selected work.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="gdHeadingFour">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_gd_four"
                      aria-expanded="false"
                      aria-controls="collapse_gd_four"
                    >
                      Q. Do you provide graphic design for social media content in Dublin?
                    </div>
                  </h3>
                  <div
                    id="collapse_gd_four"
                    className="accordion-collapse collapse"
                    aria-labelledby="gdHeadingFour"
                    data-bs-parent="#gd_dublin_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. We create on-brand social media templates, promotional post designs, story and reel graphics, and consistent visual content calendars for Dublin businesses on Instagram, LinkedIn, Facebook, and TikTok.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white p-4 p-md-5 rounded shadow-sm border mt-5">
              <h3 className="h3 mb-2">Looking for a Graphic Designer Near You in Dublin?</h3>
              <p className="text-muted mb-4">
                Book a free consultation with our Dublin design team or request a fixed-price quotation for your project.
              </p>
              <Link to="/contact" className="btn btn-primary me-3">
                <span className="btn_label" data-text="Book Free Consultation">Book Free Consultation</span>
                <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
              </Link>
              <Link to="/graphic-designing" className="btn btn-outline-dark">
                <span className="btn_label" data-text="View All Design Services">View All Design Services</span>
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
