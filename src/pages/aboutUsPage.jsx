'use client'
import PageLayout from '@/app/pageLayout'
import ProductCard from '@/components/OurProducts/ProductCard';
import PartnerBenifits from '@/components/PartnerBenifits'
import PremiumProductTag from '@/components/PremiumProductsTag';

import React, { Suspense, lazy } from "react";
const BioBoxPharma = lazy(() => import("../components/BioBoxPharma"));


export default function AboutUs() {
  return (
    <div>
      <PageLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <BioBoxPharma />
      </Suspense>
        <PartnerBenifits/>
        <PremiumProductTag/>
        <ProductCard/>
      </PageLayout>
    </div>
  )
}
