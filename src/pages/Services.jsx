import React from 'react';
import './Home.css';
import Footer2 from '../Components/Footer2';
import Header from '../Components/Header';
import ParallaxSection from './ParallaxSection';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Custom Web, Software & Digital Solutions | WebPalm</title>
        <meta
          name="description"
          content="Explore WebPalm's full suite of digital solutions including custom web application development, graphic design, branding, and search engine optimization in Dublin, Ireland."
        />
        <meta
          name="keywords"
          content="web services Dublin, custom software Ireland, web app development, graphic design services, SEO agency Dublin, digital marketing Ireland, WebPalm services"
        />
        <meta name="author" content="WebPalm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webpalm.ie/services" />
        <meta
          name="thumbnail"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webpalm.ie/services" />
        <meta
          property="og:title"
          content="Our Services | Custom Web, Software & Digital Solutions | WebPalm"
        />
        <meta
          property="og:description"
          content="Explore WebPalm's full suite of digital solutions including custom web application development, graphic design, branding, and search engine optimization in Dublin, Ireland."
        />
        <meta property="og:site_name" content="WebPalm" />
        <meta
          property="og:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Services | Custom Web, Software & Digital Solutions | WebPalm"
        />
        <meta
          name="twitter:description"
          content="Explore WebPalm's full suite of digital solutions including custom web application development, graphic design, branding, and search engine optimization in Dublin, Ireland."
        />
        <meta
          name="twitter:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
      </Helmet>
      <Header />
      <main className="page_content">
        {/* <!-- Page Banner Section - Start
        ================================================== --> */}
        <section
          className="page_banner_section text-center"
          style={{
            backgroundImage: `url(${'assets/images/site_logo/site_logo_01.jpg'})`,
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Our Services</h1>
            <p className="text-white mt-2 myText">
              Empowering businesses with custom web apps, brand design, and data-driven SEO strategies in Dublin and beyond.
            </p>
          </div>
        </section>
        {/* <!-- Page Banner Section - End
        ================================================== --> */}

        {/* <!-- Service Details Section - Start
        ================================================== --> */}
        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="details_item_image position-relative">
              <img
                src="assets/images/services/service_details_image_1.webp"
                alt="WebPalm Services Overview"
              />
              <a
                className="video_btn ripple_effect"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch video"
              >
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </a>
            </div>
            <h2 className="details_item_title">
              End-to-End Digital Engineering & Growth
            </h2>
            <p>
              Modern businesses rely on resilient infrastructure, engaging web applications, and high-visibility search performance. At WebPalm, we specialize in delivering tailored web, software, and design solutions that empower organizations of all sizes across Ireland and internationally.
            </p>
            <p>
              We approach each project holistically, considering scalability, search engine visibility, UI/UX aesthetics, and long-term security. Using cutting-edge technologies and industry best practices, we ensure your systems achieve peak performance and quantifiable business ROI.
            </p>

            <h3 className="details_item_info_title">Service Process</h3>
            <div className="row mb-5 align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <div className="accordion" id="service_process_faq">
                  <div className="accordion-item">
                    <div
                      className="accordion-button"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_one"
                      aria-expanded="true"
                      aria-controls="collapse_one"
                    >
                      01. Listening to Your Needs
                    </div>
                    <div
                      id="collapse_one"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#service_process_faq"
                    >
                      <div className="accordion-body">
                        <p className="m-0">
                          Data - driven diagnostic and predictive app for
                          improving outcomes Data driven diagnostic and
                          predictive app for improving.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_two"
                      aria-expanded="false"
                      aria-controls="collapse_two"
                    >
                      02. Tailored Solutions
                    </div>
                    <div
                      id="collapse_two"
                      className="accordion-collapse collapse"
                      data-bs-parent="#service_process_faq"
                    >
                      <div className="accordion-body">
                        <p className="m-0">
                          Data - driven diagnostic and predictive app for
                          improving outcomes Data driven diagnostic and
                          predictive app for improving.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_three"
                      aria-expanded="false"
                      aria-controls="collapse_three"
                    >
                      03. Tactical Alignment
                    </div>
                    <div
                      id="collapse_three"
                      className="accordion-collapse collapse"
                      data-bs-parent="#service_process_faq"
                    >
                      <div className="accordion-body">
                        <p className="m-0">
                          Data - driven diagnostic and predictive app for
                          improving outcomes Data driven diagnostic and
                          predictive app for improving.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div
                      className="accordion-button collapsed"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_four"
                      aria-expanded="false"
                      aria-controls="collapse_four"
                    >
                      04. Measurable Results
                    </div>
                    <div
                      id="collapse_four"
                      className="accordion-collapse collapse"
                      data-bs-parent="#service_process_faq"
                    >
                      <div className="accordion-body">
                        <p className="m-0">
                          Data - driven diagnostic and predictive app for
                          improving outcomes Data driven diagnostic and
                          predictive app for improving.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <ul
                  className="content_layer_group unordered_list_block text-center"
                >
                  <li
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_one"
                    aria-expanded="true"
                    aria-controls="collapse_one"
                  >
                    <span>Listening to Your Needs</span>
                  </li>
                  <li
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_two"
                    aria-expanded="false"
                    aria-controls="collapse_two"
                  >
                    <span>Tailored Solutions</span>
                  </li>
                  <li
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_three"
                    aria-expanded="false"
                    aria-controls="collapse_three"
                  >
                    <span>Tactical Alignment</span>
                  </li>
                  <li
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_four"
                    aria-expanded="false"
                    aria-controls="collapse_four"
                  >
                    <span>Measurable Results</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="details_item_info_title"> Results Of Services</h3>
            <p className="mb-4">
            Six salient features of a global Digital Systems Engineer Services leader assisting Fortune 500 firms with their innovation agenda can be linked to a digital transformation gallery case:
            </p>
            <div className="row mb-4">
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <img
                        src="assets/images/icons/icon_check_3.svg"
                        
                      />
                    </span>
                    <span className="icon_list_text">
                      Scalability and Flexibility
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img
                        src="assets/images/icons/icon_check_3.svg"
                       
                      />
                    </span>
                    <span className="icon_list_text">
                      Security and Compliance
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img
                        src="assets/images/icons/icon_check_3.svg"
                        
                      />
                    </span>
                    <span className="icon_list_text">
                    Enhancement of Performance
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <img
                        src="assets/images/icons/icon_check_3.svg"
                      />
                    </span>
                    <span className="icon_list_text">Experience of the User </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img
                        src="assets/images/icons/icon_check_3.svg"
                       
                      />
                    </span>
                    <span className="icon_list_text">
                      Security and Compliance
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img
                        src="assets/images/icons/icon_check_3.svg"
                         
                      />
                    </span>
                    <span className="icon_list_text"> Education and Training </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img
                    src="assets/images/services/service_details_image_2.webp"
                    alt="Service Details Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img
                    src="assets/images/services/service_details_image_3.webp"
                    alt="Service Details Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img
                    src="assets/images/services/service_details_image_4.webp"
                    alt="Service Details Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Service Details Section - End
        ================================================== --> */}

        {/* <!-- Call To Action Section - Start
        ================================================== --> */}
        <ParallaxSection/>
        {/* <!-- Call To Action Section - End
        ================================================== --> */}

        {/* <!-- Call To Action Section - End
        ================================================== --> */}
      </main>
      <Footer2/>
   </>
  )
}
