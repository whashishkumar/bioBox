import "./style.css";
const MissionVisionValues = () => {
  return (
    <div className="mv-container sub-container margin">
      <div className="mission-container-box  ">
        <div className="content-box mission-card-wrapper">
           <div className="icon-wrapper-container">
                <img src={'/images/mission.png'} alt=""/>
              </div>
          <div className="mission-card">
            <div className="mission-content">
              <h1 className="title">Mission</h1>
              <p className="sub-title">
                Biobox Pharma commitment to enhancing health through innovative
                and effective pharmaceutical solutions.
              </p>
            </div>
          </div>
          <div className="image-container-bg">
            <img src={"/images/Vector.png"} alt="mission" />
          </div>
        </div>
       {/* <div className="rounded-polygon"></div> */}
        <div className="content-box mission-card-wrapper">
           <div className="icon-wrapper-container">
                <img src={'/images/wvalues.png'} alt=""/>
              </div>
          <div className="mission-card">
      
            <div className="mission-content">
              <h1 className="title">Vision</h1>
              <p className="sub-title">
                Express the aspiration to be a leading provider of accessible
                healthcare products nationwide.​
              </p>
            </div>
          </div>
          <div className="image-container-bg">
            <img src={"/images/value.png"} alt="mission" />
          </div>
        </div>
        <div className="content-box mission-card-wrapper">
           <div className="icon-wrapper-container">
                <img src={'/images/values.png'} alt=""/>
              </div>
          <div className="mission-card">
    
            <div className="mission-content">
              <h1 className="title">Values</h1>
              <p className="sub-title">
                Emphasize core principles such as integrity, excellence, and
                innovation
              </p>
            </div>
          </div>
          <div className="image-container-bg">
            <img src={"/images/Value.png"} alt="mission" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;
