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
  const { stayConnected } = useSelector((state) => state.contactUs) || {};

  const { data, menu } = stayConnected || {};
  const { title, heading, sub_heading } = data || {};

  const fetchData = async () => {
    try {
      await dispatch(fetchContactUsStayConnectedSection()).unwrap();
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);
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
            <ReachUs data={data} menu={menu} />
          </div>
          <div className="contact-us-form">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
