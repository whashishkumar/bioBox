'use client';
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPageMenuData } from '@/store/features/landingPage/landingPageSlice';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);

  const { menuItems } = useSelector((state) => state.landingPage);
  const {
    menus = [],
    logo = '/images/logo.png',
    contact = {},
  } = menuItems || {};
  const navBarLinks = menus?.flatMap((menu) => menu.items) || [];

  useEffect(() => {
    dispatch(fetchLandingPageMenuData());
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  const handleLinkClick = (linkUrl) => {
    setMenuOpen(false);
    setActiveLink(linkUrl);
  };

  const ourServicesSubmenu = [
    { id: 's1', title: 'Service 1', url: '/service-1' },
    { id: 's2', title: 'Service 2', url: '/service-2' },
    { id: 's3', title: 'Service 3', url: '/service-3' },
    { id: 's4', title: 'Service 4', url: '/service-4' },
  ];

  const toggleDropdownMobile = (menuTitle, linkUrl) => {
    if (activeDropdown === menuTitle) {
      router.push(linkUrl);
      setActiveDropdown(null);
      setActiveLink(linkUrl);
    } else {
      setActiveDropdown(menuTitle);
    }
  };

  // const renderDropdown = (submenu) => (
  //   <div className="dropdown-menu mobile-dropdown">
  //     {submenu.map((item) => (
  //       <Link
  //         key={item.id}
  //         href={item.url}
  //         className={`dropdown-item ${activeLink === item.url ? 'active' : ''}`}
  //         onClick={() => handleLinkClick(item.url)}
  //       >
  //         {item.title}
  //       </Link>
  //     ))}
  //   </div>
  // );

  return (
    <nav className="navbar sub-container">
      <Link href="/">
        <div className="logo">
          {logo ? (
            <Image
              src={logo}
              alt="BioBox Logo"
              className="logoImg"
              height={89}
              width={193}
            />
          ) : null}
        </div>
      </Link>

      <div className="nav-bar-col-2">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`navLinks ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navBarLinks.map((link) => {
              const linkUrl = link.url.startsWith('/')
                ? link.url
                : `/${link.url}`;
              const hasDropdown = link.title === 'Our Services';
              const submenu = ourServicesSubmenu;
              const isActive =
                activeLink === linkUrl || (!activeLink && pathname === linkUrl);

              return (
                <li
                  key={link.id}
                  className="nav-item"
                  onMouseEnter={
                    !isMobile && hasDropdown
                      ? () => setActiveDropdown(link.title)
                      : undefined
                  }
                  onMouseLeave={
                    !isMobile && hasDropdown
                      ? () => setActiveDropdown(null)
                      : undefined
                  }
                >
                  {hasDropdown && isMobile ? (
                    <button
                      className={`link btn-as-link ${isActive ? 'active' : ''}`}
                      onClick={() => toggleDropdownMobile(link.title, linkUrl)}
                    >
                      {link.title}
                      {/* <span className="dropdownArrow">▼</span> */}
                    </button>
                  ) : (
                    <Link
                      href={linkUrl}
                      className={`link ${isActive ? 'active' : ''}`}
                      onClick={() => handleLinkClick(linkUrl)}
                    >
                      {link.title}
                      {/* {hasDropdown && <span className="dropdownArrow">▼</span>} */}
                    </Link>
                  )}

                  {/* {activeDropdown === link.title &&
                    hasDropdown &&
                    renderDropdown(submenu)} */}
                </li>
              );
            })}
            <li className="callButton mobileCallButton">
              <FaPhoneAlt />
              <span>{contact?.phone}</span>
            </li>
          </ul>
        </div>
        <Link href={`tel:${contact?.phone}`}>
          <div className="callButton">
            <FaPhoneAlt />
            <span>{contact?.phone}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
