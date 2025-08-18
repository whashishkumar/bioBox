import React from 'react'
import PageHeadingTitle from '../PageHeadingTitle'
import './style.css'


const headerObject = {
  heading:'Our Certification',
  subHeading:'Our Product Manufactured At International Standard, Plant Have All Certification Required To Match International Standard'
}
export default function OurCertification() {
  return (
    <div className='our-certifacation'>
      <PageHeadingTitle heading={headerObject.heading} subheading={headerObject.subHeading} className='title-heading'/>
       <div className='certifacation-icon-conatainer sub-container'>
        <img src={'/images/iso.png'} alt='who' className='certifacation-icon'/>
         <img src={'/images/makeInIndia.png'} alt='who' className='makeIn-India-icon' />
        <img src={'/images/who.png'} alt='who' className='certifacation-icon'/>
        <img src={'/images/gpl.png'} alt='who' className='certifacation-icon'/>
        <img src={'/images/quality.png'} alt='who' className='certifacation-icon'/>
        <img src={'/images/fassi.png'} alt='who' className='certifacation-icon'/>
       </div>
    </div>
  )
}
