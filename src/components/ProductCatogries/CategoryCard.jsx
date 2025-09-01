import Image from 'next/image';
import './style.css';

export default function CategoryCard({ title, image, icon_image }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${image}`;
  const iconImageUrl = `${baseUrl}${imagePath}/${icon_image}`;

  // https://biobox.whdev.in/api/v1/products?page=2
  return (
    <div className="card">
      <div className="image-wrapper-category">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={220}
            height={220}
            unoptimized
          />
        ) : null}

        <div className="icon-wrapper">
          {iconImageUrl ? (
            <Image
              src={iconImageUrl}
              alt={`${title} icon` || 'icon'}
              width={40}
              height={40}
              unoptimized
            />
          ) : null}
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
}
