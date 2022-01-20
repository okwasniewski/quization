import React from 'react';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const Hero = ({ backgroundImage, subtitle, title }: HeroProps) => (
  <div
    className="rounded-3xl h-auto shadow-xl w-auto bg-no-repeat bg-cover items-end flex mb-14"
    style={{
      minHeight: 500,
      backgroundImage: `url('${backgroundImage}')`,
    }}
  >
    <div className="px-5 pb-12 text-center lg:pl-12 pt-36 lg:text-left">
      <h1 className="text-xl font-bold text-white lg:text-3xl text-left">
        {title}
      </h1>
      <p className="pt-2 text-base text-white lg:text-xl w-full lg:w-1/2 text-left">
        {subtitle}
      </p>
    </div>
  </div>
);

export default Hero;
