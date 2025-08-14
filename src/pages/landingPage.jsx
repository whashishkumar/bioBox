import AboutUs from '@/components/AboutUs'
import FooterBanner from '@/components/FooterBanner'
import HeroBanner from '@/components/HeroBanner'
import OurCertification from '@/components/OurCertification'
import OurProducts from '@/components/OurProducts'
import ProductCategories from '@/components/ProductCatogries'
import ProductTypes from '@/components/ProductTypes'
import Choose from '@/components/WhytoChooseUs'
import React from 'react'

export default function LandingPage() {
  return (
    <div>
        <HeroBanner/>
        <ProductCategories/>
        <AboutUs/>
        <ProductTypes/>
        <Choose/>
        <OurCertification/>
        <OurProducts/>
        <FooterBanner/>
    </div>
  )
}
