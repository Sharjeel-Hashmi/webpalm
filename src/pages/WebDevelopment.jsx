import React from "react";
import Header from "../Components/Header";
import "./Home.css";
import Footer2 from "../Components/Footer2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhatsAppButton from "../Components/WhatsAppButton";

export default function WebDevelopment() {
  return (
    <div>
      <Helmet>
        <title>Custom Website & Web App Development in Dublin | WebPalm</title>
        <meta
          name="description"
          content="WebPalm builds custom websites, business web apps, and conversion-focused digital products for growing businesses in Dublin and beyond."
        />
        <meta
          name="keywords"
          content="web development Dublin, custom websites Ireland, business web apps, React development, Laravel development, Node.js development, WordPress websites, website design and development, WebPalm web development"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/web-development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/web-development" />
        <meta
          property="og:title"
          content="Custom Website & Web App Development in Dublin | WebPalm"
        />
        <meta
          property="og:description"
          content="WebPalm designs and develops fast, accessible, and business-ready websites and web applications for companies that want a better digital presence."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta
          property="og:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Website & Web App Development in Dublin | WebPalm"
        />
        <meta
          name="twitter:description"
          content="WebPalm builds websites and apps that are responsive, easy to manage, and made to convert visitors into customers."
        />
        <meta
          name="twitter:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://webpalm.ie/web-development#service",
                "name": "Custom Web Development Services",
                "serviceType": "Web Development",
                "provider": { "@id": "https://webpalm.ie/#organization" },
                "areaServed": [
                  { "@type": "Country", "name": "Ireland" },
                  { "@type": "City", "name": "Dublin" }
                ],
                "description": "Custom websites, business applications, e-commerce builds, API integrations, and support for Ireland-based and international businesses.",
                "url": "https://webpalm.ie/web-development"
              },
              {
                "@type": "FAQPage",
                "@id": "https://webpalm.ie/web-development#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What kind of projects does WebPalm build?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We build business websites, custom web apps, e-commerce stores, membership platforms, booking systems, landing pages, and front-end and back-end integrations for companies that need a digital tool that works for real operations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does a web development project usually take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A straightforward business website can often launch within a few weeks. More complex custom apps or systems with integrations usually take longer depending on planning, content, approvals, and testing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you build sites that are mobile-friendly and SEO-ready?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We build with responsive layouts, clean page structure, fast load times, and SEO-friendly markup so the site performs well for search and for people using phones, tablets, and desktops."
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
            backgroundImage: `url(${"assets/images/site_logo/site_logo_02.jpg"})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Custom Website & Web App Development</h1>
            <p className="text-white mt-2 myPara">
              We build digital platforms that look sharp, work smoothly, and help businesses turn interest into action.
            </p>
          </div>
        </section>

        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <h2 className="details_item_title">Web development that fits how your business actually operates</h2>
                <p>
                  A website is more than a digital brochure. It should help people understand your offering, trust your business, and take the next step. We design and build websites and web apps that are practical, clear, and built around outcomes.
                </p>
                <p>
                  Whether you need a clean business website, a more efficient internal tool, an online store, or a custom platform with unique workflows, we help shape the brief, choose the right stack, and deliver something your team can actually use.
                </p>
                <p>
                  We work with modern technologies and a straightforward process: understand the business problem, design the right experience, build the product, test thoroughly, and make sure it is ready to go live without surprises.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="image_wrap">
                  <img
                    className="rounded"
                    src="assets/images/backgrounds/web.jpg"
                    alt="Web application development project planning and implementation by WebPalm"
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
                  <mark>What we build</mark>
                </h2>
                <p className="heading_description mb-0 text-dark">
                  We create digital products that solve real business challenges and support day-to-day operations.
                </p>
              </div>
            </div>

            <div className="row mt-5 g-4">
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Business websites</h3>
                    <p className="mb-0">
                      Clean, conversion-focused sites for service businesses, agencies, consultants, and growing companies that need a stronger online presence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Custom web applications</h3>
                    <p className="mb-0">
                      Tools, dashboards, client portals, booking systems, and operational platforms tailored to your workflow and data requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">E-commerce builds</h3>
                    <p className="mb-0">
                      Storefronts designed for trust, easy navigation, and smoother customer journeys from discovery to purchase.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Landing pages</h3>
                    <p className="mb-0">
                      Campaign pages built to explain a message clearly, support paid traffic, and convert interest into enquiries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">API and system integrations</h3>
                    <p className="mb-0">
                      We connect the tools you already use so your website or app fits the way your team works and your customers expect to be served.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="iconbox_block h-100" style={{ padding: "32px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Maintenance and support</h3>
                    <p className="mb-0">
                      Ongoing updates, performance checks, security monitoring, and improvements after launch to keep things stable and current.
                    </p>
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
                    <h2 className="heading_text">
                      A clear process from idea to launch
                    </h2>
                    <p className="heading_description mb-2">
                      We do not start with flashy mockups alone. We begin by understanding the business goal, audience, content, and constraints, then build from there.
                    </p>
                    <p className="heading_description mb-0">
                      This keeps the project realistic, avoids unnecessary features, and gives you a product that is easier to maintain long after launch.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">01. Discovery</h3>
                        <p className="mb-0">We define the project goals, audience, scope, and the actual problems the site or app needs to solve.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">02. Design</h3>
                        <p className="mb-0">We map the user journey and produce a design that feels intentional, easy to navigate, and aligned to your brand.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">03. Build</h3>
                        <p className="mb-0">We turn the approved design into a responsive, high-performing product using the right framework and structure.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconbox_block h-100" style={{ padding: "24px 20px" }}>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">04. Launch</h3>
                        <p className="mb-0">We test across devices, fix the weak points, and deploy the site or app with a smooth handoff and support plan.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="business_consulting_service_section section_space" style={{ backgroundImage: `url('assets/images/backgrounds/bg_image_3.webp')` }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="heading_text">
                  <mark>Technology we use</mark>
                </h2>
                <p className="heading_description mb-0 text-dark">
                  We select tools based on the project, not trends. That means better performance, clearer maintenance, and fewer compromises later.
                </p>
              </div>
            </div>

            <div className="row mt-5 g-4">
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "30px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Frontend</h3>
                    <p className="mb-0">React, Next.js, JavaScript, TypeScript, and responsive design systems for engaging interfaces.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "30px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Backend</h3>
                    <p className="mb-0">Node.js, PHP, Laravel, Python, and API-driven architecture for scalable functionality and data handling.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block h-100" style={{ padding: "30px 24px" }}>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Performance & security</h3>
                    <p className="mb-0">Fast-loading builds, clean deployment setups, secure hosting practices, and testing to catch issues before launch.</p>
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
            <div className="accordion" id="webDevelopmentFaq">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Do you work on small business websites as well as larger builds?
                  </button>
                </h3>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#webDevelopmentFaq">
                  <div className="accordion-body">
                    Yes. We help businesses of different sizes, from clear, efficient service websites to more advanced platforms with custom user journeys and integrations.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can you redesign an existing website instead of building one from scratch?
                  </button>
                </h3>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#webDevelopmentFaq">
                  <div className="accordion-body">
                    Absolutely. We often improve older sites by simplifying navigation, strengthening brand presentation, improving load times, and updating structure so the website performs better for users and search engines.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What happens after launch?
                  </button>
                </h3>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#webDevelopmentFaq">
                  <div className="accordion-body">
                    We offer support options for updates, technical fixes, performance monitoring, and future improvements so your site continues to serve your business well.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space text-center">
          <div className="container">
            <h2 className="heading_text mb-3">Need a website that works harder for your business?</h2>
            <p className="mb-4">Tell us what you need, and we will advise on the right build, structure, and next steps.</p>
            <Link to="/contact" className="btn btn-primary">
              <span className="btn_label" data-text="Book a consultation">Book a consultation</span>
            </Link>
          </div>
        </section>

        <Footer2 />
        <WhatsAppButton />
      </main>
    </div>
  );
}
