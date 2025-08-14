// components/Footer.js
import Image from "next/image";
import "./style.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container sub-container">
        <div className="footer-col footer-logo">
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
        <div className="footer-col footer-links">
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
        <div className="footer-col footer-categories">
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
        <div className="footer-col footer-map">
          <iframe
            title="BioBox Location"
            src="https://maps.google.com/maps?q=zirakpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="320"
            height="320"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        ©2025 Bioboxpharma. All rights reserved
      </div>
    </footer>
  );
}
