import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function WebApplicationDevelopmentDublin() {
  return (
    <div>
      <Helmet>
        <title>Web Application Development Dublin | Custom Web Apps | WebPalm</title>
        <meta
          name="description"
          content="WebPalm builds custom web applications in Dublin using React, Next.js, Node.js, and Laravel. SaaS platforms, business portals, and enterprise web apps from €3,500. Free quote."
        />
        <meta
          name="keywords"
          content="web application development dublin, web app software dublin, custom web app developers, web app development ireland, custom web application development, web application development ireland, which dublin app companies provide end-to-end build"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/web-application-development-dublin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/web-application-development-dublin" />
        <meta property="og:title" content="Web Application Development Dublin | Custom Web Apps | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm builds custom web applications in Dublin using React, Next.js, Node.js, and Laravel. SaaS platforms, business portals, and enterprise web apps from €3,500. Free quote."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Application Development Dublin | Custom Web Apps | WebPalm" />
        <meta
          name="twitter:description"
          content="WebPalm builds custom web applications in Dublin using React, Next.js, Node.js, and Laravel. SaaS platforms, business portals, and enterprise web apps from €3,500. Free quote."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://webpalm.ie/web-application-development-dublin#service',
                name: 'Web Application Development Dublin',
                serviceType: ['Web Application Development', 'Custom Software Development'],
                provider: {
                  '@type': 'LocalBusiness',
                  '@id': 'https://webpalm.ie/#organization',
                  name: 'WebPalm',
                  url: 'https://webpalm.ie',
                  telephone: '+353899520026',
                  email: 'info@webpalm.ie',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '9 Limelawn Row, Coolmine',
                    addressLocality: 'Dublin 15',
                    addressRegion: 'Leinster',
                    postalCode: 'D15 V6PW',
                    addressCountry: 'IE'
                  }
                },
                areaServed: [
                  { '@type': 'City', name: 'Dublin' },
                  { '@type': 'Country', name: 'Ireland' }
                ],
                description:
                  'WebPalm builds bespoke web applications for Dublin and Irish businesses — from SaaS platforms and business portals to enterprise multi-tenant systems — using React, Next.js, Node.js, Python, and Laravel.',
                url: 'https://webpalm.ie/web-application-development-dublin',
                priceRange: 'From €3,500'
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://webpalm.ie/web-application-development-dublin#breadcrumb',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://webpalm.ie/'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Web Application Development Dublin',
                    item: 'https://webpalm.ie/web-application-development-dublin'
                  }
                ]
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://webpalm.ie/web-application-development-dublin#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is custom web application development?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Custom web application development is the process of building a bespoke software solution accessible through a web browser, tailored specifically to a business\'s workflows, data models, and user base. Unlike off-the-shelf tools, custom apps are built around your exact requirements.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What technologies does WebPalm use to build web applications in Dublin?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'WebPalm builds web applications using React 19, Next.js 15, Node.js, Python (FastAPI/Django), Laravel (PHP), and PostgreSQL/MySQL databases. We follow REST and GraphQL API standards and deploy on AWS, Vercel, or cloud providers of your choice.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does web application development cost in Dublin?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Custom web application projects start at €3,500 for single-module internal tools and business portals. Mid-tier SaaS platforms range from €8,000 to €20,000. Enterprise multi-tenant applications with complex integrations typically start from €25,000.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you provide end-to-end web app development including design and deployment?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. WebPalm provides end-to-end web application development covering UI/UX design, frontend engineering, backend API development, database architecture, third-party integrations, testing, deployment, and ongoing maintenance.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Can WebPalm integrate our web app with existing business systems?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We integrate web applications with CRMs (Salesforce, HubSpot), payment gateways (Stripe, PayPal), ERPs, cloud storage (AWS S3, Google Cloud), email platforms (Mailchimp, SendGrid), and proprietary APIs.'
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
            backgroundImage: `url(${'assets/images/shapes/bg_pattern_3.svg'})`,
          }}
        >
          <div className="container">
            <span className="badge bg-primary text-white mb-2 px-3 py-2">Dublin, Ireland Agency</span>
            <h1 className="page_title mb-0 text-white">Web Application Development Dublin | Custom Web Apps | WebPalm</h1>
            <p className="text-white mt-2 myText">
              Bespoke web applications built in Dublin using React, Next.js, Node.js, and Laravel — from internal business tools to full SaaS platforms.
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
                      backgroundImage: `url(${'assets/images/shapes/shape_title_under_line.svg'})`,
                    }}
                  >
                    Custom Web App Experts
                  </div>
                  <h2 className="heading_text mb-3">
                    End-to-End Web Application Development for <mark>Irish Businesses</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we design and engineer bespoke web applications for startups, SMEs, and enterprises across Dublin and Ireland. From SaaS platforms and customer portals to complex multi-tenant systems, our team at <strong>9 Limelawn Row, Coolmine, Dublin 15</strong> delivers production-ready web apps tailored to your exact business logic.
                </p>
                <p>
                  We handle every phase of the project — from UI/UX design and frontend development to backend APIs, database architecture, cloud deployment, and ongoing maintenance — so you get a single accountable partner for your entire web application.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Get a Free Quote">Get a Free Quote</span>
                    <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </Link>
                  <a href="tel:+353899520026" className="btn btn-outline-dark">
                    <span className="btn_label" data-text="Call +353 899520026">Call +353 899520026</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="p-4 bg-white rounded shadow-sm border">
                  <h3 className="h5 text-dark mb-3"><i className="fa-solid fa-location-dot text-primary me-2"></i>Dublin Office &amp; Details</h3>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><strong>Address:</strong> 9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland</li>
                    <li className="mb-2"><strong>Direct Line:</strong> <a href="tel:+353899520026">+353 899520026</a></li>
                    <li className="mb-2"><strong>Support Line:</strong> <a href="tel:+353894205316">+353 894205316</a></li>
                    <li className="mb-2"><strong>Email:</strong> <a href="mailto:info@webpalm.ie">info@webpalm.ie</a></li>
                    <li className="mb-0"><strong>Working Hours:</strong> Mon – Fri: 9:00 AM – 6:00 PM</li>
                  </ul>
                  <div className="alert alert-info py-2 px-3 small mb-0">
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Dublin, Dublin 15, Fingal &amp; Nationwide Ireland.
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="row g-4 my-4">
              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-layer-group"></i></div>
                  <h3 className="h5 text-dark mb-2">SaaS Web Apps</h3>
                  <p className="text-muted small mb-3">
                    Multi-tenant subscription platforms, admin dashboards, and member portals engineered for scale and reliability.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-gears"></i></div>
                  <h3 className="h5 text-dark mb-2">Business Process Apps</h3>
                  <p className="text-muted small mb-3">
                    Custom internal tools, inventory systems, booking platforms, and CRM replacements built around your workflows.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-plug"></i></div>
                  <h3 className="h5 text-dark mb-2">API Development &amp; Integrations</h3>
                  <p className="text-muted small mb-3">
                    RESTful and GraphQL APIs, third-party service integrations, and data pipelines connecting your systems seamlessly.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why / Process Section */}
        <section className="about_section section_space">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <h2 className="heading_text">Our Web App Development Process</h2>
                    <p className="heading_description mb-2">
                      We follow a structured, milestone-driven approach that keeps projects on time, on scope, and aligned to your business objectives from day one.
                    </p>
                    <p className="heading_description mb-0">
                      Every web application is built with performance, security, and long-term maintainability in mind — not just to ship, but to scale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">01. Discovery</h3>
                        <p className="mb-0">We map your business requirements, user flows, and technical constraints into a clear project specification.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. UI/UX Design</h3>
                        <p className="mb-0">We create wireframes, design systems, and interactive prototypes before a single line of code is written.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Build</h3>
                        <p className="mb-0">Frontend, backend, and APIs developed in agile sprints with regular client demos and feedback checkpoints.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Deploy &amp; Support</h3>
                        <p className="mb-0">Cloud deployment, QA testing, go-live support, and ongoing maintenance to keep your app running at peak performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section_space bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="heading_text mb-3"><mark>Frequently Asked Questions</mark></h2>
                <p className="heading_description mb-4 text-dark">Common questions about web application development in Dublin and Ireland.</p>
              </div>
            </div>
            <div className="accordion" id="webAppFaq">
              <div className="accordion-item">
                <h3 className="accordion-header" id="webAppHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#webAppCollapseOne" aria-expanded="true" aria-controls="webAppCollapseOne">
                    What is custom web application development?
                  </button>
                </h3>
                <div id="webAppCollapseOne" className="accordion-collapse collapse show" aria-labelledby="webAppHeadingOne" data-bs-parent="#webAppFaq">
                  <div className="accordion-body">
                    Custom web application development is the process of building a bespoke software solution accessible through a web browser, tailored specifically to a business's workflows, data models, and user base. Unlike off-the-shelf tools, custom apps are built around your exact requirements.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="webAppHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#webAppCollapseTwo" aria-expanded="false" aria-controls="webAppCollapseTwo">
                    What technologies does WebPalm use to build web applications in Dublin?
                  </button>
                </h3>
                <div id="webAppCollapseTwo" className="accordion-collapse collapse" aria-labelledby="webAppHeadingTwo" data-bs-parent="#webAppFaq">
                  <div className="accordion-body">
                    WebPalm builds web applications using React 19, Next.js 15, Node.js, Python (FastAPI/Django), Laravel (PHP), and PostgreSQL/MySQL databases. We follow REST and GraphQL API standards and deploy on AWS, Vercel, or cloud providers of your choice.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="webAppHeadingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#webAppCollapseThree" aria-expanded="false" aria-controls="webAppCollapseThree">
                    How much does web application development cost in Dublin?
                  </button>
                </h3>
                <div id="webAppCollapseThree" className="accordion-collapse collapse" aria-labelledby="webAppHeadingThree" data-bs-parent="#webAppFaq">
                  <div className="accordion-body">
                    Custom web application projects start at €3,500 for single-module internal tools and business portals. Mid-tier SaaS platforms range from €8,000 to €20,000. Enterprise multi-tenant applications with complex integrations typically start from €25,000.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="webAppHeadingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#webAppCollapseFour" aria-expanded="false" aria-controls="webAppCollapseFour">
                    Do you provide end-to-end web app development including design and deployment?
                  </button>
                </h3>
                <div id="webAppCollapseFour" className="accordion-collapse collapse" aria-labelledby="webAppHeadingFour" data-bs-parent="#webAppFaq">
                  <div className="accordion-body">
                    Yes. WebPalm provides end-to-end web application development covering UI/UX design, frontend engineering, backend API development, database architecture, third-party integrations, testing, deployment, and ongoing maintenance.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="webAppHeadingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#webAppCollapseFive" aria-expanded="false" aria-controls="webAppCollapseFive">
                    Can WebPalm integrate our web app with existing business systems?
                  </button>
                </h3>
                <div id="webAppCollapseFive" className="accordion-collapse collapse" aria-labelledby="webAppHeadingFive" data-bs-parent="#webAppFaq">
                  <div className="accordion-body">
                    Yes. We integrate web applications with CRMs (Salesforce, HubSpot), payment gateways (Stripe, PayPal), ERPs, cloud storage (AWS S3, Google Cloud), email platforms (Mailchimp, SendGrid), and proprietary APIs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section_space text-center">
          <div className="container">
            <div className="text-center bg-white p-4 p-md-5 rounded shadow-sm border">
              <h3 className="h3 mb-2">Ready to Build Your Custom Web Application in Dublin?</h3>
              <p className="text-muted mb-4">
                Get a free technical consultation and project quote from our Dublin web application development team.
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
        <Footer2 />
      </main>
    </div>
  );
}
