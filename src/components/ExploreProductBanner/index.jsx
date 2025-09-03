'use client';
import React, { useEffect } from 'react';
import './style.css';
import Button from '@/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExplorePharmaProdctSection } from '@/store/features/ourProducts/ourProductsSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ExplorePharmaProducts() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { explorePharmaProducts } = useSelector((state) => state.allProducts);
  const { heading, sub_heading, button_text, button_link } =
    explorePharmaProducts?.data || {};

  useEffect(() => {
    dispatch(fetchExplorePharmaProdctSection());
  }, []);

  return (
    <div className="hero-sub-container">
      <div className="content-container">
        <div className=" explore-pharma">
          <p>{heading}</p>
          <h2>{sub_heading}</h2>
          <Link className="btn-top-margin" href={`tel:${button_link}`}>
            <Button
              className="btn-top-margin"
              text={`${button_text}`}
              variant="primary"
              size="lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
