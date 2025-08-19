import React from "react";
import PageHeadingTitle from "../PageHeadingTitle";
import "./style.css";

const headerObject = {
  heading: "Benefits of Partner with Us",
  subHeading:
    "Partner with Biobox and enjoy exclusive monopoly rights, comprehensive marketing support, free gifts for doctors, and 24/7 customer assistance to boost your pharmaceutical business",
};

const giftCards = [
  {
    img: "/images/type5.jpg",
    title: "Free Gift",
    description:
      "Biobox Pharma offers free promotional gifts for doctors to strengthen brand recognition and build lasting professional relationships like MR Bags, Diary and Pens.",
  },
  {
    img: "/images/type2.jpg",
    title: "Medical Samples",
    description:
      "We provide doctors with free medical samples to build trust and ensure confidence in the quality of our products.",
  },
  {
    img: "/images/type2.jpg",
    title: "Exclusive Discounts",
    description:
      "Special pricing and discount programs designed to make our medicines more affordable and accessible.",
  },
  {
    img: "/images/type4.jpg",
    title: "Support Materials",
    description:
      "Educational and promotional materials provided to support doctors and healthcare professionals in patient care.",
  },
];

export default function BenifitsCard() {
  return (
    <div className="benifits-card-container">
      <div className="sub-container padding">
        <PageHeadingTitle
          heading={headerObject.heading}
          subheading={headerObject.subHeading}
          className="align-text"
        />
        <div className="cards-wrapper">
          {giftCards.map((card, index) => (
            <div className="gift-card col-flex" key={index}>
              <img src={card.img} alt="card-img" />
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
