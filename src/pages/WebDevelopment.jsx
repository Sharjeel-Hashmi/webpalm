import React from "react";
import Header from "../Components/Header";
import "./Home.css";
import Footer2 from "../Components/Footer2";
import ParallaxSection3 from "./ParallaxSection3";
import { Helmet } from "react-helmet-async";
import WhatsAppButton from "../Components/WhatsAppButton";

export default function WebDevelopment() {
  return (
    <div>
      <Helmet>
        {/* <!-- Title --> */}
        <title>Web Development Services in Dublin | WebPalm</title>

        {/* <!-- Meta Tags --> */}
        <meta
          name="description"
          content="Professional web development services in Dublin, specializing in modern frameworks like React, Next.js, Angular, PHP, Python, and Laravel. From design to deployment, we deliver high-performance websites and web applications."
        />
        <meta
          name="keywords"
          content="Web development Dublin, React.js development, Next.js development, Angular development, Python development, PHP development, Laravel development, Node.js development, custom websites Ireland, frontend development, backend development, business web applications"
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
        <meta property="og:url" content="https://webpalm.ie/web-development" />
        <meta
          property="og:title"
          content="Web Development Services in Dublin | WebPalm"
        />
        <meta
          property="og:description"
          content="WebPalm builds responsive, high-performance websites using React, Next.js, Angular, PHP, Python, Laravel, and Node.js. End-to-end web solutions from planning to launch."
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
          content="Web development services by WebPalm"
        />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Services in Dublin | WebPalm"
        />
        <meta
          name="twitter:description"
          content="WebPalm builds responsive, high-performance websites using React, Next.js, Angular, PHP, Python, Laravel, and Node.js. End-to-end web solutions from planning to launch."
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
            backgroundImage: `url(${"assets/images/site_logo/site_logo_02.jpg"})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Web Development</h1>
            <p className="text-white mt-2 myPara">
              Web development involves creating and maintaining websites and web
              applications. It requires a mix of design, development, and
              deployment skills across various technologies.
            </p>
          </div>
        </section>
        <section
          class="empowering_success_section section_space bg-light"
          style={{
            backgroundPosition: "left top",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(assets/images/shapes/shape_line_2.svg)`,
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="heading_block text-center">
                  <h2 class="heading_text mb-0">
                    <mark>Development Process</mark>
                  </h2>
                  <p class="heading_description mb-0 text-dark">
                    Choosing the best website development framework scope of
                    work can help complete your website development project.
                  </p>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="image_wrap">
                  <img
                    class="rounded"
                    src="assets/images/backgrounds/web.jpg"
                    alt="Webpalm Image of a software development directory structure with debugging tools, project files, and documentation listings"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <ul class="empowering_services unordered_list_block ps-lg-5">
                  <li>
                    <div class="iconbox_block layout_icon_left">
                      <div class="iconbox_icon">
                        <img
                          src="assets/images/icons/icon_bulb.svg"
                          alt="Bulb SVG Icon"
                        />
                      </div>
                      <div class="iconbox_content">
                        <h3 class="iconbox_title">Discovery</h3>
                        <p class="mb-0">
                          Understand the website's purpose, target audience, and
                          goals.​Clarifying your needs and knowing what you want
                          is crucial in getting the required information.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="iconbox_block layout_icon_left">
                      <div class="iconbox_icon">
                        <img
                          src="assets/images/icons/icon_design.png"
                          alt="Bulb SVG Icon"
                        />
                      </div>
                      <div class="iconbox_content">
                        <h3 class="iconbox_title">Design</h3>
                        <p class="mb-0">
                          This step will be more straightforward once you have
                          the above two steps streamlined. Develop the visual
                          elements, including color schemes, typography, and
                          imagery, to align with the brand identity.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="iconbox_block layout_icon_left">
                      <div class="iconbox_icon">
                        <img
                          src="assets/images/icons/icon_code.png"
                          alt="Bulb SVG Icon"
                        />
                      </div>
                      <div class="iconbox_content">
                        <h3 class="iconbox_title">Development</h3>
                        <p class="mb-0">
                          Create a sitemap and wireframe to outline the site's
                          structure and layout. Convert the design into a
                          functional website using coding languages and
                          frameworks.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="iconbox_block layout_icon_left">
                      <div class="iconbox_icon">
                        <img
                          src="assets/images/icons/icon_launch.png"
                          alt="Bulb SVG Icon"
                        />
                      </div>
                      <div class="iconbox_content">
                        <h3 class="iconbox_title">Testing and Launching</h3>
                        <p class="mb-0">
                          Evaluate the website's functionality, compatibility,
                          and performance across different devices and browsers.
                          Deploy the website to a live server, making it
                          accessible to users.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          class="business_consulting_service_section section_space"
          style={{
            backgroundImage: `url('assets/images/backgrounds/bg_image_3.webp')`,
          }}
        >
          <div class="container margincontainer">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="heading_block text-center">
                  <h2 class="heading_text">
                    <mark>Web Application Development Technologies</mark>
                  </h2>
                  <p class="heading_description mb-0 text-dark">
                    Languages And Frameworks
                  </p>
                </div>
              </div>
            </div>

            <div class="business_consulting_services row">
              <div class="col-lg-4 mycon1">
                <div
                  class="iconbox_block mycon"
                  style={{
                    padding: "36px 55px",
                    boxShadow: "0 20px 30px 0 rgba(174, 191, 210, 0.3)",
                  }}
                >
                  {/* <div class="iconbox_icon">
                    <img
                     src="assets/images/icons/icon_javascript.svg"
                     alt="JavaScript SVG Icon"
                    />
                  </div> */}
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">
                      <a href="#" style={{ color: "navy" }}>
                        JavaScript Development
                      </a>
                    </h3>
                    <p class="mb-0 myconPara">
                      We master JavaScript to craft dynamic interactive web
                      experiences professionally.We build engaging animations,
                      validations, and interactive API integrations
                      seamlessly.We power modern web projects with JavaScript
                      and creative coding.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="iconbox_block mycon"
                  style={{
                    padding: "36px 55px",
                    boxShadow: "0 20px 30px 0 rgba(174, 191, 210, 0.3)",
                  }}
                >
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">
                      <a href="#" style={{ color: "navy" }}>
                        React JS Development
                      </a>
                    </h3>
                    <p class="mb-0 myconPara">
                      We utilize React.js to build interactive, modular user
                      interfaces seamlessly.We streamline front-end tasks and
                      consistently optimize website performance well.We value
                      React.js for its modular design and active community.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="iconbox_block mycon"
                  style={{
                   
                    padding: "36px 55px",
                    boxShadow: "0 20px 30px 0 rgba(174, 191, 210, 0.3)",
                  }}
                >
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">
                      <a href="#" style={{ color: "navy" }}>
                        Next JS Development
                      </a>
                    </h3>
                    <p class="mb-0 myconPara">
                      We employ Next.js to enhance React with server rendering
                      capabilities.We achieve improved SEO, faster loading, and
                      strong scalability consistently.We select Next.js for
                      performance optimization and seamless integration.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="iconbox_block mycon"
                  style={{
                   
                    padding: "36px 55px",
                    boxShadow: "0 20px 30px 0 rgba(174, 191, 210, 0.3)",
                  }}
                >
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">
                      <a href="#" style={{ color: "navy" }}>
                        Angular JS Development
                      </a>
                    </h3>
                    <p class="mb-0 myconPara">
                      We leverage Angular to create dynamic, single-page web
                      applications efficiently.We utilize two-way data binding
                      to simplify interactive web creation.We trust Angular for
                      comprehensive tools and structured development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="iconbox_block mycon"
                  style={{
                   
                    padding: "36px 55px",
                    boxShadow: "0 20px 30px 0 rgba(174, 191, 210, 0.3)",
                  }}
                >
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">
                      <a href="#" style={{ color: "navy" }}>
                        Python Development
                      </a>
                    </h3>
                    <p class="mb-0 myconPara">
                      We use Python for versatile solutions and efficient web
                      programming.We simplify coding through Python's clear
                      syntax and extensive libraries.We value Python for rapid
                      development and diverse technical capabilities.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="iconbox_block mycon"
                  style={{
                   
                    padding: "36px 55px",
                    boxShadow: "0 20px 30px 0 rgba(174, 191, 210, 0.3)",
                  }}
                >
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">
                      <a href="#" style={{ color: "navy" }}>
                        PHP Development
                      </a>
                    </h3>
                    <p class="mb-0 myconPara">
                      We employ PHP to build dynamic server-side web
                      applications effectively.We integrate databases seamlessly
                      while managing robust website logic effortlessly.We
                      appreciate PHP for its flexibility, community, and fast
                      development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="iconbox_block mycon"
                  style={{
                   
                    padding: "36px 55px",
                    boxShadow: "0 20px 30px 0 rgba(174, 191, 210, 0.3)",
                  }}
                >
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">
                      <a href="#" style={{ color: "navy" }}>
                        Laraval Development
                      </a>
                    </h3>
                    <p class="mb-0 myconPara">
                      We choose Laravel to build elegant, organized PHP web
                      applications.We streamline development with simplified
                      routing, automated tasks, and innovation.We trust Laravel
                      for faster builds and improved organization remarkably.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div
                  class="iconbox_block mycon"
                  style={{
                   
                    padding: "36px 55px",
                    boxShadow: "0 20px 30px 0 rgba(174, 191, 210, 0.3)",
                  }}
                >
                  <div class="iconbox_content">
                    <h3 class="iconbox_title">
                      <a href="#" style={{ color: "navy" }}>
                        Node JS Development
                      </a>
                    </h3>
                    <p class="mb-0 myconPara">
                      We harness Node.js to execute JavaScript for scalable
                      server applications.We enable full-stack development with
                      non-blocking, event-driven designs consistently today.We
                      appreciate Node.js for unmatched speed and robust modules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Space Section========== */}
        <section
          className="process_technology_review_section bg-light section_decoration"
          style={{
            marginTop: "-70px",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(assets/images/shapes/shape_line_3.svg)`,
          }}
        >
          <div className="container">
            <div className="section_space" style={{ marginTop: "-70px" }}>
              <div className="heading_block text-center">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  Our Technology
                </div>
                <h2 className="heading_text mb-0">
                  <mark>Technologies</mark> That We Use
                </h2>
              </div>

              <div className="tab_block_wrapper">
                <ul className="nav justify-content-center" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_web_platform"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Frontend Stack
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_databases"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Backend Stack
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_cloud_devops"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Databases Stack
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_other_frameworks"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      E-commerce
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  {/* ==========Frontend Stack ========== */}
                  <div
                    className="tab-pane fade show active"
                    id="tab_web_platform"
                    role="tabpanel"
                  >
                    <div className="web_development_technologies row justify-content-center">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              src="assets/images/icons/icon_javascript.svg"
                              alt="JavaScript SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">JavaScript</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              src="assets/images/icons/icon_react_js.svg"
                              alt="React Js SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">React Js</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                               <img
                                  style={{ maxWidth: "80px" }}
                                  width="80"
                                  height="54"
                                  src="assets/images/icons/icon_nextjs.webp"
                                  alt="React Js SVG Icon"
                                />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Next Js</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "80px" }}
                              src="assets/images/icons/icon_angular.png"
                              alt="React Js SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Angular Js</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "55px" }}
                              src="assets/images/icons/icon_html.png"
                              alt="React Js SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">HTML5</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "55px" }}
                              src="assets/images/icons/icon_css.png"
                              alt="React Js SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">CSS 3</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ==========Backend Stack ========== */}
                  <div
                    className="tab-pane fade"
                    id="tab_databases"
                    role="tabpanel"
                  >
                    <div className="web_development_technologies row justify-content-center">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              src="assets/images/case/icon_python.svg"
                              alt="Python SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Python</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              src="assets/images/icons/icon_php.svg"
                              alt="PHP SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">PHP</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              src="assets/images/icons/icon_laravel.svg"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Laraval</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "70px" }}
                              src="assets/images/icons/icon_nodejs.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Node JS</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "70px" }}
                              src="assets/images/icons/icon_express.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Express JS</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* =============Databases Stack ======== */}
                  <div
                    className="tab-pane fade"
                    id="tab_cloud_devops"
                    role="tabpanel"
                  >
                    <div className="web_development_technologies row justify-content-center">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "65px" }}
                              src="assets/images/icons/icon_mysql.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">MySQL</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              src="assets/images/icons/icon_mongodb.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">MongoDB</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ===============E-commerce Stack ======== */}
                  <div
                    className="tab-pane fade"
                    id="tab_other_frameworks"
                    role="tabpanel"
                  >
                    <div className="web_development_technologies row justify-content-center">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "55px" }}
                              src="assets/images/icons/icon_shopify.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Shopify</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img
                              style={{ maxWidth: "55px" }}
                              src="assets/images/icons/icon_wordpress.png"
                              alt="Laraval SVG Icon"
                            />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">Wordpress</h3>
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
        <ParallaxSection3 />
        <WhatsAppButton />
      </main>
      <Footer2 />
    </div>
  );
}
