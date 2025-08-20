import "./style.css";

const MissionVisionValues = () => {
  return (
    <div className="mvv-main-container sub-container margin">
      <div className="mvv-card-container">
        <div className="mvv-card-box">
          <div className="mvv-icon-wrapper">
            <img src={"/images/mission.png"} alt="mission" />
          </div>
          <div className="mvv-card">
            <div className="mvv-card-content">
              <h1 className="mvv-title">Mission</h1>
              <p className="mvv-subtitle">
                Biobox Pharma commitment to enhancing health through innovative
                and effective pharmaceutical solutions.
              </p>
            </div>
          </div>
          <div className="mvv-image-bg">
            <img src={"/images/Vector.png"} alt="mission" />
          </div>
        </div>

        <div className="mvv-card-box">
          <div className="mvv-icon-wrapper">
            <img src={"/images/wvalues.png"} alt="vision" />
          </div>
          <div className="mvv-card">
            <div className="mvv-card-content">
              <h1 className="mvv-title">Vision</h1>
              <p className="mvv-subtitle">
                Express the aspiration to be a leading provider of accessible
                healthcare products nationwide.​
              </p>
            </div>
          </div>
          <div className="mvv-image-bg">
            <img src={"/images/vision.png"} alt="vision" />
          </div>
        </div>

        <div className="mvv-card-box">
          <div className="mvv-icon-wrapper">
            <img src={"/images/values.png"} alt="values" />
          </div>
          <div className="mvv-card">
            <div className="mvv-card-content">
              <h1 className="mvv-title">Values</h1>
              <p className="mvv-subtitle">
                Emphasize core principles such as integrity, excellence, and
                innovation
              </p>
            </div>
          </div>
          <div className="mvv-image-bg">
            <img src={"/images/value.png"} alt="values" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;
