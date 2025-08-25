'use client';
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPageMenuData } from '@/store/features/landingPage/landingPageSlice';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const { menuItems } = useSelector((state) => state.landingPage);
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

  const ourProductSubmenu = [
    {
      id: 'p1',
      title: 'Critical Care Range',
      url: '/our-products/critical-care-range',
    },
    { id: 'p2', title: 'Derma Care', url: '/our-products/derma-care' },
    { id: 'p3', title: 'Diabetic', url: '/our-products/diabetic' },
    { id: 'p4', title: 'ENT Range', url: '/our-products/ent-range' },
  ];

  const ourServicesSubmenu = [
    { id: 'p1', title: 'sercice 1', url: '/sercice 1' },
    { id: 'p2', title: 'sercice 2', url: '/sercice 2' },
    { id: 'p3', title: 'sercice 3', url: '/sercice 3' },
    { id: 'p4', title: 'sercice 4', url: '/sercice 4' },
  ];

  const extractpath = pathname.replace(/^\//, '');

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
              navBarLinks.map((link) => (
                <li
                  key={link.id}
                  className="nav-item"
                  onMouseEnter={() => setHoveredMenu(link.title)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    className={`link ${
                      extractpath === link.url ? 'active' : ''
                    }`}
                    href={link.url}
                    onClick={handleLinkClick}
                  >
                    {link.title}
                    {(link.title === 'Our Products' ||
                      link.title === 'Our Services') && (
                      <span className="dropdownArrow">▼</span>
                    )}
                  </Link>

                  {hoveredMenu === 'Our Products' &&
                    link.title === 'Our Products' && (
                      <div
                        className="dropdown-menu"
                        onMouseEnter={() => setHoveredMenu('Our Products')}
                        onMouseLeave={() => setHoveredMenu(null)}
                      >
                        {ourProductSubmenu.map((item) => (
                          <Link
                            href={item.url}
                            key={item.id}
                            className="dropdown-item"
                            prefetch={false}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}

                  {hoveredMenu === 'Our Services' &&
                    link.title === 'Our Services' && (
                      <div
                        className="dropdown-menu"
                        onMouseEnter={() => setHoveredMenu('Our Services')}
                        onMouseLeave={() => setHoveredMenu(null)}
                      >
                        {ourServicesSubmenu.map((item) => (
                          <Link
                            href={item.url}
                            key={item.id}
                            className="dropdown-item"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                </li>
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
