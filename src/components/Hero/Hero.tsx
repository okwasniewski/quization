import React from 'react';

const Hero = () => (
  <div
    className=" rounded-3xl h-auto w-auto"
    style={{
      backgroundImage: "url('Hero.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    <div className="px-5 pb-12 text-center lg:pl-12 pt-36 lg:text-left">
      <h1 className="text-xl font-bold text-white lg:text-3xl">
        Europejskie ramy kompetencji cyfrowych
      </h1>
      <p className="pt-2 text-base text-white lg:text-xl">
        Kompetencje cyfrowe, obok czytania, pisania, umiejętności matematycznych
        i językowych, <br /> stanowią zespół fundamentalnych umiejętności
        współczesnego człowieka.
      </p>
    </div>
  </div>
);

export default Hero;
