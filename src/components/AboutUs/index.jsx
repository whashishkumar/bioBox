'use client';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { useEffect } from 'react';
import { fetchAboutUsData } from '@/store/features/aboutUs/aboutUsPageSlice';
import Image from 'next/image';

const aboutUsa = {
  image: '/images/doctor.png',
  leftFeatures: [
    {
      title: 'Strict Quality Practices',
      icon: '/icons/quality.svg',
    },
    {
      title: 'New Advanced Instruments',
      icon: '/icons/tools.svg',
    },
    {
      title: 'Customized Lab Solutions',
      icon: '/icons/lab.svg',
    },
  ],
  mainTitle: 'About Us',
  description:
    'Biobox Pharma, emphasizing its mission to provide high-quality pharmaceutical products and its dedication to improving healthcare outcomes.',
  bulletPoints: [
    'High-Quality Products',
    'Monopoly Rights',
    'Marketing & Promotional Support',
    'Affordable Pricing',
    'Third-Party Manufacturing',
  ],
  note: 'While we believe we are more than just numbers, the depth of our laboratories is pretty impressive.',
};

export default function AboutUs() {
  const dispatch = useDispatch();
  const { data = {} } = useSelector((state) => state?.aboutUs?.aboutUs || {});
  const {
    description = '',
    heading = '',
    feature = [],
    main_image,
    icon_image,
  } = data;

  useEffect(() => {
    dispatch(fetchAboutUsData());
  }, []);

  return (
    <section className="sub-container about-section padding-y-axis">
      <div className="about-container padding ">
        <div className="about-left">
          <div className="container-image-sec">
            {icon_image && (
              <Image
                src={icon_image}
                height={200}
                width={280}
                alt="Doctor"
                className="about-image-quality"
              />
            )}
            {main_image && (
              <Image
                src={main_image}
                height={500}
                width={550}
                alt="Doctor"
                className="about-image-bg"
              />
            )}
          </div>
        </div>

        <div className="about-right">
          <h2 className="about-title"> {heading}</h2>
          <p className="about-desc">{description}</p>
          <div className="bullet-wrapper">
            {feature?.map((point, idx) => (
              <div key={idx} className="bullet-item">
                <span className="check-icon">✔</span>
                <span className="bullet-text">{point}</span>
              </div>
            ))}
          </div>
          <div className="about-note">
            <Image
              src={'/images/aboutbg.png'}
              height={58}
              width={58}
              alt="icon"
            />
            <p className="about-note-desc">{aboutUsa.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
