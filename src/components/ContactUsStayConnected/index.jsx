import React from 'react';
import PageHeadingTitle from '../PageHeadingTitle';
import './style.css';
import ReachUs from './ReachUs';
import ContactUsForm from './ContactUsForm';

const headerObject = {
  heading: 'Stay Connected',
  subHeading:
    '"Contact us for PCD Pharma Franchise, Third-Party Manufacturing, and bulk orders of high-quality medicines. Partner with us for reliable and cost-effective pharmaceutical solutions!"',
};

export default function StayConnected() {
  return (
    <div className="hero-sub-container">
      <div className="sub-container  padding">
        <p className="tag-line">We'd love to hear from you</p>
        <PageHeadingTitle
          heading={headerObject.heading}
          subheading={headerObject.subHeading}
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
