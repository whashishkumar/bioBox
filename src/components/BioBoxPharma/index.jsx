import React from "react";
import "./style.css";
import { PiEyeBold } from "react-icons/pi";
import { IoIosCheckbox } from "react-icons/io";


export default function BioBoxPharma() {
  const bioData = {
    welcomeText: "Welcome",
    heading: "BioBox Pharma",
    description: `<strong>Biobox Pharma</strong> is a leading <strong>pharmaceutical manufacturing company</strong>  dedicated to quality, innovation, and compliance. We specialize in producing high-quality medicines and healthcare products, with a <strong>strong focus on gynecology, cardiology, neurology, and dermatology.</strong> Our mission is to enhance lives globally through <strong> advanced and reliable pharmaceutical solutions.</strong>`,
    image: {
      src: "/images/demo.avif",
      alt: "banner-image",
      height: 230,
      width: 300,
    },
    imageSrc: {
      src: "/images/demo.avif",
      alt: "banner-image",
      height: 300,
      width: 219,
    },
  };

    const bioDataCeo = {
    welcomeText: "Meet Our CEO",
    heading: "Mr. Gulshan Rawat",
    description: `BioBox, an ISO 9001-certified company, is led by Mr. Gulshan Rawat (Managing Director), who brings over 24 years of expertise in the pharmaceutical industry.  Under his guidance, we have emerged as a prominent player in this highly competitive sector, driven by a commitment to quality and excellence in delivering the best products to our clients.`,
    subDescription :'As a , our diverse product portfolio spans key therapeutic areas, including anti-infectives, nutritional supplements, gastrointestinal health, pain management,cardiovascular & diabetes care, dermatology, urology , and the central nervous system (CNS). ',
    image: {
      src: "/images/demo.avif",
      alt: "banner-image",
      height: 230,
      width: 300,
    },
    imageSrc: {
      src: "/images/demo.avif",
      alt: "banner-image",
      height: 300,
      width: 219,
    },
  };

const uniqueData = {
  heading: "Why We Are Unique",
  points: [
    {
      title: "Certified Quality Assurance",
      description:
        "We are an ISO 9001-certified company, committed to delivering superior pharmaceutical products that meet global standards.",
    },
    {
      title: "Expert Leadership",
      description:
        "Guided by Mr. Gulshan Rawat, a seasoned industry professional with over 24 years of experience.",
    },
    {
      title: "Comprehensive Product Range",
      description:
        "Offering a diverse portfolio across key therapeutic areas, including anti-infectives, cardiovascular, CNS, and more.",
    },
    {
      title: "Advanced Manufacturing Facilities",
      description:
        "Equipped with cutting-edge technology and stringent quality controls at our Himachal Pradesh facilities.",
    },
    {
      title: "Reliable Distribution & Support",
      description:
        "Supported by a strong network of trusted distributors and healthcare professionals, ensuring seamless supply and customer satisfaction.",
    },
  ],
};

  return (
    <div className="hero-sub-container parent-container-bio-box">
      <div className="sub-container bio-flex padding padding-top">
        <div className="left-col content-container-box">
          <p className="welcome-text">{bioData.welcomeText}</p>
          <h2 className="heading-title">{bioData.heading}</h2>
          <p
            className="bio-desc"
            dangerouslySetInnerHTML={{ __html: bioData.description }}
          ></p>
          <div className="bio-flex core-value">
            <div className="eye-icon">
              <PiEyeBold />
            </div>
            <div>
              <h3 className="value-heading">Our Core Value</h3>
              <p className="value-desc">
                {" "}
                Integrity, Innovation, Quality, and Commitment to Healthcare
                Excellence
              </p>
            </div>
          </div>
          <div className="bio-flex core-value">
            <div className="eye-icon">
              <PiEyeBold />
            </div>
            <div>
              <h3 className="value-heading">Our Core Value</h3>
              <p className="value-desc">
                {" "}
                Integrity, Innovation, Quality, and Commitment to Healthcare
                Excellence
              </p>
            </div>
          </div>
        </div>
        <div className="right-col">
  <div className="image-wrapper">
  <img
  className="hero-bg-image"
    src={bioData.image.src}
    alt={bioData.image.alt}
    height={bioData.image.height}
    width={bioData.image.width}
  />
  <img
    src={bioData.imageSrc.src}
    alt={bioData.imageSrc.alt}
    height={bioData.imageSrc.height}
    width={bioData.imageSrc.width}
    className="overlay-img"
  />
  </div>

         <div className="about-btn-container">
           <button className="more-about-btn">More About</button>
         </div>
        </div>
      </div>
      {/* ====================== */}
        <div className="sub-container bio-flex padding padding-top gap">
        <div className="left-col content-container-box width ceo-content-section ceo-content">
          <p className="welcome-text">{bioDataCeo.welcomeText}</p>
          <h2 className="heading-title title-color ">{bioDataCeo.heading}</h2>
          <p
            className="bio-desc bio-des-width"
            dangerouslySetInnerHTML={{ __html: bioDataCeo.description }}
          ></p>   
          <br/> 
            <p
            className="bio-desc bio-des-width"
            dangerouslySetInnerHTML={{ __html: bioDataCeo.subDescription }}
          ></p>    
        </div>
        <div className="right-col change-order width">
        <div className="image-wrapper">
  <img
    className="hero-bg-image"
    src={bioData.image.src}
    alt={bioData.image.alt}
    height={bioData.image.height}
    width={bioData.image.width}
  />
  <img
    src={bioData.imageSrc.src}
    alt={bioData.imageSrc.alt}
    height={bioData.imageSrc.height}
    width={bioData.imageSrc.width}
    className="flatten-img-ceo"
  />
  </div>
        </div>
      </div>
      {/* ============================ */}
        <div className="sub-container bio-flex padding">
        <div className="left-col content-container-box text-alignment">
          <h2 className="heading-title title-color">{uniqueData.heading}</h2>
           {uniqueData.points.map((point, index) => (
        <div className="bio-flex core-value margin-none" key={index}>
          <div className="check-box">
            <IoIosCheckbox />
          </div>
          <div>
            <h3 className="value-heading">{point.title}</h3>
            <p className="value-desc">{point.description}</p>
          </div>
        </div>
      ))}
        </div>
        <div className="right-col">
           <div className="image-wrapper">
  <img
  className="hero-bg-image"
    src={bioData.image.src}
    alt={bioData.image.alt}
    height={bioData.image.height}
    width={bioData.image.width}
  />
  <img
    src={bioData.imageSrc.src}
    alt={bioData.imageSrc.alt}
    height={bioData.imageSrc.height}
    width={bioData.imageSrc.width}
    className="unique-image-wrapper"
  />
  </div>

         <div className="about-btn-container">
           <button className="more-about-btn">More About</button>
         </div>
        </div>
      </div>
    </div>
  );
}
