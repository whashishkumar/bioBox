import React from "react";
import { lazyImport } from "@/utils/lazyImport";
const PageLayout = lazyImport(() => import("@/app/pageLayout"));
const ProductCard = lazyImport(() => import("@/components/OurProducts/ProductCard"));
const PartnerBenifits = lazyImport(() => import("@/components/PartnerBenifits"));
const PremiumProductTag = lazyImport(() => import("@/components/PremiumProductsTag"));
const BioBoxPharma = lazyImport(() => import("@/components/BioBoxPharma"));

export default function AboutUs() {
  return (
    <PageLayout>
      <BioBoxPharma />
      <PartnerBenifits />
      <PremiumProductTag />
      <ProductCard />
    </PageLayout>
  );
}
