import React from "react";
import "./style.css";
import { FaShoppingBasket } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function ContactUsAddress() {
  return (
    <div className="contact-us padding ">
      <div className="contact-us__wrapper sub-container ">
        <div className="contact-us__block">
          <iframe
            className="contact-us__map"
            title="Registered Address"
            src="https://maps.google.com/maps?q=zirakpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="contact-us__content">
            <h2 className="contact-us__title">Registered Address</h2>
            <p className="contact-us__icon">
              <FaShoppingBasket />
              <span className="contact-us__location">
                HB-234, Pabhat, Zirakpur, SAS Nagar Mohali.
              </span>
            </p>
            <p className="contact-us__icon">
              <IoLocationSharp />
              <span className="contact-us__location">
                Zirakpur, Mohali, India
              </span>
            </p>
          </div>
        </div>
        <div className="contact-us__block">
          <iframe
            className="contact-us__map"
            title="Admin Address"
            src="https://maps.google.com/maps?q=zirakpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="contact-us__content">
            <h2 className="contact-us__title">Admin Address</h2>
            <p className="contact-us__icon">
              <FaShoppingBasket />
              <span className="contact-us__location">
                Office 20, Paras Down Square Mall, Zirakpur, Punjab 140603
              </span>
            </p>
            <p className="contact-us__icon">
              <IoLocationSharp />
              <span className="contact-us__location">
                Zirakpur, Mohali, India
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
