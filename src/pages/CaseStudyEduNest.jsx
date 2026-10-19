import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function CaseStudyEduNest() {
  return (
    <div>
      <Helmet>
        <title>EduNest Case Study | EdTech Learning Platform | WebPalm Dublin</title>
        <meta
          name="description"
          content="Discover how WebPalm engineered EduNest, a high-performance EdTech learning platform delivering real-time interactive lectures, student dashboards, and a 210% surge in enrollment."
        />
        <meta
          name="keywords"
          content="EduNest case study, EdTech web application, React learning platform, educational software Dublin, custom LMS development, WebPalm portfolio"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/portfolio/edunest" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://webpalm.ie/portfolio/edunest" />
        <meta property="og:title" content="EduNest Case Study | EdTech Learning Platform | WebPalm" />
        <meta
          property="og:description"
          content="Full case study: Building a scalable, cloud-native student learning management system with sub-second page loads and automated course certification."
        />
        <meta property="og:image" content="https://webpalm.ie/assets/images/case/Edunest.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://webpalm.ie/portfolio/edunest#case-study",
                "headline": "EduNest Case Study: Engineering a Next-Generation EdTech Platform",
                "description": "How WebPalm engineered EduNest, a custom cloud-native learning management platform achieving +210% course enrollments and 99.98% platform uptime.",
                "image": "https://webpalm.ie/assets/images/case/Edunest.jpg",
                "author": {
                  "@id": "https://webpalm.ie/#organization"
                },
                "publisher": {
                  "@id": "https://webpalm.ie/#organization"
                },
                "url": "https://webpalm.ie/portfolio/edunest",
                "about": {
                  "@type": "SoftwareApplication",
                  "name": "EduNest LMS Platform",
                  "applicationCategory": "EducationalApplication",
                  "operatingSystem": "All modern browsers"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/portfolio/edunest#breadcrumb",
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
                    "name": "EduNest Case Study",
                    "item": "https://webpalm.ie/portfolio/edunest"
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
            <span className="badge bg-primary text-white mb-2 px-3 py-2">EdTech & E-Learning</span>
            <h1 className="page_title mb-0 text-white">EduNest Case Study</h1>
            <p className="text-white mt-2 myText">
              Engineering a high-performance, cloud-native learning management platform built for modern educational delivery.
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
                    src="assets/images/case/Edunest.jpg"
                    alt="EduNest Student Dashboard and Learning Interface"
                    className="img-fluid w-100"
                  />
                </div>

                <div className="row g-4 text-center my-4">
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">+210%</h3>
                      <p className="text-muted small mb-0">Course Enrollment Growth</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">0.8s</h3>
                      <p className="text-muted small mb-0">Average Page Load</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">99.98%</h3>
                      <p className="text-muted small mb-0">Platform Uptime</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="p-4 bg-white rounded shadow-sm h-100">
                      <h3 className="h1 text-primary fw-bold mb-1">98/100</h3>
                      <p className="text-muted small mb-0">Core Web Vitals</p>
                    </div>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">Project Summary & Context</h2>
                    <p>
                      EduNest is a forward-thinking educational technology organization that delivers accredited digital courses, interactive bootcamps, and professional certifications to thousands of active students worldwide. As student traffic surged, their legacy learning portal suffered from slow video buffer times, broken quiz tracking, and poor mobile accessibility.
                    </p>
                    <p>
                      WebPalm was commissioned to architect a completely redesigned, custom web application from the ground up, prioritizing lightning-fast lecture playback, automated progress tracking, frictionless onboarding, and rigorous data protection.
                    </p>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">The Architectural Challenge</h2>
                    <ul>
                      <li><strong>Peak Concurrent Concurrency:</strong> Handling thousands of students accessing live quizzes, streaming HD video modules, and submitting assignments simultaneously without latency spikes.</li>
                      <li><strong>Mobile-First Student Access:</strong> Over 68% of EduNest students learn primarily via smartphones and tablets, necessitating zero-compromise responsive design.</li>
                      <li><strong>Automated Grading & Certification:</strong> Eliminating manual administrative bottlenecks by building instant scoring, automated PDF certificate generation, and Stripe subscription renewals.</li>
                    </ul>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">WebPalm's Engineering Solution</h2>
                    <p>
                      Our engineering team built a decoupled modern web application optimized for reliability and scalability:
                    </p>
                    <div className="row g-3 my-3">
                      <div className="col-md-6">
                        <div className="border p-3 rounded h-100">
                          <h4 className="h6 fw-bold text-dark mb-2">1. Frontend Architecture</h4>
                          <p className="small text-muted mb-0">
                            Engineered in <strong>React and TypeScript</strong> with component-level state management, pre-cached video metadata, and optimistic UI updates for instant quiz feedback.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="border p-3 rounded h-100">
                          <h4 className="h6 fw-bold text-dark mb-2">2. Cloud Infrastructure & API</h4>
                          <p className="small text-muted mb-0">
                            High-concurrency <strong>Node.js and PostgreSQL</strong> RESTful API hosted on auto-scaling cloud containers with Redis caching and CDN-accelerated asset delivery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">Tech Stack & Tools Used</h2>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-secondary p-2">React 19</span>
                      <span className="badge bg-secondary p-2">TypeScript</span>
                      <span className="badge bg-secondary p-2">Node.js</span>
                      <span className="badge bg-secondary p-2">PostgreSQL</span>
                      <span className="badge bg-secondary p-2">Redis Cache</span>
                      <span className="badge bg-secondary p-2">Stripe API</span>
                      <span className="badge bg-secondary p-2">Docker Cloud</span>
                      <span className="badge bg-secondary p-2">AWS S3 / CloudFront</span>
                    </div>
                  </div>

                  <div className="content_block mb-4">
                    <h2 className="h3 text-dark mb-3">Client Feedback</h2>
                    <blockquote className="blockquote ps-4 border-start border-4 border-primary bg-light p-3 rounded">
                      <p className="fst-italic mb-2">
                        "WebPalm transformed our entire educational platform. Our student satisfaction ratings skyrocketed, and support tickets dropped by 74% within the first month of launch. They are true software engineering partners."
                      </p>
                      <footer className="blockquote-footer">Head of Product, <strong>EduNest Learning</strong></footer>
                    </blockquote>
                  </div>

                  <div className="text-center pt-4 border-top">
                    <h3 className="h4 mb-3">Want to Engineer a Scalable Web Application?</h3>
                    <p className="text-muted mb-4">
                      Let WebPalm build your custom web portal, SaaS platform, or mobile-first application.
                    </p>
                    <Link to="/contact" className="btn btn-primary me-3">
                      <span className="btn_label" data-text="Start Your Project">Start Your Project</span>
                    </Link>
                    <Link to="/portfolio" className="btn btn-outline-dark">
                      <span className="btn_label" data-text="View All Case Studies">View All Case Studies</span>
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
