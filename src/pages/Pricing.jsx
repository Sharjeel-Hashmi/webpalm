import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import ParallaxSection from "./ParallaxSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Pricing() {
  return (
    <>
      <Helmet>
        {/* <!-- Title --> */}
        <title>
          Pricing Plans | WebPalm - Affordable Web Development in Dublin
        </title>

        {/*  Meta Tags  */}
        <meta
          name="description"
          content="Discover WebPalm’s flexible pricing plans for startups, small businesses, and enterprises. From static websites to full-scale custom web apps, we deliver quality at competitive rates."
        />
        <meta
          name="keywords"
          content="web development pricing Dublin, affordable website design, custom web app cost, WebPalm packages, static website price, dynamic website cost Ireland, web design plans, professional website pricing"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="telephone=+353894205316" />
        <meta
          name="google-site-verification"
          content="BuCuVdE1zHdoW0k5Ir0R2r4-SBqauodqFgDWxgma758"
        />
        <meta
          name="thumbnail"
          content="assets/images/Techco_page_thumbnail.webp"
        />

        {/* <!-- Open Graph Tags --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/pricing" />
        <meta
          property="og:title"
          content="Pricing Plans | WebPalm - Affordable Web Development in Dublin"
        />
        <meta
          property="og:description"
          content="Choose from WebPalm’s Starter, Professional, Premium, or Elite plans — all designed to deliver high-quality, scalable, and SEO-ready websites and applications."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta
          property="og:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="WebPalm affordable pricing plans for websites and web apps"
        />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pricing Plans | WebPalm - Affordable Web Development in Dublin"
        />
        <meta
          name="twitter:description"
          content="Choose from WebPalm’s Starter, Professional, Premium, or Elite plans — all designed to deliver high-quality, scalable, and SEO-ready websites and applications."
        />
        <meta
          name="twitter:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
      </Helmet>
      <Header />
      <main class="page_content">
        {/* <!-- Page Banner Section - Start
        ================================================== --> */}
        <section
          class="page_banner_section text-center"
          style={{
            backgroundImage: `url(${"assets/images/shapes/bg_pattern_4.svg"})`,
          }}
        >
          <div class="container">
            <h1 class="page_title mb-0 text-white">Pricing Plan</h1>
            <p className="text-white mt-2 myPara">
              WebPalm offers flexible pricing plans tailored to suit businesses
              of all sizes, from startups to enterprises. Each plan includes
              priority support, and scalable options to match your growth.
            </p>
          </div>
        </section>
        {/* <!-- Page Banner Section - End
        ================================================== --> */}

        {/* <!-- Pricing Section - Start
        ================================================== --> */}
        <section class="pricing_section section_space  bg-light">
          <div className="container margincontainer">
            <h1 class="heading_text text-center mb-5"> Our Pricing Packages</h1>
            <div class="row justify-content-center">
              <div class="col-lg-4">
                <div class="pricing_block text-center">
                  <div class="table_head flex-column">
                    <div class="pricing_block_title">
                      <h3 class="pricing_package_title">Starter Plan</h3>
                      <p class="pricing_package_description mb-0">
                        Perfect for individuals and startups looking to
                        establish a strong online presence.
                      </p>
                    </div>
                    <Link to={"/contact"}>
                      <a class="btn btn-primary">
                        <span class="btn_label" data-text="GET NOW">
                           GET A FREE QUOTE
                             </span>
                            <span class="btn_icon">
                             <i class="fa-solid fa-arrow-up-right"></i>
                           </span>
                        </a>
                     </Link>
                  </div>
                  <ul class="icon_list unordered_list_block d-inline-flex">
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Beautifully designed static website (up to 4 pages)
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Fully mobile-responsive and optimized for speed
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Clean, modern layout tailored to your brand
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        SEO-ready structure for better Google visibility
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Contact form setup included
                      </span>
                    </li>
                    <li class="delete">
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Delivered within 3 days
                      </span>
                    </li>
                    {/* <li class="delete">
                                    <span class="icon_list_icon">
                                      <i class="fa-regular fa-circle-check"></i>
                                    </span>
                                    <span class="icon_list_text"> Cloud Services. </span>
                                  </li> */}
                  </ul>
                  <p
                    class="pricing_package_description mb-5"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    Great For: Personal websites, resumes, or landing pages
                  </p>
                 
                </div>
              </div>
              <div class="col-lg-4">
                <div class="pricing_block text-center">
                  <div class="table_head flex-column">
                    <div class="pricing_block_title">
                      <h3 class="pricing_package_title">Professional Plan</h3>
                      <p class="pricing_package_description mb-0">
                        Step up your game with a dynamic, easy-to-manage
                        website.
                      </p>
                    </div>
                    <Link to={"/contact"}>
                      <a class="btn btn-primary">
                        <span class="btn_label" data-text="GET NOW">
                           GET A FREE QUOTE
                             </span>
                            <span class="btn_icon">
                             <i class="fa-solid fa-arrow-up-right"></i>
                           </span>
                        </a>
                     </Link>
                  </div>
                  <ul class="icon_list unordered_list_block d-inline-flex">
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Beautiful Mobile-Responsive website (up to 7 pages)
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Custom design with tailored branding
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        SEO-ready structure for better Google visibility
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Blog or portfolio feature included
                      </span>
                    </li>

                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Clean, modern layout tailored to your brand
                      </span>
                    </li>

                    <li class="delete">
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Social media integration
                      </span>
                    </li>
                    <li class="delete">
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Delivered within 5 days
                      </span>
                    </li>
                  </ul>
                  <p
                    class="pricing_package_description mb-4"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    Great For: Small businesses, bloggers, creatives, service
                    providers
                  </p>
                 
                </div>
              </div>
              <div class="col-lg-4">
                <div class="pricing_block text-center">
                  <div class="table_head flex-column">
                    <div class="pricing_block_title">
                      <h3 class="pricing_package_title">Premium Plan</h3>
                      <p class="pricing_package_description mb-0">
                        For those who need advanced functionality and full
                        control.
                      </p>
                    </div>
                   <Link to={"/contact"}>
                      <a class="btn btn-primary">
                        <span class="btn_label" data-text="GET NOW">
                           GET A FREE QUOTE
                             </span>
                            <span class="btn_icon">
                             <i class="fa-solid fa-arrow-up-right"></i>
                           </span>
                        </a>
                     </Link>
                  </div>
                  <ul class="icon_list unordered_list_block d-inline-flex">
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        {" "}
                        Fully-Custom Dynamic website Development
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Custom frontend + backend development
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        User login systems, role-based access, and admin panels
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        API integrations and dynamic data handling
                      </span>
                    </li>
                    <li class="delete">
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Performance-optimized and scalable architecture
                      </span>
                    </li>
                    <li class="delete">
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Delivered within 7–10 days
                      </span>
                    </li>
                  </ul>
                  <p
                    class="pricing_package_description mb-4"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    Great for: Internal tools, dashboards, simple portals (not
                    full SaaS)
                  </p>
                  
                </div>
              </div>
            </div>
            <div class="row justify-content-between">
              <div class="col-lg-4">
                <div class="pricing_block text-center">
                  <div class="table_head flex-column">
                    <div class="pricing_block_title">
                      <h3 class="pricing_package_title">
                        Elite Plan
                      </h3>
                      <p class="pricing_package_description mb-0">
                        Full-scale, custom web apps built for performance,
                        scalability, and growth.
                      </p>
                    </div>
                     <Link to={"/contact"}>
                      <a class="btn btn-primary">
                        <span class="btn_label" data-text="GET NOW">
                           GET A FREE QUOTE
                             </span>
                            <span class="btn_icon">
                             <i class="fa-solid fa-arrow-up-right"></i>
                           </span>
                        </a>
                     </Link>
                  </div>
                  <ul class="icon_list unordered_list_block d-inline-flex">
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        {" "}
                        Full-featured Web application advanced frameworks
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Complex dashboards, analytics, or custom features
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Secure authentication, role management, and APIs
                      </span>
                    </li>
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Real-time features (chat, notifications, etc.)
                      </span>
                    </li>
                    <li class="delete">
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Built for scalability and long-term growth
                      </span>
                    </li>
                    <li class="delete">
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Timeline & pricing based on project scope
                      </span>
                    </li>
                  </ul>
                  <p
                    class="pricing_package_description mb-3"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    Great for: SaaS applications, enterprise tools, large-scale platforms
                  </p>
                 
                </div>
              </div>
              {/* <div class="col-lg-6">
                <div class="business_consulting_hero_image">
                  <img
                    class="hero_image"
                    src="assets/images/hero/business_consulting_hero_image_1.webp"
                    alt="Business Consulting"
                  />

                  <div
                    class="funfact_block capsule_layout wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div class="funfact_content">
                      <div class="counter_value">
                        <span class="odometer" data-count="22">0</span>
                        <span>M+</span>
                      </div>
                      <h3 class="funfact_title mb-0">Happy Customer</h3>
                    </div>
                    <div class="funfact_icon">
                      <img
                        src="assets/images/icons/icon_user_3.svg"
                        alt="Techco - SVG Icon User"
                      />
                    </div>
                  </div>
                  <div
                    class="funfact_block capsule_layout wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="funfact_icon">
                      <img
                        src="assets/images/icons/icon_wallet.svg"
                        alt="Techco - SVG Icon Wallet"
                      />
                    </div>
                    <div class="funfact_content">
                      <h3 class="funfact_title mb-0">Company Value</h3>
                      <div class="counter_value">
                        <span>$</span>
                        <span class="odometer" data-count="500000">0</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="funfact_block capsule_layout wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div class="funfact_content pt-2 pb-1">
                      <h3 class="funfact_title mb-0 text-center">
                        Success Rate
                      </h3>
                      <div class="counter_value justify-content-center">
                        <span class="odometer" data-count="98">0</span>
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* <!-- Pricing Section - End
        ================================================== --> */}

        {/* <!-- Policy Section - Start
        ================================================== --> */}
        <section class="policy_section section_space">
          <div class="container">
            <div class="heading_block">
              <div class="row justify-content-lg-between">
                <div class="col-lg-6">
                  <h2 class="heading_text mb-0">
                    Celebrating Features Discover What Sets Us
                  </h2>
                </div>
                <div class="col-lg-5">
                  <p class="heading_description mb-0">
                    We take pride in celebrating the features that set us apart
                    and make us a leader in the IT solutions. What truly
                    distinguishes us is our unwavering commitment to innovation,
                    excellence, and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div class="row pricing_policy_wrap">
              <div class="col-lg-4">
                <div class="iconbox_block">
                  <div class="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_doc.svg"
                      alt="Doc SVG Icon"
                    />
                  </div>
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">Rich Documentation</h3>
                    <p class="mb-0">
                      Rich Documentation" refers to comprehensive and detailed
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="iconbox_block">
                  <div class="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_analysis.svg"
                      alt="Analysis SVG Icon"
                    />
                  </div>
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">Fastest Delivery</h3>
                    <p class="mb-0">
                      We deliver your project quickly and efficiently — always
                      within the committed timeline.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="iconbox_block">
                  <div class="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_headphone_2.svg"
                      alt="Headphone SVG Icon"
                    />
                  </div>
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">Free 1 Month Support</h3>
                    <p class="mb-0">
                      We Provide 1 Month Free Support for Our Clients on Every
                      Project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Policy Section - End
        ================================================== --> */}

        {/* <!-- Client Logo Section - Start
        ================================================== --> */}

        {/* <!-- Client Logo Section - End
        ================================================== --> */}

        <ParallaxSection />
        {/* <!-- Call To Action Section - End
        ================================================== --> */}
        <a
          className="hotline_block"
          href="https://wa.me/353899520026"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "50px",
            right: "20px",
            zIndex: "1000",
          }}
        >
          <span className="hotline_icon">
            <i class="fa-brands fa-whatsapp fa-beat fa-lg" style={{color: "rgb(235, 238, 244)" , }}></i>
          </span>
        </a>
      </main>
      <Footer2 />
    </>
  );
}
