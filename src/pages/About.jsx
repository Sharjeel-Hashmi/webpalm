import React from "react";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import FunfactSection from "./FunfactSection";
import ParallaxSection from "./ParallaxSection";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | WebPalm - Innovative Web Development in Dublin</title>

        {/* Meta Tags  */}
        <meta
          name="description"
          content="Learn about WebPalm, a trusted Dublin-based web development company delivering innovative, scalable, and cost-effective digital solutions since 2005."
        />
        <meta
          name="keywords"
          content="About WebPalm, web development company Dublin, innovative web solutions, scalable websites, custom web development Ireland, website design Dublin, business digital transformation, software development Ireland"
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

        {/* Open Graph Tags   */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/about" />
        <meta
          property="og:title"
          content="About Us | WebPalm - Innovative Web Development in Dublin"
        />
        <meta
          property="og:description"
          content="WebPalm has been delivering world-class web development services since 2005. Discover our mission, vision, and commitment to quality, scalability, and innovation."
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
          content="WebPalm team providing innovative web development solutions"
        />

        {/* Twitter Card  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | WebPalm - Innovative Web Development in Dublin"
        />
        <meta
          name="twitter:description"
          content="WebPalm has been delivering world-class web development services since 2005. Discover our mission, vision, and commitment to quality, scalability, and innovation."
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
            backgroundImage: `url(${"assets/images/shapes/bg_pattern_4.svg"})`,
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">About Us</h1>
            <p className="text-white mt-2 myPara">
              We believe staying ahead in today’s fast-paced digital world is
              key to success. That’s why we're always exploring fresh ideas and
              new approaches to deliver top-notch website development services.
              Our commitment is to provide creative, cutting-edge solutions that
              not only look great but are also cost-effective for our clients.
            </p>
          </div>
        </section>
        {/* <!-- Page Banner Section - End
        ================================================== --> */}

        {/* <!-- Intro About Section - Start
        ================================================== --> */}
        <section className="intro_about_section section_space bg-light">
          <div className="intro_about_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="image_wrap">
                    <img
                      src="assets/images/about/about_img_1.jpg"
                      alt="Techco - About Image"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="image_wrap position-relative">
                    <img
                      src="assets/images/about/about_img_2.jpg"
                      alt="Techco - About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="heading_block mb-0">
              <div className="row justify-content-lg-between">
                <div className="col-lg-4">
                  <div className="heading_focus_text">
                    About Our
                    <span className="badge bg-secondary text-white">
                      Compatible Service
                    </span>
                  </div>
                  <h2 className="heading_text mb-0">
                    We Offer You Compatible Services
                  </h2>
                </div>
                <div className="col-lg-6">
                  {/* <p className="heading_description mb-0">
                  At Techco, we take great satisfaction in providing dynamic and IT services that meet your unique needs. Because of our adaptable approach, we can modify our services to meet your changing demands, whether you need software development, strategic consulting, or full IT infrastructure support.
                  </p> */}
                  <p className="heading_description mb-0">
                    At webpalm, we are passionate about transforming ideas into
                    powerful digital experiences. Our mission is to empower
                    businesses with innovative, scalable, and efficient web
                    solutions that drive real results. With a team of dedicated
                    developers and creative thinkers, we specialize in
                    delivering compatible web development services tailored to
                    meet the unique needs of each client. Whether you're a
                    startup looking to establish your online presence or an
                    enterprise in need of a custom solution, webpalm is here to
                    bring your vision to life with cutting-edge technology and a
                    commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Intro About Section - End
        ================================================== --> */}

        {/* <!-- Policy Section - Start
        ================================================== --> */}
        <section className="policy_section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="iconbox_block">
                  <div className="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_clock.svg"
                      alt="Clock SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Our History</h3>
                    <p className="mb-0">
                      Since 2005 we have been a visionary and a reliable Web
                      Development partner for world-className brands.
                      abbreviated as co.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block">
                  <div className="iconbox_icon bg-warning-subtle">
                    <img
                      src="assets/images/icons/icon_dart_board_2.svg"
                      alt="Dart Board SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Our Mission</h3>
                    <p className="mb-0">
                      A mission statement defines what a company aims to
                      accomplish, who it serves, and the purpose behind its
                      efforts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block">
                  <div className="iconbox_icon bg-secondary-subtle">
                    <img
                      src="assets/images/icons/icon_target.svg"
                      alt="Target SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Our Vision</h3>
                    <p className="mb-0">
                      A vision statement highlights a company’s future goals and
                      aspirations, it’s about what they strive to become and
                      moving forward.
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
        <section className="client_logo_section section_space">
          <div className="container">
            <div className="section_space pt-0">
              <div className="heading_block text-center">
                <div className="heading_focus_text mb-0">
                  <span className="badge bg-secondary text-white">
                    Brand We
                  </span>
                  Work With
                </div>
              </div>
              <div className="client_logo_carousel swiper swiper-initialized swiper-horizontal swiper-free-mode">
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-57b3e29542db8daa"
                  aria-live="off"
                  style={{
                    transitionDuration: "2000ms",
                    transform: `translate3d(${-2211.43}px, ${0}px, ${0}px)`,
                  }}
                >
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="1/28"
                    data-swiper-slide-index="0"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_1.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="1/28"
                    data-swiper-slide-index="0"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_2.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="2/28"
                    data-swiper-slide-index="1"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_3.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="3/28"
                    data-swiper-slide-index="2"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_4.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="4/28"
                    data-swiper-slide-index="3"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_5.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="5/28"
                    data-swiper-slide-index="4"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_6.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="6/28"
                    data-swiper-slide-index="5"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_7.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="7/28"
                    data-swiper-slide-index="6"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_1.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="8/28"
                    data-swiper-slide-index="7"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_2.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="9/28"
                    data-swiper-slide-index="8"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_3.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="10/28"
                    data-swiper-slide-index="9"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_4.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="11/28"
                    data-swiper-slide-index="10"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_5.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="12/28"
                    data-swiper-slide-index="11"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_6.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="13/28"
                    data-swiper-slide-index="12"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_7.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="14/28"
                    data-swiper-slide-index="13"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_1.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="15/28"
                    data-swiper-slide-index="14"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_2.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="16/28"
                    data-swiper-slide-index="15"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_3.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="17/28"
                    data-swiper-slide-index="16"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_4.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="18/28"
                    data-swiper-slide-index="17"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_5.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="19/28"
                    data-swiper-slide-index="18"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_6.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="20/28"
                    data-swiper-slide-index="19"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_7.webp"
                        alt="Techco - Client Logo Image"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="21/28"
                    data-swiper-slide-index="20"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_7.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="22/28"
                    data-swiper-slide-index="21"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_1.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="23/28"
                    data-swiper-slide-index="22"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_2.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="24/28"
                    data-swiper-slide-index="23"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_3.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="25/28"
                    data-swiper-slide-index="24"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_4.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="26/28"
                    data-swiper-slide-index="25"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_5.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="27/28"
                    data-swiper-slide-index="26"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_6.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="28/28"
                    data-swiper-slide-index="27"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_7.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="22/28"
                    data-swiper-slide-index="21"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_1.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="23/28"
                    data-swiper-slide-index="22"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_2.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="24/28"
                    data-swiper-slide-index="23"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_3.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="25/28"
                    data-swiper-slide-index="24"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_4.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="26/28"
                    data-swiper-slide-index="25"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_5.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="27/28"
                    data-swiper-slide-index="26"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_6.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="28/28"
                    data-swiper-slide-index="27"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_7.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="22/28"
                    data-swiper-slide-index="21"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_1.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="23/28"
                    data-swiper-slide-index="22"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_2.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="24/28"
                    data-swiper-slide-index="23"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_3.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="25/28"
                    data-swiper-slide-index="24"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_4.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="26/28"
                    data-swiper-slide-index="25"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_5.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="27/28"
                    data-swiper-slide-index="26"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_6.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label="28/28"
                    data-swiper-slide-index="27"
                    style={{ width: "184.286px" }}
                  >
                    <div className="client_logo_item">
                      <img
                        src="assets/images/clients/client_logo_7.webp"
                        alt="Techco - Client Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FunfactSection /> {/*=======FUNFACTSECTION ======    */}
          </div>
        </section>
        {/* <!-- Client Logo Section - End
        ================================================== --> */}

        {/* <!-- Service Section - Start
        ================================================== --> */}
        <section className="service_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="image_wrap">
                  <img
                    src="assets/images/about/about_image_5.webp"
                    alt="Techco - About Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-5">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      <span className="badge bg-secondary text-white">
                        Why Us
                      </span>
                      Better
                    </div>
                    <h2 className="heading_text mb-0">
                      Why Our Services are Better?
                    </h2>
                    <p className="mt-3">
                      At webpalm, quality comes first in everything we do. We
                      offer flexible cooperation models to suit your workflow,
                      backed by a team of qualified developers committed to
                      excellence. With transparent costs, on-time delivery, and
                      the ability to quickly scale up resources as your project
                      grows, we ensure a smooth and reliable development
                      experience from start to finish.
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
                            Quality Comes First
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
                            src="assets/images/icons/icon_leaf.svg"
                            alt="Leaf SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Flexible Cooperation
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
                            src="assets/images/icons/icon_box.svg"
                            alt="Box SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            On-time Delivery
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
                            src="assets/images/icons/icon_receipt_add.svg"
                            alt="Receipt Add SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Transparent Costs
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
                            src="assets/images/icons/icon_monitor.svg"
                            alt="Monitor SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Qualified Developers
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
                            src="assets/images/icons/icon_microscope.svg"
                            alt="Microscope SVG Icon"
                          />
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">
                            Quick Scale-up
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
        {/* <!-- Service Section - End
        ================================================== --> */}
        <section className="faq_section section_decoration">
          <div className="container mb-5">
            <div className="heading_block text-center">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{
                  backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                }}
              >
                F.A.Q.
              </div>
              <h2 className="heading_text mb-0">
                Need a <mark>Support?</mark>
              </h2>
            </div>

            <div className="faq_accordion accordion" id="faq_accordion">
              <div className="accordion-item">
                <div
                  className="accordion-button"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_six"
                  aria-expanded="true"
                  aria-controls="collapse_six"
                >
                  Q. How do I pick a software development firm?
                </div>
                <div
                  id="collapse_six"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faq_accordion"
                >
                  <div className="accordion-body">
                    <div className="text_a">A.</div>
                    <p>
                      Choosing the right software development company is
                      critical for your project’s success. Start by evaluating
                      their expertise in your industry, portfolio of past work,
                      and client testimonials. Look for a firm that balances
                      technical skill with clear communication—transparency
                      about timelines, costs, and scalability is key. Ensure
                      they offer post-launch support and prioritize security
                      best practices. A great software development partner will
                      align with your goals, not just deliver code.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_seven"
                  aria-expanded="false"
                  aria-controls="collapse_seven"
                >
                  Q. Why is Website necessary for businesses?
                </div>
                <div
                  id="collapse_seven"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq_accordion"
                >
                  <div className="accordion-body">
                    <div className="text_a">A.</div>
                    <p>
                      A professional website is essential for businesses because
                      it’s your 24/7 digital storefront. Over 70% of customers
                      research a company online before engaging, and a
                      well-designed site builds credibility, generates leads,
                      and expands your reach. For e-commerce, a business website
                      drives direct sales; for service providers, it streamlines
                      bookings or inquiries. Plus, SEO-optimized sites help you
                      rank higher on search engines like Google. In today’s
                      market, not having a website means losing visibility—and
                      revenue—to competitors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_eight"
                  aria-expanded="false"
                  aria-controls="collapse_eight"
                >
                  Q.How long does it take to develop a custom website?
                </div>
                <div
                  id="collapse_eight"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq_accordion"
                >
                  <div className="accordion-body">
                    <div className="text_a">A.</div>
                    <p>
                      The custom website development timeline depends on your
                      project’s complexity, features, and content readiness. A
                      simple brochure site may take 4-6 weeks, while e-commerce
                      platforms or apps with advanced functionality can require
                      3-6 months. A reputable web development company will
                      prioritize quality over speed—transparently outlining
                      milestones and testing phases to ensure your site performs
                      flawlessly. We’ll work with you to meet deadlines without
                      cutting corners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_nine"
                  aria-expanded="false"
                  aria-controls="collapse_nine"
                >
                  Q. What makes your web design services different?
                </div>
                <div
                  id="collapse_nine"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq_accordion"
                >
                  <div className="accordion-body">
                    <div className="text_a">A.</div>
                    <p>
                      Our web design services focus on blending aesthetics with
                      purpose. Unlike generic templates, we craft sites tailored
                      to your brand’s voice, audience, and goals—ensuring
                      seamless UX, mobile responsiveness, and SEO readiness.
                      From intuitive navigation to fast load times, every detail
                      is optimized to convert visitors into customers. Plus, we
                      stick around post-launch for updates and analytics
                      reviews. Think of us as your long-term digital partner,
                      not just a vendor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div
                  className="accordion-button collapsed"
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_ten"
                  aria-expanded="false"
                  aria-controls="collapse_ten"
                >
                  Q. Do you offer website maintenance after launch?
                </div>
                <div
                  id="collapse_ten"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq_accordion"
                >
                  <div className="accordion-body">
                    <div className="text_a">A.</div>
                    <p>
                      Absolutely! Website maintenance services are crucial to
                      keep your site secure, updated, and aligned with evolving
                      trends. Our post-launch support includes regular backups,
                      security patches, plugin updates, and performance checks.
                      Whether you need minor tweaks or new features added, we
                      offer flexible plans to suit your needs. A well-maintained
                      site isn’t just functional—it’s a growing asset for your
                      business.
                    </p>

                    {/* <div className="row">
                      <div className="col-md-6">
                        <ul className="icon_list unordered_list_block">
                          <li>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"></i>
                            </span>
                            <span className="icon_list_text">
                              Web and mobile app development
                            </span>
                          </li>
                          <li>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"></i>
                            </span>
                            <span className="icon_list_text">
                              Software architecture
                            </span>
                          </li>
                          <li>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"></i>
                            </span>
                            <span className="icon_list_text">
                              IT consulting and audit
                            </span>
                          </li>
                          <li>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"></i>
                            </span>
                            <span className="icon_list_text">
                              Legacy system modernization
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="icon_list unordered_list_block">
                          <li>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"></i>
                            </span>
                            <span className="icon_list_text">
                              Cloud computing
                            </span>
                          </li>
                          <li>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"></i>
                            </span>
                            <span className="icon_list_text">
                              {" "}
                              QA and testing{" "}
                            </span>
                          </li>
                          <li>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"></i>
                            </span>
                            <span className="icon_list_text">
                              Business analysis
                            </span>
                          </li>
                          <li>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"></i>
                            </span>
                            <span className="icon_list_text">
                              IT staffing services
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="decoration_item shape_image_1">
            <img
              src="assets/images/shapes/shape_space_4.svg"
              alt="Techco Shape"
            />
          </div>
          <div className="decoration_item shape_image_2">
            <img
              src="assets/images/shapes/shape_angle_3.webp"
              alt="Techco Shape Angle"
            />
          </div>
        </section>

        {/* <!-- Call To Action Section - Start
        ================================================== --> */}
        <ParallaxSection />
        {/* <section
          className="calltoaction_section parallaxie"
         style= {{backgroundImage: `url(${'assets/images/backgrounds/bg_image_1.webp'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center -22px', transformStyle:'preserve-3d'}}
          >
          <div className="container text-center" >
            <div className="heading_block text-white">
              <h2 className="heading_text">Ready to Work, Let's Chat</h2>
              <p className="heading_description mb-0">
                Our team of experts is ready to collaborate with you every step
                of the way, from initial consultation to implementation.
              </p>
            </div>
            <a className="btn btn-primary" href="contact.html">
              <span className="btn_label" data-text="Contact Us Today!"
                >Contact Us Today!</span
              >
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </a>
          </div>
        </section>  */}
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
