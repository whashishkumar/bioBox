import React from 'react'
import PageHeadingTitle from '../PageHeadingTitle'
import MissionVisionValues from './MissionVisionValues'

const headerObject = {
  heading:'Why Choose Us',
  subHeading:'Choose BioBox Pharma for high-quality, affordable, and innovative pharmaceutical products manufactured in WHO-GMP-certified facilities. We offer monopoly-based PCD franchise opportunities.'
}
export default function Choose() {
  return (
    <div className='margin padding'>
      <PageHeadingTitle heading={headerObject.heading} subheading={headerObject.subHeading}/>
      <MissionVisionValues/>
    </div>
  )
}
