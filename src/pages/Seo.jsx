import React from "react";
import Header from "../Components/Header";
import "./Home.css";
import Footer2 from "../Components/Footer2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WhatsAppButton from "../Components/WhatsAppButton";

export default function Seo() {
  return (
    <div>
      <Helmet>
        <title>SEO, AEO & GEO Services in Dublin | WebPalm</title>
        <meta
          name="description"
          content="WebPalm helps businesses improve search visibility, local rankings, and AI search discoverability with technical SEO, content strategy, and conversion-focused optimization."
        />
        <meta
          name="keywords"
          content="SEO Dublin, local SEO Ireland, search engine optimization agency, technical SEO, AEO services Dublin, GEO marketing, AI search optimization, keyword strategy, WebPalm SEO"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/search-engine-optimization" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/search-engine-optimization" />
        <meta property="og:title" content="SEO, AEO & GEO Services in Dublin | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm offers services that improve rankings, attract qualified traffic, and position businesses for visibility in both traditional search and AI-powered answer engines."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO, AEO & GEO Services in Dublin | WebPalm" />
        <meta
          name="twitter:description"
          content="WebPalm helps businesses rank higher in Google, improve local search visibility, and prepare for AI-driven search discovery."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://webpalm.ie/search-engine-optimization#service",
                "name": "Search Engine Optimization, AEO & GEO Services",
                "serviceType": "Search Engine Optimization",
                "provider": { "@id": "https://webpalm.ie/#organization" },
                "areaServed": [
                  { "@type": "Country", "name": "Ireland" },
                  { "@type": "City", "name": "Dublin" }
                ],
                "description": "Technical SEO and search visibility strategies for businesses in Ireland and Dublin, including local SEO, keyword strategy, content optimization, and AI answer engine visibility.",
                "url": "https://webpalm.ie/search-engine-optimization"
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/search-engine-optimization#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What does SEO include?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It includes technical fixes, on-page optimization, content strategy, keyword research, internal linking, local SEO, and ongoing performance analysis to improve visibility over time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is AEO and GEO in simple terms?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AEO focuses on being the clear answer in AI-powered search experiences, while GEO helps a business show up in AI-generated summaries and recommendations across modern search platforms."
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
            backgroundImage: `url(${"assets/images/backgrounds/SEOImg33.png"})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">SEO, AEO & GEO for Growth</h1>
            <p className="text-white mt-2 myPara">
              We help businesses improve visibility in Google, attract better traffic, and stay discoverable in the AI-driven search landscape.
            </p>
          </div>
        </section>

        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <h2 className="details_item_title">Search visibility is not a side task. It is a revenue channel.</h2>
                <p>
                  Most businesses do not struggle because they have a weak product or a bad service. They struggle because people cannot easily find them when they are already looking. SEO helps fix that by making your website more visible, more relevant, and easier to trust.
                </p>
                <p>
                  At WebPalm, we combine technical SEO, local search optimization, content strategy, and AI search positioning so your business is discoverable across both traditional search and newer answer-based systems. We focus on ranking for the right terms and attracting visitors who are ready to act.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="image_wrap">
                  <img
                    className="rounded"
                    src="assets/images/backgrounds/bg-seo_img_11.jpg"
                    alt="SEO strategy and digital discovery overview for businesses by WebPalm"
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
                  <mark>What we do</mark>
                </h2>
                <p className="heading_description mb-0 text-dark">
                  We build practical, measurable SEO strategies designed for real business growth.
                </p>
              </div>
            </div>
            <div className="row mt-5 g-4">
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Technical SEO</h3>
                    <p className="mb-0">We improve crawlability, indexability, page speed, site structure, metadata, and technical health so search engines can understand your website properly.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Keyword strategy</h3>
                    <p className="mb-0">We focus on the terms your audience actually searches for, aligning content and pages with intent rather than vanity metrics.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Local SEO</h3>
                    <p className="mb-0">We help Dublin and Irish businesses win more local visibility through Google Business Profile optimization, location pages, and local signals.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Content & landing pages</h3>
                    <p className="mb-0">We create pages and content that answer real user questions, reflect search intent, and support conversion rather than just traffic numbers.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">AEO & GEO</h3>
                    <p className="mb-0">We structure content for AI answer engines and modern search experiences so your business is more discoverable in direct-answer results.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Performance tracking</h3>
                    <p className="mb-0">We review rankings, traffic quality, conversion paths, and the pages that are actually driving enquiries so strategy stays grounded in results.</p>
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
                    <h2 className="heading_text">How we work</h2>
                    <p className="heading_description mb-2">
                      We start with the business context, search intent, and your current website situation. That gives us a realistic view of what is holding rankings or conversions back.
                    </p>
                    <p className="heading_description mb-0">
                      From there, we build a focused plan across technical improvements, content opportunities, and local or commercial visibility gaps. We do not chase every tactic — we chase the ones that matter.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">01. Audit</h3>
                        <p className="mb-0">We review technical setup, keyword opportunities, content gaps, and the pages already attracting or losing traffic.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Strategy</h3>
                        <p className="mb-0">We prioritise the fixes and opportunities that will create the strongest return based on your market and goals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Execution</h3>
                        <p className="mb-0">We optimise the site, improve content structure, and support pages with stronger relevance and clearer conversion paths.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Review</h3>
                        <p className="mb-0">We monitor progress, refine the approach, and adjust based on what actually moves rankings, traffic, and enquiries.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="heading_text mb-3">
                  <mark>Why businesses choose SEO</mark>
                </h2>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "28px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Better visibility</h3>
                    <p className="mb-0">The right search visibility puts your business in front of people who are already looking for your service.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "28px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">More qualified traffic</h3>
                    <p className="mb-0">Targeted content and optimization attract the visitors most likely to enquire or buy, rather than broad but low-intent traffic.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "28px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Long-term compounding</h3>
                    <p className="mb-0">Strong SEO builds a foundation that keeps generating visibility over time, unlike paid campaigns that stop when the spend stops.</p>
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
                <h2 className="heading_text mb-3">
                  <mark>FAQ</mark>
                </h2>
              </div>
            </div>
            <div className="accordion" id="seoFaq">
              <div className="accordion-item">
                <h3 className="accordion-header" id="seoHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#seoCollapseOne" aria-expanded="true" aria-controls="seoCollapseOne">
                    How long does SEO usually take to show results?
                  </button>
                </h3>
                <div id="seoCollapseOne" className="accordion-collapse collapse show" aria-labelledby="seoHeadingOne" data-bs-parent="#seoFaq">
                  <div className="accordion-body">
                    SEO is a long-game channel, but improvements can become visible within a few weeks once technical issues are fixed and stronger content is in place. Significant ranking gains usually follow over a few months, depending on competition and scope.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="seoHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#seoCollapseTwo" aria-expanded="false" aria-controls="seoCollapseTwo">
                    Do you help with local search for Dublin businesses?
                  </button>
                </h3>
                <div id="seoCollapseTwo" className="accordion-collapse collapse" aria-labelledby="seoHeadingTwo" data-bs-parent="#seoFaq">
                  <div className="accordion-body">
                    Yes. We help businesses improve local rankings through Google Business Profile optimisation, local landing pages, consistent business details, and search-focused content built for the area they serve.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="seoHeadingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#seoCollapseThree" aria-expanded="false" aria-controls="seoCollapseThree">
                    What is the difference between SEO, AEO and GEO?
                  </button>
                </h3>
                <div id="seoCollapseThree" className="accordion-collapse collapse" aria-labelledby="seoHeadingThree" data-bs-parent="#seoFaq">
                  <div className="accordion-body">
                    SEO focuses on rankings in search engines. AEO is about showing up clearly in AI and answer-based search experiences. GEO looks at how your brand and content are represented in AI-generated summaries and recommendations. We build all three into a more complete visibility strategy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space text-center">
          <div className="container">
            <h2 className="heading_text mb-3">Ready to grow your visibility and attract the right traffic?</h2>
            <p className="mb-4">We can review your current site and recommend the highest-impact next steps.</p>
            <Link to="/contact" className="btn btn-primary">
              <span className="btn_label" data-text="Request an SEO review">Request an SEO review</span>
            </Link>
          </div>
        </section>

        <Footer2 />
        <WhatsAppButton />
      </main>
    </div>
  );
}
