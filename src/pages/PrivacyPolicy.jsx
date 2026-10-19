import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function PrivacyPolicy() {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | WebPalm - Dublin, Ireland</title>
        <meta
          name="description"
          content="WebPalm's Privacy Policy explains how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR) and the Irish Data Protection Act 2018."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | WebPalm - Dublin, Ireland" />
        <meta
          property="og:description"
          content="WebPalm is committed to protecting your privacy in full compliance with Irish and EU data protection legislation (GDPR)."
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
                "@id": "https://webpalm.ie/privacy-policy#webpage",
                "url": "https://webpalm.ie/privacy-policy",
                "name": "Privacy Policy | WebPalm",
                "description": "Information on how WebPalm collects, processes, and protects your personal data under the EU GDPR and Irish Data Protection Act.",
                "isPartOf": {
                  "@id": "https://webpalm.ie/#website"
                },
                "breadcrumb": {
                  "@id": "https://webpalm.ie/privacy-policy#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/privacy-policy#breadcrumb",
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
                    "name": "Privacy Policy",
                    "item": "https://webpalm.ie/privacy-policy"
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
            <h1 className="page_title mb-0 text-white">Privacy Policy</h1>
            <p className="text-white mt-2 myText">
              How WebPalm collects, manages, and safeguards your personal data in accordance with EU GDPR and Irish data protection law.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section_space bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 bg-white p-4 p-md-5 rounded shadow-sm">
                <div className="mb-4">
                  <span className="badge bg-primary text-white mb-2">GDPR Compliant</span>
                  <p className="text-muted small">Effective Date: January 1, 2026 | Last Updated: October 2026</p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">1. Who We Are (Data Controller)</h2>
                  <p>
                    WebPalm ("we", "our", or "us") operates as an innovative web development, software engineering, and digital strategy agency based in Dublin, Ireland. Under Regulation (EU) 2016/679 (the General Data Protection Regulation or "GDPR") and the Irish Data Protection Act 2018, WebPalm is the Data Controller responsible for your personal information.
                  </p>
                  <ul className="list-unstyled ps-3 border-start border-3 border-primary my-3">
                    <li><strong>Entity:</strong> WebPalm</li>
                    <li><strong>Registered Office:</strong> 9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland</li>
                    <li><strong>Contact Email:</strong> <a href="mailto:info@webpalm.ie">info@webpalm.ie</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+353899520026">+353 899520026</a> / <a href="tel:+353894205316">+353 894205316</a></li>
                  </ul>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">2. Information We Collect</h2>
                  <p>We may collect and process the following categories of personal data when you interact with our website or engage our services:</p>
                  <ul>
                    <li><strong>Contact & Identity Data:</strong> Name, business email address, telephone number, job title, and company name when you fill out our contact or newsletter forms.</li>
                    <li><strong>Project Information:</strong> Technical requirements, budget specifications, and project assets submitted for quotes or consultations.</li>
                    <li><strong>Technical & Usage Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, operating system, and interaction data via essential and analytical cookies.</li>
                  </ul>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">3. Lawful Bases for Processing</h2>
                  <p>In compliance with Article 6 of the GDPR, we process personal data only under the following lawful grounds:</p>
                  <ul>
                    <li><strong>Contractual Necessity:</strong> To take necessary steps at your request prior to entering into a development contract, or to perform contractual commitments.</li>
                    <li><strong>Legitimate Interests:</strong> To communicate regarding project updates, deliver customer support, ensure network and site security, and improve our services.</li>
                    <li><strong>Consent:</strong> For sending optional newsletters or processing non-essential cookies. You may revoke consent at any time.</li>
                    <li><strong>Legal Obligations:</strong> Compliance with statutory financial, tax, and regulatory requirements in Ireland.</li>
                  </ul>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">4. How We Use Your Data</h2>
                  <p>Your data is used strictly for legitimate commercial and technical purposes, including:</p>
                  <ul>
                    <li>Responding promptly to requests for quotes and project discovery meetings.</li>
                    <li>Engineering, testing, deploying, and maintaining web applications and digital assets.</li>
                    <li>Managing invoicing, payments, and accounting records under Irish revenue standards.</li>
                    <li>Protecting against malicious activity, spam, and cybersecurity threats.</li>
                  </ul>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">5. Data Sharing & Third-Party Processors</h2>
                  <p>We never sell, rent, or trade your personal information. We only share data with trusted data processors subject to strict Data Processing Agreements (DPAs) that comply with GDPR standards:</p>
                  <ul>
                    <li><strong>Communication Services:</strong> EmailJS (browser-to-email transit) and secure email hosting providers.</li>
                    <li><strong>Infrastructure & Cloud Hosting:</strong> Secure cloud providers hosting our web applications and databases within the EU/EEA.</li>
                    <li><strong>Professional Advisors:</strong> Accountants, legal advisors, and auditors operating within Ireland and the European Economic Area.</li>
                  </ul>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">6. International Data Transfers</h2>
                  <p>
                    Where any data is processed outside the European Economic Area (EEA), WebPalm ensures adequate safeguards are enforced, including European Commission Standard Contractual Clauses (SCCs) or adequacy decisions, safeguarding your data to the same standard required under EU law.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">7. Data Retention</h2>
                  <p>
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was gathered, including satisfying any legal, accounting, or reporting requirements. Project records and transactional communications are retained for six (6) years in accordance with Irish statutory limitation periods.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">8. Your Rights Under GDPR</h2>
                  <p>Under EU and Irish data protection laws, you possess the following enforceable rights:</p>
                  <ul>
                    <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
                    <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your data when there is no compelling reason for its continued processing.</li>
                    <li><strong>Right to Restrict Processing:</strong> Request suspension of processing in certain circumstances.</li>
                    <li><strong>Right to Data Portability:</strong> Receive your data in a structured, commonly used, machine-readable format.</li>
                    <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
                  </ul>
                  <p className="mt-3">
                    To exercise any of these rights, please contact our Data Protection Team at <a href="mailto:info@webpalm.ie">info@webpalm.ie</a>. We respond to all verified requests within thirty (30) days without charge.
                  </p>
                </div>

                <div className="content_block mb-5">
                  <h2 className="h4 text-dark mb-3">9. Supervisory Authority</h2>
                  <p>
                    If you believe your personal data has been handled incorrectly, you have the right to lodge a complaint with the Irish Data Protection Commission (DPC):
                  </p>
                  <p className="ps-3 border-start border-3 border-secondary text-muted">
                    <strong>Data Protection Commission (DPC)</strong><br />
                    21 Fitzwilliam Square South, Dublin 2, D02 RD28, Ireland<br />
                    Website: <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer">www.dataprotection.ie</a><br />
                    Phone: +353 57 868 4800 / +353 76 110 4800
                  </p>
                </div>

                <div className="content_block">
                  <h2 className="h4 text-dark mb-3">10. Contact Us</h2>
                  <p>
                    For inquiries regarding this Privacy Policy or WebPalm’s data protection practices, please contact us at:
                  </p>
                  <p className="mb-0">
                    <strong>WebPalm Technologies</strong><br />
                    9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland<br />
                    Email: <a href="mailto:info@webpalm.ie">info@webpalm.ie</a><br />
                    Phone: +353 899520026 / +353 894205316
                  </p>
                  <div className="mt-4">
                    <Link to="/contact" className="btn btn-primary me-3">
                      <span className="btn_label" data-text="Contact Our Team">Contact Our Team</span>
                    </Link>
                    <Link to="/cookie-policy" className="btn btn-outline-dark">
                      <span className="btn_label" data-text="Cookie Policy">Read Cookie Policy</span>
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
