'use client';
import Image from 'next/image';
import './style.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFooterData } from '@/store/features/footer/footerSlice';
import Link from 'next/link';

export default function Footer({ className }) {
  const dispatch = useDispatch();
  const { footerInfo, loading, error } =
    useSelector((state) => state?.footerInfo) || {};
  const { data, menu } = footerInfo || {};
  const { social_icons, categories, quick_links } = menu || {};
  const { logo, site_description, address, copyright, company_iframe } =
    data || {};

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${logo}`;

  useEffect(() => {
    dispatch(fetchFooterData());
  }, []);

  return (
    <footer className={`footer  ${className}  hero-sub-container`}>
      <div className="footer-container sub-container ">
        <div className="section-container">
          <div className="col-left">
            <div className="footer-col-bx footer-logo">
              <div className="logo-box">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="BioBox Logo"
                    width={238}
                    height={109}
                  />
                ) : null}
              </div>
              <p className="footer-desc">{site_description}</p>
              <div className="footer-socials">
                {social_icons?.map((icons) => {
                  return (
                    <Link
                      key={icons?.name}
                      href={icons?.url}
                      className="flex items-center gap-2"
                      target="__blank"
                    >
                      <Image
                        className="social-link-img"
                        src={icons?.image}
                        alt={icons?.name}
                        height={22}
                        width={22}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quick_links?.map((link) => {
                  const linkUrl = link.url.startsWith('/')
                    ? link.url
                    : `/${link.url}`;
                  return (
                    <li key={link.id}>
                      <Link href={linkUrl}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className=" footer-categories">
              <h4>Categories</h4>
              <div className="footer-categories-box">
                <ul className="category-list">
                  {categories?.map((link) => {
                    return (
                      <li key={link.id}>
                        <Link href={`/our-products/${link?.slug}`}>
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="footer-map-container">
              <iframe
                className="footer-map"
                title="BioBox Location"
                src={company_iframe}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          ©{new Date().getFullYear()} {copyright}
        </p>
      </div>
    </footer>
  );
}
