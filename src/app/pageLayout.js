import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import React from 'react'



export default function PageLayout({children}) {
  return (
    <div>
      <Header/>
        {children}
      <Footer/> 
    </div>
  )
}
