'use client';
import Image from 'next/image';
import './style.css';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchPdcBusinessOppurnity } from '@/store/features/pcdBusinessOpportunity/pcdBusinessOpportunitySlice';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { Loader } from '@/utils/lazyImport';

export default function PCDSection() {
  const hasFetched = useRef(false);

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
    if (!hasFetched.current) {
      dispatch(fetchPdcBusinessOppurnity());
      hasFetched.current = true;
    }
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
              <Image
                src={'/icons/mski1.png'}
                alt="icon"
                height={27}
                width={78}
              />
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
                {patient_icon && (
                  <Image
                    src={patient_icon}
                    alt="pcd-icon"
                    height={50}
                    width={50}
                  />
                )}
              </div>
              <div>
                <h2 className="patient-title">{patient_title}</h2>
                <p>{patient_description}</p>
              </div>
            </div>
            <div className="pcd-info-block">
              <div className="pcd-icon">
                {quality_icon && (
                  <Image
                    src={quality_icon}
                    alt="pcd-icon"
                    height={50}
                    width={50}
                  />
                )}
              </div>
              <div>
                <h2 className="patient-title">{quality_title}</h2>
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
