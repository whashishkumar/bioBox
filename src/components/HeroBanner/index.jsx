import React from 'react'
import './style.css'
import Header from '../Header'

export default function HeroBanner({className}) {
  return (
 <div className={`bg ${className}`}>
     <div className={`parent-container hero-sub-container ${className}`}>
      {/* <div className=''> */}
        <div className='header-container'>
       < Header/>
      {/* </div> */}
    </div>
    </div>
 </div>
  )
}
