'use client';
import React, { useEffect, useRef } from 'react';
import './style.css';
import Image from 'next/image';
import { GoDash } from 'react-icons/go';
import OurServicesForm from './OurServicesForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOurServicesSecondSection } from '@/store/features/ourServices/ourServicesSlice';

export default function OurServices() {
  const hasFetched = useRef(false);

  const dispatch = useDispatch();
  const { ourServicesHeroSection, loading, error, formSubmitMessage } =
    useSelector((state) => state.ourServices) || {};

  const ourServicerHeroSectionInfo = ourServicesHeroSection?.data || [];

  const {
    franchise_image,
    franchise_heading,
    franchise_sub_heading,
    description,
    enquiry_image,
    enquiry_heading,
    enquiry_sub_heading,
    enquiry_description,
  } = ourServicerHeroSectionInfo || {};

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${franchise_image}`;
  const iconImageUrl = `${baseUrl}${imagePath}/${enquiry_image}`;

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchOurServicesSecondSection());
      hasFetched.current = true;
    }
  }, []);

  return (
    <section className="our-services-root-container padding">
      <div className="our-services-col">
        <Image
          src={imageUrl}
          alt="Pharma Franchise Information"
          width={550}
          height={400}
          priority
        />
        <div className="our-services-content align-left">
          <h2>{franchise_heading}</h2>
          <h1>{franchise_sub_heading}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="our-services-col">
        <Image
          src={iconImageUrl}
          alt="Enquiry Form for Pharma Franchise"
          width={550}
          height={400}
        />
        <div className="enquiry-now-services-content">
          <h1 className="exquary-title">
            <GoDash className="enquary-tag" />
            {enquiry_heading}
            <GoDash className="enquary-tag" />
          </h1>
          {/* <h2>{enquiry_sub_heading}</h2> */}
          <p>{enquiry_description}</p>
        </div>
        <OurServicesForm />
      </div>
    </section>
  );
}
