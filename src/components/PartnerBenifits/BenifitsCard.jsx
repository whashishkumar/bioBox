"use client";
import React from "react";
import PageHeadingTitle from "../PageHeadingTitle";
import "./style.css";
import Image from "next/image";

const headerObject = {
  heading: "Benefits of Partner with Us",
  subHeading:
    "Partner with Biobox and enjoy exclusive monopoly rights, comprehensive marketing support, free gifts for doctors, and 24/7 customer assistance to boost your pharmaceutical business",
};

const giftCards = [
  {
    img: "/images/type5.jpg",
    title: "Monopoly Rights",
    description:
      "Biobox Pharma offers exclusive monopoly rights, ensuring a competitive edge and unrestricted business growth in your territory",
  },
  {
    img: "/images/type2.jpg",
    title: "Marketing Support",
    description:
      "Biobox Pharma provides comprehensive marketing support, including promotional materials and strategies to help you grow your pharmaceutical business",
  },
  {
    img: "/images/type2.jpg",
    title: "Free Gifts",
    description:
      "Biobox Pharma offers free promotional gifts for doctors to strengthen brand recognition and build lasting professional relationships like MR Bags, Diary and Pens.",
  },
  {
    img: "/images/type4.jpg",
    title: "24/7 Customer Support",
    description:
      "Biobox Pharma provides 24/7 customer support, ensuring prompt assistance and seamless business operations anytime you need it",
  },
];

export default function BenifitsCard() {
  return (
    <div className="benifits-card-container">
      <div className="sub-container padding">
        <PageHeadingTitle
          heading={headerObject.heading}
          subheading={headerObject.subHeading}
          className="text-color "
        />
        <div className="cards-wrapper ">
          {giftCards.map((card, index) => (
            <div className="gift-card col-flex" key={index}>
              <Image
                src={card.img}
                alt={card.title}
                width={230}
                height={230}
                className="card-img"
                loading="lazy"
              />
              <div className="content-box">
                <h3 className="card-heading">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
