import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';

export default function SoftwareDevelopment() {
  return (
    <div>
      <Helmet>
        <title>Software Development Services in Dublin | WebPalm</title>
        <meta
          name="description"
          content="WebPalm develops custom software, internal business tools, and digital systems that make operations smoother, faster, and easier to manage."
        />
        <meta
          name="keywords"
          content="software development Dublin, custom software Ireland, business software, internal tools, workflow automation, web app development, software engineers Dublin, WebPalm software"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/software-development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/software-development" />
        <meta property="og:title" content="Software Development Services in Dublin | WebPalm" />
        <meta
          property="og:description"
          content="Custom software and internal digital systems built to improve workflow, reduce manual work, and support long-term business growth."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Development Services in Dublin | WebPalm" />
        <meta
          name="twitter:description"
          content="Custom software solutions that help businesses run faster, organise processes better, and scale with confidence."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://webpalm.ie/software-development#service',
                name: 'Custom Software Development Services',
                serviceType: 'Software Development',
                provider: { '@id': 'https://webpalm.ie/#organization' },
                areaServed: [
                  { '@type': 'Country', name: 'Ireland' },
                  { '@type': 'City', name: 'Dublin' }
                ],
                description:
                  'Custom software design and development for business systems, internal tools, workflows, portals, and automation processes for modern organisations.',
                url: 'https://webpalm.ie/software-development'
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://webpalm.ie/software-development#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What types of systems do you develop?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We build internal dashboards, client portals, booking systems, workflow tools, reporting platforms, and custom digital products built around specific business processes.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'When is custom software worth it?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'It is worth it when your business has repetitive work, disconnected tools, or processes that would be more efficient with a tailored system rather than a workaround.'
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
        <section
          className="page_banner_section text-center"
          style={{
            backgroundImage: `url(${'assets/images/backgrounds/bg_pattern_3.svg'})`,
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Software Development</h1>
            <p className="text-white mt-2 myPara">
              Tailored digital systems that help businesses work more efficiently, reduce friction, and grow with more confidence.
            </p>
          </div>
        </section>

        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <h2 className="details_item_title">Software that supports real operations, not just ideas</h2>
                <p>
                  Businesses do not need more software for the sake of it. They need tools that solve real problems, reduce manual work, and make processes more consistent across the team.
                </p>
                <p>
                  WebPalm develops custom software that connects systems, streamlines business workflows, and gives teams more visibility over what is happening. Whether it is a simple operational tool or a more complex platform, we focus on making the system useful and sustainable.
                </p>
                <p>
                  The goal is always the same: less friction, better clarity, and a more confident way to run the business.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="image_wrap">
                  <img
                    className="rounded"
                    src="assets/images/backgrounds/web.jpg"
                    alt="Custom software development and business process automation"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="heading_text mb-3"><mark>What we build</mark></h2>
                <p className="heading_description mb-0 text-dark">Solutions designed around process, data flow, and the way your team actually works.</p>
              </div>
            </div>

            <div className="row mt-5 g-4">
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Internal tools</h3>
                    <p className="mb-0">Dashboards, admin systems, workflow support, and process tools that reduce repetitive work and improve visibility.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Client portals</h3>
                    <p className="mb-0">Secure access points for clients or customers to view services, book appointments, track requests, or manage information.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Workflow automation</h3>
                    <p className="mb-0">Automated steps that remove the bottlenecks caused by spreadsheets, disconnected systems, or manual admin work.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Booking systems</h3>
                    <p className="mb-0">Tools built to make appointments, reservations, or service requests easier for customers and more manageable for staff.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Data-driven systems</h3>
                    <p className="mb-0">Platforms built to capture data, generate reports, and improve visibility across performance, operations, or service delivery.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Custom web applications</h3>
                    <p className="mb-0">Bespoke digital products that bring together business logic, user experience, and core operational needs in one place.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <h2 className="heading_text">Built around the business problem</h2>
                    <p className="heading_description mb-2">
                      We do not start from a feature list alone. We start by understanding the actual friction in the business: where time is lost, where data is scattered, and what the team needs to work more smoothly.
                    </p>
                    <p className="heading_description mb-0">
                      That makes the system more useful in practice and more likely to keep delivering value long after launch.
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
                        <p className="mb-0">We map the workflow, data points, and bottlenecks to understand where software can create the most value.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Design</h3>
                        <p className="mb-0">We shape the product around usability, clarity, and how users need to interact with the system.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Build</h3>
                        <p className="mb-0">We code the solution using the right stack, architecture, and testing approach for the business requirements.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Improve</h3>
                        <p className="mb-0">We continue refining the product as the team grows, changes, or discovers new operational needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="heading_text mb-3"><mark>FAQ</mark></h2>
              </div>
            </div>
            <div className="accordion" id="softwareFaq">
              <div className="accordion-item">
                <h3 className="accordion-header" id="softwareHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#softwareCollapseOne" aria-expanded="true" aria-controls="softwareCollapseOne">
                    Do you build systems only for large businesses?
                  </button>
                </h3>
                <div id="softwareCollapseOne" className="accordion-collapse collapse show" aria-labelledby="softwareHeadingOne" data-bs-parent="#softwareFaq">
                  <div className="accordion-body">
                    No. We work with businesses that need clear operational improvements, whether that means automating a repetitive process or building a focused custom tool around a specific workflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="softwareHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#softwareCollapseTwo" aria-expanded="false" aria-controls="softwareCollapseTwo">
                    Can custom software replace spreadsheets or disconnected tools?
                  </button>
                </h3>
                <div id="softwareCollapseTwo" className="accordion-collapse collapse" aria-labelledby="softwareHeadingTwo" data-bs-parent="#softwareFaq">
                  <div className="accordion-body">
                    In many cases, yes. When a process is repetitive or spread across multiple tools, a custom system can centralise information and reduce the time spent on administration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space text-center">
          <div className="container">
            <h2 className="heading_text mb-3">Need a software solution tailored to how your business actually runs?</h2>
            <p className="mb-4">We can help map the problem, define the right system, and build something practical for the long term.</p>
            <Link to="/contact" className="btn btn-primary">
              <span className="btn_label" data-text="Discuss your software idea">Discuss your software idea</span>
            </Link>
          </div>
        </section>

        <Footer2 />
        <WhatsAppButton />
      </main>
    </div>
  );
}
