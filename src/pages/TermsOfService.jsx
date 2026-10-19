import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function TermsOfService() {
  return (
    <div>
      <Helmet>
        <title>Terms of Service | WebPalm - Web Development Dublin</title>
        <meta
          name="description"
          content="Review WebPalm's Terms of Service governing web application development, design, and digital consulting services in Dublin, Ireland."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/terms-of-service" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/terms-of-service" />
        <meta property="og:title" content="Terms of Service | WebPalm - Web Development Dublin" />
        <meta
          property="og:description"
          content="Terms and conditions governing web development, software engineering, and digital services delivered by WebPalm in Ireland."
        />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://webpalm.ie/terms-of-service#webpage",
                "url": "https://webpalm.ie/terms-of-service",
                "name": "Terms of Service | WebPalm",
                "description": "Standard terms and commercial conditions governing digital engineering and web design engagements with WebPalm.",
                "isPartOf": {
                  "@id": "https://webpalm.ie/#website"
                },
                "breadcrumb": {
                  "@id": "https://webpalm.ie/terms-of-service#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/terms-of-service#breadcrumb",
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
                    "name": "Terms of Service",
                    "item": "https://webpalm.ie/terms-of-service"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      <main className="page_content">
        {/* Page Banner Section */}
        <section
          className="page_banner_section text-center"
          style={{
            backgroundImage: `url(${"assets/images/shapes/bg_pattern_3.svg"})`,
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Terms of Service</h1>
            <p className="text-white mt-2 myText">
              Commercial conditions, service commitments, and client rights governing our development and design contracts in Ireland.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section_space bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 bg-white p-4 p-md-5 rounded shadow-sm">
                <div className="mb-4">
                  <span className="badge bg-primary text-white mb-2">Commercial Terms</span>
                  <p className="text-muted small">Effective Date: January 1, 2026 | Governing Law: Ireland</p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">1. Agreement Overview</h2>
                  <p>
                    These Terms of Service ("Terms") constitute a legally binding agreement between you or your organization ("Client") and WebPalm ("Company", "we", "us"), headquartered at 9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland. By engaging WebPalm for custom web development, software engineering, graphic design, SEO, or consulting services, you accept and agree to be bound by these Terms.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">2. Service Scope & Statements of Work</h2>
                  <p>
                    All project deliverables, milestones, tech stacks, and specifications are formally documented in an agreed Statement of Work (SOW) or written project proposal. Any feature additions, structural changes, or out-of-scope requirements requested during the project lifecycle will be subject to written change orders and may incur adjusted delivery timelines and costs.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">3. Intellectual Property Rights & Code Ownership</h2>
                  <p>
                    We believe in complete transparency and full client autonomy:
                  </p>
                  <ul>
                    <li><strong>Bespoke Deliverables:</strong> Upon receipt of full and final payment, all custom source code, frontend assets, graphic designs, logos, and custom database architectures created specifically for the Client transfer entirely to the Client.</li>
                    <li><strong>Pre-Existing Tools & Libraries:</strong> Any third-party libraries, open-source packages (e.g. React, Bootstrap, Laravel), or proprietary WebPalm foundational modules remain subject to their respective open-source licenses or perpetual non-exclusive licenses granted to the Client.</li>
                    <li><strong>Portfolio Rights:</strong> Unless explicitly restricted by a signed Non-Disclosure Agreement (NDA), WebPalm reserves the right to showcase the completed work in its digital portfolio and marketing materials.</li>
                  </ul>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">4. Fees, Invoicing & Payment Terms</h2>
                  <p>
                    WebPalm operates on clear, milestone-based commercial terms:
                  </p>
                  <ul>
                    <li><strong>Deposit:</strong> A non-refundable 50% mobilization deposit is required prior to project kickoff, architectural planning, and design staging.</li>
                    <li><strong>Milestone Payments:</strong> Intermediate milestones (if outlined in the SOW) become due upon verifiable completion of agreed functional sprints.</li>
                    <li><strong>Final Settlement:</strong> The final balance is due upon project completion, staging approval, and prior to production domain transfer or deployment.</li>
                    <li><strong>Currency:</strong> Invoices are denominated and payable in Euros (EUR) unless otherwise agreed in writing. Invoices are strictly payable within fourteen (14) days of issuance.</li>
                  </ul>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">5. Client Cooperation & Feedback Timelines</h2>
                  <p>
                    Timely delivery depends upon collaborative communication. The Client agrees to provide necessary copy, branding assets, API keys, and testing feedback within agreed timeframes (typically five business days). Significant delays in client feedback may lead to project schedule realignments.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">6. Post-Launch Warranty & Maintenance SLA</h2>
                  <p>
                    Every custom website and web application engineered by WebPalm includes:
                  </p>
                  <ul>
                    <li><strong>30-Day Bug Fix Warranty:</strong> We provide thirty (30) days of complimentary post-launch support to resolve any reproducible bugs, broken links, or functional deviations from the agreed specifications.</li>
                    <li><strong>Ongoing Maintenance:</strong> Optional Service Level Agreements (SLAs) are available covering security patching, software framework upgrades, cloud backups, and feature development on a monthly retainer basis.</li>
                  </ul>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">7. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted under Irish law, WebPalm shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, loss of data, or business interruption. WebPalm's total cumulative liability arising out of or related to any project shall not exceed the total fees actually paid by the Client to WebPalm under the applicable Statement of Work.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">8. Termination & Cancellation</h2>
                  <p>
                    Either party may terminate an engagement upon written notice if the other party breaches any material term and fails to remedy such breach within fourteen (14) days. In the event of early termination by the Client without cause, the Client remains responsible for payment for all work completed up to the date of cancellation.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">9. Governing Law & Jurisdiction</h2>
                  <p>
                    These Terms, and all disputes or claims arising out of or in connection with them, shall be governed by and construed in accordance with the <strong>laws of Ireland</strong>. Both parties irrevocably agree that the <strong>courts of Ireland</strong> shall have exclusive jurisdiction to settle any dispute or claim.
                  </p>
                </div>

                <div className="content_block">
                  <h2 className="h4 text-dark mb-3">10. Contact Information</h2>
                  <p>
                    If you have questions regarding our Terms of Service or wish to request a project quote with bespoke commercial terms, please reach out to:
                  </p>
                  <p className="mb-0">
                    <strong>WebPalm Technologies</strong><br />
                    9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland<br />
                    Email: <a href="mailto:info@webpalm.ie">info@webpalm.ie</a><br />
                    Phone: +353 899520026 / +353 894205316
                  </p>
                  <div className="mt-4">
                    <Link to="/contact" className="btn btn-primary me-3">
                      <span className="btn_label" data-text="Discuss a Project">Discuss a Project</span>
                    </Link>
                    <Link to="/pricing" className="btn btn-outline-dark">
                      <span className="btn_label" data-text="View Pricing Plans">View Pricing Plans</span>
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
