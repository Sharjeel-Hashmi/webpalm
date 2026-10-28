import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';

export default function CaseStudyKildareDoc() {
  return (
    <div>
      <Helmet>
        <title>KildareDoc Case Study | GP Clinic Website by WebPalm</title>
        <meta
          name="description"
          content="See how WebPalm designed and built the KildareDoc website for a modern GP clinic in Kildare Town, with a clearer patient journey, local SEO, and stronger conversion-focused service pages."
        />
        <meta
          name="keywords"
          content="Kildare Doc case study, GP clinic website, Kildare GP website, healthcare website design Ireland, medical website developer, local medical SEO"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/portfolio/kildaredoc" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://webpalm.ie/portfolio/kildaredoc" />
        <meta
          property="og:title"
          content="KildareDoc Case Study | GP Clinic Website by WebPalm"
        />
        <meta
          property="og:description"
          content="A healthcare website built to make local GP, walk-in, and physio services easier to understand and easier to book."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta
          property="og:image"
          content="https://www.kildaredoc.ie/social-preview.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KildareDoc Case Study | GP Clinic Website by WebPalm"
        />
        <meta
          name="twitter:description"
          content="A healthcare website built to make local GP, walk-in, and physio services easier to understand and easier to book."
        />
        <meta
          name="twitter:image"
          content="https://www.kildaredoc.ie/social-preview.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                '@id': 'https://webpalm.ie/portfolio/kildaredoc#case-study',
                headline: 'KildareDoc Case Study: a local GP clinic website built for clarity and trust',
                description:
                  'How WebPalm built a modern healthcare website for Kildare Clinic with stronger local visibility, clearer patient messaging, and a more effective service journey.',
                image: 'https://www.kildaredoc.ie/social-preview.webp',
                author: { '@id': 'https://webpalm.ie/#organization' },
                publisher: { '@id': 'https://webpalm.ie/#organization' },
                url: 'https://webpalm.ie/portfolio/kildaredoc',
                about: {
                  '@type': 'MedicalBusiness',
                  name: 'Kildare Clinic',
                  areaServed: 'Kildare Town, County Kildare'
                }
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://webpalm.ie/portfolio/kildaredoc#breadcrumb',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webpalm.ie/' },
                  { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://webpalm.ie/portfolio' },
                  { '@type': 'ListItem', position: 3, name: 'KildareDoc', item: 'https://webpalm.ie/portfolio/kildaredoc' }
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
            backgroundImage: `url(https://www.kildaredoc.ie/social-preview.webp)`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="container">
            <span className="badge bg-primary text-white mb-2 px-3 py-2">Healthcare & Local Business</span>
            <h1 className="page_title mb-0 text-white">KildareDoc Case Study</h1>
            <p className="text-white mt-2 myText">
              Building a clear, trustworthy digital front door for a modern Kildare medical clinic.
            </p>
          </div>
        </section>

        <section className="section_space bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="portfolio_details_image mb-4 shadow rounded overflow-hidden">
                  <img
                    src="https://www.kildaredoc.ie/social-preview.webp"
                    alt="Kildare Clinic website preview"
                    className="img-fluid w-100"
                    style={{ maxHeight: '460px', objectFit: 'cover' }}
                  />
                </div>

                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">Project overview</h2>
                    <p>
                      Kildare Clinic is a local GP and walk-in medical centre serving patients in Kildare Town and the surrounding area. The goal was simple but important: make it easier for people to understand the clinic’s services, trust the brand, and take the next step to contact or visit the clinic.
                    </p>
                    <p>
                      From the first visit, the website needed to feel clear, local, and reassuring. It also needed to work well for people looking for urgent care, a family GP, online appointment support, or physiotherapy treatment.
                    </p>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">The challenge</h2>
                    <p>
                      Healthcare decisions are often time-sensitive. Patients need to find the right information quickly, without confusion or friction. A clinic website has to answer practical questions fast: where are you located, what services do you provide, how do I call, and what should I expect?
                    </p>
                    <p>
                      The website also needed to reflect the clinic’s role in local care: approachable, professional, and easy to navigate on mobile — where most patients begin their search.
                    </p>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">What we built</h2>
                    <ul>
                      <li><strong>Local-first healthcare messaging:</strong> clear positioning around GP, walk-in care, online doctor support, and physiotherapy.</li>
                      <li><strong>Simple patient journey:</strong> contact details, service clarity, and easier navigation to the most important actions.</li>
                      <li><strong>Mobile-friendly experience:</strong> designed for people checking a clinic quickly on the go.</li>
                      <li><strong>Trust-focused branding:</strong> a clean, modern presentation that feels credible and reassuring.</li>
                      <li><strong>SEO structure:</strong> service and location-based content that supports local search intent in Kildare.</li>
                    </ul>
                  </div>

                  <div className="content_block mb-5">
                    <h2 className="h3 text-dark mb-3">Why it worked</h2>
                    <p>
                      The clinic needed a website that felt personal, local, and professional. By focusing on the patient experience instead of decorative extras, the result is a site that helps people quickly understand the service, where it is, and how to reach it.
                    </p>
                    <p>
                      That balance is what makes a clinic website effective. It is not just about design. It is about clarity, confidence, and conversion at the exact moment someone needs help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space">
          <div className="container">
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <div className="p-4 border rounded h-100 bg-light">
                  <h3 className="h5 mb-2">Local relevance</h3>
                  <p className="mb-0">A stronger emphasis on Kildare-based care and patient needs.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 border rounded h-100 bg-light">
                  <h3 className="h5 mb-2">Clearer service communication</h3>
                  <p className="mb-0">Patients can understand what is offered without digging through pages.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 border rounded h-100 bg-light">
                  <h3 className="h5 mb-2">Better trust signals</h3>
                  <p className="mb-0">Professional presentation that supports confidence and patient action.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space bg-light">
          <div className="container text-center">
            <h2 className="heading_text mb-3">Need a site that works for your patients and your reputation?</h2>
            <p className="mb-4">
              We build healthcare and service websites that help businesses communicate clearly and convert more effectively.
            </p>
            <Link to="/contact" className="btn btn-primary">
              <span className="btn_label" data-text="Talk to WebPalm">Talk to WebPalm</span>
            </Link>
          </div>
        </section>

        <Footer2 />
        <WhatsAppButton />
      </main>
    </div>
  );
}
