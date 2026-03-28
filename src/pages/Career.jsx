import React from "react";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import { Link } from "react-router-dom";
import "./Home.css";
import ParallaxSection3 from "./ParallaxSection3";
import { Helmet } from "react-helmet-async";

export default function Career() {
  return (
    <div>
      <Helmet>
        {/* <!-- Title --> */}
        <title>
          Careers at WebPalm | Web Development & Digital Design Jobs in Dublin
        </title>

        {/* <!-- Meta Tags --> */}
        <meta
          name="description"
          content="Explore exciting career opportunities at WebPalm. Join our Dublin team in web development, graphic design, and digital strategy. Grow your skills in a creative, innovative environment."
        />
        <meta
          name="keywords"
          content="WebPalm careers, web development jobs Dublin, graphic design jobs Ireland, IT jobs Dublin, digital strategy careers, join WebPalm team"
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
        <meta property="og:url" content="https://webpalm.ie/career" />
        <meta
          property="og:title"
          content="Careers at WebPalm | Web Development & Digital Design Jobs in Dublin"
        />
        <meta
          property="og:description"
          content="Join WebPalm and be part of a creative, innovative team in Dublin. Explore roles in web development, graphic design, and digital strategy."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta
          property="og:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="WebPalm careers in Dublin" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers at WebPalm | Web Development & Digital Design Jobs in Dublin"
        />
        <meta
          name="twitter:description"
          content="Join WebPalm and be part of a creative, innovative team in Dublin. Explore roles in web development, graphic design, and digital strategy."
        />
        <meta
          name="twitter:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
      </Helmet>
      <Header />
      <main className="page_content">
        <section
          className="page_banner_section text-center"
          style={{
            backgroundImage: `url(${"assets/images/site_logo/site_logo_05.jpg"})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="container">
            <h1
              className="page_title mb-0 text-white"
              style={{ letterSpacing: "2.5px" }}
            >
              Careers At WebPalm
            </h1>
            <p className="text-white mt-2 myText">
              At WebPalm, we’re passionate about innovation and creativity in
              the digital space. We offer exciting career opportunities for
              talented individuals ready to make an impact in web development,
              design, and graphic strategy. Join our team and grow with a
              company that values your ideas and skills.
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
                <div className="heading_focus_text">
                  <span className="badge bg-secondary text-white">
                    About Our Career
                  </span>
                </div>
                <h2 className="heading_text mb-0">
                  <mark>Assisting WebPalm</mark>
                </h2>
                <p className="seoPara mb-2" style={{ textAlign: "" }}>
                  We genuinely believe that there is always space to expand your
                  skill set and realize your full potential, regardless of your
                  level of experience or recent graduation. Above all, we would
                  adore it if you could join us. Because of this, we do not want
                  you to just follow the rules when you work at WebPalm.
                </p>
                <p className="seoPara mb-2" style={{ textAlign: "" }}>
                  At WebPalm, we foster a culture where creativity thrives and
                  boundaries are meant to be pushed. We don’t just welcome fresh
                  ideas — we rely on them to grow and evolve. When you work with
                  us, you're not just part of a team; you're part of something
                  that challenges norms and celebrates innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="section_space " style={{ marginTop: "-70px" }}>
          <div className="container">
            <div className="heading_block text-center">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{
                  backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                }}
              >
                Working at WebPalm
              </div>
              <h2 className="heading_text mb-0">
                <mark>Jobs</mark>
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
                    IT Support Engineer CCNA (ICT)
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
                    Social Media Handler
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
                    Web Manager
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
                    Graphic Designer
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
                    <div className="col-lg-12 ">
                      <div className="iconbox_block text-center p-4 shadow-lg bg-transparent d-flex job-block">
                        <div className="col-md-4">
                          <img
                            src="assets/images/careers/career_img_1.jpg"
                            className="img-fluid position-static img-border"
                          />
                        </div>
                        <div className="col-md-8 text-start">
                          <div className="row">
                            <h1 className="heading_description mb-5">
                              Job Details
                            </h1>
                          </div>
                          <div className="row mb-3">
                            <h5>Job Type</h5>
                            <p>Full-time</p>
                          </div>
                          <div className="row mb-3">
                            <h5>Location</h5>
                            <p>Dublin, Ireland</p>
                          </div>
                          <div className="row mb-3">
                            <h5>Catagory</h5>
                            <p>Information Technology</p>
                          </div>
                          <div className="row mb-3">
                            <h4>Full Job Description</h4>
                            <p>
                              Our client NetSole is seeking an{" "}
                              <b>IT Support Engineer</b> for a permanent role
                              with a market-leading Professional Services client
                              in Dublin city centre. As an IT Support Engineer
                              you will work within an{" "}
                              <b>Office 365 environment</b> as part of a small
                              team supporting internal users and IT
                              projects.This is an <b>onsite role</b> that will
                              suit someone who wants to learn and develop
                              skills.
                            </p>
                          </div>
                          <div className="row mb-3">
                            <h4>You should have the following experience:</h4>
                            <ul className="icon_list unordered_list_block">
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Strong skills in Microsoft O365 / Exchange
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Knowledge of networking and network equipment.
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  {" "}
                                  Experience managing Active Directory, Group
                                  Policy, DHCP and DNS.{" "}
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Industry qualifications (CCNA, MSCE, MS
                                  Azure).
                                </span>
                              </li>
                            </ul>
                          </div>
                          <Link to={"/contact"}>
                            <a class="btn btn-light">
                              <span class="btn_label" data-text="Apply Now">
                                Apply Now
                              </span>
                              <span class="btn_icon">
                                <i class="fa-solid fa-arrow-up-right"></i>
                              </span>
                            </a>
                          </Link>
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
                    <div className="col-lg-12 ">
                      <div className="iconbox_block text-center p-4 shadow-lg bg-transparent d-flex job-block">
                        <div className="col-md-4 noblock">
                          <img
                            src="assets/images/careers/career_img_2.png"
                            className="img-fluid position-static img-border"
                          />
                        </div>
                        <div className="col-md-8 text-start">
                          <div className="row">
                            <h1 className="heading_description mb-5">
                              Job Details
                            </h1>
                          </div>

                          <div className="row mb-3">
                            <h5>Job Type</h5>
                            <p>Full-time</p>
                          </div>
                          <div className="row mb-3">
                            <h5>Location</h5>
                            <p>Dublin, Ireland</p>
                          </div>
                          <div className="row mb-3">
                            <h5>Catagory</h5>
                            <p>Media Professionals</p>
                          </div>
                          <div className="row mb-4">
                            <h4>Full Job Description</h4>
                            <p>
                              We are hiring a creative and proactive Social
                              Media Handler to join our growing team. The role
                              involves managing our social media platforms,
                              creating engaging content, and building a strong
                              online presence for our brand. If you have a
                              passion for digital trends and know how to connect
                              with audiences, we’d love to have you on board!
                            </p>
                            <span className="mb-1">
                              <b>Industry:</b> Media/Communications
                            </span>
                            <span className="mb-2">
                              <b>Functional Area:</b> Marketing{" "}
                            </span>
                          </div>
                          <div className="row mb-3">
                            <h4>You should have the following experience:</h4>
                            <ul className="icon_list unordered_list_block">
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Computer Knowledge
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Time Management
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Social Media Handling
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Social Media Optimization
                                </span>
                              </li>
                            </ul>
                          </div>
                          <Link to={"/contact"}>
                            <a class="btn btn-light">
                              <span class="btn_label" data-text="Apply Now">
                                Apply Now
                              </span>
                              <span class="btn_icon">
                                <i class="fa-solid fa-arrow-up-right"></i>
                              </span>
                            </a>
                          </Link>
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
                    <div className="col-lg-12 ">
                      <div className="iconbox_block text-center p-4 shadow-lg bg-transparent d-flex job-block">
                        <div className="col-md-4">
                          <img
                            src="assets/images/careers/web manager.jpg"
                            className="img-fluid position-static img-border"
                          />
                        </div>
                        <div className="col-md-8 text-start mx-3">
                          <div className="row">
                            <h1 className="heading_description mb-5">
                              Job Details
                            </h1>
                          </div>
                          <div className="row mb-3">
                            <h5>Job Type</h5>
                            <p>Full-time</p>
                          </div>
                          <div className="row mb-3">
                            <h5>Location</h5>
                            <p>Dublin, Ireland</p>
                          </div>
                          <div className="row mb-3">
                            <h5>Catagory</h5>
                            <p>Media Professionals</p>
                          </div>
                          <div className="row mb-3">
                            <h4 className="mb-3">Job Description</h4>
                            <h6>Key Responsibilities</h6>
                            <p>
                              Maintain and improve the websites using platforms
                              like Wix and Wordpress.
                              <br />
                              Oversee digital marketing efforts on social media
                              platforms (Twitter/X, Linkedin, Instagram).
                              <br />
                              Contribute to digital marketing strategy and
                              content management.
                              <br />
                              Adobe EC Design Multi-tasking.
                              <br />
                              2D or 3D animation. <br />
                              3D CAD design.
                              <br />
                            </p>
                          </div>
                          <div className="row mb-3">
                            <h4>You should have the following experience:</h4>
                            <ul className="icon_list unordered_list_block">
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Digital Marketing qualification.
                                  <br />
                                  Proficiency in web content management systems
                                  (Wix, Wordpress).
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Familiarity with HTML, CSS, and SEO best
                                  practices.
                                  <br />
                                  Experience with ad platforms (Linkedin
                                  Campaign Manager, Google Ads).
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Strong writing skills and attention to detail.
                                  <br />
                                  Knowledge of Adobe Creative Suite is
                                  desirable.
                                </span>
                              </li>
                            </ul>
                          </div>
                          <Link to={"/contact"}>
                            <a class="btn btn-light">
                              <span class="btn_label" data-text="Apply Now">
                                Apply Now
                              </span>
                              <span class="btn_icon">
                                <i class="fa-solid fa-arrow-up-right"></i>
                              </span>
                            </a>
                          </Link>
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
                    <div className="col-lg-12 ">
                      <div className="iconbox_block text-center p-4 shadow-lg bg-transparent d-flex job-block">
                        <div className="col-md-4">
                          <img
                            src="assets/images/careers/graphic.jpg"
                            className="img-fluid position-static img-border"
                          />
                        </div>
                        <div className="col-md-8 text-start mx-3">
                          <div className="row">
                            <h1 className="heading_description mb-5">
                              Job Details
                            </h1>
                          </div>
                          <div className="row mb-3">
                            <h5>Job Type</h5>
                            <p>Full-time</p>
                          </div>
                          <div className="row mb-3">
                            <h5>Location</h5>
                            <p>Dublin, Ireland</p>
                          </div>
                          <div className="row mb-3">
                            <h5>Catagory</h5>
                            <p>Media Professionals</p>
                          </div>
                          <div className="row mb-3">
                            <h4 className="mb-3">Job Description</h4>
                            <p>
                              Our client <b>NetSole</b> seeks a talented and
                              creative Graphic Designer to join their dynamic
                              team. The ideal candidate for this role will be a
                              self-starter who thrives in a fast-paced
                              environment, with a passion for storytelling and
                              engaging design. This is someone who cares deeply
                              about creating world-class shopping experiences
                              for our customers and takes delight in building
                              upon the company’s brand.
                            </p>
                            <h6>Key Responsibilities</h6>
                            <ul className="icon_list unordered_list_block">
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Develop visually captivating and on-brand
                                  designs for digital advertising campaigns,
                                  including
                                  <br /> banners, social media graphics, email
                                  newsletters, website assets, and other digital
                                  channels.
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Collaborate closely with the marketing team to
                                  conceptualize and execute effective design
                                  solutions <br />
                                  that align with campaign goals and target
                                  audience.
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                2D or 3D animation
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                3D CAD design
                              </li>
                            </ul>
                          </div>
                          <div className="row mb-3">
                            <h4>Skills And Experience Needs:</h4>
                            <ul className="icon_list unordered_list_block">
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Dynamic personality who adapts well to change
                                  and can thrive in a rapidly and ever-growing
                                  company.
                                  <br />
                                  Excellent communicator with a ‘can-do’
                                  attitude.
                                  <br />
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Driven, enthusiastic, with ambitions to grow
                                  your career.
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Top-tier skills as illustrated in a design
                                  portfolio.
                                </span>
                              </li>
                              <li>
                                <span className="icon_list_icon">
                                  <img src="assets/images/icons/icon_check_3.svg" />
                                </span>
                                <span className="icon_list_text">
                                  Expert knowledge of Adobe creative suite and
                                  additional creative tools.
                                  <br />
                                  Photography, videography, and audio capture a
                                  bonus but not required. <br />
                                  Excellent written and spoken English.
                                </span>
                              </li>
                            </ul>
                          </div>
                          <Link to={"/contact"}>
                            <a class="btn btn-light">
                              <span class="btn_label" data-text="Apply Now">
                                Apply Now
                              </span>
                              <span class="btn_icon">
                                <i class="fa-solid fa-arrow-up-right"></i>
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ParallaxSection3 />
      </main>
      <Footer2 />
    </div>
  );
}
