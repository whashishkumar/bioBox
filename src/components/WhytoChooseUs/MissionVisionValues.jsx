'use client';
import Image from 'next/image';
import './style.css';

const MissionVisionValues = ({ mission, value, vision }) => {
  return (
    <div className="mvv-main-container sub-container margin padding-y-axis">
      <div className="mvv-card-container padding">
        <div className="mvv-card-box">
          <div className="mvv-icon-wrapper">
            <Image
              src={mission?.image}
              alt={mission?.title}
              height={200}
              width={300}
            />
          </div>
          <div className="mvv-card">
            <div className="mvv-card-content">
              <h1 className="mvv-title">{mission?.title}</h1>
              <p className="mvv-subtitle">{mission?.description}</p>
            </div>
          </div>
          <div className="mvv-image-bg">
            <Image
              src={mission?.vector}
              alt={mission?.title}
              height={200}
              width={300}
            />
          </div>
        </div>
        <div>
          <div className="mvv-card-box mvv-card-box-space ">
            <div className="mvv-icon-wrapper">
              <Image
                src={vision?.image}
                alt={vision?.title}
                height={200}
                width={300}
              />
            </div>
            <div className="mvv-card">
              <div className="mvv-card-content">
                <h1 className="mvv-title">{vision?.title}</h1>
                <p className="mvv-subtitle">{vision?.description}</p>
              </div>
            </div>
            <div className="mvv-image-bg">
              <Image
                src={vision?.vector}
                alt={vision?.title}
                height={200}
                width={300}
              />
            </div>
          </div>
        </div>
        <div className="mvv-card-box">
          <div className="mvv-icon-wrapper">
            <Image
              src={value?.image}
              alt={value?.title}
              height={200}
              width={300}
            />
          </div>
          <div className="mvv-card">
            <div className="mvv-card-content">
              <h1 className="mvv-title">{value?.title}</h1>
              <p className="mvv-subtitle">{value?.description}</p>
            </div>
          </div>
          <div className="mvv-image-bg">
            <Image
              src={value?.vector}
              alt={value?.title}
              height={200}
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;
