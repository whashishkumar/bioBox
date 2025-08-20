import Image from "next/image";
import "./style.css"; 
import Footer from "../Footer";

export default function PCDSection() {
  return (
    <>
    <section className="pcd-section">
      <div className="pcd-container padding  sub-container">
        <div className="pcd-image-wrapper">
          <Image
            src="/images/footerimg.png" 
            alt="Medical Equipment"
            width={600}
            height={500}
            className="pcd-image"
          />
          <div className="tag-container">
               <p className="pentogone"></p>
              <img src="/icons/mski1.png" alt="icon"/>
          </div>
         <div className="pcd-experience-tag-bg"> </div>
          <div className="pcd-experience-tag">
            <span>24+ Years Of Experience</span>
          </div>
        </div>
        <div className="pcd-content">
          <h2 className="pcd-title">PCD Business Opportunity</h2>
          <p className="pcd-description">
            Partner with Biobox Pharma and unlock growth opportunities with our
            PCD Pharma Franchise. Get exclusive monopoly rights, premium quality
            products, and unmatched support to help you build a successful
            pharma business.
          </p>
          <div className="pcd-info-block">
            <div className="pcd-icon">
              <img src={'/icons/pcd1.png'} alt="pcd-icon"/>
            </div>
            <div>
              <h4>Patient Centered Care</h4>
              <p>
                We work day and night to solve the problems that can help them
                move forward for those who is seeking answers!
              </p>
            </div>
          </div>

          <div className="pcd-info-block">
            <div className="pcd-icon"> <img src={'/icons/pcd2.png'} alt="pcd-icon"/> </div>
            <div>
              <h4>Quality Improvement</h4>
              <p>
                Our team typically processes High Quality Standard Product
                Innovation
              </p>
            </div>
          </div>
        </div>
      </div>  
        <div className="footer-parent-container">
         <Footer/>
      </div>  
    </section>  
    <div className="bg-white"></div>
    </>
  );
}
