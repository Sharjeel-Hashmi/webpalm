import React from "react";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import ParallaxSection2 from "./ParallaxSection2";
import { Helmet } from "react-helmet-async";
import WhatsAppButton from "../Components/WhatsAppButton";

export default function GraphicDesign() {
  return (
    <div>
      <Helmet>
        {/* <!-- Title --> */}
        <title>Graphic Design Services in Dublin | WebPalm</title>

        {/* <!-- Meta Tags --> */}
        <meta
          name="description"
          content="WebPalm offers professional graphic design services in Dublin, from logos and branding to social media creatives and website visuals. We create designs that captivate, inspire, and define your brand identity."
        />
        <meta
          name="keywords"
          content="graphic design Dublin, branding design Ireland, logo design Dublin, creative design services, social media graphics, website design visuals, brand identity design, professional graphic designing Dublin, visual storytelling, WebPalm graphic design"
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
        <meta
          property="og:url"
          content="https://webpalm.ie/graphic-designing"
        />
        <meta
          property="og:title"
          content="Graphic Design Services in Dublin | WebPalm"
        />
        <meta
          property="og:description"
          content="Stand out with WebPalm's professional graphic design services — from logos and branding to social media creatives and website visuals. Designed with innovation and precision to leave a lasting impact."
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
          content="Graphic design services by WebPalm"
        />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Graphic Design Services in Dublin | WebPalm"
        />
        <meta
          name="twitter:description"
          content="Stand out with WebPalm's professional graphic design services — from logos and branding to social media creatives and website visuals. Designed with innovation and precision to leave a lasting impact."
        />
        <meta
          name="twitter:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
      </Helmet>
      <Header />
      <main className="page_content">
        {/* <!-- Page Banner Section - Start
        ==================================================  --> */}

        {/* <!-- ======= ABOUT US CONTENT ======= --> */}
        <section
          className="page_banner_section text-center"
          style={{
            backgroundImage: `url(${"assets/images/graphicDesigning/graphic_img_9.jpg"})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Graphic Design & Video Editing</h1>
            <p className="text-white mt-2 myPara">
              At WebPalm, our creative team fuses artistic vision with strategic
              insights to craft visually stunning graphics that define your
              brand's identity. We design with innovation and precision,
              ensuring every visual element captivates and engages your
              audience.
            </p>
          </div>
        </section>

        <section className="process_technology_review_section1 bg-light section_decoration">
        <div className="container">
           
           <div className="section_space1">
              <div className="heading_block text-center">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  <span>Our Tools</span>
                </div>
                <h2 className="heading_text mb-0">
                  <mark>Software</mark> That We Use
                </h2>
              </div>

              <div className="tab_block_wrapper">
                <ul className="nav justify-content-center" role="tablist">
                 
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_graphic_design"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Graphic Design & Video Editing
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  
                  {/* ===============Graphic Design ======== */}
                  <div
                    className="tab-pane fade show active"
                    id="tab_graphic_design"
                    role="tabpanel">
                    <div className="web_development_technologies row justify-content-center">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "75px" }}
                              src="assets/images/icons/premiere-pro.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Premiere Pro</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "75px" }}
                              src="assets/images/icons/after-effects.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">After Effect</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "45px" }}
                              src="assets/images/icons/photoshop.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Adobe Photoshop</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "45px" }}
                              src="assets/images/icons/illustration.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Adobe Illustrator</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
        
        </div>
      </section>

        <section className="about_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 order-lg-last">
                <div className="image_wrap">
                  <img
                    style={{ borderRadius: "25px" }}
                    src="assets/images/graphicDesigning/graphic_img_1.jpg"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <h2 className="heading_text">
                      Elevate Your Brand with <mark> Innovative Graphic Design of
                      WebPalm</mark>
                    </h2>
                    <p className="heading_description mb-2">
                      At WebPalm, we think that the core of your brand's
                      identity is outstanding graphic design. From creative
                      logos and branding materials to captivating social media
                      images and dynamic website layouts, our team of talented
                      designers turns your idea into visually arresting
                      components. We create designs that captivate your target
                      audience by utilizing a complex fusion of layout, font,
                      and color theory. This guarantees that your message is not
                      only noticeable but also makes an impact.
                    </p>
                    <p className="heading_description mb-0">
                      {" "}
                      WebPalm's creativity can help improve brand recognition,
                      effectively convey your main points, and draw in customers
                      in an increasingly visual digital environment. Embrace the
                      power of design to bring your brand to life with
                      authenticity and flair.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="about_section section_space bg-light"
          style={{ paddingTop: "60px" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 order-lg-first">
                <div className="image_wrap">
                  <img
                    style={{ borderRadius: "25px" }}
                    src="assets/images/graphicDesigning/graphic_img_10.webp"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <h2 className="heading_text">
                      Where Vision Meets Impact{" "}
                      <mark>The Art of Graphic Design</mark>
                    </h2>
                    <p className="heading_description mb-2">
                      A dynamic combination of purposeful communication and
                      artistic expression is graphic design. Every design, in
                      our opinion at WebPalm, is an essential component of the
                      narrative surrounding your brand. Our gifted designers
                      skillfully combine layout, typography, color theory, and
                      images to turn your concepts into eye-catching works of
                      art that enthrall and motivate. Our work is intended to
                      make a lasting impression on your audience, whether it is
                      through an unforgettable logo, powerful branding
                      collateral, or captivating digital content.
                    </p>
                    <p className="heading_description mb-0">
                      {" "}
                      Accept the potential of design to convey your own story
                      and enhance your brand identification. Every visual
                      component of WebPalm is carefully designed to engage your
                      audience more deeply and make your business stand out in
                      the crowded market of today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="about_section section_space bg-light"
          style={{ paddingTop: "60px" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 order-lg-last">
                <div className="image_wrap">
                  <img
                    style={{ borderRadius: "25px" }}
                    src="assets/images/graphicDesigning/graphic_img_12.webp"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <h2 className="heading_text">
                     Video Editing and Optimization
                      <mark> Creative Editing and Motion Graphics</mark>
                    </h2>
                    <meta itemprop="description"   />
                    <p className="heading_description mb-2">
                      Webpalm delivers professional video editing that turns raw footage 
                      into high-impact content designed to grow your audience and boost conversions. 
                      We edit for YouTube, Instagram, TikTok and corporate channels with clean cuts, 
                      smart pacing, and attention-grabbing motion graphics that improve watch time.
                    </p>
                    <p className="heading_description mb-0">
                      {" "}
                      Every video is optimized for discoverability with SEO-friendly titles, descriptions, 
                      keywords, captions, and thumbnails so your content ranks and gets seen. Fast delivery, 
                      flexible revisions, and output in HD/4K make it easy to publish across platforms and 
                      drive measurable results.
                    </p>
                  </div>
                  <ul className="service_facilities_group unordered_list">
                    <li>
                      <a
                        className="iconbox_block layout_icon_left"
                        href="service_details.html"
                      >
                        <span className="iconbox_icon">
                          <img
                            src="assets/images/icons/icon_check_2.svg"
                            alt="Check SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Logo, Intro & CTAs Animations
                          </strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="iconbox_block layout_icon_left"
                        href="service_details.html"
                      >
                        <span className="iconbox_icon">
                          <img
                            src="assets/images/icons/icon_check_2.svg"
                            alt="Leaf SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            YouTube Editing & Optimization
                          </strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="iconbox_block layout_icon_left"
                        href="service_details.html"
                      >
                        <span className="iconbox_icon">
                          <img
                            src="assets/images/icons/icon_check_2.svg"
                            alt="Box SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Social Shorts & Reels Editng 
                          </strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="iconbox_block layout_icon_left"
                        href="service_details.html"
                      >
                        <span className="iconbox_icon">
                          <img
                            src="assets/images/icons/icon_check_2.svg"
                            alt="Receipt Add SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Promo & Product Videos Editing
                          </strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="iconbox_block layout_icon_left"
                        href="service_details.html"
                      >
                        <span className="iconbox_icon">
                          <img
                            src="assets/images/icons/icon_check_2.svg"
                            alt="Monitor SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Scene Transitions & Cut Polishing
                          </strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="iconbox_block layout_icon_left"
                        href="service_details.html">
                        <span className="iconbox_icon">
                          <img
                            src="assets/images/icons/icon_check_2.svg"
                            alt="Microscope SVG Icon"/>
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Color Grading & Sound Design
                          </strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="iconbox_block layout_icon_left"
                        href="service_details.html">
                        <span className="iconbox_icon">
                          <img
                            src="assets/images/icons/icon_check_2.svg"
                            alt="Microscope SVG Icon"/>
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Motion Graphics Visuals & Titles
                          </strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="iconbox_block layout_icon_left"
                        href="service_details.html">
                        <span className="iconbox_icon">
                          <img
                            src="assets/images/icons/icon_check_2.svg"
                            alt="Microscope SVG Icon"/>
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Educational & Training Sessions
                          </strong>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WhatsAppButton />
      </main>
      <ParallaxSection2 />
      <Footer2 />
    </div>
  );
}
