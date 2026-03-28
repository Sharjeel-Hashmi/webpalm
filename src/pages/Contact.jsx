import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import ParallaxSection from "./ParallaxSection";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.7764985156523!2d-6.408724024011781!3d53.38304837197765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867730d037a97e5%3A0x5df69a9dada95e17!2sPhysio%20Fast!5e0!3m2!1sen!2sus!4v1744552275405!5m2!1sen!2sus"; // Your provided URL

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
    <>
      <Helmet>
        {/* <!-- Title --> */}
        <title>Contact Us | WebPalm - Web Development in Dublin, Ireland</title>

        {/* <!-- Meta Tags --> */}
        <meta
          name="description"
          content="Get in touch with WebPalm for professional web development, graphic designing, and SEO services. Visit our Dublin office or contact us via email or phone."
        />
        <meta
          name="keywords"
          content="contact WebPalm, web development Dublin, website design Ireland, SEO services Dublin, get in touch WebPalm, website support Ireland"
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
        <meta property="og:url" content="https://webpalm.ie/contact" />
        <meta
          property="og:title"
          content="Contact Us | WebPalm - Web Development in Dublin, Ireland"
        />
        <meta
          property="og:description"
          content="Reach out to WebPalm for all your web development and digital needs. Visit us in Dublin or connect through phone or email."
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
          content="WebPalm office contact details Dublin"
        />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | WebPalm - Web Development in Dublin, Ireland"
        />
        <meta
          name="twitter:description"
          content="Reach out to WebPalm for all your web development and digital needs. Visit us in Dublin or connect through phone or email."
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
            backgroundImage: `url(${"assets/images/shapes/bg_pattern_4.svg"})`,
          }}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Contact Us</h1>
            <p className="text-white mt-2 myText">
              We’d love to hear from you! Whether you have a question, need
              support, or want to discuss a project, our team is here to help.
              Reach out to us through the form below or connect with us directly
              via email or phone. Let’s build something great together!
            </p>
          </div>
        </section>
        {/* <!-- Page Banner Section - End
        ================================================== --> */}

        {/* <!-- Contact Section - Start
        ================================================== --> */}
        <section className="contact_section section_space bg-light">
          <div className="container">
            <div className="contact_info_box row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="iconbox_block text-center"
                  style={{ height: "266px" }}
                >
                  <div className="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_map_mark_2.svg"
                      alt="Map Mark SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Location</h3>
                    <p className="mb-0">
                      9 Limelawn Row, Coolmine, Dublin 15, D15, V6PW, Ireland
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="iconbox_block text-center"
                  style={{ height: "266px" }}
                >
                  <div className="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_calling_2.svg"
                      alt="Calling SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Contact</h3>
                    <p className="mb-0">+353 894205316</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="iconbox_block text-center"
                  style={{ height: "266px" }}
                >
                  <div className="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_mail_3.svg"
                      alt="User Check SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Email</h3>
                    <p className="mb-0">info@webpalm.ie</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="iconbox_block text-center"
                  style={{ height: "266px" }}
                >
                  <div className="iconbox_icon">
                    <img
                      src="assets/images/icons/icon_calendar_2.svg"
                      alt="Calendar SVG Icon"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Visit Us</h3>
                    <p className="mb-0">
                      Monday to Saturday
                      <br /> 10:00 AM - 06:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section_space pb-0">
              <div className="row justify-content-lg-between">
                <div className="col-lg-7">
                  <div className="contact_form mb-0">
                    <h3 className="details_item_info_title mb-1">
                      Send Us A Message
                    </h3>
                    <p className="mb-5">
                      Give us chance to serve and bring magic to your brand.
                    </p>
                    <div className="row">
                      <form className="myform" ref={form} onSubmit={sendEmail}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="input_title" for="input_name">
                              Full Name
                            </label>
                            <input
                              id="input_name"
                              className="form-control"
                              type="text"
                              name="name"
                              placeholder="Enter Your Full Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="input_title" for="input_email">
                              Your Email{" "}
                            </label>
                            <input
                              id="input_email"
                              className="form-control"
                              type="email"
                              name="email"
                              placeholder="Enter Your Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="input_title" for="input_company">
                              Your Company Name
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
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="input_title" for="input_phone">
                              Your Phone
                            </label>
                            <input
                              id="input_phone"
                              className="form-control"
                              type="tel"
                              name="phone"
                              placeholder="Your Phone Number"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-group">
                            <label className="input_title" for="input_textarea">
                              Message
                            </label>
                            <textarea
                              id="input_textarea"
                              className="form-control"
                              name="message"
                              placeholder="How can we help you?"
                            ></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <span
                              className="btn_label"
                              data-text="Send Message"
                            >
                              Send Message
                            </span>
                            <span className="btn_icon">
                              {" "}
                              <i className="fa-solid fa-arrow-up-right"></i>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="gmap_canvas ps-lg-5">
                    <iframe
                      src={mapUrl}
                      width="600" // Adjust as needed
                      height="450" // Adjust as needed
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Contact Section - End
        ================================================== --> */}

        {/* <!-- Call To Action Section - Start
        ================================================== --> */}
        <ParallaxSection />
        {/* <section
          className="calltoaction_section parallaxie"
         style= {{backgroundImage: `url(${'assets/images/backgrounds/bg_image_1.webp'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center -22px', transformStyle:'preserve-3d'}}
          >
          <div className="container text-center" >
            <div className="heading_block text-white">
              <h2 className="heading_text">Ready to Work, Let's Chat</h2>
              <p className="heading_description mb-0">
                Our team of experts is ready to collaborate with you every step
                of the way, from initial consultation to implementation.
              </p>
            </div>
            <a className="btn btn-primary" href="contact.html">
              <span className="btn_label" data-text="Contact Us Today!"
                >Contact Us Today!</span
              >
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </a>
          </div>
        </section>  */}
        {/* <!-- Call To Action Section - End
        ================================================== --> */}
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
      <Footer2 />
    </>
  );
}
