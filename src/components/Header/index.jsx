'use client'
import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import './style.css'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar sub-container`}>
      {/* Logo */}
      <Link href={'/'}>
        <div className="logo">
          <img src="/images/logo.png" alt="BioBox Logo" className="logoImg" />
        </div>
      </Link>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <div className={`navLinks ${menuOpen ? "open" : ""}`}>
        <ul>
          <Link href={'/'}>
            <li className="link active">Home</li>
          </Link>
          <Link href={'/about-us'}>
            <li className="link">About us</li>
          </Link>
          <li className="link">
            Our Products <span className="dropdownArrow">▼</span>
          </li>
          <li className="link">
            Our Services <span className="dropdownArrow">▼</span>
          </li>
          <Link href={'/contact-us'}>
            <li className="link">Contact Us</li>
          </Link>
          <li className="callButton mobileCallButton">
            <FaPhoneAlt />
            <span>82638 85578</span>
          </li>
        </ul>
      </div>

      {/* Call Button */}
      <div className="callButton">
        <FaPhoneAlt />
        <span>82638 85578</span>
      </div>
    </nav>
  );
}
