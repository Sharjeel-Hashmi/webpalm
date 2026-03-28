import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const EmailForm = () => {
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
          toast.success("Submission Successful", {
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
    <form ref={form} onSubmit={sendEmail}>
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
  );
};

export default EmailForm;
