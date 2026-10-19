import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function CaseStudyPropVista() {
  return (
    <div>
      <Helmet>
        <title>PropVista Case Study | Real Estate Platform & Property Portal | WebPalm Dublin</title>
        <meta
          name="description"
          content="Learn how WebPalm engineered PropVista, a high-performance real estate marketplace featuring interactive map filtering, instant property valuation, and a 240% increase in buyer leads."
        />
        <meta
          name="keywords"
          content="PropVista case study, real estate website development, property portal software, React Laravel development Dublin, interactive map search, WebPalm portfolio"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/portfolio/propvista" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://webpalm.ie/portfolio/propvista" />
        <meta property="og:title" content="PropVista Case Study | Real Estate Platform | WebPalm" />
        <meta
          property="og:description"
          content="Full case study: Building a geospatial property discovery platform with automated valuation estimators and CRM lead routing."
        />
        <meta property="og:image" content="https://webpalm.ie/assets/images/case/propvista.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://webpalm.ie/portfolio/propvista#case-study",
                "headline": "PropVista Case Study: Scaling a Geospatial Real Estate Portal",
                "description": "How WebPalm engineered PropVista, a modern property marketplace with interactive map search, sub-second listing filtering, and +240% qualified inquiry growth.",
                "image": "https://webpalm.ie/assets/images/case/propvista.jpg",
                "author": {
                  "@id": "https://webpalm.ie/#organization"
                },
                "publisher": {
                  "@id": "https://webpalm.ie/#organization"
                },
                "url": "https://webpalm.ie/portfolio/propvista",
                "about": {
                  "@type": "SoftwareApplication",
                  "name": "PropVista Real Estate Portal",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "All modern browsers"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/portfolio/propvista#breadcrumb",
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
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "PropVista Case Study",
                    "item": "https://webpalm.ie/portfolio/propvista"
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
            <span className="badge bg-primary text-white mb-2 px-3 py-2">Real Estate & PropTech</span>
            <h1 className="page_title mb-0 text-white">PropVista Case Study</h1>
            <p className="text-white mt-2 myText">
              Engineering an interactive property discovery platform with real-time map clustering, instant valuation tools, and lead automation.
            </p>
          </div>
        </section>

        {/* Overview & Key Stats */}
        <section className="section_space bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-10">
                <div className="portfolio_details_image mb-4 shadow rounded overflow-hidden">
                  <img
                    src="assets/images/case/propvista.jpg"
                    alt="PropVista Real Estate Showcase and Property Search Portal"
                    className="img-fluid w-100"
                  />
                </div>

                <div className="row g-4 text-center my-4">
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">+240%</h3>
                      <p className="text-muted small mb-0">Valuation Inquiries</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">65%</h3>
                      <p className="text-muted small mb-0">Faster Search Latency</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">96/100</h3>
                      <p className="text-muted small mb-0">Mobile Speed Score</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">100%</h3>
                      <p className="text-muted small mb-0">Automated CRM Sync</p>
                    </div>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">Client Background & Goals</h2>
                    <p>
                      PropVista is a premier residential and commercial real estate agency showcasing high-value properties across suburban and metropolitan regions. Their previous platform relied on an outdated template with slow, clunky page reloads on every search filter, non-responsive image galleries that consumed huge mobile bandwidth, and poor lead capture rates.
                    </p>
                    <p>
                      WebPalm was engaged to deliver an enterprise-grade digital portal capable of instant geospatial filtering, polygon map drawing, optimized high-definition imagery, and automated mortgage calculators.
                    </p>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">Key Technical Challenges</h2>
                    <ul>
                      <li><strong>Large Geospatial Datasets:</strong> Querying thousands of active property listings by coordinate bounds, price ranges, school districts, and bedroom counts with sub-200ms API response times.</li>
                      <li><strong>Image Optimization at Scale:</strong> Serving high-resolution 4K architectural photography without degrading mobile Core Web Vitals.</li>
                      <li><strong>Instant Agent Dispatch:</strong> Routing viewing requests and automated valuation submissions directly into agent CRMs in real time.</li>
                    </ul>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">The WebPalm Solution</h2>
                    <p>
                      We architected a streamlined, modern application optimized for user engagement and lead conversion:
                    </p>
                    <div className="row g-3 my-3">
                      <div className="col-md-6">
                        <div className="border p-3 rounded h-100">
                          <h4 className="h6 fw-bold text-dark mb-2">1. Interactive Search UI</h4>
                          <p className="small text-muted mb-0">
                            Engineered in <strong>React 19</strong> with custom Google Maps clustering, instant client-side filter debouncing, and virtualized list rendering for smooth 60fps scrolling.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="border p-3 rounded h-100">
                          <h4 className="h6 fw-bold text-dark mb-2">2. Robust Backend & Media Pipeline</h4>
                          <p className="small text-muted mb-0">
                            Powered by <strong>PHP (Laravel) and PostgreSQL</strong> with spatial indexing and Cloudflare Image optimization delivering next-gen WebP/AVIF formats dynamically.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">Technology Stack</h2>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-secondary p-2">React 19</span>
                      <span className="badge bg-secondary p-2">Laravel 11</span>
                      <span className="badge bg-secondary p-2">PostgreSQL (PostGIS)</span>
                      <span className="badge bg-secondary p-2">Google Maps JavaScript API</span>
                      <span className="badge bg-secondary p-2">Cloudflare Images</span>
                      <span className="badge bg-secondary p-2">HubSpot CRM Integration</span>
                      <span className="badge bg-secondary p-2">Bootstrap 5</span>
                    </div>
                  </div>

                  <div className="content_block mb-4">
                    <h2 className="h3 text-dark mb-3">Client Review</h2>
                    <blockquote className="blockquote ps-4 border-start border-4 border-primary bg-light p-3 rounded">
                      <p className="fst-italic mb-2">
                        "The new PropVista portal has completely transformed our business development. Our property listings look breathtaking, our search speed is unparalleled, and our agents are receiving more high-intent valuation inquiries than ever."
                      </p>
                      <footer className="blockquote-footer">Managing Director, <strong>PropVista Real Estate</strong></footer>
                    </blockquote>
                  </div>

                  <div className="text-center pt-4 border-top">
                    <h3 className="h4 mb-3">Ready to Build an Industry-Leading Platform?</h3>
                    <p className="text-muted mb-4">
                      WebPalm crafts high-performance web applications and custom software engineered to convert.
                    </p>
                    <Link to="/contact" className="btn btn-primary me-3">
                      <span className="btn_label" data-text="Request a Proposal">Request a Proposal</span>
                    </Link>
                    <Link to="/portfolio" className="btn btn-outline-dark">
                      <span className="btn_label" data-text="View More Projects">View More Projects</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </main>

      <Footer2 />
    </div>
  );
}
