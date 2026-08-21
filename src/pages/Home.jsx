import React, { useRef, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TypeWriter from "./TypeWriter";
import { Helmet } from "react-helmet-async";
import FluidBackground from "../Components/FluidBackground";
import WhatsAppButton from "../Components/WhatsAppButton";

const servicePriceMap = {
  SEO: ["€200 - €400", "€400 - €800", "€800 - €1,500", "€1,500+"],
  "Content Writing": ["€100 - €250", "€250 - €500", "€500 - €1,000", "€1,000+"],
  "Digital Marketing": [
    "€300 - €600",
    "€600 - €1,200",
    "€1,200 - €2,500",
    "€2,500+",
  ],
  "Website Maintenance": ["€100 - €150", "€150 - €300", "€300 - €600", "€600+"],
  "Social Media Graphics": [
    "€100 - €200",
    "€200 - €400",
    "€400 - €700",
    "€700+",
  ],
  "Website Design & Development": [
    "€500 - €1,000",
    "€1,000 - €2,500",
    "€2,500 - €5,000",
    "€5,000+",
  ],
  "Social Media Management": [
    "€150 - €300",
    "€300 - €600",
    "€600 - €1,200",
    "€1,200+",
  ],
  "Social Media": ["€100 - €250", "€250 - €500", "€500 - €1,000", "€1,000+"],
  "Graphic Designing": [
    "€100 - €300",
    "€300 - €600",
    "€600 - €1,200",
    "€1,200+",
  ],
  Other: ["€100 - €300", "€300 - €700", "€700 - €1,500", "€1,500+"],
};

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
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const publickey = "AuwyFfdV7So5IUKn5";
  const serviceId = "service_q9qqwvk";
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
    setSelectedService("");
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
          content="https://webpalm.ie/assets/images/site_logo/favicon-webpalm.png"
        />
      </Helmet>
      
      
      <Header1 />
      <main className="page_content">
        <section className="software_company_hero_section xb-hidden" style={{ position: 'relative', overflow: 'hidden' }}>
          <FluidBackground />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="content_wrap">
                  <div className="heading_focus_text has_underline d-inline-flex"
                   style={{ color: '#1e3a8a', backgroundImage: `url(${"assets/images/shapes/shape_title_under_line.svg"})` }}>
                    Business Automation & Software Solutions
                  </div>
                  <h1 style={{ color: '#181919' }} className="text-white1">
                    We build custom web solutions to <mark>transform</mark>{" "}
                    businesses worldwide
                  </h1>
                  <TypeWriter />
                  <ul className="step_list text-white unordered_list_block" >
                    <li style={{ color: '#334155' }}> Quality is always first priority</li>
                    <li style={{ color: '#334155' }}>Get to the market on time</li>
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
                      <a className="hotline_block" href="tel:+353 899520026">
                        <span className="hotline_icon">
                          <i
                            className="fa-solid fa-phone-volume"
                            aria-label="Contact phone number"
                          ></i>
                        </span>
                        <span className="hotline_content">
                          <small>CONTACT US</small>
                          <strong className="text-black">+353 899520026</strong>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-none">
                <div className="hero_image">
                  <img src="assets/images/hero/hero-img-2.webp" alt="" />
                  </div>
              </div>
            </div>
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
                      <a href="tel:+353899520026">
                        <span className="icon">
                          <i className="fa-solid fa-phone-volume"></i>
                        </span>
                        <span className="text">+353 899520026</span>
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
                          <label className="input_title" htmlFor="input_name">
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
                          <label className="input_title" htmlFor="input_email">
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
                          <label className="input_title" htmlFor="input_phone">
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
                          <label className="input_title" htmlFor="input_company">
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

                      {/* Service dropdown - NEW */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_service">
                            <i className="fa-regular fa-list-alt"></i>
                          </label>
                          <select
                            id="input_service"
                            className="form-control"
                            name="service"
                            value={selectedService}
                            onChange={handleServiceChange}
                            required
                          >
                            <option value="">Choose Service</option>
                            <option value="I Don't Know, Please Help Me">
                              I Don't Know, Please Help Me
                            </option>
                            {Object.keys(servicePriceMap).map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Price dropdown - NEW, depends on selectedService */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_price">
                            <i className="fa-regular fa-money-bill-1"></i>
                          </label>
                          <select
                            id="input_price"
                            className="form-control"
                            name="price"
                            disabled={!selectedService}
                            required
                          >
                            <option value="">
                              {selectedService
                                ? "Choose Price Range"
                                : "Select a service first"}
                            </option>
                            {selectedService === "I Don't Know, Please Help Me" && (
                              <option value="Not Sure">Not Sure - Please Advise</option>
                            )}
                            {servicePriceMap[selectedService] &&
                              servicePriceMap[selectedService].map((price) => (
                                <option key={price} value={price}>
                                  {price}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_textarea">
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
        
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  );
}