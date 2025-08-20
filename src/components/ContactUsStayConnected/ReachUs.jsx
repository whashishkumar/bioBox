import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from 'next/link';






export default function ReachUs() {
  return (

        <div className="registred-address">
                <iframe
                  className="reach-us-map"
                  title="BioBox Location"
                  src="https://maps.google.com/maps?q=zirakpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="reach-us-parent-content">
                  <div className='reachUs-container'>
                      <h2 className="reachus-title">Reach us through</h2>
                  <p className="loc-icon">
                    
                    <IoLocationSharp />
                    <span className="location-des">Office 20, Paras<br/> down square Mall,<br/> Zirakpur, <br/>Punjab 140603</span>
                  </p>
                    <p className="loc-icon">
                    
                    <FaPhone />
                    <span className="location-des">
                      +91 9988195950
                    </span>
                  </p>
                     <p className="loc-icon">
                    
                    <MdEmail />
                    <span className="location-des">
                       bioboxpharma@gmail.com
                    </span>
                  </p>
                 
                  </div>
                      <div className='social-network'>
                      <h2 className="reachus-title">Social Networks</h2>
                          <p className="loc-icon">
                      <Link href={""}>
                    
                    <FaFacebookF />
                    <span className="location-des">Facebook</span>
                    </Link>
                  </p>
                    <p className="loc-icon">
                       <Link href={""}>
           
                    <FaTwitter />
                    <span className="location-des">
                      Twitter
                    </span>
                    </Link>
                  </p>
                     <p className="loc-icon">
                      <Link href={""}>
                    <FaInstagram />
                    <span className="location-des">
                       Instagram
                    </span>
                    </Link>
                  </p>
                        <p className="loc-icon">
                    <Link href={""}>
                    <FaPinterest />
                    <span className="location-des">
                       Pinterest
                    </span>
                    </Link>
                  </p>
                  </div>
                </div>
        </div>

  )
}
