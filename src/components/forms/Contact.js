import React from "react";
import "../styles/contact.css";

const ContactUs = () => {
  return (
    <div className="container mt-5 ">
  <div className="row justify-content-center">
    <div className="col-lg-6">
      <div className="card p-5 contact-card">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactUs;
