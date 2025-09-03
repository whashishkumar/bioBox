'use client';
import React, { useEffect } from 'react';
import PageHeadingTitle from '../PageHeadingTitle';
import './style.css';
import ReachUs from './ReachUs';
import ContactUsForm from './ContactUsForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactUsStayConnectedSection } from '@/store/features/contactUs/contactusSlice';

const headerObject = {
  heading: 'Stay Connected',
  subHeading:
    '"Contact us for PCD Pharma Franchise, Third-Party Manufacturing, and bulk orders of high-quality medicines. Partner with us for reliable and cost-effective pharmaceutical solutions!"',
};

export default function StayConnected() {
  const dispatch = useDispatch();
  const { stayConnected, loading, error } =
    useSelector((state) => state.contactUs) || {};

  const { data, menu } = stayConnected || {};
  const { title, heading, sub_heading } = data || {};
  console.log(data, 'stayConnected');

  useEffect(() => {
    dispatch(fetchContactUsStayConnectedSection());
  }, []);
  return (
    <div className="hero-sub-container">
      <div className="sub-container  padding">
        <p className="tag-line">{title}</p>
        <PageHeadingTitle
          heading={heading}
          subheading={sub_heading}
          className="title-connect"
        />
        <div className="col-section-contact-us padding-y-axis">
          <div className="reach-us">
            <ReachUs />
          </div>
          <div className="contact-us-form">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
