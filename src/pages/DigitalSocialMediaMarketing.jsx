import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';

export default function DigitalSocialMediaMarketing() {
  return (
    <div>
      <Helmet>
        <title>Digital & Social Media Marketing Services in Dublin | WebPalm</title>
        <meta
          name="description"
          content="WebPalm delivers digital marketing and social media strategy for businesses that want stronger reach, better engagement, and more enquiries from the right audience."
        />
        <meta
          name="keywords"
          content="digital marketing Dublin, social media marketing Ireland, social media agency Dublin, Facebook marketing, Instagram marketing, content marketing, brand visibility, lead generation, WebPalm marketing"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/digital-social-media-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/digital-social-media-marketing" />
        <meta property="og:title" content="Digital & Social Media Marketing Services in Dublin | WebPalm" />
        <meta
          property="og:description"
          content="From strategy and content to paid campaigns and community growth, WebPalm helps brands get more visibility and more qualified enquiries online."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital & Social Media Marketing Services in Dublin | WebPalm" />
        <meta
          name="twitter:description"
          content="Grow your business with digital strategy, paid campaigns, content production, and social media management designed around outcomes, not vanity metrics."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://webpalm.ie/digital-social-media-marketing#service',
                name: 'Digital & Social Media Marketing Services',
                serviceType: 'Digital Marketing',
                provider: { '@id': 'https://webpalm.ie/#organization' },
                areaServed: [
                  { '@type': 'Country', name: 'Ireland' },
                  { '@type': 'City', name: 'Dublin' }
                ],
                description:
                  'Marketing strategy, content planning, paid advertising, and social media growth for businesses that want more visibility and better lead quality.',
                url: 'https://webpalm.ie/digital-social-media-marketing'
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://webpalm.ie/digital-social-media-marketing#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is included in digital and social media marketing?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'It usually includes content planning, audience research, platform strategy, campaign setup, ad management, community engagement, and reporting on performance and lead generation.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'How do you know if a marketing strategy is working?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We track the right signal for the business — usually enquiries, bookings, clicks, conversions, lead quality, and whether the content is driving the intended action.'
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
            backgroundImage: `url(${'assets/images/backgrounds/bg_image_3.webp'})`,
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Digital & Social Media Marketing</h1>
            <p className="text-white mt-2 myPara">
              Marketing that helps businesses get seen, get trusted, and get more enquiries without wasting budget.
            </p>
          </div>
        </section>

        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <h2 className="details_item_title">Marketing that speaks to the right people at the right time</h2>
                <p>
                  A good digital marketing strategy does more than create noise. It gives a business a clearer voice, a stronger online presence, and a better path from attention to action.
                </p>
                <p>
                  At WebPalm, we help brands build visibility across the platforms and channels that matter: search, social media, content, paid campaigns, and direct customer engagement. The focus is always on qualified attention — people who are relevant to the business and likely to buy, enquire, or book.
                </p>
                <p>
                  We keep strategy realistic and practical, so marketing is not just active — it is effective.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="image_wrap">
                  <img
                    className="rounded"
                    src="assets/images/backgrounds/bg_image_3.webp"
                    alt="Digital marketing campaign and social media growth strategy"
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
                <h2 className="heading_text mb-3">
                  <mark>What we cover</mark>
                </h2>
                <p className="heading_description mb-0 text-dark">
                  We build marketing systems that support both brand awareness and lead generation.
                </p>
              </div>
            </div>

            <div className="row mt-5 g-4">
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Social media strategy</h3>
                    <p className="mb-0">Content planning, platform direction, and messaging that fits the way your target audience actually engages online.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Content marketing</h3>
                    <p className="mb-0">Educational, useful, and brand-building content designed to strengthen trust and attract relevant traffic.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Paid campaigns</h3>
                    <p className="mb-0">Ad sets and landing page alignment to support stronger conversion efficiency across search and social platforms.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Brand visibility</h3>
                    <p className="mb-0">A consistent brand presence across channels helps businesses become easier to recognise and easier to trust.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Audience targeting</h3>
                    <p className="mb-0">We focus on reaching the audiences that are most likely to act, rather than spreading effort across every distraction.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: '32px 24px' }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Performance reporting</h3>
                    <p className="mb-0">Clear reporting on what matters — leads, actions, reach quality, conversions, and what needs attention next.</p>
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
                    <h2 className="heading_text">A marketing process built around business outcomes</h2>
                    <p className="heading_description mb-2">
                      We start with the offer, the audience, and the actual job the business wants the marketing to do. That keeps the strategy practical instead of vague.
                    </p>
                    <p className="heading_description mb-0">
                      Then we build channels, content, and campaigns around the actions that matter most: bookings, leads, conversions, and long-term brand lift.
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
                        <p className="mb-0">We identify what is already working, what is missing, and which channels are best suited to the business.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Plan</h3>
                        <p className="mb-0">We define the content mix, campaign direction, and audience priority so the work is cohesive.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Create</h3>
                        <p className="mb-0">We design the campaign assets, content themes, and messaging structure needed to support the plan.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: '24px 20px' }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Review</h3>
                        <p className="mb-0">We measure outcome quality, refine the channels, and improve the strategy with real data.</p>
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
            <div className="accordion" id="marketingFaq">
              <div className="accordion-item">
                <h3 className="accordion-header" id="marketingHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#marketingCollapseOne" aria-expanded="true" aria-controls="marketingCollapseOne">
                    Do you manage both organic and paid marketing?
                  </button>
                </h3>
                <div id="marketingCollapseOne" className="accordion-collapse collapse show" aria-labelledby="marketingHeadingOne" data-bs-parent="#marketingFaq">
                  <div className="accordion-body">
                    Yes. We work across paid campaigns, social content, organic growth, and conversion-focused marketing strategy depending on the business and the stage it is at.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="marketingHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#marketingCollapseTwo" aria-expanded="false" aria-controls="marketingCollapseTwo">
                    Can you support social media content as well as strategy?
                  </button>
                </h3>
                <div id="marketingCollapseTwo" className="accordion-collapse collapse" aria-labelledby="marketingHeadingTwo" data-bs-parent="#marketingFaq">
                  <div className="accordion-body">
                    Absolutely. Many businesses need both the content plan and the actual assets behind it. We can support strategy, creative direction, and ongoing content execution.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space text-center">
          <div className="container">
            <h2 className="heading_text mb-3">Need a marketing partner that actually understands your growth goals?</h2>
            <p className="mb-4">We can build a strategy around the channels, audience, and goals that matter to your business.</p>
            <Link to="/contact" className="btn btn-primary">
              <span className="btn_label" data-text="Book a marketing consultation">Book a marketing consultation</span>
            </Link>
          </div>
        </section>

        <Footer2 />
        <WhatsAppButton />
      </main>
    </div>
  );
}
