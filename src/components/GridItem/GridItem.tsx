import React from 'react';
import Image from 'next/image';

interface GridItemProps {
  image: string;
  imageAlt: string;
  heading: string;
  content: string;
}

const GridItem = ({ image, heading, content, imageAlt }: GridItemProps) => (
  <div className="text-center shadow-2xl card">
    <figure className="px-10 pt-10">
      <Image src={image} alt={imageAlt} className="rounded-xl" layout="fill" />
    </figure>
    <div className="card-body">
      <h2 className="font-bold text- base card-title text-main">{heading}</h2>
      <p className="text-xs">{content}</p>
    </div>
  </div>
);

export default GridItem;
