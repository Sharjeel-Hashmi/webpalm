import React, { useRef, useEffect } from "react";
import EmailForm from "./EmailForm"; // Importing the new EmailForm component

import emailjs from "@emailjs/browser";
import Swiper, { Navigation, Pagination } from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";
import FunFactCounter from "./FunFactCounter";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TypeWriter from "./TypeWriter";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".review_onecol_carousel", {
      loop: true,
    });
  }, []);

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const form = useRef();

  const publickey = "AuwyFfdV7So5IUKn5";
  const serviceId = "service_ze2ns0r";
  const templateId = "template_1jwnsxc";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publickey,
      })
      .then(
        () => {
          toast.success("Submission Successfull", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
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
    <>
      <Helmet>
        {/* <!-- Title --> */}
        <title>Web App & Software Development in Dublin | WebPalm</title>

        {/* <!-- Meta Tags --> */}
        <meta
          name="description"
          content="WebPalm builds responsive websites, mobile apps, and custom software tailored for businesses in Ireland and beyond. Start your digital transformation today."
        />
        <meta
          name="keywords"
          content="WebPalm, web development Dublin, custom software Ireland, mobile app development, UI UX design, business automation, React development, IT consulting Dublin"
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
        <meta property="og:url" content="https://webpalm.ie/" />
        <meta
          property="og:title"
          content="Web App & Software Development in Dublin | WebPalm"
        />
        <meta
          property="og:description"
          content="Get beautiful websites, custom apps, and automation tools by WebPalm – trusted by 50+ businesses globally. Based in Dublin, delivering excellence worldwide."
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
          content="WebPalm custom software and web development"
        />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Web & Software Development in Dublin | WebPalm"
        />
        <meta
          name="twitter:description"
          content="Get beautiful websites, custom apps, and automation tools by WebPalm – trusted by 50+ businesses globally. Based in Dublin, delivering excellence worldwide."
        />
        <meta
          name="twitter:image"
          content="https://webpalm.ie/assets/images/site_logo/site_logo_002.png"
        />
      </Helmet>
      
      <Header1 />
      <main className="page_content">
        <section className="software_company_hero_section xb-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="content_wrap">
                  <div
                    className="heading_focus_text has_underline text-white d-inline-flex"
                    style={{
                      backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                    }}
                  >
                    Business Automation & Software Solutions
                  </div>
                  <h1 className="text-white">
                    We build custom web solutions to <mark>transform</mark>{" "}
                    businesses worldwide
                  </h1>
                  <TypeWriter />
                  <ul className="step_list text-white unordered_list_block">
                    <li> Quality is always first priority</li>
                    <li>Get to the market on time</li>
                  </ul>
                  <ul className="btns_group unordered_list p-0 justify-content-start">
                    <li>
                      <Link to={"/contact"}>
                        <a className="btn">
                          <span
                            className="btn_label"
                            data-text="Contact Us Today!"
                          >
                            Contact Us TODAY!
                          </span>
                          <span className="btn_icon">
                            <i
                              className="fa-solid fa-arrow-up-right"
                              aria-label="External link to contact page"
                            ></i>
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a className="hotline_block" href="tel:+353 894205316">
                        <span className="hotline_icon">
                          <i
                            className="fa-solid fa-phone-volume"
                            aria-label="Contact phone number"
                          ></i>
                        </span>
                        <span className="hotline_content">
                          <small>CONTACT US</small>
                          <strong className="text-white">+353 894205316</strong>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4" style={{ marginTop: "50px" }}>
                <div className="pricing_block myblock">
                  <div class="best_plan">
                    <img
                      src="assets/images/icons/best_offer.svg.svg"
                      alt="Best Offer"
                    />
                  </div>
                  <div class="table_head tbl-hd flex-column">
                    {/* <div
                      class="pricing_price_value txtcolor"
                    >
                      <span class="pricing_annually">
                        <h2 class="text-primary">Grab Offer</h2>
                      </span>
                    </div> */}
                    <div class="pricing_block_title">
                      <h2 class="heading_text">
                        <mark>Best Offer Live Now</mark>
                      </h2>
                      <h5>Enhance Your Brand with a professional Web App</h5>
                      {/* <p class="pricing_package_description mb-0">
                        Step up your game with a dynamic, easy-to-manage
                        website.
                      </p> */}
                    </div>
                  </div>
                  <ul class="icon_list unordered_list_block d-inline-flex myicon_list">
                    <li>
                      <span class="icon_list_icon">
                        <i class="fa-regular fa-circle-check"></i>
                      </span>
                      <span class="icon_list_text">
                        Beautiful - Fully-responsive and optimized Web App
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
                        Contact Form + Click-to-Call Integration
                      </span>
                    </li>
                  </ul>

                  <a class="btn btn-light" href="https://wa.me/353894205316">
                    <span class="btn_label" data-text="Get Free Quote">
                      Get Started Now
                    </span>
                    <span class="btn_icon">
                      <i class="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-none">
                <div className="engine_image">
                  <div className="image_wrap_1">
                    <img
                      src="assets/images/hero/circle_engine_1.webp"
                      alt="Engine"
                    />
                  </div>
                  <div className="image_wrap_2">
                    <img
                      src="assets/images/hero/circle_engine_2.webp"
                      alt="Engine"
                    />
                  </div>
                  <div className="image_wrap_3">
                    <img
                      src="assets/images/hero/circle_engine_3.webp"
                      alt="Engine"
                    />
                  </div>
                  <div className="image_wrap_4">
                    <img
                      src="assets/images/hero/circle_engine_4.png"
                      alt="Engine"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shape_image_1">
            <img src="assets/images/hero/shape_image_1.webp" alt="Engine" />
          </div>
          <div className="shape_image_2">
            <img src="assets/images/hero/shape_image_2.webp" alt="Engine" />
          </div>
          <div className="shape_image_3">
            <img src="assets/images/hero/shape_image_3.webp" alt="Engine" />
          </div>
          <div className="shape_image_4">
            <img src="assets/images/hero/shape_image_4.webp" alt="Engine" />
          </div>
        </section>

        {/* <!-- Feature Partners Section - Start
        ================================================== --> */}
        <div className="feature_partners_section">
          <div className="container position-relative">
            <div className="title_text text-white">Our Featured Affiliates</div>
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
                      alt="Techco - Client Logo"
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
                      src="assets/images/clients/client_logo_2.webp"
                      alt="Techco - Client Logo"
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
                      src="assets/images/clients/client_logo_3.webp"
                      alt="Techco - Client Logo"
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
                      src="assets/images/clients/client_logo_4.webp"
                      alt="Techco - Client Logo"
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
                      src="assets/images/clients/client_logo_5.webp"
                      alt="Techco - Client Logo"
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
                      src="assets/images/clients/client_logo_6.webp"
                      alt="Techco - Client Logo"
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
                      src="assets/images/clients/client_logo_7.webp"
                      alt="Techco - Client Logo"
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
                      src="assets/images/clients/client_logo_1.webp"
                      alt="Techco - Client Logo"
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
                      src="assets/images/clients/client_logo_2.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_3.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_4.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_5.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_6.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_7.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_1.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_2.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_3.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_4.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_5.webp"
                      alt="Webpalm - Client Logo"
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
                      src="assets/images/clients/client_logo_6.webp"
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
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
                      alt="Webpalm - Client Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
          <div className="container">
            <div className="heading_block text-center">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{
                  backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                }}
              >
                Our Services
              </div>
              <h2 className="heading_text mb-0">
                How We Can <mark>Help</mark> Your Business ?
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="service_block_2">
                  <div className="service_icon">
                    <img
                      src="assets/images/icons/icon_code.svg"
                      alt="Techco - Service icon"
                    />
                  </div>
                  <h3 className="service_title">
                    <a href="service_details.html">
                      Custom Software Development
                    </a>
                  </h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Design of software architectures
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        System integration services
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Data migration services
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Modernization of Older application
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service_block_2">
                  <div className="service_icon">
                    <img
                      src="assets/images/icons/icon_programming_tree.svg"
                      alt="Techco - Service icon"
                    />
                  </div>
                  <h3 className="service_title">
                    <a href="service_details.html">
                      IT Consulting and Auditing
                    </a>
                  </h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Align IT strategy with business goals
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Identify and mitigate security vulnerabilities
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Audit cloud systems for scalability optimization
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Secure data with advanced encryption and audits
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service_block_2">
                  <div className="service_icon">
                    <img
                      src="assets/images/icons/icon_monitor_2.svg"
                      alt="Techco - Service icon"
                    />
                  </div>
                  <h3 className="service_title">
                    <a href="service_details.html">Web App Development</a>
                  </h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Web app development services
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Web portal development services
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Website development services
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Offshore web development
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service_block_2">
                  <div className="service_icon">
                    <img
                      src="assets/images/icons/icon_phone.svg"
                      alt="Techco - Service icon"
                    />
                  </div>
                  <h3 className="service_title">
                    <a href="service_details.html">Mobile App Development</a>
                  </h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Android development services
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        iOS app development services
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Mobile application design services
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Enterprise mobile app development
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service_block_2">
                  <div className="service_icon">
                    <img
                      src="assets/images/icons/icon-editing1.svg"
                      alt="Techco - Service icon"
                    />
                  </div>
                  <h3 className="service_title">
                    <a href="service_details.html">Graphic Design and Video Editing
                    </a>
                  </h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        PixelPerfection UI/UX Design
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Creative branding solutions
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Custom logo designing
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Professional video editing
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                      Brands video content creation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service_block_2">
                  <div className="service_icon">
                    <img
                      src="assets/images/icons/icon_programming.svg"
                      alt="Techco - Service icon"
                    />
                  </div>
                  <h3 className="service_title">
                    <a href="service_details.html">
                      Maintenance and Customer Support
                    </a>
                  </h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Customized support plans
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        Proactive issue detection & fixes{" "}
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        {" "}
                        Real-time repair tracking
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"></i>
                      </span>
                      <span className="icon_list_text">
                        24/7 human support (no bots)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="decoration_item shape_image_1">
            <img
              src="assets/images/shapes/shape_line_5.svg"
              alt="Techco Shape"
            />
          </div>
          <div className="decoration_item shape_image_2">
            <img
              src="assets/images/shapes/shape_line_6.svg"
              alt="Techco Shape"
            />
          </div>
          <div className="decoration_item shape_image_3">
            <img
              src="assets/images/shapes/shape_space_1.svg"
              alt="Techco Shape"
            />
          </div>
          <div className="decoration_item shape_image_4">
            <img
              src="assets/images/shapes/shape_angle_1.webp"
              alt="Techco Shape Angle"
            />
          </div>
          <div className="decoration_item shape_image_5">
            <img
              src="assets/images/shapes/shape_angle_2.webp"
              alt="Techco Shape Angle"
            />
          </div>
        </section>

        <section
          className="about_and_case_section section_space section_decoration bg-dark"
          style={{
            backgroundImage: `url(${"assets/images/backgrounds/bg_image_2.webp"})`,
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-7 order-lg-last">
                <div className="about_image_2">
                  <div className="image_wrap">
                    <img
                      src="assets/images/about/about_image_6.webp"
                      alt="Image of a man working at WebPalm About"
                    />
                  </div>
                  <div
                    className="about_funfact_info"
                    style={{
                      backgroundImage: `url(${"assets/images/shapes/shape_bg_1.webp"})`,
                    }}
                  >
                    <div className="customer_count">
                      <ul className="unordered_list">
                        <li>
                          <img
                            src="assets/images/avatar/avatar_1.webp"
                            alt="Customer Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/avatar/avatar_2.webp"
                            alt="Customer Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/avatar/avatar_3.webp"
                            alt="Customer Avatar"
                          />
                        </li>
                        <li>
                          <span>50+</span>
                        </li>
                      </ul>
                      <p className="mb-0"> Satisfied Clients</p>
                    </div>
                    <FunFactCounter /> {/* ========FUNFACTCOUNTER====== */}
                    {/* <a className="btn btn-primary" href="#">
                      <span className="btn_label" data-text="Learn More"
                        >Learn More</span
                      >
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a> */}
                    <div className="icon_globe">
                      <img
                        src="assets/images/icons/icon_global.svg"
                        alt="Icon Globe"
                      />
                    </div>
                  </div>
                  <div className="space_line">
                    <img
                      src="assets/images/shapes/shape_line.webp"
                      alt="Shape Line"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block mb-0 text-white">
                    <div
                      className="heading_focus_text has_underline d-inline-flex"
                      style={{
                        backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                      }}
                    >
                      About Us
                    </div>
                    <h2 className="heading_text">
                      WebPalm <mark>Mission & Goal</mark>
                    </h2>
                    <p className="heading_description mb-0">
                      Our goal at WebPalm is to enable companies by providing
                      them with cutting-edge software solutions that improve
                      productivity, encourage expansion, and propel success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-170">
              <div className="heading_block text-center text-white">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                  }}
                >
                  Work Showcase
                </div>
                <h2 className="heading_text mb-0">
                  Our Most Recent <mark>Case</mark> Highlights
                </h2>
              </div>

              <div className="case_studies_wrapper">
                <div className="case_study_block">
                  <div className="case_study_image">
                    <img
                      src="assets/images/case/propvista.jpg"
                      alt="Propvista real estate dashboard with client tracking, 
                            property sales metrics, and activity analytics"
                    />
                  </div>
                  <div className="case_study_content">
                    <ul className="category_list unordered_list text-uppercase"></ul>
                    <h3 className="case_title">
                      <h3>PropVista CRM</h3>
                    </h3>
                    <p>
                      We Created a smart, scalable ReactJS platform specifically
                      for real estate firms was part of the software development
                      process for PropVista CRM. Agents may handle client
                      communications, sales pipelines, and real estate listings
                      in one location with the platform's assistance. In order
                      to streamline the sales process and increase productivity,
                      the project concentrated on developing an intuitive
                      dashboard with real-time data on listings, viewing
                      patterns, and transaction progress.
                    </p>
                    <ul className="icon_list unordered_list">
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Industry: </strong>
                          Real Estate Software
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Country:</strong> United
                          Arab Emirates,Dubai
                        </span>
                      </li>
                    </ul>
                    <ul
                      className="case_technologies unordered_list"
                      data-text="Core Technologies:"
                    >
                      <li>
                        <img
                          src="assets/images/icons/icon_javascript.svg"
                          alt="JavaScript"
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icons/icon_react_js.svg"
                          alt="RaectJS"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="case_study_block">
                  <div className="case_study_image">
                    <img
                      src="assets/images/case/fitflow.jpg"
                      alt="Weshwe fitness app dashboard displaying weekly goals (75% achieved), live class schedules, activity metrics (Noga Beefuulizchert), and user profile sections with nutrition and workout tracking data"
                    />
                  </div>
                  <div className="case_study_content">
                    <ul className="category_list unordered_list text-uppercase"></ul>
                    <h3 className="case_title">
                      <h3>Fitflow</h3>
                    </h3>
                    <p>
                      FitFlow is a dynamic online platform that offers wellness
                      tracking, live virtual classes, and customized workout
                      routines to empower users. It combines nutrition advice,
                      workout personalization, and progress tracking into a
                      single, seamless experience for gyms, trainers, and
                      individuals.
                    </p>
                    <ul className="icon_list unordered_list">
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Industry: </strong>
                          Fitness & Wellness
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Country: </strong>USA,
                          California
                        </span>
                      </li>
                    </ul>
                    <ul
                      className="case_technologies unordered_list"
                      data-text="Core Technologies:"
                    >
                      <li>
                        <img
                          src="assets/images/icons/icon_laravel.svg"
                          alt="Laravel"
                          style={{ maxWidth: "40px" }}
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icons/icon_mysql.png"
                          style={{ maxWidth: "40px" }}
                          alt="MySql"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="case_study_block">
                  <div className="case_study_image">
                    <img
                      src="assets/images/case/Edunest.jpg"
                      alt="Edunest e-learning dashboard with course progress tracking, upcoming classes, MySQL integration, and learning metrics"
                    />
                  </div>
                  <div className="case_study_content">
                    <ul className="category_list unordered_list text-uppercase"></ul>
                    <h3 className="case_title">
                      <h3>EduNest – Online Learning Platform</h3>
                    </h3>
                    <p>
                      EduNest is an innovative online learning platform that
                      redefines digital education and was developed using Python
                      (Django). By offering a user-friendly interface for
                      creating courses, engaging live sessions, and thorough
                      progress tracking, the project empowers educators and
                      students. EduNest seeks to revolutionize the conventional
                      learning process into an effective, captivating digital
                      journey with its sleek, contemporary style and flawless
                      operation.
                    </p>
                    <ul className="icon_list unordered_list">
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Industry: </strong>
                          Education & E-Learning
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Country: </strong>
                          Ireland, Dublin
                        </span>
                      </li>
                    </ul>
                    <ul
                      className="case_technologies unordered_list"
                      data-text="Core Technologies:"
                    >
                      <li>
                        <img
                          src="assets/images/case/icon_python.svg"
                          alt="Angular"
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/icons/icon_django.png"
                          alt="Elephent"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="decoration_item shape_image_1">
            <img
              src="assets/images/shapes/shape_space_2.svg"
              alt="Techco Shape"
            />
          </div>
        </section>

        <section className="process_technology_review_section bg-light section_decoration">
          <div className="container">
            {/*========= Section space=========  */}
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
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_graphic_design"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Graphic Design
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
                              src="assets/images/icons/icon_nextjs.png"
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
                    role="tabpanel">
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
                  {/* ===============Graphic Design ======== */}
                  <div
                    className="tab-pane fade"
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

            <div className="row">
              <div className="col-lg-4">
                <div className="deals_winner_customers">
                  <h3 className="title_text">
                    Webpalm wins deals with over <mark>50+</mark> clients.
                  </h3>
                  <div className="row">
                    <div className="col-6">
                      <div className="review_short_info">
                        <div className="icon">
                          <img
                            src="assets/images/icons/icon_c.svg"
                            alt="C SVG Icon"
                          />
                        </div>
                        <ul className="rating_block unordered_list">
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                        </ul>
                        <div className="review_counter">
                          Out of more than <b>200+</b> reviews
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="review_short_info">
                        <div className="icon">
                          <img
                            src="assets/images/icons/icon_g2.svg"
                            alt="C SVG Icon"
                          />
                        </div>
                        <ul className="rating_block unordered_list">
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                          </li>
                        </ul>
                        <div className="review_counter">
                          Out of more than <b>250+</b> reviews
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="review_onecol_wrapper">
                  <div className="review_onecol_carousel swiper  swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div
                      className="swiper-wrapper"
                      id="swiper-wrapper-fff8a8a10382547d6"
                      aria-live="off"
                    >
                      <div
                        className="swiper-slide my-slider"
                        role="group"
                        aria-label="1 / 3"
                      >
                        <div className="review_block_2">
                          <h3 className="review_title">
                            “Doctor’s Appointment Booking System”
                          </h3>
                          <p className="review_commtent pb-3 px-2">
                            "Incredible experience! with Webpalm built a
                            seamless booking system for my clinic that’s cut
                            no-shows by 30%. The design is clean, intuitive for
                            patients, and integrates perfectly with our
                            calendar. They delivered ahead of schedule and even
                            added emergency slots last-minute. Highly recommend
                            them to any medical practice!"
                          </p>
                          <div class="d-md-flex justify-content-md-between">
                            <div class="review_admin">
                              <div class="review_admin_info">
                                <h4 class="review_admin_name">Nethan George</h4>
                                <span class="review_admin_designation">
                                  Doctor
                                </span>
                                <div class="review_admin_country">
                                  <span class="country_flag">
                                    <img
                                      src="assets/images/flag/ireland_flag.png"
                                      alt="Ireland Flag"
                                    />
                                  </span>
                                  <span class="country_text">
                                    Dublin, Ireland
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide my-slider"
                        role="group"
                        aria-label="2 / 3"
                      >
                        <div className="review_block_2">
                          <h3 className="review_title">
                            “Restaurant Online Ordering System”
                          </h3>
                          <p className="review_commtent pb-3 px-2">
                            "AMAZING work! Our new ordering site (with table
                            reservations + takeout) feels like it’s part of our
                            restaurant’s vibe. Customers rave about how easy it
                            is to customize meals. Sales doubled in 2 months!
                            Webpalm is a joy to work with—patient, creative, and
                            full of genius ideas. I look forward to hiring them
                            again for future projects."
                          </p>
                          <div class="d-md-flex justify-content-md-between">
                            <div class="review_admin">
                              <div class="review_admin_info">
                                <h4 class="review_admin_name">Bob Martin</h4>
                                <span class="review_admin_designation">
                                  Restaurant Owner
                                </span>
                                <div class="review_admin_country">
                                  <span class="country_flag">
                                    <img
                                      src="assets/images/flag/uk_flag.png"
                                      alt="United Kingdom Flag"
                                    />
                                  </span>
                                  <span class="country_text">Bristol, UK</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide my-slider"
                        role="group"
                        aria-label="3 / 3"
                      >
                        <div className="review_block_2">
                          <h3 className="review_title">
                            “Job Posting Website”
                          </h3>
                          <p className="review_commtent pb-3 px-2">
                            "Hiring Webpalm was the best decision for our
                            recruitment startup. They created a dynamic,
                            user-friendly site with smart filters and employer
                            dashboards. Their attention to detail (like
                            real-time application tracking) blew us away.
                            Delivered on time, under budget—will refer them to
                            everyone!"
                          </p>
                          <div class="d-md-flex justify-content-md-between">
                            <div class="review_admin">
                              <div class="review_admin_info">
                                <h4 class="review_admin_name">Brody Finn</h4>
                                <span class="review_admin_designation">
                                  Recruiter for IT Companies
                                </span>
                                <div class="review_admin_country">
                                  <span class="country_flag">
                                    <img
                                      src="assets/images/flag/ireland_flag.png"
                                      alt="Ireland Flag"
                                    />
                                  </span>
                                  <span class="country_text">
                                    Cork, Ireland
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide my-slider"
                        role="group"
                        aria-label="1 / 3"
                      >
                        <div className="review_block_2">
                          <h3 className="review_title">
                            “Travel Agency Website”
                          </h3>
                          <p className="review_commtent pb-3 px-2">
                            "Webpalm designed a travel site that’s as
                            wanderlust-inducing as our tours. Features like
                            instant itinerary downloads and mobile-friendly maps
                            made our clients swoon. Delivered quality work fast,
                            no stress. 100% refer them to anyone! and will hire
                            them again for sure"
                          </p>
                          <div class="d-md-flex justify-content-md-between">
                            <div class="review_admin">
                              <div class="review_admin_info">
                                <h4 class="review_admin_name">
                                  Michael Anderson
                                </h4>
                                <span class="review_admin_designation">
                                  Entrepreneur
                                </span>
                                <div class="review_admin_country">
                                  <span class="country_flag">
                                    <img
                                      src="assets/images/flag/usa-flag.png"
                                      alt="USA Flag"
                                    />
                                  </span>
                                  <span class="country_text">Taxes, USA</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide my-slider"
                        role="group"
                        aria-label="2 / 3"
                      >
                        <div className="review_block_2">
                          <h3 className="review_title">
                            “Custom Online Store”
                          </h3>
                          <p className="review_commtent pb-3 px-2">
                            "Same as Always! Great experience from start to
                            finish! They built my clothing brand site with
                            secure payments, wishlists, and SEO that actually
                            works. The design? So chic it feels like shopping
                            in-store. Projects always on time, communication
                            flawless. If you want your business to shine online,
                            hire them!"
                          </p>
                          <div class="d-md-flex justify-content-md-between">
                            <div class="review_admin">
                              <div class="review_admin_info">
                                <h4 class="review_admin_name">Alannah Aran</h4>
                                <span class="review_admin_designation">
                                  Owner of Clothing Store
                                </span>
                                <div class="review_admin_country">
                                  <span class="country_flag">
                                    <img
                                      src="assets/images/flag/ireland_flag.png"
                                      alt="Ireland Flag"
                                    />
                                  </span>
                                  <span class="country_text">
                                    Dublin, Ireland
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div
                        className="swiper-slide my-slider"
                        role="group"
                        aria-label="3 / 3">
                       
                      </div> */}
                    </div>
                    <div className="carousel_arrows_nav">
                      <button
                        type="button"
                        className="r1cc-swiper-button-prev"
                        onClick={goPrev}
                      >
                        <i className="fa-solid fa-arrow-left"></i>
                      </button>
                      <button
                        type="button"
                        className="r1cc-swiper-button-next"
                        onClick={goNext}
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="decoration_item shape_image_1">
            <img
              src="assets/images/shapes/shape_line_2.svg"
              alt="Techco Shape"
            />
          </div>
          <div className="decoration_item shape_image_2">
            <img
              src="assets/images/shapes/shape_line_3.svg"
              alt="Techco Shape"
            />
          </div>
          <div className="decoration_item shape_image_3">
            <img
              src="assets/images/shapes/shape_line_4.svg"
              alt="Techco Shape"
            />
          </div>
          <div className="decoration_item shape_image_4">
            <img
              src="assets/images/shapes/shape_space_3.svg"
              alt="Techco Shape"
            />
          </div>
        </section>
        {/* <!-- Process Technology Review Section - End
        ================================================== --> */}

        {/* <!-- Pricing Section - Start
        ================================================== --> */}
        <section class="pricing_section section_space  bg-light">
          <div className="container margincontainer">
            <h2 class="heading_text text-center mb-5"> Our Pricing Packages</h2>
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
                    {/* <div class="pricing_price_value bg-primary-subtle text-primary">
                      <span class="pricing_annually">
                        <del>€250</del> <mark>€180</mark>
                        <sub>
                          You'll Save <u>€70</u>
                        </sub>
                      </span>
                    </div> */}

                      <Link to={"/contact"}>
                        <a class="btn btn-primary">
                         <span class="btn_label" data-text="Start Now">
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
                        Beautifully designed static website (6 to 8 pages)
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
                        Delivered within 5 days
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
                    {/* <div class="pricing_price_value bg-primary-subtle text-primary">
                      <span class="pricing_annually">
                        <del>€400</del> <mark>€320</mark>
                        <sub>
                          You'll Save <u>€80</u>
                        </sub>
                      </span>
                    </div> */}

                     <Link to={"/contact"}>
                        <a class="btn btn-primary">
                         <span class="btn_label" data-text="Start Now">
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
                        Beautiful Mobile-Responsive website (upto 12 pages)
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
                        Delivered within 10 days
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
                    {/* <div class="pricing_price_value bg-primary-subtle text-primary">
                      <span class="pricing_annually">
                        <del>€700</del> <mark>€550</mark>
                        <sub>
                          You'll Save <u>€150</u>
                        </sub>
                      </span>
                    </div> */}
                     <Link to={"/contact"}>
                        <a class="btn btn-primary">
                         <span class="btn_label" data-text="Start Now">
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
                        Delivered within 2–3 weeks
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
            <div class="row">
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
                    {/* <div class="pricing_price_value bg-primary-subtle text-primary">
                      <span class="pricing_annually">
                        <del>€1200</del> <mark>€900</mark>
                        <sub>
                          You'll Save <u>€300</u>
                        </sub>
                      </span>
                    </div> */}
                     <Link to={"/contact"}>
                        <a class="btn btn-primary">
                         <span class="btn_label" data-text="Start Now">
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
            </div>
          </div>
        </section>

        <section className="contact_section pb-80 bg-light section_decoration">
          <div className="container">
            <div className="row text-center mb-4">
              <h2 className="heading_text">
                <mark>Let's Build Together</mark>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="contact_method_box">
                  <div className="heading_block">
                    <div
                      className="heading_focus_text has_underline d-inline-flex mb-3"
                      style={{
                        backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})`,
                      }}
                    >
                      You Are Here
                    </div>
                    <h2 className="heading_text mb-0">Let's Start</h2>
                    <p className="heading_description mb-0">
                      Initiating Your Journey to Achievement and Development.
                    </p>
                  </div>
                  <ul className="contact_method_list unordered_list_block">
                    <li>
                      <a href="tel:+353  894205316">
                        <span className="icon">
                          <i className="fa-solid fa-phone-volume"></i>
                        </span>
                        <span className="text">+353 894205316</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@webpalm.ie">
                        <span className="icon">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        <span className="text">info@webpalm.ie</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/place/9+Limelawn+Row,+Coolmine,+Dublin+15,+D15+V6PW,+Ireland/@53.3830484,-6.408724,17z/data=!3m1!4b1!4m6!3m5!1s0x486772a511c116ed:0x3edd56c577f137b7!8m2!3d53.3830452!4d-6.4061491!16s%2Fg%2F11wnvgb50b?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D">
                        <span className="icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <span className="text">
                          9 Limelawn Row, Coolmine, Dublin 15, D15, V6PW,
                          Ireland
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="support_step unordered_list_block">
                    <li>
                      <span className="serial_number">01</span>
                      <span className="text">Describe your needs</span>
                    </li>
                    <li>
                      <span className="serial_number">02</span>
                      <span className="text">
                        Discuss them with our professionals
                      </span>
                    </li>
                    <li>
                      <span className="serial_number">03</span>
                      <span className="text">Request a quote for free</span>
                    </li>
                    <li>
                      <span className="serial_number">04</span>
                      <span className="text">Launch the project</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="instant_contact_form">
                  <div className="small_title">
                    <i className="fa-solid fa-envelope-open-text"></i>
                    Let's Get in Touch!
                  </div>
                  <h3 className="form_title">
                    Message us, and we'll discuss about your project right away.
                  </h3>
                  <div className="row">
                    <form className="myform" ref={form} onSubmit={sendEmail}>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" for="input_name">
                            <i className="fa-regular fa-user"></i>
                          </label>
                          <input
                            id="input_name"
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" for="input_email">
                            <i className="fa-regular fa-envelope"></i>
                          </label>
                          <input
                            id="input_email"
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" for="input_phone">
                            <i className="fa-regular fa-phone-volume"></i>
                          </label>
                          <input
                            id="input_phone"
                            className="form-control"
                            type="tel"
                            name="phone"
                            placeholder="Your Phone No."
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" for="input_company">
                            <i className="fa-regular fa-globe"></i>
                          </label>
                          <input
                            id="input_company"
                            className="form-control"
                            type="text"
                            name="companyname"
                            placeholder="Your Company Name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="input_title" for="input_textarea">
                            <i className="fa-regular fa-comments"></i>
                          </label>
                          <textarea
                            id="input_textarea"
                            className="form-control"
                            name="message"
                            placeholder="How can we help you?"
                          ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          <span className="btn_label" data-text="Send Request">
                            Send Request
                          </span>
                          <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="decoration_item shape_image_1">
            <img
              src="assets/images/shapes/shape_line_5.svg"
              alt="Techco Shape"
            />
          </div>
          <div className="decoration_item shape_image_2">
            <img
              src="assets/images/shapes/shape_line_6.svg"
              alt="Techco Shape"
            />
          </div>
        </section>
        <a
          className="hotline_block"
          href="https://wa.me/353894205316"
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
            <box-icon
              name="whatsapp"
              type="logo"
              animation="tada"
              color="white"
              size="lg"
            ></box-icon>
          </span>
        </a>
      </main>
      <Footer />
    </>
  );
}
