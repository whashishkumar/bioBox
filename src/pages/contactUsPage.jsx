import PageLayout from '@/app/pageLayout'
import ContactUsAddress from '@/components/ContactUsAddress'
import StayConnected from '@/components/ContactUsStayConnected'
import React from 'react'


export default function ContactUsPage() {
  return (
    <PageLayout>
    <>
       <ContactUsAddress/>
       <StayConnected/>
    </>
    </PageLayout>
  )
}
