import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';

export default function WebsiteMaintenance() {
  return (
    <div>
      <Helmet>
        <title>Website Maintenance Services in Dublin | WebPalm</title>
        <meta
          name="description"
          content="WebPalm provides website maintenance and support services for businesses that need a secure, faster, and more reliable site without downtime or technical headaches."
        />
        <meta
          name="keywords"
          content="website maintenance Dublin, website support Ireland, website updates, technical support, website hosting support, website security updates, WebPalm maintenance"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/website-maintenance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/website-maintenance" />
        <meta property="og:title" content="Website Maintenance Services in Dublin | WebPalm" />
        <meta
          property="og:description"
          content="Keep your website running smoothly with updates, security checks, performance improvements, and support from WebPalm."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Maintenance Services in Dublin | WebPalm" />
        <meta
          name="twitter:description"
          content="Protect your website investment with regular maintenance, performance tuning, plugin updates, and technical support."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://webpalm.ie/website-maintenance#service',
                name: 'Website Maintenance & Support Services',
                serviceType: 'Website Maintenance',
                provider: { '@id': 'https://webpalm.ie/#organization' },
                areaServed: [
                  { '@type': 'Country', name: 'Ireland' },
                  { '@type': 'City', name: 'Dublin' }
                ],
                description:
                  'Website maintenance services covering updates, backups, technical fixes, speed improvements, security monitoring, and ongoing support for business websites.',
                url: 'https://webpalm.ie/website-maintenance'
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://webpalm.ie/website-maintenance#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Why do websites need regular maintenance?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Websites need maintenance to stay secure, fast, and compatible with new browser and plugin versions. Without it, small problems can become much larger ones over time.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What does a maintenance plan usually include?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'It can include software updates, backups, uptime monitoring, performance checks, broken link fixes, bug resolution, content updates, and technical support when issues arise.'
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
            backgroundImage: `url(${'assets/images/site_logo/site_logo_01.jpg'})`,
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Website Maintenance</h1>
            <p className="text-white mt-2 myPara">
              Ongoing support and technical care to keep your site secure, fast, and working properly for your customers.
            </p>
          </div>
        </section>

        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <h2 className="details_item_title">A website needs attention long after launch</h2>
                <p>
                  Many businesses build a website and assume the work is done. In reality, ongoing maintenance is what keeps a site healthy, safe, and effective. Without it, technical issues stack up, performance slips, and the user experience starts to break down.
                </p>
                <p>
                  WebPalm offers support plans and maintenance services that keep websites stable and business-ready. From updates and backups to speed checks and small improvements, we help ensure your site keeps earning trust from visitors and performing for the business.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="image_wrap">
                  <img
                    className="rounded"
                    src="assets/images/site_logo/site_logo_02.jpg"
                    alt="Website support and maintenance dashboard overview"
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
                <h2 className="heading_text mb-3"><mark>What support includes</mark></h2>
                <p className="heading_description mb-0 text-dark">We cover the technical work that keeps your website reliable and growing with your business.</p>
              </div>
            </div>

            <div className="row mt-5 g-4">
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Security updates</h3>
                    <p className="mb-0">Regular patching and checks reduce risk from outdated plugins, libraries, and third-party integrations.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Performance tuning</h3>
                    <p className="mb-0">We monitor speed and improve weak points that affect load time, usability, and conversion quality.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Backups</h3>
                    <p className="mb-0">Reliable backups give you a safer fallback if an update, system error, or unexpected issue affects the site.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Content updates</h3>
                    <p className="mb-0">Need a new service page, contact change, or image update? We handle the practical tweaks that keep the site current.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Bug fixing</h3>
                    <p className="mb-0">We investigate issues such as broken forms, layout problems, or functionality glitches before they affect sales or reputation.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Ongoing support</h3>
                    <p className="mb-0">Regular technical support means you are not left scrambling when something needs attention or a small improvement is required.</p>
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
                    <h2 className="heading_text">Maintenance is part of growth, not an afterthought</h2>
                    <p className="heading_description mb-2">
                      A healthy website quietly supports the business. It loads faster, works more reliably, and gives visitors a more trustworthy experience.
                    </p>
                    <p className="heading_description mb-0">
                      We help businesses stay on top of those basics so they can focus on operations, sales, and service instead of technical firefighting.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">01. Review</h3>
                        <p className="mb-0">We check the site’s health, identify issue areas, and look for opportunities to improve reliability and performance.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Update</h3>
                        <p className="mb-0">We keep the platform, plugins, and content current so the site remains stable and compatible.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Protect</h3>
                        <p className="mb-0">Backups and monitoring reduce the chance of serious problems and improve recovery when they do happen.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Support</h3>
                        <p className="mb-0">We handle technical issues and improvements so your business stays focused on serving customers instead of fixing the site.</p>
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
            <div className="accordion" id="maintenanceFaq">
              <div className="accordion-item">
                <h3 className="accordion-header" id="maintenanceHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#maintenanceCollapseOne" aria-expanded="true" aria-controls="maintenanceCollapseOne">
                    How often should a website be maintained?
                  </button>
                </h3>
                <div id="maintenanceCollapseOne" className="accordion-collapse collapse show" aria-labelledby="maintenanceHeadingOne" data-bs-parent="#maintenanceFaq">
                  <div className="accordion-body">
                    Most business websites benefit from a regular monthly review, with updates and technical checks done on an ongoing schedule. If activity is higher or the site is more complex, the maintenance rhythm may need to be more frequent.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="maintenanceHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#maintenanceCollapseTwo" aria-expanded="false" aria-controls="maintenanceCollapseTwo">
                    Can you fix issues without rebuilding the whole site?
                  </button>
                </h3>
                <div id="maintenanceCollapseTwo" className="accordion-collapse collapse" aria-labelledby="maintenanceHeadingTwo" data-bs-parent="#maintenanceFaq">
                  <div className="accordion-body">
                    Yes. Many maintenance tasks are small, targeted fixes: broken forms, styling issues, content edits, security patches, performance tuning, and compatibility adjustments.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space text-center">
          <div className="container">
            <h2 className="heading_text mb-3">Need someone reliable to keep your website stable and up to date?</h2>
            <p className="mb-4">We can build a support plan around your site, your traffic, and the kind of issues you want to avoid.</p>
            <Link to="/contact" className="btn btn-primary">
              <span className="btn_label" data-text="Ask about maintenance support">Ask about maintenance support</span>
            </Link>
          </div>
        </section>

        <Footer2 />
        <WhatsAppButton />
      </main>
    </div>
  );
}
