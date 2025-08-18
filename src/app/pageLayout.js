import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import './globals.css'



export default function PageLayout({children}) {
  return (
    <div>
      <Header className={'over-write-header'} />
        {children}
      <Footer className={'over-write-foolter'}/> 
    </div>
  )
}
