'use client';
import Image from 'next/image';
import './style.css';

const MissionVisionValues = ({ mission, value, vision }) => {
  return (
    <div className="mvv-main-container sub-container margin padding-y-axis">
      <div className="mvv-card-container padding">
        <div className="mvv-card-box">
          <div className="mvv-icon-wrapper">
            {mission?.image ? (
              <Image
                src={mission?.image}
                alt={mission?.title || 'Product'}
                height={200}
                width={300}
              />
            ) : null}
          </div>
          <div className="mvv-card">
            <div className="mvv-card-content">
              <h1 className="mvv-title">{mission?.title}</h1>
              <p className="mvv-subtitle">{mission?.description}</p>
            </div>
          </div>
          <div className="mvv-image-bg">
            {mission?.vector ? (
              <Image
                src={mission?.vector}
                alt={mission?.title || 'title'}
                height={200}
                width={300}
              />
            ) : null}
          </div>
        </div>
        <div>
          <div className="mvv-card-box mvv-card-box-space ">
            <div className="mvv-icon-wrapper">
              {vision?.image ? (
                <Image
                  src={vision?.image}
                  alt={vision?.title || 'Product'}
                  height={200}
                  width={300}
                />
              ) : null}
            </div>
            <div className="mvv-card">
              <div className="mvv-card-content">
                <h1 className="mvv-title">{vision?.title}</h1>
                <p className="mvv-subtitle">{vision?.description}</p>
              </div>
            </div>
            <div className="mvv-image-bg">
              {vision?.vector ? (
                <Image
                  src={vision?.vector}
                  alt={vision?.title || 'Product'}
                  height={200}
                  width={300}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="mvv-card-box">
          <div className="mvv-icon-wrapper">
            {value?.image ? (
              <Image
                src={value?.image}
                alt={value?.title || 'Product'}
                height={200}
                width={300}
              />
            ) : null}
          </div>
          <div className="mvv-card">
            <div className="mvv-card-content">
              <h1 className="mvv-title">{value?.title}</h1>
              <p className="mvv-subtitle">{value?.description}</p>
            </div>
          </div>
          <div className="mvv-image-bg">
            {value?.vector ? (
              <Image
                src={value?.vector}
                alt={value?.title || 'Product'}
                height={200}
                width={300}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;
