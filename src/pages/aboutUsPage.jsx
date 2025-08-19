import PageLayout from '@/app/pageLayout'
import BioBoxPharma from '@/components/BioBoxPharma'
import PartnerBenifits from '@/components/PartnerBenifits'
import React from 'react'



export default function AboutUs() {
  return (
    <div>
      <PageLayout>
        <BioBoxPharma/>
        <PartnerBenifits/>
      </PageLayout>
    </div>
  )
}
