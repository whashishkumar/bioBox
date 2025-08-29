import React from 'react';
import './style.css';
import Image from 'next/image';
import { GoDash } from 'react-icons/go';
import OurServicesForm from './OurServicesForm';

export default function OurServices() {
  return (
    <section className="our-services-root-container padding">
      <div className="our-services-col">
        <Image
          src="/images/demo.avif"
          alt="Pharma Franchise Information"
          width={550}
          height={400}
          priority
        />
        <div className="our-services-content align-left">
          <h2>Become PCD Pharma Franchise Owner Today</h2>
          <h1>Fill This Form for More Info</h1>
          <p>
            We are a Chandigarh-based pharma manufacturing company offering
            high-quality pharmaceutical products. We provide PCD Pharma
            Franchise with monopoly rights across India. Partner with us for a
            profitable and growth-oriented business opportunity!
          </p>
        </div>
      </div>

      <div className="our-services-col">
        <Image
          src="/images/demo.avif"
          alt="Enquiry Form for Pharma Franchise"
          width={550}
          height={400}
        />
        <div className="enquiry-now-services-content">
          <h1 className="exquary-title">
            <GoDash className="enquary-tag" />
            Enquiry Now
            <GoDash className="enquary-tag" />
          </h1>
          <h2>Fill This Form for More Info</h2>
          <p>
            Fill out this form, and our executive will get in touch with you
            soon. We’re here to assist you with all your queries and business
            needs!
          </p>
        </div>
        <OurServicesForm />
      </div>
    </section>
  );
}
