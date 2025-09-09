'use client';
import Image from 'next/image';
import './style.css';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPdcBusinessOppurnity } from '@/store/features/pcdBusinessOpportunity/pcdBusinessOpportunitySlice';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { Loader } from '@/utils/lazyImport';

export default function PCDSection() {
  const dispatch = useDispatch();
  const { pdcOppurnity, loading, error } =
    useSelector((state) => state?.pdcOppurnity) || {};

  const { data } = pdcOppurnity || {};

  const {
    heading,
    description,
    image,
    experience,
    patient_title,
    patient_description,
    patient_icon,
    quality_title,
    quality_description,
    quality_icon,
  } = data || {};

  const isEmpty =
    !heading ||
    !description ||
    !image ||
    !experience ||
    !patient_title ||
    !patient_description ||
    !patient_icon ||
    !quality_title ||
    !quality_description ||
    !quality_icon;

  useEffect(() => {
    dispatch(fetchPdcBusinessOppurnity());
  }, []);

  return (
    <>
      <GlobalStateHandler
        loading={loading}
        empty={isEmpty}
        loaderComponent={Loader}
      />
      <section className="pcd-section">
        <div className="pcd-container padding  sub-container">
          <div className="pcd-image-wrapper">
            {image ? (
              <Image
                src={image}
                alt="Medical Equipment"
                width={600}
                height={500}
                className="pcd-image"
              />
            ) : null}
            <div className="tag-container">
              <p className="pentogone"></p>
              <img src="/icons/mski1.png" alt="icon" />
            </div>
            <div className="pcd-experience-tag-bg"> </div>
            <div className="pcd-experience-tag">
              <span>{experience}</span>
            </div>
          </div>
          <div className="pcd-content">
            <h2 className="pcd-title">{heading}</h2>
            <p className="pcd-description">{description}</p>
            <div className="pcd-info-block">
              <div className="pcd-icon">
                {' '}
                <img src={patient_icon} alt="pcd-icon" />{' '}
              </div>
              <div>
                <h4>{patient_title}</h4>
                <p>{patient_description}</p>
              </div>
            </div>
            <div className="pcd-info-block">
              <div className="pcd-icon">
                <img src={quality_icon} alt="pcd-icon" />
              </div>
              <div>
                <h4>{quality_title}</h4>
                <p>{quality_description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-parent-container">
          <Footer />
        </div>
      </section>
      <div className="bg-white"></div>
    </>
  );
}
