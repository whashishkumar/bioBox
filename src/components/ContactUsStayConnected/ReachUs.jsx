'use client';
import React, { useEffect } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContactUsSecondSection,
  fetchContactUsStayConnectedSection,
} from '@/store/features/contactUs/contactusSlice';
import Image from 'next/image';

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
    { key: 'facebook', icon: <FaTwitter /> },
    { key: 'twitter', icon: <FaInstagram /> },
    { key: 'linkedin', icon: <FaPinterest /> },
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
                <React.Fragment key={idx}>
                  {part.trim()}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </p>
          <p className="loc-icon">
            <FaPhone />
            <span className="location-des">{contact_phone}</span>
          </p>
          <p className="loc-icon">
            <MdEmail />
            <span className="location-des">{contact_email}</span>
          </p>
        </div>
        <div className="social-network">
          <h2 className="reachus-title">Social Networks</h2>
          {menu?.map((socialLinks) => {
            return (
              <p className="loc-icon">
                <Link href={''}>
                  {/* <FaFacebookF /> */}
                  <Image
                    src={socialLinks?.image}
                    alt={socialLinks?.name}
                    height={30}
                    width={30}
                  />
                  <span className="location-des">{socialLinks?.name}</span>
                </Link>
              </p>
            );
          })}

          {/* <p className="loc-icon">
            <Link href={''}>
              <FaFacebookF />
              <span className="location-des">Facebook</span>
            </Link>
          </p>
          <p className="loc-icon">
            <Link href={''}>
              <FaTwitter />
              <span className="location-des">Twitter</span>
            </Link>
          </p>
          <p className="loc-icon">
            <Link href={''}>
              <FaInstagram />
              <span className="location-des">Instagram</span>
            </Link>
          </p>
          <p className="loc-icon">
            <Link href={''}>
              <FaPinterest />
              <span className="location-des">Pinterest</span>
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}
