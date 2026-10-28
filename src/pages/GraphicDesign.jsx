import React from "react";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhatsAppButton from "../Components/WhatsAppButton";

export default function GraphicDesign() {
  return (
    <div>
      <Helmet>
        <title>Graphic Design & Branding Services in Dublin | WebPalm</title>
        <meta
          name="description"
          content="WebPalm creates brand-led graphic design, logo design, marketing creatives, and social media visuals that help businesses look sharper and perform better."
        />
        <meta
          name="keywords"
          content="graphic design Dublin, branding agency Ireland, logo design Dublin, social media graphics, website design visuals, digital marketing design, brand identity design, WebPalm graphic design"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/graphic-designing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/graphic-designing" />
        <meta property="og:title" content="Graphic Design & Branding Services in Dublin | WebPalm" />
        <meta
          property="og:description"
          content="From logo design to marketing creatives, WebPalm helps businesses create visual identities that are clear, memorable, and built to convert."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta property="og:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Graphic Design & Branding Services in Dublin | WebPalm" />
        <meta
          name="twitter:description"
          content="WebPalm creates branding, social media visuals, and digital creatives that help businesses present themselves with more confidence and clarity."
        />
        <meta name="twitter:image" content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://webpalm.ie/graphic-designing#service",
                "name": "Graphic Design, Branding & Video Editing",
                "serviceType": "Graphic Design",
                "provider": { "@id": "https://webpalm.ie/#organization" },
                "areaServed": [
                  { "@type": "Country", "name": "Ireland" },
                  { "@type": "City", "name": "Dublin" }
                ],
                "description": "Creative design services including brand identity, digital graphics, social media marketing assets, and video editing for businesses in Dublin and beyond.",
                "url": "https://webpalm.ie/graphic-designing"
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/graphic-designing#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What design services does WebPalm offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer branding, logo design, marketing visuals, social media graphics, presentation design, and short-form video editing for businesses that need a more polished and consistent visual identity."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why does good graphic design matter for a business?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Good design helps people understand your offer quickly, builds trust, and makes your business look more professional across your website, email, social media, and marketing materials."
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
            backgroundImage: `url(${"assets/images/graphicDesigning/graphic_img_9.jpg"})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Graphic Design & Brand Identity</h1>
            <p className="text-white mt-2 myPara">
              We create clear, memorable visuals that help businesses look sharper and communicate with more confidence.
            </p>
          </div>
        </section>

        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <h2 className="details_item_title">Design that makes your business easier to trust and easier to remember</h2>
                <p>
                  Design is often the first impression people get of a brand. If the visuals feel inconsistent or dated, it creates doubt before a conversation even starts. We create design systems that reflect the business clearly and make the brand feel more credible.
                </p>
                <p>
                  Our work covers brand identity, marketing visuals, digital creatives, YouTube and social posts, and design assets that support growth. The goal is not just to make things look polished — it is to make the message clearer, stronger, and easier to act on.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="image_wrap">
                  <img
                    className="rounded"
                    src="assets/images/graphicDesigning/graphic_img_1.jpg"
                    alt="Branding and visual identity design by WebPalm"
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
                  <mark>What we design</mark>
                </h2>
                <p className="heading_description mb-0 text-dark">
                  We design the assets businesses use every day to present themselves clearly and consistently.
                </p>
              </div>
            </div>
            <div className="row mt-5 g-4">
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Logo & brand identity</h3>
                    <p className="mb-0">Logos, colour systems, typography direction, and core brand assets that help a business feel established and recognisable.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Social media creatives</h3>
                    <p className="mb-0">Visuals built for Instagram, Facebook, LinkedIn, and paid campaigns that are designed to stop the scroll and reinforce the message.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Website graphics</h3>
                    <p className="mb-0">Landing page visuals, hero images, marketing banners, and product or service illustrations that fit the way the site is meant to convert.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Marketing collateral</h3>
                    <p className="mb-0">Flyers, brochures, proposals, presentation design, and sales material that look professional and support your outreach.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Video editing</h3>
                    <p className="mb-0">Short-form edits for social campaigns, promotional content, event wraps, and product videos with a cleaner, more professional finish.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Brand refreshes</h3>
                    <p className="mb-0">For businesses that need a more modern look without losing their identity, we refine the visual language for a clearer market position.</p>
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
                    <h2 className="heading_text">A design process that keeps the strategy in view</h2>
                    <p className="heading_description mb-2">
                      We do not make design decisions in isolation. Every concept is shaped by the business goal, the audience, the offer, and the platform the design will live on.
                    </p>
                    <p className="heading_description mb-0">
                      That gives you work that looks strong and supports the actual business model behind it — whether that means more enquiries, stronger brand recognition, or more social engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">01. Brief</h3>
                        <p className="mb-0">We learn who the brand is, who it is trying to reach, and what needs to feel clearer or stronger.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Concepts</h3>
                        <p className="mb-0">We explore visual directions, layouts, and creative themes before refining the strongest option.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Feedback</h3>
                        <p className="mb-0">We work through revisions with a practical eye so the final direction aligns with your goals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Delivery</h3>
                        <p className="mb-0">We prepare the final files in usable formats and make sure they integrate cleanly with your digital channels.</p>
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
                  <mark>Why good design matters</mark>
                </h2>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "28px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">It builds trust quickly</h3>
                    <p className="mb-0">People judge professionalism before they read a word. Design helps your business feel established and reliable.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "28px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">It improves clarity</h3>
                    <p className="mb-0">A stronger visual hierarchy helps people understand what you do, why it matters, and what action to take next.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "28px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">It supports growth</h3>
                    <p className="mb-0">From social ads to pitch decks, consistent design helps your marketing and sales efforts feel more cohesive.</p>
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
            <div className="accordion" id="graphicDesignFaq">
              <div className="accordion-item">
                <h3 className="accordion-header" id="designHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#designCollapseOne" aria-expanded="true" aria-controls="designCollapseOne">
                    Do you work on logo design and full brand identity packages?
                  </button>
                </h3>
                <div id="designCollapseOne" className="accordion-collapse collapse show" aria-labelledby="designHeadingOne" data-bs-parent="#graphicDesignFaq">
                  <div className="accordion-body">
                    Yes. We create logo systems, visual directions, and supporting assets that help new and established businesses present themselves with more confidence.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="designHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#designCollapseTwo" aria-expanded="false" aria-controls="designCollapseTwo">
                    Can you create content specifically for social media and marketing campaigns?
                  </button>
                </h3>
                <div id="designCollapseTwo" className="accordion-collapse collapse" aria-labelledby="designHeadingTwo" data-bs-parent="#graphicDesignFaq">
                  <div className="accordion-body">
                    Absolutely. We create scroll-stopping social posts, campaign creatives, and branded content built for visibility, clarity, and conversion.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space text-center">
          <div className="container">
            <h2 className="heading_text mb-3">Looking for visuals that make your business feel more credible?</h2>
            <p className="mb-4">We can help shape a design direction that fits your brand and your goals.</p>
            <Link to="/contact" className="btn btn-primary">
              <span className="btn_label" data-text="Talk to our design team">Talk to our design team</span>
            </Link>
          </div>
        </section>

        <Footer2 />
        <WhatsAppButton />
      </main>
    </div>
  );
}
