// components/Footer.js
import Image from "next/image";
import "./style.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer({className}) {
  return (
    <footer className={`footer hero-sub-container ${className} `}  >
      <div className="footer-container padding ">
        <div className="section-container sub-container">
          <div className="col-left">
          <div className="footer-col-bx footer-logo">
          <div className="logo-box">
            <Image
              src="/images/footerlogo.png"
              alt="BioBox Logo"
              width={230}
              height={90}
            />
          </div>
          <p className="footer-desc">
            BioBox Pharma for high-quality, affordable, and innovative
            pharmaceutical products manufactured
            in WHO-GMP-certified facilities. We offer monopoly-based PCD
            franchise opportunities.
          </p>
          <div className="footer-socials">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Products</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className=" footer-categories">
          <h4>Categories</h4>
          <div className="footer-categories-box">
            <ul>
              <li>
                <a href="#">Tablets</a>
              </li>
              <li>
                <a href="#">Softgel</a>
              </li>
              <li>
                <a href="#">Syrups</a>
              </li>
              <li>
                <a href="#">Eye Drops</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Skin Products</a>
              </li>
              <li>
                <a href="#">Sachets</a>
              </li>
              <li>
                <a href="#">Suspensions</a>
              </li>
              <li>
                <a href="#">Capsules</a>
              </li>
            </ul>
          </div>
        </div>
          <div className="footer-map-container">
          <iframe
          className="footer-map"
            title="BioBox Location"
            src="https://maps.google.com/maps?q=zirakpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>   
        </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
         <p>©{new Date().getFullYear()} BioBox. All rights reserved.</p>
      </div>
    </footer>
  );
}
