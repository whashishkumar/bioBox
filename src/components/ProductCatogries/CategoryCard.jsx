import Image from 'next/image';
import './style.css'

export default function CategoryCard({ title, image, icon }) {
  return (
    <div className="card">
      <div className="image-wrapper">
        <Image src={image} alt={title} width={220} height={220} />
        <div className="icon-wrapper">
          <Image src={icon} alt={`${title} icon`} width={40} height={40} />
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
}
