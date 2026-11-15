import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function DrupalDevelopmentDublin() {
  return (
    <div>
      <Helmet>
        <title>Drupal Development Dublin | Drupal Agency Ireland | WebPalm</title>
        <meta
          name="description"
          content="WebPalm builds, customises, and maintains Drupal websites and content management systems for Dublin and Irish businesses. Expert Drupal developers. Free consultation."
        />
        <meta
          name="keywords"
          content="drupal developer dublin, drupal development dublin, drupal development ireland, drupal design dublin, joomla developer ireland"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/drupal-development-dublin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/drupal-development-dublin" />
        <meta property="og:title" content="Drupal Development Dublin | Drupal Agency Ireland | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm builds, customises, and maintains Drupal websites and content management systems for Dublin and Irish businesses. Expert Drupal developers. Free consultation."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Drupal Development Dublin | Drupal Agency Ireland | WebPalm" />
        <meta
          name="twitter:description"
          content="WebPalm builds, customises, and maintains Drupal websites and content management systems for Dublin and Irish businesses. Expert Drupal developers. Free consultation."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://webpalm.ie/drupal-development-dublin#service',
                name: 'Drupal Development Dublin & Ireland',
                serviceType: ['Drupal Development', 'CMS Development'],
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
                  'WebPalm provides expert Drupal development services in Dublin including Drupal 10 builds, theme development, custom module development, CMS migration, and ongoing maintenance for Irish businesses.',
                url: 'https://webpalm.ie/drupal-development-dublin',
                priceRange: 'From €2,500'
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://webpalm.ie/drupal-development-dublin#breadcrumb',
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
                    name: 'Drupal Development Dublin',
                    item: 'https://webpalm.ie/drupal-development-dublin'
                  }
                ]
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://webpalm.ie/drupal-development-dublin#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What Drupal development services does WebPalm offer in Dublin?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'WebPalm offers Drupal website builds, Drupal 10 theme development, custom module development, Drupal CMS migration (from Drupal 7/8/9 to Drupal 10), Drupal headless architecture with decoupled React frontends, and ongoing Drupal maintenance and security updates.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Why choose Drupal for a business website or portal?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Drupal is chosen for large-scale content-heavy websites, government portals, education platforms, and enterprise intranets requiring granular user permissions, multilingual support, and high-volume content management. It scales reliably and has a strong open-source security track record.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does Drupal development cost in Dublin?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Drupal website projects at WebPalm start from €2,500 for theme customisation and CMS setup. Custom Drupal module development and enterprise platform builds typically range from €5,000 to €30,000 depending on complexity and integrations.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Can WebPalm migrate an existing website to Drupal?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. WebPalm migrates existing WordPress, Joomla, or legacy CMS websites to Drupal 10 with full content migration, URL redirect mapping for SEO preservation, and updated design and functionality.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you support Joomla development as well as Drupal?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. WebPalm also works with Joomla for existing client sites, providing template customisation, extension development, and migration support between Joomla versions or from Joomla to Drupal.'
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
            <h1 className="page_title mb-0 text-white">Drupal Development Dublin &amp; Ireland | WebPalm</h1>
            <p className="text-white mt-2 myText">
              Expert Drupal 10 development, theme design, custom module builds, and CMS migration for Dublin and Irish businesses.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="service_details_section section_space bg-light">
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
                    Expert Drupal Developers
                  </div>
                  <h2 className="heading_text mb-3">
                    Drupal Development for <mark>Scalable Irish Platforms</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we build, customise, and maintain Drupal websites and content management systems for businesses, organisations, and enterprises across Dublin and Ireland. Based at <strong>9 Limelawn Row, Coolmine, Dublin 15</strong>, our developers work with Drupal 10 to deliver secure, scalable, and content-rich digital platforms.
                </p>
                <p>
                  Whether you need a new Drupal build, a migration from WordPress or Joomla, a bespoke custom module, or a headless Drupal architecture with a React frontend, our team brings the technical depth and project management experience to deliver reliably.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Book a Free Consultation">Book a Free Consultation</span>
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
                  <div className="text-primary fs-3 mb-3"><i className="fa-brands fa-drupal"></i></div>
                  <h3 className="h5 text-dark mb-2">Drupal Builds &amp; Themes</h3>
                  <p className="text-muted small mb-3">
                    Custom Drupal 10 website development, theme design, and CMS configuration for content-rich business platforms.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-puzzle-piece"></i></div>
                  <h3 className="h5 text-dark mb-2">Custom Module Development</h3>
                  <p className="text-muted small mb-3">
                    Bespoke Drupal modules, integrations, and workflow automation built to extend your platform's functionality.
                  </p>
                  <Link to="/web-development" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-rotate"></i></div>
                  <h3 className="h5 text-dark mb-2">Drupal Migration &amp; Maintenance</h3>
                  <p className="text-muted small mb-3">
                    Drupal version upgrades, security patches, and CMS migration from WordPress or Joomla with full SEO redirect mapping.
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
                    <h2 className="heading_text">Why Choose Drupal for Your Dublin Website?</h2>
                    <p className="heading_description mb-2">
                      Drupal is the platform of choice for organisations that need fine-grained content control, enterprise-grade security, multilingual support, and the ability to handle high volumes of content and users without compromising performance.
                    </p>
                    <p className="heading_description mb-0">
                      WebPalm brings the development expertise to unlock Drupal's full potential — from clean theme builds to complex headless deployments and legacy CMS migrations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">01. Discovery &amp; Audit</h3>
                        <p className="mb-0">We assess your content architecture, existing CMS, user permissions, and integration requirements before writing a line of code.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Architecture</h3>
                        <p className="mb-0">We design the content types, taxonomy structure, roles, and module stack that your Drupal platform needs to scale.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Build &amp; Customise</h3>
                        <p className="mb-0">Theme development, custom module coding, third-party integrations, and rigorous QA testing on staging environments.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Launch &amp; Maintain</h3>
                        <p className="mb-0">Secure deployment, performance optimisation, security patch management, and ongoing Drupal support and maintenance.</p>
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
                <p className="heading_description mb-4 text-dark">Common questions about Drupal development for Dublin and Irish businesses.</p>
              </div>
            </div>
            <div className="accordion" id="drupalFaq">
              <div className="accordion-item">
                <h3 className="accordion-header" id="drupalHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#drupalCollapseOne" aria-expanded="true" aria-controls="drupalCollapseOne">
                    What Drupal development services does WebPalm offer in Dublin?
                  </button>
                </h3>
                <div id="drupalCollapseOne" className="accordion-collapse collapse show" aria-labelledby="drupalHeadingOne" data-bs-parent="#drupalFaq">
                  <div className="accordion-body">
                    WebPalm offers Drupal website builds, Drupal 10 theme development, custom module development, Drupal CMS migration (from Drupal 7/8/9 to Drupal 10), Drupal headless architecture with decoupled React frontends, and ongoing Drupal maintenance and security updates.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="drupalHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#drupalCollapseTwo" aria-expanded="false" aria-controls="drupalCollapseTwo">
                    Why choose Drupal for a business website or portal?
                  </button>
                </h3>
                <div id="drupalCollapseTwo" className="accordion-collapse collapse" aria-labelledby="drupalHeadingTwo" data-bs-parent="#drupalFaq">
                  <div className="accordion-body">
                    Drupal is chosen for large-scale content-heavy websites, government portals, education platforms, and enterprise intranets requiring granular user permissions, multilingual support, and high-volume content management. It scales reliably and has a strong open-source security track record.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="drupalHeadingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#drupalCollapseThree" aria-expanded="false" aria-controls="drupalCollapseThree">
                    How much does Drupal development cost in Dublin?
                  </button>
                </h3>
                <div id="drupalCollapseThree" className="accordion-collapse collapse" aria-labelledby="drupalHeadingThree" data-bs-parent="#drupalFaq">
                  <div className="accordion-body">
                    Drupal website projects at WebPalm start from €2,500 for theme customisation and CMS setup. Custom Drupal module development and enterprise platform builds typically range from €5,000 to €30,000 depending on complexity and integrations.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="drupalHeadingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#drupalCollapseFour" aria-expanded="false" aria-controls="drupalCollapseFour">
                    Can WebPalm migrate an existing website to Drupal?
                  </button>
                </h3>
                <div id="drupalCollapseFour" className="accordion-collapse collapse" aria-labelledby="drupalHeadingFour" data-bs-parent="#drupalFaq">
                  <div className="accordion-body">
                    Yes. WebPalm migrates existing WordPress, Joomla, or legacy CMS websites to Drupal 10 with full content migration, URL redirect mapping for SEO preservation, and updated design and functionality.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="drupalHeadingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#drupalCollapseFive" aria-expanded="false" aria-controls="drupalCollapseFive">
                    Do you support Joomla development as well as Drupal?
                  </button>
                </h3>
                <div id="drupalCollapseFive" className="accordion-collapse collapse" aria-labelledby="drupalHeadingFive" data-bs-parent="#drupalFaq">
                  <div className="accordion-body">
                    Yes. WebPalm also works with Joomla for existing client sites, providing template customisation, extension development, and migration support between Joomla versions or from Joomla to Drupal.
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
              <h3 className="h3 mb-2">Need a Drupal Developer in Dublin or Ireland?</h3>
              <p className="text-muted mb-4">
                Get a free technical consultation from our Dublin Drupal development team. We'll assess your requirements and provide a clear project proposal.
              </p>
              <Link to="/contact" className="btn btn-primary me-3">
                <span className="btn_label" data-text="Request Free Consultation">Request Free Consultation</span>
                <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
              </Link>
              <Link to="/pricing" className="btn btn-outline-dark">
                <span className="btn_label" data-text="View Pricing Plans">View Pricing Plans</span>
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
