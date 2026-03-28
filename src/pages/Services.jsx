import React from 'react'
import './Home.css'
import Footer2 from '../Components/Footer2'
import Header from '../Components/Header'
import ParallaxSection from './ParallaxSection'


export default function Services() {
  return (
   <>
   <Header/>
   <main className="page_content">
        {/* <!-- Page Banner Section - Start
        ================================================== --> */}
        <section
          className="page_banner_section text-center"
          style={{backgroundImage: `url(${'assets/images/site_logo/site_logo_01.jpg'})`,backgroundBlendMode:'overlay'}}
        >
          <div className="container">
            <h1 className="page_title mb-0 text-white">Services Details</h1>
            <p className="text-white mt-2 myText">Use innovative software development to spur innovation in your business. Resolve corporate issues to produce noteworthy outcomes.</p>
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
                alt="Service Details Image"
              />
              <a
                className="video_btn ripple_effect"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </a>
            </div>
            <h2 className="details_item_title">
              Network Infrastructure and Design
            </h2>
            <p>
            Modern businesses are built on network infrastructure and design, which forms the basis for all digital operations. Our IT solution company specialises in creating dependable and strong network designs that are customised to each individual client's demands. We know how crucial a well-designed network infrastructure is to promoting scalability, security, and efficiency in all sizes of businesses. Our team of seasoned experts collaborates directly with customers.
            </p>
            <p>
            We approach network architecture holistically, taking into account elements like future expansion potential, scalability, security protocols, and bandwidth requirements. Using cutting-edge technologies and industry best practices,
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
        </section> 
        */}

        {/* <!-- Call To Action Section - End
        ================================================== --> */}
      </main>
      <Footer2/>
   </>
  )
}
