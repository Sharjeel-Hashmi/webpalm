import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | WebPalm</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="The page you are looking for does not exist or has been moved. Explore WebPalm's web development, graphic design, and SEO services."
        />
      </Helmet>
      <Header />
      <main className="page_content">
        <section
          className="page_banner_section text-center section_space"
          style={{
            backgroundImage: `url("assets/images/shapes/bg_pattern_3.svg")`,
            padding: "120px 0",
          }}
        >
          <div className="container">
            <h1
              className="page_title mb-3 text-white"
              style={{ fontSize: "5rem", fontWeight: "700" }}
            >
              404
            </h1>
            <h2 className="text-white mb-4">Oops! Page Not Found</h2>
            <p
              className="text-white mb-5 mx-auto"
              style={{ maxWidth: "600px", fontSize: "1.1rem" }}
            >
              The page you're looking for might have been removed, had its name
              changed, or is temporarily unavailable. Let's get you back on
              track.
            </p>
            <div className="btns_group d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/" className="btn btn-primary">
                <span className="btn_label" data-text="Back to Home">
                  Back to Home
                </span>
                <span className="btn_icon ms-2">
                  <i className="fa-solid fa-house"></i>
                </span>
              </Link>
              <Link to="/services" className="btn btn-outline-light">
                <span className="btn_label" data-text="Our Services">
                  Our Services
                </span>
                <span className="btn_icon ms-2">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                <span className="btn_label" data-text="Contact Us">
                  Contact Us
                </span>
                <span className="btn_icon ms-2">
                  <i className="fa-solid fa-phone"></i>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer2 />
    </>
  );
}
