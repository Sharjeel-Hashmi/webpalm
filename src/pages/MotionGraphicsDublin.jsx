import React from 'react';
import Header from '../Components/Header';
import Footer2 from '../Components/Footer2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../Components/WhatsAppButton';
import './Home.css';

export default function MotionGraphicsDublin() {
  return (
    <div>
      <Helmet>
        <title>Motion Graphics Dublin | Video Editing &amp; Animation | WebPalm</title>
        <meta
          name="description"
          content="WebPalm creates professional motion graphics, animated social media videos, explainer animations, and brand video content for Dublin businesses. Elevate your digital presence."
        />
        <meta
          name="keywords"
          content="motion graphics dublin, graphic automation, video editing dublin, animation dublin, motion design dublin, social media video dublin"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/motion-graphics-dublin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/motion-graphics-dublin" />
        <meta property="og:title" content="Motion Graphics Dublin | Video Editing &amp; Animation | WebPalm" />
        <meta
          property="og:description"
          content="WebPalm creates professional motion graphics, animated social media videos, explainer animations, and brand video content for Dublin businesses."
        />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta property="og:site_name" content="WebPalm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Motion Graphics Dublin | Video Editing &amp; Animation | WebPalm" />
        <meta
          name="twitter:description"
          content="Animated social media videos, explainer animations, and brand motion graphics for Dublin businesses. Delivered by WebPalm."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://webpalm.ie/motion-graphics-dublin#service",
                "name": "Motion Graphics &amp; Video Editing Dublin",
                "serviceType": ["Motion Graphics", "Video Editing", "Animation"],
                "provider": {
                  "@type": "LocalBusiness",
                  "@id": "https://webpalm.ie/#organization",
                  "name": "WebPalm",
                  "url": "https://webpalm.ie",
                  "telephone": "+353899520026",
                  "email": "info@webpalm.ie",
                  "image": "https://webpalm.ie/assets/images/site_logo/site_logo_002.png",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "9 Limelawn Row, Coolmine",
                    "addressLocality": "Dublin 15",
                    "addressRegion": "Leinster",
                    "postalCode": "D15 V6PW",
                    "addressCountry": "IE"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 53.3830452,
                    "longitude": -6.4061491
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/webpalm/",
                    "https://www.facebook.com/people/Webpalm-Technologies/61587374273329/",
                    "https://www.instagram.com/webpalm.tech"
                  ]
                },
                "areaServed": [
                  { "@type": "City", "name": "Dublin" },
                  { "@type": "Country", "name": "Ireland" }
                ],
                "description": "Professional motion graphics, animated social media videos, explainer animations, and brand video content for Dublin and Irish businesses.",
                "url": "https://webpalm.ie/motion-graphics-dublin"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webpalm.ie/motion-graphics-dublin#breadcrumb",
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
                    "name": "Motion Graphics Dublin",
                    "item": "https://webpalm.ie/motion-graphics-dublin"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/motion-graphics-dublin#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What motion graphics services does WebPalm provide in Dublin?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "WebPalm creates animated social media videos, explainer animations, branded motion graphics, logo animations, promotional reels, and video ad creatives for Dublin and Irish businesses. All motion work is delivered in formats optimised for social media, websites, and digital advertising."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does motion graphics or video editing cost in Dublin?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Motion graphics packages at WebPalm start from €250 for a single animated social media reel, €500 for branded explainer animations, and €1,500+ for full promotional video productions including script, animation, and voiceover integration."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What formats are motion graphic deliverables provided in?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "WebPalm delivers motion graphics as MP4, MOV, GIF, and WebM files optimised for Instagram Reels, TikTok, YouTube, LinkedIn, and website embedding. Source files in After Effects and Premiere Pro are available on request."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can motion graphics improve my brand's social media performance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Animated content generates 3× more engagement than static images on platforms like Instagram and LinkedIn. WebPalm designs motion graphics that align with your brand identity and communicate key messages within the first 3 seconds for maximum retention."
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
            backgroundImage: `url(${"assets/images/shapes/bg_pattern_3.svg"})`,
          }}
        >
          <div className="container">
            <span className="badge bg-primary text-white mb-2 px-3 py-2">Dublin Motion Design Studio</span>
            <h1 className="page_title mb-0 text-white">Motion Graphics &amp; Video Editing Dublin | WebPalm</h1>
            <p className="text-white mt-2 myText">
              Animated social media videos, explainer animations, and brand motion content crafted for Dublin businesses that want to stand out digitally.
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
                      backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                    }}
                  >
                    Dublin Motion Experts
                  </div>
                  <h2 className="heading_text mb-3">
                    Motion That Moves Your <mark>Brand Forward</mark>
                  </h2>
                </div>
                <p>
                  At <strong>WebPalm</strong>, we produce professional motion graphics and video editing content for Dublin businesses that want to elevate their digital presence. From short Instagram reels to full animated explainer videos, our motion design team creates content that communicates your message in the first 3 seconds.
                </p>
                <p>
                  Based at <strong>9 Limelawn Row, Coolmine, Dublin 15</strong>, we serve businesses across Dublin and Ireland with animated social media content, branded motion identities, logo animations, and promotional video productions delivered to your platform of choice.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Start Your Motion Project">Start Your Motion Project</span>
                    <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </Link>
                  <a href="tel:+353899520026" className="btn btn-outline-dark">
                    <span className="btn_label" data-text="Call +353 899520026">Call +353 899520026</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="p-4 bg-white rounded shadow-sm border">
                  <h3 className="h5 text-dark mb-3"><i className="fa-solid fa-location-dot text-primary me-2"></i>WebPalm — Dublin Motion Studio</h3>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><strong>Address:</strong> 9 Limelawn Row, Coolmine, Dublin 15, D15 V6PW, Ireland</li>
                    <li className="mb-2"><strong>Phone:</strong> <a href="tel:+353899520026">+353 899520026</a></li>
                    <li className="mb-2"><strong>Email:</strong> <a href="mailto:info@webpalm.ie">info@webpalm.ie</a></li>
                    <li className="mb-2"><strong>Working Hours:</strong> Mon – Fri: 9:00 AM – 6:00 PM</li>
                    <li className="mb-0"><strong>Formats:</strong> MP4, MOV, GIF, WebM</li>
                  </ul>
                  <div className="alert alert-info py-2 px-3 small mb-0">
                    <i className="fa-solid fa-circle-check me-1"></i> Serving Dublin businesses &amp; Irish brands nationwide.
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="row g-4 my-4">
              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-film"></i></div>
                  <h3 className="h5 text-dark mb-2">Social Media Animations</h3>
                  <p className="text-muted small mb-3">
                    Short-form reels and motion graphics for Instagram, TikTok, and LinkedIn — designed to stop the scroll and drive engagement.
                  </p>
                  <Link to="/contact" className="small fw-bold text-primary">Get a quote &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-play-circle"></i></div>
                  <h3 className="h5 text-dark mb-2">Explainer Videos</h3>
                  <p className="text-muted small mb-3">
                    Animated explainer videos that clarify complex products or services — with script, animation, and voiceover integration available.
                  </p>
                  <Link to="/contact" className="small fw-bold text-primary">Get a quote &rarr;</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border">
                  <div className="text-primary fs-3 mb-3"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                  <h3 className="h5 text-dark mb-2">Brand Motion &amp; Logos</h3>
                  <p className="text-muted small mb-3">
                    Animated logos, brand intros, and motion identity systems that make your brand feel polished and professional across every touchpoint.
                  </p>
                  <Link to="/contact" className="small fw-bold text-primary">Get a quote &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Why Motion Section */}
            <div className="row justify-content-center mt-5 pt-3">
              <div className="col-lg-8 text-center">
                <h2 className="heading_text mb-3">
                  Why <mark>Motion Graphics</mark> for Dublin Businesses?
                </h2>
                <p className="heading_description mb-0 text-dark">
                  Animated content outperforms static visuals across every platform — here is why Dublin brands are investing in motion.
                </p>
              </div>
            </div>
            <div className="row g-4 mt-3">
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "28px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">3× More Engagement</h3>
                    <p className="mb-0">Animated content drives significantly higher engagement rates than static posts on Instagram, LinkedIn, and TikTok.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "28px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Faster Brand Communication</h3>
                    <p className="mb-0">Motion graphics communicate your key message in under 3 seconds — before a viewer scrolls past your content.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "28px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Platform-Optimised Output</h3>
                    <p className="mb-0">Every deliverable is formatted and sized for the specific platform — Reels, Stories, YouTube Shorts, or LinkedIn video.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq_section section_space mt-5">
              <div className="heading_block text-center">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  Motion Graphics F.A.Q.
                </div>
                <h2 className="heading_text mb-0">
                  Motion Graphics &amp; Video in Dublin: <mark>Questions &amp; Answers</mark>
                </h2>
                <p className="heading_description mb-0 mt-2">
                  Answers to common questions about motion graphics and video editing services in Dublin.
                </p>
              </div>

              <div className="faq_accordion accordion mt-4" id="motion_faq_accordion">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="motionHeadingOne">
                    <div
                      className="accordion-button"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_mot_one"
                      aria-expanded="true"
                      aria-controls="collapse_mot_one"
                    >
                      Q. What motion graphics services does WebPalm provide in Dublin?
                    </div>
                  </h3>
                  <div
                    id="collapse_mot_one"
                    className="accordion-collapse collapse show"
                    aria-labelledby="motionHeadingOne"
                    data-bs-parent="#motion_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        WebPalm creates animated social media videos, explainer animations, branded motion graphics, logo animations, promotional reels, and video ad creatives for Dublin and Irish businesses. All motion work is delivered in formats optimised for social media, websites, and digital advertising.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="motionHeadingTwo">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_mot_two"
                      aria-expanded="false"
                      aria-controls="collapse_mot_two"
                    >
                      Q. How much does motion graphics or video editing cost in Dublin?
                    </div>
                  </h3>
                  <div
                    id="collapse_mot_two"
                    className="accordion-collapse collapse"
                    aria-labelledby="motionHeadingTwo"
                    data-bs-parent="#motion_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Motion graphics packages at WebPalm start from €250 for a single animated social media reel, €500 for branded explainer animations, and €1,500+ for full promotional video productions including script, animation, and voiceover integration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="motionHeadingThree">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_mot_three"
                      aria-expanded="false"
                      aria-controls="collapse_mot_three"
                    >
                      Q. What formats are motion graphic deliverables provided in?
                    </div>
                  </h3>
                  <div
                    id="collapse_mot_three"
                    className="accordion-collapse collapse"
                    aria-labelledby="motionHeadingThree"
                    data-bs-parent="#motion_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        WebPalm delivers motion graphics as MP4, MOV, GIF, and WebM files optimised for Instagram Reels, TikTok, YouTube, LinkedIn, and website embedding. Source files in After Effects and Premiere Pro are available on request.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header" id="motionHeadingFour">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_mot_four"
                      aria-expanded="false"
                      aria-controls="collapse_mot_four"
                    >
                      Q. Can motion graphics improve my brand's social media performance?
                    </div>
                  </h3>
                  <div
                    id="collapse_mot_four"
                    className="accordion-collapse collapse"
                    aria-labelledby="motionHeadingFour"
                    data-bs-parent="#motion_faq_accordion"
                  >
                    <div className="accordion-body">
                      <div className="text_a">A.</div>
                      <p>
                        Yes. Animated content generates 3× more engagement than static images on platforms like Instagram and LinkedIn. WebPalm designs motion graphics that align with your brand identity and communicate key messages within the first 3 seconds for maximum retention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white p-4 p-md-5 rounded shadow-sm border mt-5">
              <h3 className="h3 mb-2">Ready to Elevate Your Dublin Brand with Motion?</h3>
              <p className="text-muted mb-4">
                Get in touch for a free consultation or request a fixed-price quote for your motion graphics project.
              </p>
              <Link to="/contact" className="btn btn-primary me-3">
                <span className="btn_label" data-text="Request Free Quote">Request Free Quote</span>
                <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
              </Link>
              <Link to="/graphic-designing" className="btn btn-outline-dark">
                <span className="btn_label" data-text="View Graphic Design Services">View Graphic Design Services</span>
              </Link>
            </div>

          </div>
        </section>

        <WhatsAppButton />
      </main>

      <Footer2 />
    </div>
  );
}
