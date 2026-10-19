import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function CookiePolicy() {
  return (
    <div>
      <Helmet>
        <title>Cookie Policy | WebPalm - Dublin, Ireland</title>
        <meta
          name="description"
          content="Learn about WebPalm's Cookie Policy, how we use cookies, and how you can manage your cookie preferences in compliance with Irish and EU ePrivacy standards."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/cookie-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/cookie-policy" />
        <meta property="og:title" content="Cookie Policy | WebPalm - Dublin, Ireland" />
        <meta
          property="og:description"
          content="Information on how cookies and tracking technologies are used on WebPalm.ie, complying with the EU ePrivacy Directive and Irish DPC guidance."
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
                "@id": "https://webpalm.ie/cookie-policy#webpage",
                "url": "https://webpalm.ie/cookie-policy",
                "name": "Cookie Policy | WebPalm",
                "description": "Details regarding cookie usage, technical storage, and visitor privacy controls on webpalm.ie.",
                "isPartOf": {
                  "@id": "https://webpalm.ie/#website"
                },
                "breadcrumb": {
                  "@id": "https://webpalm.ie/cookie-policy#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/cookie-policy#breadcrumb",
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
                    "name": "Cookie Policy",
                    "item": "https://webpalm.ie/cookie-policy"
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
            <h1 className="page_title mb-0 text-white">Cookie Policy</h1>
            <p className="text-white mt-2 myText">
              Transparency on how cookies and browser storage are utilized on WebPalm.ie under EU ePrivacy directives.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section_space bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 bg-white p-4 p-md-5 rounded shadow-sm">
                <div className="mb-4">
                  <span className="badge bg-primary text-white mb-2">EU ePrivacy Compliant</span>
                  <p className="text-muted small">Effective Date: January 1, 2026 | Last Updated: October 2026</p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">1. What Are Cookies?</h2>
                  <p>
                    Cookies are small text files placed on your computer, tablet, or smartphone when you visit a website. They are widely used to make websites function properly, enhance user experience, and provide aggregated analytical information to website owners. In addition to cookies, we may utilize related web technologies such as local storage and session storage to maintain application state.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">2. How WebPalm Uses Cookies</h2>
                  <p>
                    WebPalm ("we", "our") uses cookies and similar storage technologies on <a href="https://webpalm.ie/">webpalm.ie</a> for the following specific purposes:
                  </p>
                  <ul>
                    <li><strong>Strictly Necessary Cookies:</strong> Essential for you to navigate our React Single Page Application (SPA), access interactive features, secure forms, and maintain session state. These cannot be disabled in our systems.</li>
                    <li><strong>Performance & Analytics Cookies:</strong> Allow us to count visits and traffic sources so we can measure and improve website performance, Core Web Vitals, and navigation flow.</li>
                    <li><strong>Functional Cookies:</strong> Enable enhanced functionality, such as remembering your preferences or facilitating direct contact form communications.</li>
                  </ul>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">3. Cookie Categories on Our Site</h2>
                  <div className="table-responsive my-3">
                    <table className="table table-bordered align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Cookie Name / Tech</th>
                          <th>Category</th>
                          <th>Provider</th>
                          <th>Purpose</th>
                          <th>Expiry</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>__cf_bm</code> / <code>cf_clearance</code></td>
                          <td>Strictly Necessary</td>
                          <td>Cloudflare / CDN</td>
                          <td>Bot management, DDoS protection, and site security</td>
                          <td>30 minutes to 1 year</td>
                        </tr>
                        <tr>
                          <td><code>wp_session_state</code></td>
                          <td>Strictly Necessary</td>
                          <td>WebPalm</td>
                          <td>Preserves user navigation state across React Router pages</td>
                          <td>Session</td>
                        </tr>
                        <tr>
                          <td><code>_ga</code> / <code>_ga_*</code></td>
                          <td>Analytics</td>
                          <td>Google Analytics</td>
                          <td>Distinguishes users and tracks anonymous interaction metrics</td>
                          <td>2 years</td>
                        </tr>
                        <tr>
                          <td><code>emailjs_user_ref</code></td>
                          <td>Functional</td>
                          <td>EmailJS</td>
                          <td>Rate-limiting and anti-spam protection on quote submission forms</td>
                          <td>Session</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">4. Third-Party Cookies</h2>
                  <p>
                    When you view embedded content on our site (such as YouTube videos or interactive Google Maps), third-party providers may set their own tracking cookies. We do not control these cookies. We advise visitors to review the third-party privacy and cookie policies directly on their respective websites.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">5. How to Manage and Disable Cookies</h2>
                  <p>
                    You have the right to decide whether to accept or reject non-essential cookies. You can configure or change your cookie preferences directly in your web browser:
                  </p>
                  <ul>
                    <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Third-party cookies</li>
                    <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy & Security &rarr; Cookies and Site Data</li>
                    <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Prevent cross-site tracking / Block all cookies</li>
                    <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies</li>
                  </ul>
                  <p className="mt-2 text-muted">
                    <em>Please note:</em> Disabling essential cookies may impair the functioning of some interactive elements, quote forms, or dynamic animations on our website.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">6. Updates to This Cookie Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in the cookies we use, regulatory requirements from the Irish Data Protection Commission (DPC), or broader EU legislative developments. Any updates will be published on this page with an updated effective date.
                  </p>
                </div>

                <div className="content_block">
                  <h2 className="h4 text-dark mb-3">7. Contact & Questions</h2>
                  <p>
                    If you have questions regarding our use of cookies or other web storage technologies, please contact us at:
                  </p>
                  <p className="mb-0">
                    <strong>WebPalm Technologies</strong><br />
                    9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland<br />
                    Email: <a href="mailto:info@webpalm.ie">info@webpalm.ie</a><br />
                    Phone: +353 899520026 / +353 894205316
                  </p>
                  <div className="mt-4">
                    <Link to="/privacy-policy" className="btn btn-primary me-3">
                      <span className="btn_label" data-text="Read Privacy Policy">Read Privacy Policy</span>
                    </Link>
                    <Link to="/contact" className="btn btn-outline-dark">
                      <span className="btn_label" data-text="Contact Us">Contact Us</span>
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
