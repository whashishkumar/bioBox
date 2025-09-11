'use client';
import React, { useEffect, useRef } from 'react';
import './style.css';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactUsSecondSection } from '@/store/features/contactUs/contactusSlice';

export default function ContactUsAddress() {
  const hasFetched = useRef(false);
  const dispatch = useDispatch();

  const { locationSection } = useSelector((state) => state?.contactUs) || {};
  const {
    registered_iframe,
    registered_heading,
    registered_address,
    registered_local_address,
    admin_iframe,
    admin_heading,
    admin_address,
    admin_local_address,
  } = locationSection?.data || {};

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchContactUsSecondSection());
      hasFetched.current = true;
    }
  }, []);

  return (
    <div className="contact-us padding ">
      <div className="contact-us__wrapper sub-container ">
        <div className="contact-us__block">
          <iframe
            className="contact-us__map"
            title="Registered Address"
            src={registered_iframe}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="contact-us__content">
            <h2 className="contact-us__title">{registered_heading}</h2>
            <p className="contact-us__icon">
              <FaShoppingBasket />
              <span className="contact-us__location">
                {registered_local_address}{' '}
              </span>
            </p>
            <p className="contact-us__icon">
              <IoLocationSharp />
              <span className="contact-us__location">{registered_address}</span>
            </p>
          </div>
        </div>
        <div className="contact-us__block">
          <iframe
            className="contact-us__map"
            title="Admin Address"
            src={admin_iframe}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="contact-us__content">
            <h2 className="contact-us__title">{admin_heading}</h2>
            <p className="contact-us__icon">
              <FaShoppingBasket />
              <span className="contact-us__location">
                {' '}
                {admin_local_address}{' '}
              </span>
            </p>
            <p className="contact-us__icon">
              <IoLocationSharp />
              <span className="contact-us__location">{admin_address}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
