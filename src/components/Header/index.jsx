'use client'
import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import "./style.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar sub-container">
      <div className="logo">
        <img src="/images/logo.png" alt="BioBox Logo" className="logoImg" />
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navLinks ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="link active">Home</li>
          <li className="link">About us</li>
          <li className="link">
            Our Products <span className="dropdownArrow">▼</span>
          </li>
          <li className="link">
            Our Services <span className="dropdownArrow">▼</span>
          </li>
          <li className="link">Contact Us</li>
          <li className="callButton mobileCallButton">
            <FaPhoneAlt />
            <span>82638 85578</span>
          </li>
        </ul>
      </div>
      <div className="callButton">
        <FaPhoneAlt />
        <span>82638 85578</span>
      </div>
    </nav>
  );
}

