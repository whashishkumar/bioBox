'use client';
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPageMenuData } from '@/store/features/landingPage/landingPageSlice';
import { Loader } from '@/utils/lazyImport';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();

  const { menuItems, loading } = useSelector((state) => state.landingPage);
  const {
    menus = [],
    logo = '/images/logo.png',
    contact = {},
  } = menuItems || {};
  const navBarLinks = menus?.flatMap((menu) => menu.items) || [];

  useEffect(() => {
    dispatch(fetchLandingPageMenuData());
  }, [dispatch]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar sub-container">
      <Link href="/">
        <div className="logo">
          <img src={logo} alt="BioBox Logo" className="logoImg" />
        </div>
      </Link>
      <div className="nav-bar-col-2">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`navLinks ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navBarLinks &&
              navBarLinks?.map((link) => (
                <Link href={link.url} key={link.id} onClick={handleLinkClick}>
                  <li
                    className={`link ${pathname === link.url ? 'active' : ''}`}
                  >
                    {link.title}
                    {(link.title === 'Our Products' ||
                      link.title === 'Our Services') && (
                      <span className="dropdownArrow">▼</span>
                    )}
                  </li>
                </Link>
              ))}
            <li className="callButton mobileCallButton">
              <FaPhoneAlt />
              <span>{contact?.phone}</span>
            </li>
          </ul>
        </div>
        <div className="callButton">
          <FaPhoneAlt />
          <span>{contact?.phone}</span>
        </div>
      </div>
    </nav>
  );
}
