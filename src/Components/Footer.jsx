import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Footer() {
  const form = useRef();

  const publickey = "AuwyFfdV7So5IUKn5";
  const serviceId = "service_ze2ns0r";
  const templateId = "template_axaqbxl";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publickey,
      })
      .then(
        () => {
          toast.success("Email is successfully send", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
                    console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          toast.error("FAILED...", error.text, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("FAILED...", error.text);
        }
      );
          
  };

  return (
    <div>
      <footer
        className="site_footer footer_layout_2 section_decoration overflow-hidden"
        style={{
          backgroundImage: `url(${"assets/images/shapes/bg_pattern_3.svg"})`,
        }}
      >
        <div className="decoration_item shape_image_1">
          <img
            src="assets/images/shapes/shape_space_2.svg"
            alt="Techco Shape"
          />
        </div>
        <div className="container">
          <div className="service_pill_carousel swiper swiper-initialized swiper-horizontal">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-610433fbd328ad44b"
              aria-live="off"
              style={{
                transform: `translate3d(${-1310}px,${0}px, ${0}px)`,
                transitionDuration: "4000ms",
              }}
            >
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="1 / 12"
                data-swiper-slide-index="0"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Custom Web Apps</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="2 / 12"
                data-swiper-slide-index="1"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>App Development</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="3 / 12"
                data-swiper-slide-index="2"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Web Development</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="4 / 12"
                data-swiper-slide-index="3"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Software Solution</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="5 / 12"
                data-swiper-slide-index="4"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Digital Marketing</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="6 / 12"
                data-swiper-slide-index="5"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Video Editing</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="7 / 12"
                data-swiper-slide-index="6"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Custom Web Apps</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="8 / 12"
                data-swiper-slide-index="7"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Web App Development</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="9 / 12"
                data-swiper-slide-index="8"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Graphic Designing</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="10/ 12"
                data-swiper-slide-index="9"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Software Solution</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="11 / 12"
                data-swiper-slide-index="10"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Enterprise Solution</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="12 / 12"
                data-swiper-slide-index="11"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Video Promotion</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="13 / 12"
                data-swiper-slide-index="12"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Custom Web Apps</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="14/ 12"
                data-swiper-slide-index="13"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>App Development</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="15/ 12"
                data-swiper-slide-index="14"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Web Designing</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="16 / 12"
                data-swiper-slide-index="15"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Software Solution</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="17 / 12"
                data-swiper-slide-index="16"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Business Solution</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="18 / 12"
                data-swiper-slide-index="17"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Video Editing</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="19 / 12"
                data-swiper-slide-index="18"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Custom Web Apps</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="20 / 12"
                data-swiper-slide-index="19"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>App Development</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="21 / 12"
                data-swiper-slide-index="20"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Web Development</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="22/ 12"
                data-swiper-slide-index="21"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Software Solution</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="23 / 12"
                data-swiper-slide-index="22"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Enterprise Apps</span>
                </a>
              </div>
              <div
                className="swiper-slide swiper-slide-next myLogos"
                role="group"
                aria-label="24 / 12"
                data-swiper-slide-index="23"
                style={{ width: "242px", marginRight: "20px" }}
              >
                <a className="service_pill_block" href="service_details.html">
                  <i className="fa-solid fa-check"></i>
                  <span>Devops Services</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer_main_content">
            <div className="row justify-content-lg-between">
              <div className="col-lg-2 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Discover Us</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link to={"/about"}>
                        <h5 style={{ color:"#fff" }}>
                          <span className="icon_list_text">About</span>
                        </h5>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/pricing"}>
                        <h5 style={{ color:"#fff" }}>
                          <span className="icon_list_text">Our Pricing Plan</span>
                        </h5>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/portfolio"}>
                        <h5 style={{ color:"#fff" }}>
                          <span className="icon_list_text">Our Portfolio </span>
                        </h5>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/services"}>
                        <h5 style={{ color:"#fff" }}>
                          <span className="icon_list_text">Our Services</span>
                        </h5>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/career"}>
                        <h5 style={{ color:"#fff" }}>
                          <span className="icon_list_text">Career</span>
                        </h5>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>
                        <h5 style={{ color:"#fff" }}>
                          <span className="icon_list_text"> Contact Us </span>
                        </h5>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Expertise</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link to={"/web-development"}>
                        <h5 style={{ color:"#fff" }}>
                          <span className="icon_list_text">
                            {" "}
                            Web Development{" "}
                          </span>
                        </h5>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/graphic-designing"}>
                        <h5 style={{ color:"#fff" }}>
                          <span className="icon_list_text">
                            {" "}
                            Graphic Designing{" "}
                          </span>
                        </h5>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/search-engine-optimization"}>
                        <h5 style={{ color:"#fff" }}>
                          <span className="icon_list_text">
                            {" "}
                            Search Engine Optimization{" "}
                          </span>
                        </h5>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer_widget pe-lg-3">
                  <h2 className="footer_info_title">Newsletter</h2>
                  <p>
                    Sign up to webpalm weekly newsletter to get the latest
                    updates.
                  </p>
                  <form
                    className="footer_newslatter_2"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <label htmlFor="footer_mail_input">
                      <img
                        src="assets/images/icons/icon_mail_2.svg"
                        alt="Mail SVG Icon"
                      />
                    </label>
                    <input
                      id="footer_mail_input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit">Send</button>
                  </form>
                  <ul className="social_icons_block unordered_list">
                    <li>
                      <a href="https://www.facebook.com/people/Webpalm-Technologies/61587374273329/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/webpalm.tech" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/webpalm/" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@webpalm.tech" target="_blank">
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer_bottom"
          style={{
            backgroundImage: `url(${"assets/images/shapes/shape_space_6.svg"})`,
          }}
        >
          <div className="container d-md-flex align-items-md-center justify-content-md-between">
            <p className="copyright_text m-0">
              Copyright © 2026 WebPalm | All rights reserved.
            </p>
            <ul className="icon_list unordered_list">
              <li>
                <a href="#!">
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  <span className="icon_list_text"> Terms of Up </span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  <span className="icon_list_text"> Privacy Policy </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
