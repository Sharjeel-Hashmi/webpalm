import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function SocialMediaMarketingDublin() {
  return (
    <div>
      <Helmet>
        <title>Social Media Marketing Agency Dublin | Strategy &amp; Management | WebPalm</title>
        <meta
          name="description"
          content="WebPalm is a social media marketing agency in Dublin offering strategy, content creation, paid ads, and community management for Irish businesses. Build your brand online."
        />
        <meta
          name="keywords"
          content="social media marketing agency dublin, social media agency dublin, social media management dublin, social media marketing dublin, social media strategy dublin, paid social agency dublin, social media content dublin, social media companies dublin, social media marketing company ireland"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/social-media-marketing-dublin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/social-media-marketing-dublin" />
        <meta property="og:title" content="Social Media Marketing Agency Dublin | Strategy &amp; Management | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm is a social media marketing agency in Dublin offering strategy, content creation, paid ads, and community management for Irish businesses. Build your brand online."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Marketing Agency Dublin | Strategy &amp; Management | WebPalm" />
        <meta
          name="twitter:description"
          content="WebPalm is a social media marketing agency in Dublin offering strategy, content creation, paid ads, and community management for Irish businesses. Build your brand online."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://webpalm.ie/social-media-marketing-dublin#service',
                name: 'Social Media Marketing Agency Dublin',
                serviceType: ['Social Media Marketing', 'Digital Marketing'],
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
                  { '@type': 'AdministrativeArea', name: 'Dublin 15' },
                  { '@type': 'Country', name: 'Ireland' }
                ],
                description:
                  'WebPalm is a social media marketing agency in Dublin providing strategy, content creation, paid social advertising, and community management for Irish businesses.',
                url: 'https://webpalm.ie/social-media-marketing-dublin',
                priceRange: 'From €400/month'
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://webpalm.ie/social-media-marketing-dublin#breadcrumb',
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
                    name: 'Social Media Marketing Dublin',
                    item: 'https://webpalm.ie/social-media-marketing-dublin'
                  }
                ]
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://webpalm.ie/social-media-marketing-dublin#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What social media marketing services does WebPalm offer in Dublin?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'WebPalm provides social media strategy development, content creation and scheduling, community management, paid social advertising (Meta Ads, LinkedIn Ads, TikTok Ads), influencer campaign management, and monthly performance reporting for Dublin and Irish businesses.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Which social media platforms does WebPalm manage for Dublin businesses?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We manage Instagram, Facebook, LinkedIn, TikTok, X (Twitter), and YouTube for Dublin businesses. Platform selection is guided by your target audience demographics and business goals.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does social media management cost in Dublin?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Social media management packages at WebPalm start from €400 per month for 2-platform management (content creation + scheduling), rising to €1,200+ per month for multi-platform strategy, paid advertising management, and full community engagement.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you create the content for social media posts?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. WebPalm creates branded photography direction, graphic design posts, short-form video scripts, Reels and TikTok content, carousel posts, and caption copy — all aligned to your brand voice and audience.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Can you run paid social media ads for my Dublin business?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. WebPalm manages Meta Ads (Facebook and Instagram), LinkedIn Ads, TikTok Ads, and Google Display campaigns. We handle targeting strategy, creative design, A/B testing, budget management, and ROI reporting.'
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
            <h1 className="page_title mb-0 text-white">Social Media Marketing Agency Dublin | WebPalm</h1>
            <p className="text-white mt-2 myText">
              Strategy, content creation, paid social campaigns, and community management for Dublin and Irish businesses that want to grow their brand online.
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
                    Dublin Social Media Experts
                  </div>
                  <h2 className="heading_text mb-3">
                    Social Media Marketing That Builds <mark>Real Audiences</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we help Dublin and Irish businesses grow their brand, engage their audience, and generate qualified leads through targeted social media marketing. Based at <strong>9 Limelawn Row, Coolmine, Dublin 15</strong>, our team creates and manages full social media strategies tailored to your industry, goals, and customer base.
                </p>
                <p>
                  Whether you need ongoing social management, a paid advertising campaign, or a full content creation service, we build social media systems that drive consistent, measurable growth — not just vanity metrics.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Get a Free Consultation">Get a Free Consultation</span>
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
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Dublin, Dublin 15, Dublin City Centre &amp; Nationwide Ireland.
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="row g-4 my-4">
              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-bullseye"></i></div>
                  <h3 className="h5 text-dark mb-2">Social Strategy</h3>
                  <p className="text-muted small mb-3">
                    Audience research, platform selection, content calendars, and competitive analysis tailored to your Dublin business.
                  </p>
                  <Link to="/digital-social-media-marketing" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-photo-film"></i></div>
                  <h3 className="h5 text-dark mb-2">Content Creation</h3>
                  <p className="text-muted small mb-3">
                    Branded graphics, Reels, TikTok videos, carousel posts, and caption copywriting aligned to your brand voice and audience.
                  </p>
                  <Link to="/digital-social-media-marketing" className="small fw-bold text-primary">Learn more &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-chart-bar"></i></div>
                  <h3 className="h5 text-dark mb-2">Paid Social Ads</h3>
                  <p className="text-muted small mb-3">
                    Meta Ads, LinkedIn, and TikTok campaign management with ROI-focused targeting, A/B testing, and transparent reporting.
                  </p>
                  <Link to="/digital-social-media-marketing" className="small fw-bold text-primary">Learn more &rarr;</Link>
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
                    <h2 className="heading_text">Our Social Media Marketing Process</h2>
                    <p className="heading_description mb-2">
                      We start with your audience, your goals, and your brand — then build a social media plan that is practical, platform-appropriate, and focused on real business outcomes.
                    </p>
                    <p className="heading_description mb-0">
                      Every piece of content and every campaign is tracked against performance benchmarks so you always know what is working and why.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">01. Audit</h3>
                        <p className="mb-0">We review your current social presence, competitor activity, and audience data to identify gaps and opportunities.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Strategy</h3>
                        <p className="mb-0">We build a content calendar, platform plan, and paid media roadmap aligned to your brand tone and growth targets.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Create &amp; Publish</h3>
                        <p className="mb-0">Our team designs, writes, and schedules content — Reels, carousels, posts, and ads — consistently across your platforms.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Report &amp; Optimise</h3>
                        <p className="mb-0">Monthly performance reports covering reach, engagement, lead quality, ad ROI, and strategic recommendations.</p>
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
                <p className="heading_description mb-4 text-dark">Common questions about social media marketing for Dublin businesses.</p>
              </div>
            </div>
            <div className="accordion" id="socialFaq">
              <div className="accordion-item">
                <h3 className="accordion-header" id="socialHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#socialCollapseOne" aria-expanded="true" aria-controls="socialCollapseOne">
                    What social media marketing services does WebPalm offer in Dublin?
                  </button>
                </h3>
                <div id="socialCollapseOne" className="accordion-collapse collapse show" aria-labelledby="socialHeadingOne" data-bs-parent="#socialFaq">
                  <div className="accordion-body">
                    WebPalm provides social media strategy development, content creation and scheduling, community management, paid social advertising (Meta Ads, LinkedIn Ads, TikTok Ads), influencer campaign management, and monthly performance reporting for Dublin and Irish businesses.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="socialHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#socialCollapseTwo" aria-expanded="false" aria-controls="socialCollapseTwo">
                    Which social media platforms does WebPalm manage for Dublin businesses?
                  </button>
                </h3>
                <div id="socialCollapseTwo" className="accordion-collapse collapse" aria-labelledby="socialHeadingTwo" data-bs-parent="#socialFaq">
                  <div className="accordion-body">
                    We manage Instagram, Facebook, LinkedIn, TikTok, X (Twitter), and YouTube for Dublin businesses. Platform selection is guided by your target audience demographics and business goals.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="socialHeadingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#socialCollapseThree" aria-expanded="false" aria-controls="socialCollapseThree">
                    How much does social media management cost in Dublin?
                  </button>
                </h3>
                <div id="socialCollapseThree" className="accordion-collapse collapse" aria-labelledby="socialHeadingThree" data-bs-parent="#socialFaq">
                  <div className="accordion-body">
                    Social media management packages at WebPalm start from €400 per month for 2-platform management (content creation + scheduling), rising to €1,200+ per month for multi-platform strategy, paid advertising management, and full community engagement.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="socialHeadingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#socialCollapseFour" aria-expanded="false" aria-controls="socialCollapseFour">
                    Do you create the content for social media posts?
                  </button>
                </h3>
                <div id="socialCollapseFour" className="accordion-collapse collapse" aria-labelledby="socialHeadingFour" data-bs-parent="#socialFaq">
                  <div className="accordion-body">
                    Yes. WebPalm creates branded photography direction, graphic design posts, short-form video scripts, Reels and TikTok content, carousel posts, and caption copy — all aligned to your brand voice and audience.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="socialHeadingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#socialCollapseFive" aria-expanded="false" aria-controls="socialCollapseFive">
                    Can you run paid social media ads for my Dublin business?
                  </button>
                </h3>
                <div id="socialCollapseFive" className="accordion-collapse collapse" aria-labelledby="socialHeadingFive" data-bs-parent="#socialFaq">
                  <div className="accordion-body">
                    Yes. WebPalm manages Meta Ads (Facebook and Instagram), LinkedIn Ads, TikTok Ads, and Google Display campaigns. We handle targeting strategy, creative design, A/B testing, budget management, and ROI reporting.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section_space text-center">
          <div className="container">
            <h2 className="heading_text mb-3">Ready to Grow Your Dublin Business on Social Media?</h2>
            <p className="mb-4">We can build a social media strategy around your audience, platforms, and growth goals.</p>
            <Link to="/contact" className="btn btn-primary me-3">
              <span className="btn_label" data-text="Book a Free Consultation">Book a Free Consultation</span>
              <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
            </Link>
            <Link to="/pricing" className="btn btn-outline-dark">
              <span className="btn_label" data-text="View Pricing Plans">View Pricing Plans</span>
            </Link>
          </div>
        </section>

        <WhatsAppButton />
        <Footer2 />
      </main>
    </div>
  );
}
