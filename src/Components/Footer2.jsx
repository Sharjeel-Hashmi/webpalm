import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Footer2() {
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
      e.target.reset();
  };

  return (
    <div>
      <footer class="site_footer footer_layout_1 overflow-hidden">
        <div
          class="content_box"
          style={{
            backgroundImage: `url(${"assets/images/shapes/bg_pattern_3.svg"})`,
          }}
        >
          <div class="container">
            <div class="diract_contact_links text-white">
              <div class="iconbox_block layout_icon_left">
                <div class="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_mail.svg"
                    alt="Mail SVG Icon"
                  />
                </div>
                <div class="iconbox_content">
                  <h3 class="iconbox_title">Write to us</h3>
                  <a href="mailto:info@webpalm.ie">
                    <p class="mb-0">info@webpalm.ie</p>
                  </a>
                </div>
              </div>
              <div class="iconbox_block layout_icon_left">
                <div class="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_calling.svg"
                    alt="Calling Check SVG Icon"
                  />
                </div>
                <div class="iconbox_content">
                  <h3 class="iconbox_title">Call Us</h3>
                  <a href="tel:+353 899520026">
                    <p class="mb-0">+353 899520026</p>
                  </a>
                </div>
              </div>
              <div class="iconbox_block layout_icon_left">
                <div class="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_map_mark.svg"
                    alt="Map Mark Check SVG Icon"
                  />
                </div>
                <div class="iconbox_content">
                  <h3 class="iconbox_title">Our Office</h3>
                  <a href="https://www.google.com/maps/place/9+Limelawn+Row,+Coolmine,+Dublin+15,+D15+V6PW,+Ireland/@53.3830484,-6.408724,17z/data=!3m1!4b1!4m6!3m5!1s0x486772a511c116ed:0x3edd56c577f137b7!8m2!3d53.3830452!4d-6.4061491!16s%2Fg%2F11wnvgb50b?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D">
                    <p class="mb-0">
                      9 Limelawn Row, Coolmine, Dublin 15,
                      <br /> D15, V6PW, Ireland
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div class="footer_main_content">
              <div class="row justify-content-lg-between">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="footer_widget pe-md-3">
                    <h2 class="footer_info_title">Newsletter</h2>
                    <p>
                      Sign up to Webpalm weekly newsletter to get the latest
                      updates.
                    </p>
                    <form
                      class="footer_newslatter"
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
                      <button type="submit">
                        <i class="fa-solid fa-paper-plane"></i>
                      </button>
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
                <div class="col-lg-2 col-md-6 col-sm-6">
                  <div class="footer_widget">
                    <h3 class="footer_info_title">Services</h3>
                    <ul class="icon_list unordered_list_block">
                      <li>
                        <Link to={"/web-development"}>
                          <a style={{ fontSize: "22px" }}>
                            <span class="icon_list_text">
                              {" "}
                              Web Development{" "}
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/graphic-designing"}>
                          <a style={{ fontSize: "22px" }}>
                            <span class="icon_list_text">
                              {" "}
                              Graphic Designing{" "}
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/search-engine-optimization"}>
                          <a style={{ fontSize: "22px" }}>
                            <span class="icon_list_text">
                              Search Engine Optimization
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="footer_widget">
                    <h3 class="footer_info_title">Information</h3>
                    <ul class="icon_list unordered_list_block">
                      <li>
                        <Link to={"/"}>
                          <a style={{ fontSize: "22px" }}>
                            <span class="icon_list_text"> Home </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/pricing"}>
                          <a style={{ fontSize: "22px" }}>
                            <span class="icon_list_text"> Our Pricing Plan </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/about"}>
                          <a style={{ fontSize: "22px" }}>
                            <span class="icon_list_text"> About </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/portfolio"}>
                          <a style={{ fontSize: "22px" }}>
                            <span class="icon_list_text"> Portfolio </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/career"}>
                          <a style={{ fontSize: "22px" }}>
                            <span class="icon_list_text"> Career </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>
                          <a style={{ fontSize: "22px" }}>
                            <span class="icon_list_text">Contact Us</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="container d-md-flex align-items-md-center justify-content-md-between">
            <p class="copyright_text m-0">
              Copyright © 2026 WebPalm | All rights reserved.
            </p>
            <p class="copyright_text m-0">
              Developed by
              <Link to={"/"}>
                <a target="_blank"> WebPalm </a>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
