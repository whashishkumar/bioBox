import './style.css';
const aboutUs = {
  image: '/images/doctor.png',
  leftFeatures: [
    {
      title: 'Strict Quality Practices',
      icon: '/icons/quality.svg',
    },
    {
      title: 'New Advanced Instruments',
      icon: '/icons/tools.svg',
    },
    {
      title: 'Customized Lab Solutions',
      icon: '/icons/lab.svg',
    },
  ],
  mainTitle: 'About Us',
  description:
    'Biobox Pharma, emphasizing its mission to provide high-quality pharmaceutical products and its dedication to improving healthcare outcomes.',
  bulletPoints: [
    'High-Quality Products',
    'Monopoly Rights',
    'Marketing & Promotional Support',
    'Affordable Pricing',
    'Third-Party Manufacturing',
  ],
  note: 'While we believe we are more than just numbers, the depth of our laboratories is pretty impressive.',
};

export default function AboutUs() {
  return (
    <section className="sub-container about-section padding-y-axis">
      <div className="about-container padding ">
        <div className="about-left">
          <div className="container-image-sec">
            <img
              src="/images/about02.png"
              alt="Doctor"
              className="about-image-quality"
            />
            <img
              src="/images/about01.png"
              alt="Doctor"
              className="about-image-bg"
            />
          </div>
        </div>

        <div className="about-right">
          <h2 className="about-title">{aboutUs.mainTitle}</h2>
          <p className="about-desc">{aboutUs.description}</p>
          <div className="bullet-wrapper">
            {aboutUs.bulletPoints.map((point, idx) => (
              <div key={idx} className="bullet-item">
                <span className="check-icon">✔</span>
                <span className="bullet-text">{point}</span>
              </div>
            ))}
          </div>
          <div className="about-note">
            <img src={'/images/aboutbg.png'} />
            <p>{aboutUs.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
