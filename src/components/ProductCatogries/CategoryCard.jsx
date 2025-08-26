import Image from 'next/image';
import './style.css';

export default function CategoryCard({ title, image, icon_image }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${image}`;
  const iconImageUrl = `${baseUrl}${imagePath}/${icon_image}`;

  return (
    <div className="card">
      <div className="image-wrapper-category">
        <Image src={imageUrl} alt={title} width={220} height={220} />
        <div className="icon-wrapper">
          <Image
            src={iconImageUrl}
            alt={`${title} icon`}
            width={40}
            height={40}
          />
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
}
