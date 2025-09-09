'use client';
import React, { useEffect } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContactUsStayConnectedSection } from '@/store/features/contactUs/contactusSlice';
import { FaXTwitter } from 'react-icons/fa6';

export default function ReachUs() {
  const dispatch = useDispatch();
  const { stayConnected, loading, error } =
    useSelector((state) => state.contactUs) || {};

  const { data, menu } = stayConnected || {};
  const { company_iframe, address, contact_phone, contact_email } = data || {};

  useEffect(() => {
    dispatch(fetchContactUsStayConnectedSection());
  }, []);

  const socialIcons = [
    { key: 'facebook', icon: <FaFacebookF /> },
    { key: 'twitter', icon: <FaXTwitter /> },
    { key: 'instagram', icon: <FaInstagram /> },
    { key: 'linkedIn', icon: <FaLinkedin /> },
  ];

  return (
    <div className="registred-address ">
      <iframe
        className="reach-us-map"
        title="BioBox Location"
        src={company_iframe}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '12px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="reach-us-parent-content">
        <div className="reachUs-container">
          <h2 className="reachus-title">Reach us through</h2>
          <p className="loc-icon">
            <IoLocationSharp />
            <span className="location-des">
              {address?.split(',').map((part, idx) => (
                <span key={idx}>
                  {part.trim()}
                  <br />
                </span>
              ))}
            </span>
          </p>
          <p className="loc-icon">
            <FaPhone />
            <a href={`tel:${contact_phone}`}>
              <span className="location-des">
                {contact_phone?.replace(/\s+/g, '')}
              </span>
            </a>
          </p>
          <p className="loc-icon">
            <MdEmail />
            <a href={`mailto:${contact_email}`} className="location-des">
              <span className="location-des">{contact_email}</span>
            </a>
          </p>
        </div>
        <div className="social-network">
          <h2 className="reachus-title">Social Networks</h2>

          {menu?.map((socialLink, index) => {
            // pick icon by index OR match by key
            const Icon = socialIcons?.[index]?.icon;
            return (
              <p key={index} className="loc-icon flex items-center gap-2">
                <Link
                  href={socialLink?.url}
                  className="flex items-center gap-2"
                  target="__blank"
                >
                  {Icon && <span>{Icon}</span>}
                  <span className="location-des">{socialLink?.name}</span>
                </Link>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
