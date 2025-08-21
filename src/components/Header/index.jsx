'use client';
import { useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about-us' },
    { name: 'Our Products', path: '/products' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar sub-container">
      <Link href="/">
        <div className="logo">
          <img src="/images/logo.png" alt="BioBox Logo" className="logoImg" />
        </div>
      </Link>
      <div className="nav-bar-col-2">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`navLinks ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <Link href={link.path} key={link.name} onClick={handleLinkClick}>
                <li
                  className={`link ${pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                  {(link.name === 'Our Products' ||
                    link.name === 'Our Services') && (
                    <span className="dropdownArrow">▼</span>
                  )}
                </li>
              </Link>
            ))}
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
      </div>
    </nav>
  );
}
