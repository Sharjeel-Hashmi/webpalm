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
          toast.success("Email is successfully sent", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message: " + error.text, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
  };

  return (
    <div>
      <footer className="site_footer footer_layout_1 overflow-hidden">
        <div
          className="content_box"
          style={{
            backgroundImage: `url("assets/images/shapes/bg_pattern_3.svg")`,
          }}
        >
          <div className="container">
            <div className="diract_contact_links text-white">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_mail.svg"
                    alt="Mail SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Write to us</h3>
                  <a href="mailto:info@webpalm.ie">
                    <p className="mb-0">info@webpalm.ie</p>
                  </a>
                </div>
              </div>
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_calling.svg"
                    alt="Phone Call Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Call Us</h3>
                  <a href="tel:+353899520026">
                    <p className="mb-0">+353 899520026</p>
                  </a>
                </div>
              </div>
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_map_mark.svg"
                    alt="Map Marker Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Our Office</h3>
                  <a
                    href="https://www.google.com/maps/place/9+Limelawn+Row,+Coolmine,+Dublin+15,+D15+V6PW,+Ireland"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="mb-0">
                      9 Limelawn Row, Coolmine, Dublin 15,
                      <br /> D15 V6PW, Ireland
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer_main_content">
              <div className="row justify-content-lg-between">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget pe-md-3">
                    <h2 className="footer_info_title">Newsletter</h2>
                    <p>
                      Sign up to WebPalm weekly newsletter to get the latest
                      updates.
                    </p>
                    <form
                      className="footer_newslatter"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <label htmlFor="footer_mail_input_2">
                        <img
                          src="assets/images/icons/icon_mail_2.svg"
                          alt="Mail SVG Icon"
                        />
                      </label>
                      <input
                        id="footer_mail_input_2"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <button type="submit" aria-label="Subscribe to newsletter">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                    <ul className="social_icons_block unordered_list">
                      <li>
                        <a
                          href="https://www.facebook.com/people/Webpalm-Technologies/61587374273329/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/webpalm.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/webpalm/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.tiktok.com/@webpalm.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="TikTok"
                        >
                          <i className="fa-brands fa-tiktok"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_info_title">Services</h3>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <Link to="/web-development" className="footer_link">
                          <span className="icon_list_text">Web Development</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/digital-social-media-marketing" className="footer_link">
                          <span className="icon_list_text">Digital & Social Media Marketing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/website-maintenance" className="footer_link">
                          <span className="icon_list_text">Website Maintenance</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/software-development" className="footer_link">
                          <span className="icon_list_text">Software Development</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/graphic-designing" className="footer_link">
                          <span className="icon_list_text">Graphic Design</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/search-engine-optimization" className="footer_link">
                          <span className="icon_list_text">SEO & GEO</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="footer_link">
                          <span className="icon_list_text">All Services</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_info_title">Information</h3>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <Link to="/" className="footer_link">
                          <span className="icon_list_text">Home</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="footer_link">
                          <span className="icon_list_text">About Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/pricing" className="footer_link">
                          <span className="icon_list_text">Our Pricing Plan</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/portfolio" className="footer_link">
                          <span className="icon_list_text">Portfolio</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/career" className="footer_link">
                          <span className="icon_list_text">Career</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="footer_link">
                          <span className="icon_list_text">Contact Us</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_info_title">Legal & Trust</h3>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <Link to="/privacy-policy" className="footer_link">
                          <span className="icon_list_text">Privacy Policy</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/terms-of-service" className="footer_link">
                          <span className="icon_list_text">Terms of Service</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cookie-policy" className="footer_link">
                          <span className="icon_list_text">Cookie Policy</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container d-md-flex align-items-md-center justify-content-md-between">
            <p className="copyright_text m-0">
              Copyright © 2026 WebPalm | All rights reserved.
            </p>
            <p className="copyright_text m-0">
              Crafted by <Link to="/">WebPalm</Link> | Dublin, Ireland
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
