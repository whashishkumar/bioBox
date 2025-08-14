import Image from 'next/image'
import React from 'react'
import './style.css'

export default function ProductCategoryCard({image,title}) {

  return (
        <div className="product-card">
         <div className="product-image-wrapper">
           <Image src={image} alt={title} width={200} height={200} />
            <h3 className="product-card-title">{title}</h3>
         </div>

     </div>
  )
}
