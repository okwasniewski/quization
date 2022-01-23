import React from 'react';
import Image from 'next/image';

interface GridItemProps {
  image: string;
  imageAlt: string;
  heading: string;
  content: string;
  disabled?: boolean;
}

const GridItem = ({
  image,
  heading,
  content,
  imageAlt,
  disabled,
}: GridItemProps) => (
  <div
    className={`text-center shadow-2xl card ${
      disabled ? 'grayscale shadow-md' : ''
    } ${!disabled ? 'border-green-300 border-2' : ''}`}
  >
    {!disabled && (
      <div className="absolute bg-green-300 p-2 right-0 rounded-bl-md">
        Zdobyto: 20.01.2021
      </div>
    )}
    <figure className="px-10 pt-10">
      <Image
        src={image}
        alt={imageAlt}
        className="rounded-xl"
        width={200}
        height={150}
      />
    </figure>
    <div className="card-body">
      <h2 className="font-bold text- base card-title text-main">{heading}</h2>
      <p className="text-xs">{content}</p>
    </div>
  </div>
);

export default GridItem;
