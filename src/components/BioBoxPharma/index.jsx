import React from "react";
import "./style.css";
import { PiEyeBold } from "react-icons/pi";
import { IoIosCheckbox } from "react-icons/io";
import Image from "next/image"; // ✅ import Next.js Image

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
    subDescription:
      "As a , our diverse product portfolio spans key therapeutic areas, including anti-infectives, nutritional supplements, gastrointestinal health, pain management,cardiovascular & diabetes care, dermatology, urology , and the central nervous system (CNS). ",
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

  const coreValues = [
    {
      icon: <PiEyeBold />,
      title: "Our Core Value",
      description:
        "Integrity, Innovation, Quality, and Commitment to Healthcare Excellence",
    },
    {
      icon: <PiEyeBold />,
      title: "Our Mission",
      description:
        "To deliver advanced pharmaceutical solutions with a focus on global healthcare improvement.",
    },
  ];

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
      {/* =================== Bio Section =================== */}
      <div className="sub-container bio-flex padding padding-top margin-top">
        <div className="left-col content-container-box">
          <p className="welcome-text">{bioData.welcomeText}</p>
          <h2 className="heading-title">{bioData.heading}</h2>
          <p
            className="bio-desc"
            dangerouslySetInnerHTML={{ __html: bioData.description }}
          ></p>
          {coreValues.map((value, index) => (
            <div className="bio-flex core-value" key={index}>
              <div className="eye-icon">{value.icon}</div>
              <div>
                <h3 className="value-heading">{value.title}</h3>
                <p className="value-desc">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="right-col">
          <div className="image-wrapper">
            <Image
              className="hero-bg-image"
              src={bioData.image.src}
              alt={bioData.image.alt}
              width={bioData.image.width}
              height={bioData.image.height}
            />
            <Image
              src={bioData.imageSrc.src}
              alt={bioData.imageSrc.alt}
              width={bioData.imageSrc.width}
              height={bioData.imageSrc.height}
              className="overlay-img"
            />
          </div>

          <div className="about-btn-container">
            <button className="more-about-btn">More About</button>
          </div>
        </div>
      </div>

      {/* =================== CEO Section =================== */}
      <div className="sub-container bio-flex padding padding-top gap">
        <div className="left-col content-container-box width ceo-content-section ceo-content">
          <p className="welcome-text">{bioDataCeo.welcomeText}</p>
          <h2 className="heading-title title-color">{bioDataCeo.heading}</h2>
          <p
            className="bio-desc bio-des-width"
            dangerouslySetInnerHTML={{ __html: bioDataCeo.description }}
          ></p>
          <br />
          <p
            className="bio-desc bio-des-width"
            dangerouslySetInnerHTML={{ __html: bioDataCeo.subDescription }}
          ></p>
        </div>
        <div className="right-col change-order width">
          <div className="image-wrapper">
            <Image
              className="hero-bg-image"
              src={bioData.image.src}
              alt={bioData.image.alt}
              width={bioData.image.width}
              height={bioData.image.height}
            />
            <Image
              src={bioData.imageSrc.src}
              alt={bioData.imageSrc.alt}
              width={bioData.imageSrc.width}
              height={bioData.imageSrc.height}
              className="flatten-img-ceo"
            />
          </div>
        </div>
      </div>

      {/* =================== Unique Section =================== */}
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
            <Image
              className="hero-bg-image"
              src={bioData.image.src}
              alt={bioData.image.alt}
              width={bioData.image.width}
              height={bioData.image.height}
            />
            <Image
              src={bioData.imageSrc.src}
              alt={bioData.imageSrc.alt}
              width={bioData.imageSrc.width}
              height={bioData.imageSrc.height}
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
