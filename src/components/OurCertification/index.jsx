'use client';
import React, { useEffect, useRef } from 'react';
import PageHeadingTitle from '../PageHeadingTitle';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPageOurCertifacationData } from '@/store/features/ourCertifacation/ourCertifacation';
import Image from 'next/image';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { Loader } from '@/utils/lazyImport';

export default function OurCertification() {
  const hasFetched = useRef(false);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.ourCertifacation || {}
  );
  const ourCetrifacation = data?.data || {};
  const { name, description, images } = ourCetrifacation;

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchLandingPageOurCertifacationData());
      hasFetched.current = true;
    }
  }, [dispatch]);

  const isEmpty = !name && !description && !images;

  return (
    <>
      <GlobalStateHandler
        loading={loading}
        empty={isEmpty}
        loaderComponent={Loader}
      />
      <div className="our-certifacation">
        <PageHeadingTitle
          heading={name}
          subheading={description}
          className="title-heading"
        />
        <div className="certifacation-icon-conatainer sub-container">
          {images?.map((image, index) => {
            if (!image) return null;
            return (
              <Image
                key={index}
                src={image}
                height={140}
                width={140}
                alt="log"
                className="certifacation-icon"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
