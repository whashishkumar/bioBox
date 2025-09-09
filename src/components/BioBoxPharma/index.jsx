'use client';
import React, { useEffect } from 'react';
import './style.css';
import { PiEyeBold } from 'react-icons/pi';
import { IoIosCheckbox } from 'react-icons/io';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAboutUsCeoSectionInfo,
  fetchAboutUsWelcomePageData,
  fetchAboutUsWhyWeAreUnique,
} from '@/store/features/aboutUs/aboutUsPageSlice';
import Link from 'next/link';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { Loader } from '@/utils/lazyImport';

const bioData = {
  welcomeText: 'Welcome',
  heading: 'BioBox Pharma',
  description: `<strong>Biobox Pharma</strong> is a leading <strong>pharmaceutical manufacturing company</strong>  dedicated to quality, innovation, and compliance. We specialize in producing high-quality medicines and healthcare products, with a <strong>strong focus on gynecology, cardiology, neurology, and dermatology.</strong> Our mission is to enhance lives globally through <strong> advanced and reliable pharmaceutical solutions.</strong>`,
  image: {
    src: '/images/Welcome-img-1.jpg',
    alt: 'banner-image',
    height: 230,
    width: 300,
  },
  imageSrc: {
    src: '/images/Welcome-img-2.jpg',
    alt: 'banner-image',
    height: 300,
    width: 219,
  },
};

const bioDataCeo = {
  welcomeText: 'Meet Our CEO',
  heading: 'Mr. Gulshan Rawat',
  description: `BioBox, an ISO 9001-certified company, is led by Mr. Gulshan Rawat (Managing Director), who brings over 24 years of expertise in the pharmaceutical industry.  Under his guidance, we have emerged as a prominent player in this highly competitive sector, driven by a commitment to quality and excellence in delivering the best products to our clients.`,
  subDescription:
    'As a , our diverse product portfolio spans key therapeutic areas, including anti-infectives, nutritional supplements, gastrointestinal health, pain management,cardiovascular & diabetes care, dermatology, urology , and the central nervous system (CNS). ',
  image: {
    src: '/images/CEO.jpg',
    alt: 'banner-image',
    height: 230,
    width: 300,
  },
  imageSrc: {
    src: '/images/demo.avif',
    alt: 'banner-image',
    height: 300,
    width: 219,
  },
};

const coreValues = [
  {
    icon: <PiEyeBold />,
    title: 'Our Core Value',
    description:
      'Integrity, Innovation, Quality, and Commitment to Healthcare Excellence',
  },
  {
    icon: <PiEyeBold />,
    title: 'Our Mission',
    description:
      'To deliver advanced pharmaceutical solutions with a focus on global healthcare improvement.',
  },
];

const uniqueData = {
  heading: 'Why We Are Unique',
  points: [
    {
      title: 'Certified Quality Assurance',
      description:
        'We are an ISO 9001-certified company, committed to delivering superior pharmaceutical products that meet global standards.',
    },
    {
      title: 'Expert Leadership',
      description:
        'Guided by Mr. Gulshan Rawat, a seasoned industry professional with over 24 years of experience.',
    },
    {
      title: 'Comprehensive Product Range',
      description:
        'Offering a diverse portfolio across key therapeutic areas, including anti-infectives, cardiovascular, CNS, and more.',
    },
    {
      title: 'Advanced Manufacturing Facilities',
      description:
        'Equipped with cutting-edge technology and stringent quality controls at our Himachal Pradesh facilities.',
    },
    {
      title: 'Reliable Distribution & Support',
      description:
        'Supported by a strong network of trusted distributors and healthcare professionals, ensuring seamless supply and customer satisfaction.',
    },
  ],
  image: {
    src: '/images/Why-We-Are-Unique-1.jpg',
    alt: 'banner-image',
    height: 230,
    width: 300,
  },
  imageSrc: {
    src: '/images/Why-We-Are-Unique-2.jpg',
    alt: 'banner-image',
    height: 300,
    width: 219,
  },
};
export default function BioBoxPharma() {
  const dispatch = useDispatch();
  const {
    aboutUsWelcomePageData,
    WhyWeAreUnique,
    aboutUsCeoSectionData,
    loading,
    error,
  } = useSelector((state) => state?.aboutUs) || {};

  const {
    first_title,
    second_title,
    description,
    core_value_title,
    core_value_desc,
    mission_title,
    about_mission_desc,
    about_short_image,
    about_large_image,
    about_button_text,
    about_button_link,
  } = aboutUsWelcomePageData?.data || {};

  const { heading, cio_name, meet_desc, ceo_image } =
    aboutUsCeoSectionData?.data || {};

  const { section_heading, points, images } = WhyWeAreUnique || {};
  const { image_1, image_2 } = images || {};

  const isEmpty =
    first_title ||
    second_title ||
    description ||
    core_value_title ||
    core_value_desc ||
    mission_title ||
    about_mission_desc ||
    about_short_image ||
    about_large_image ||
    about_button_text ||
    about_button_link;

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${about_short_image}`;
  const bgImageUrl = `${baseUrl}${imagePath}/${about_large_image}`;
  const whyweUniqueImageUrl = `${baseUrl}${imagePath}/${image_1}`;
  const whyWeUniqueImageUrl = `${baseUrl}${imagePath}/${image_2}`;
  const ceoProfileImage = `${baseUrl}${imagePath}/${ceo_image}`;
  useEffect(() => {
    dispatch(fetchAboutUsWelcomePageData());
    dispatch(fetchAboutUsWhyWeAreUnique());
    dispatch(fetchAboutUsCeoSectionInfo());
  }, []);

  return (
    <>
      <GlobalStateHandler
        loading={loading}
        empty={isEmpty}
        loaderComponent={Loader}
      />
      <div className="hero-sub-container parent-container-bio-box">
        {/* =================== Bio Section =================== */}
        <div className="sub-container bio-flex  padding padding-top margin-top">
          <div className="left-col content-container-box ">
            <p className="welcome-text">{first_title}</p>
            <h2 className="heading-title">{second_title}</h2>
            <p className="bio-desc">{description}</p>
            <div className="bio-flex tab-view core-value">
              <div className="eye-icon">
                <PiEyeBold />
              </div>
              <div>
                <h3 className="value-heading">{core_value_title}</h3>
                <p className="value-desc">{core_value_desc}</p>
              </div>
            </div>
            <div className="bio-flex tab-view core-value">
              <div className="eye-icon">
                <PiEyeBold />
              </div>
              <div>
                <h3 className="value-heading">{mission_title}</h3>
                <p className="value-desc">{about_mission_desc}</p>
              </div>
            </div>
          </div>
          <div className="right-col">
            <div className="image-wrapper">
              {bgImageUrl ? (
                <Image
                  className="hero-bg-image"
                  src={imageUrl}
                  alt={bioData.image.alt || 'Product'}
                  width={bioData.image.width}
                  height={bioData.image.height}
                />
              ) : null}
              {bgImageUrl ? (
                <Image
                  src={bgImageUrl}
                  alt={bioData.imageSrc.alt || 'Product'}
                  width={bioData.imageSrc.width}
                  height={bioData.imageSrc.height}
                  className="overlay-img"
                />
              ) : null}
            </div>

            <div className="about-btn-container">
              <Link href={`${about_button_link}`} className="more-about-btn">
                {about_button_text}
              </Link>
            </div>
          </div>
        </div>

        {/* =================== CEO Section =================== */}
        <div className="sub-container bio-flex padding padding-top gap">
          <div className="left-col content-container-box width ceo-content-section ceo-content">
            <p className="welcome-text">{heading}</p>
            <h2 className="heading-title title-color">{cio_name}</h2>
            <p className="bio-desc bio-des-width">{meet_desc}</p>
          </div>
          <div className="right-col change-order width">
            <div className="image-wrapper">
              {ceoProfileImage ? (
                <Image
                  className="hero-bg-image"
                  src={ceoProfileImage}
                  alt={bioDataCeo.image.alt || 'Product'}
                  width={bioDataCeo.image.width}
                  height={bioDataCeo.image.height}
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* =================== Unique Section =================== */}
        <div className="sub-container bio-flex padding">
          <div className="left-col content-container-box text-alignment">
            <h2 className="heading-title title-color">{section_heading}</h2>
            {points?.map((point, index) => (
              <div className=" core-value margin-none" key={index}>
                <div className="check-box">
                  <IoIosCheckbox />
                </div>
                <div>
                  <h3 className="value-heading">{point.title}</h3>
                  <p className="value-desc">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="right-col">
            <div className="image-wrapper">
              {whyweUniqueImageUrl ? (
                <Image
                  className="hero-bg-image"
                  src={whyweUniqueImageUrl}
                  alt={uniqueData.image.alt || 'Product'}
                  width={uniqueData.image.width}
                  height={uniqueData.image.height}
                />
              ) : null}
              {whyWeUniqueImageUrl ? (
                <Image
                  src={whyWeUniqueImageUrl}
                  alt={uniqueData.imageSrc.alt || 'Product'}
                  width={uniqueData.imageSrc.width}
                  height={uniqueData.imageSrc.height}
                  className="unique-image-wrapper"
                />
              ) : null}
            </div>
            <div className="about-btn-container">
              <Link href={`${about_button_link}`} className="more-about-btn">
                {about_button_text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
