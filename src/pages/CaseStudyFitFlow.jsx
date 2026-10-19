import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function CaseStudyFitFlow() {
  return (
    <div>
      <Helmet>
        <title>FitFlow Case Study | Fitness & Gym Member Platform | WebPalm Dublin</title>
        <meta
          name="description"
          content="Explore how WebPalm developed FitFlow, a real-time gym management and class booking web platform that increased member retention by 180% and streamlined recurring billing."
        />
        <meta
          name="keywords"
          content="FitFlow case study, gym management software, fitness web application, real-time booking platform, React Python development Dublin, WebPalm portfolio"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/portfolio/fitflow" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://webpalm.ie/portfolio/fitflow" />
        <meta property="og:title" content="FitFlow Case Study | Fitness & Gym Member Platform | WebPalm" />
        <meta
          property="og:description"
          content="Full case study: Engineering an automated class reservation, trainer schedule, and recurring subscription platform for modern fitness brands."
        />
        <meta property="og:image" content="https://webpalm.ie/assets/images/case/fitflow.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://webpalm.ie/portfolio/fitflow#case-study",
                "headline": "FitFlow Case Study: Real-Time Fitness Management & Booking Platform",
                "description": "How WebPalm engineered FitFlow, an automated gym and personal training management web application achieving 3x faster reservations and +180% member retention.",
                "image": "https://webpalm.ie/assets/images/case/fitflow.jpg",
                "author": {
                  "@id": "https://webpalm.ie/#organization"
                },
                "publisher": {
                  "@id": "https://webpalm.ie/#organization"
                },
                "url": "https://webpalm.ie/portfolio/fitflow",
                "about": {
                  "@type": "SoftwareApplication",
                  "name": "FitFlow Platform",
                  "applicationCategory": "HealthApplication",
                  "operatingSystem": "All modern browsers"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/portfolio/fitflow#breadcrumb",
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
                    "name": "FitFlow Case Study",
                    "item": "https://webpalm.ie/portfolio/fitflow"
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
            <span className="badge bg-primary text-white mb-2 px-3 py-2">Health & Fitness Tech</span>
            <h1 className="page_title mb-0 text-white">FitFlow Case Study</h1>
            <p className="text-white mt-2 myText">
              Engineering an end-to-end gym member management, instant class booking, and trainer scheduling platform.
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
                    src="assets/images/case/fitflow.jpg"
                    alt="FitFlow Class Booking and Member Dashboard"
                    className="img-fluid w-100"
                  />
                </div>

                <div className="row g-4 text-center my-4">
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">3x</h3>
                      <p className="text-muted small mb-0">Faster Class Booking</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">+180%</h3>
                      <p className="text-muted small mb-0">Member Retention Rate</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">4.9/5</h3>
                      <p className="text-muted small mb-0">Member Satisfaction</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">100%</h3>
                      <p className="text-muted small mb-0">Automated Billing</p>
                    </div>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">Project Overview</h2>
                    <p>
                      FitFlow is a dynamic gym brand operating boutique fitness studios and specialized wellness facilities. With an active member base booking popular high-intensity interval training (HIIT) and yoga classes, their third-party booking widget was constantly crashing during Monday morning booking releases, leading to member frustration, missed renewals, and administrative headaches.
                    </p>
                    <p>
                      WebPalm was selected to build a custom, proprietary web application tailored specifically to FitFlow's operational workflow—integrating instant seat reservation, member attendance tracking, automated waitlists, and recurring Stripe payments.
                    </p>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">The Challenges</h2>
                    <ul>
                      <li><strong>Concurrency Surges:</strong> Upwards of 800 members attempting to secure 25 slots in high-demand classes within seconds of schedule publication.</li>
                      <li><strong>Automated Waitlist Management:</strong> Seamlessly promoting waitlisted members when cancellations occur, without staff intervention.</li>
                      <li><strong>Tiered Subscription Logic:</strong> Handling variable membership tiers (Unlimited, 10-Class Passes, Off-Peak) with automated recurring SEPA and credit card billing.</li>
                    </ul>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">The Technical Solution</h2>
                    <p>
                      WebPalm engineered a high-velocity solution leveraging modern frameworks:
                    </p>
                    <div className="row g-3 my-3">
                      <div className="col-md-6">
                        <div className="border p-3 rounded h-100">
                          <h4 className="h6 fw-bold text-dark mb-2">1. Fast Concurrency Queue</h4>
                          <p className="small text-muted mb-0">
                            Built with <strong>Python (FastAPI) and Redis</strong> transactional locks to prevent overbooking and guarantee atomic reservation processing during peak rush hours.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="border p-3 rounded h-100">
                          <h4 className="h6 fw-bold text-dark mb-2">2. Dynamic Member App</h4>
                          <p className="small text-muted mb-0">
                            Engineered in <strong>React 19</strong> as an installable Progressive Web App (PWA) with calendar sync, push notifications for waitlist alerts, and one-click booking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">Technologies Employed</h2>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-secondary p-2">React 19</span>
                      <span className="badge bg-secondary p-2">Python FastAPI</span>
                      <span className="badge bg-secondary p-2">Redis Locks</span>
                      <span className="badge bg-secondary p-2">PostgreSQL</span>
                      <span className="badge bg-secondary p-2">Stripe Billing</span>
                      <span className="badge bg-secondary p-2">Twilio SMS Alerts</span>
                      <span className="badge bg-secondary p-2">Progressive Web App (PWA)</span>
                    </div>
                  </div>

                  <div className="content_block mb-4">
                    <h2 className="h3 text-dark mb-3">Client Testimonial</h2>
                    <blockquote className="blockquote ps-4 border-start border-4 border-primary bg-light p-3 rounded">
                      <p className="fst-italic mb-2">
                        "Before WebPalm stepped in, our front desk spent hours every week handling booking complaints and manual payments. FitFlow now runs entirely on autopilot, and our members love how fast the app is on their phones."
                      </p>
                      <footer className="blockquote-footer">Operations Director, <strong>FitFlow Studios</strong></footer>
                    </blockquote>
                  </div>

                  <div className="text-center pt-4 border-top">
                    <h3 className="h4 mb-3">Need a Custom Booking or Member Management Platform?</h3>
                    <p className="text-muted mb-4">
                      WebPalm builds real-time portals and booking engines customized to your business logic.
                    </p>
                    <Link to="/contact" className="btn btn-primary me-3">
                      <span className="btn_label" data-text="Get a Free Consultation">Get a Free Consultation</span>
                    </Link>
                    <Link to="/portfolio" className="btn btn-outline-dark">
                      <span className="btn_label" data-text="Explore Portfolio">Explore Portfolio</span>
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
