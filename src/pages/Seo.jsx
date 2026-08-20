import React from "react";
import Header from "../Components/Header";
import "./Home.css";
import Footer2 from "../Components/Footer2";
import ParallaxSection4 from "./ParallaxSection4";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Seo() {
  return (
    <div>
      <Helmet>
        {/* <!-- Title --> */}
        <title>
          Search Engine Optimization (SEO) Services in Dublin | WebPalm
        </title>

        {/* <!-- Meta Tags --> */}
        <meta
          name="description"
          content="Boost your online visibility with WebPalm's professional SEO services in Dublin. We offer keyword research, SEO analysis, CRO, and link building to help your business rank higher and grow sustainably."
        />
        <meta
          name="keywords"
          content="SEO Dublin, search engine optimization Ireland, keyword research services, link building Dublin, CRO Dublin, SEO analysis, improve Google rankings, organic traffic growth, WebPalm SEO services, professional SEO agency Dublin"
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
          content="https://webpalm.ie/search-engine-optimization"
        />
        <meta
          property="og:title"
          content="Search Engine Optimization (SEO) Services in Dublin | WebPalm"
        />
        <meta
          property="og:description"
          content="WebPalm offers SEO strategies including keyword research, SEO analysis, CRO, and link building to help businesses in Dublin and beyond improve search rankings and attract more customers."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta
          property="og:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SEO services by WebPalm" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Search Engine Optimization (SEO) Services in Dublin | WebPalm"
        />
        <meta
          name="twitter:description"
          content="WebPalm offers SEO strategies including keyword research, SEO analysis, CRO, and link building to help businesses in Dublin and beyond improve search rankings and attract more customers."
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
            backgroundImage: `url(${"assets/images/backgrounds/SEOImg33.png"})`,
            backgroundPosition: "top",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">
              Search Engine Optimization
            </h1>
            <p className="text-white mt-2 myPara">
              Web development involves creating and maintaining websites and web
              applications. It requires a mix of design, development, and
              deployment skills across various technologies.
            </p>
          </div>
        </section>
        <section
          className="section_space"
          style={{
            backgroundImage: `url('assets/images/backgrounds/bg_image_3.webp')`,
            backgroundPosition: "bottom",
          }}
        >
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12 pb-5">
                <h1 className="page_title mb-0 px-5 ">
                  What can SEO Agency do for Your Business?
                </h1>
                <p className="seoPara mb-2" style={{ textAlign: "" }}>
                  An SEO agency helps businesses improve their visibility on
                  search engines like Google to attract more organic traffic.
                  They optimize website content, structure, and technical
                  elements, perform keyword research, build backlinks, and
                  ensure the site is fast and mobile-friendly. By tracking
                  performance and staying updated with algorithm changes, SEO
                  agencies help boost rankings, reach the right audience, and
                  drive business growth.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-2 col-md-4 seodiv col-sm-6">
                    <img
                      className="seoimg px-2"
                      src="assets/images/seo/bing.webp"
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 seodiv col-sm-6">
                    <img
                      className="seoimg px-2"
                      src="assets/images/seo/google.webp"
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 seodiv col-sm-6">
                    <img
                      className="seoimg px-2"
                      src="assets/images/seo/ubersuggest.webp"
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 seodiv col-sm-6">
                    <img
                      className="seoimg px-2"
                      src="assets/images/seo/hubspot.webp"
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 seodiv col-sm-6">
                    <img
                      className="seoimg px-2"
                      src="assets/images/seo/yahoo.webp"
                    />
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
                    src="assets/images/backgrounds/bg-seo_img_11.jpg"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <h2 className="heading_text">
                      <mark>
                        Develop Your Business With SEO Strategies Solutions
                      </mark>
                    </h2>
                    <p className="heading_description mb-2">
                      SEO plays a key role in driving business growth by
                      increasing a website’s visibility to potential customers.
                      Higher search engine rankings lead to more organic
                      traffic, which means more opportunities for conversions
                      and sales. With targeted keywords, optimized content, and
                      a strong online presence, businesses can reach the right
                      audience at the right time—boosting brand credibility,
                      customer trust, and long-term revenue.
                    </p>
                    <p className="heading_description mb-0">
                      {" "}
                      By consistently appearing in top search results,
                      businesses establish authority in their industry. SEO also
                      offers long-term results, unlike paid ads which stop when
                      the budget ends. With ongoing optimization, businesses can
                      scale sustainably and stay ahead of competitors.
                    </p>
                  </div>
                  <Link to={"/contact"}>
                    <a className="btn btn-primary">
                      <span className="btn_label" data-text="Contact Us Today!">
                        Contact Us TODAY!
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="portfolio_section section_space bg-light"
          style={{
            backgroundImage: `url('assets/images/backgrounds/bg_image_3.webp')`,
          }}
        >
          <div className="container">
            <div className="filter_elements_nav px-3">
              <h1 className="page_title mb-0">What You Accquire</h1>
            </div>
            <div className="filter_elements_wrapper row">
              <div
                className="col-lg-6 text-center"
                style={{ padding: "30px 35px" }}
              >
                <div
                  className="portfolio_block portfolio_layout_2 port1"
                  style={{ height: "602px" }}
                >
                  <div class=" layout_icon_left">
                    <img
                      src="assets/images/icons/seo-icon1.webp"
                      alt="Bulb SVG Icon"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="portfolio_title">SEO Analysis</h3>
                    <p
                      className=" mt-2 myPara1 pb-4"
                      style={{ textAlign: "justify" }}
                    >
                      SEO analysis for WebPalm involves a comprehensive review
                      of the website’s performance in search engines to identify
                      areas for improvement. This includes evaluating on-page
                      elements such as meta titles, descriptions, headers, and
                      keyword usage to ensure they align with target search
                      terms. It also checks the site’s technical health—like
                      page speed, mobile responsiveness, crawlability, and
                      indexing status. Off-page factors such as backlink
                      quality, domain authority, and social signals are assessed
                      to measure WebPalm’s online reputation.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 text-center"
                style={{ padding: "30px 35px" }}
              >
                <div className="portfolio_block portfolio_layout_2">
                  <div class=" layout_icon_left">
                    <img
                      src="assets/images/icons/seo-icon2.webp"
                      alt="Bulb SVG Icon"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="portfolio_title">KeyWord Research in SEO</h3>
                    <p
                      className=" mt-2 myPara1 pb-4"
                      style={{ textAlign: "justify" }}
                    >
                      Keyword research is a vital part of WebPalm’s SEO
                      strategy, helping identify the search terms potential
                      customers use when looking for services like web
                      development, graphic designing, and SEO. By analyzing
                      search volume, competition, and user intent, WebPalm can
                      target high-impact keywords that align with each service
                      offering. This ensures that content is optimized to
                      attract the right audience, improve rankings, and drive
                      qualified traffic. Effective Keyword research also helped
                      WebPalm.stay ahead of competitors by focusing customers
                      needs.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 text-center"
                style={{ padding: "30px 35px" }}
              >
                <div
                  className="portfolio_block portfolio_layout_2 port1"
                  style={{ height: "602px" }}
                >
                  <div class=" layout_icon_left">
                    <img
                      src="assets/images/icons/seo-icon4.webp"
                      alt="Bulb SVG Icon"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="portfolio_title">
                      Conversion Rate Optimization (CRO)
                    </h3>
                    <p
                      className=" mt-2 myPara1 pb-4"
                      style={{ textAlign: "justify" }}
                    >
                      Conversion Rate Optimization (CRO) in SEO focuses on
                      turning website visitors into customers by improving the
                      user experience and guiding them toward desired
                      actions—like filling out a form, making a purchase, or
                      booking a service. While SEO drives traffic to the site,
                      CRO ensures that traffic is effectively converted into
                      leads or sales. This involves optimizing landing pages,
                      improving page load speed, creating calls-to-action, and
                      testing different layouts or layouts.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 text-center"
                style={{ padding: "30px 35px" }}
              >
                <div
                  className="portfolio_block portfolio_layout_2 port1"
                  style={{ height: "602px" }}
                >
                  <div class=" layout_icon_left">
                    <img
                      src="assets/images/icons/seo-icon3.webp"
                      alt="Bulb SVG Icon"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="portfolio_title">Link Building in SEO</h3>
                    <p
                      className=" mt-2 myPara1 pb-4"
                      style={{ textAlign: "justify" }}
                    >
                      Link building is a key SEO strategy for WebPalm that
                      involves acquiring high-quality backlinks from reputable
                      websites to improve domain authority and search engine
                      rankings. By earning links through guest blogging,
                      industry directories, and content sharing, WebPalm boosts
                      the credibility of its services like web development,
                      graphic designing, and SEO. These backlinks act as votes
                      of confidence, signaling to search engines that WebPalm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ParallaxSection4 />
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
    </div>
  );
}
