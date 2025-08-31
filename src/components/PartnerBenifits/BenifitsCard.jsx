'use client';
import React, { useEffect } from 'react';
import PageHeadingTitle from '../PageHeadingTitle';
import './style.css';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPartnerBenifitsInfo } from '@/store/features/partnerBenifits/partnerBenifitsSlice';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';

const headerObject = {
  heading: 'Benefits of Partner with Us',
  subHeading:
    'Partner with Biobox and enjoy exclusive monopoly rights, comprehensive marketing support, free gifts for doctors, and 24/7 customer assistance to boost your pharmaceutical business',
};

const giftCards = [
  {
    img: '/images/Monoply-Rights.jpg',
    title: 'Monopoly Rights',
    description:
      'Biobox Pharma offers exclusive monopoly rights, ensuring a competitive edge and unrestricted business growth in your territory',
  },
  {
    img: '/images/Marketing-Support.jpg',
    title: 'Marketing Support',
    description:
      'Biobox Pharma provides comprehensive marketing support, including promotional materials and strategies to help you grow your pharmaceutical business',
  },
  {
    img: '/images/Free-Gifts.jpg',
    title: 'Free Gifts',
    description:
      'Biobox Pharma offers free promotional gifts for doctors to strengthen brand recognition and build lasting professional relationships like MR Bags, Diary and Pens.',
  },
  {
    img: '/images/Customer-Support.jpg',
    title: '24/7 Customer Support',
    description:
      'Biobox Pharma provides 24/7 customer support, ensuring prompt assistance and seamless business operations anytime you need it',
  },
];

export default function BenifitsCard() {
  const dispatch = useDispatch();

  const { partnerBenifitsInfo, loading, error } =
    useSelector((state) => state?.partnerBenifitsInfo) || {};

  const { section_heading, section_sub_heading, benefits } =
    partnerBenifitsInfo || {};
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;

  const isEmpty = !partnerBenifitsInfo;

  useEffect(() => {
    dispatch(fetchPartnerBenifitsInfo());
  }, []);

  return (
    <>
      <GlobalStateHandler loading={loading} error={error} isEmpty={isEmpty} />
      <div className="benifits-card-container">
        <div className="sub-container padding">
          <PageHeadingTitle
            heading={section_heading}
            subheading={section_sub_heading}
            className="text-color "
          />
          <div className="cards-wrapper ">
            {benefits?.map((card, index) => {
              const imageUrl = card.image
                ? `${baseUrl}${imagePath}/${card.image}`
                : null;
              return (
                <div className="gift-card col-flex" key={index}>
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={card.title || 'title'}
                      width={230}
                      height={230}
                      className="card-img"
                      loading="lazy"
                    />
                  )}
                  <div className="content-box">
                    <h3 className="card-heading">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
