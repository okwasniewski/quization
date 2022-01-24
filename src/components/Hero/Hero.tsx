import Button from 'components/Button/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  gradient?: boolean;
  small?: boolean;
  link?: string;
}

const Hero = ({
  backgroundImage,
  subtitle,
  title,
  gradient = false,
  link,
  small = false,
}: HeroProps) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{
        y: -20,
        opacity: 0,
      }}
      transition={{ duration: 0.7 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      className="rounded-3xl h-auto shadow-xl w-auto bg-no-repeat bg-cover items-end flex mb-14"
      style={{
        minHeight: small ? 300 : 500,
        backgroundImage: `${
          gradient
            ? 'linear-gradient(90deg, rgba(29,58,143,0.8914916308320203) 45%, rgba(255,255,255,0) 85%), '
            : ''
        }url('${backgroundImage}')`,
      }}
    >
      <div className="flex items-end justify-between w-full flex-wrap">
        <div className="px-5 pb-12 text-center lg:pl-12 pt-36 lg:text-left max-w-6xl">
          <h1 className="text-xl font-bold text-white lg:text-3xl text-left">
            {title}
          </h1>
          <p className="pt-2 text-base text-white lg:text-xl w-full lg:w-1/2 text-left">
            {subtitle}
          </p>
        </div>
        {link && (
          <div className="p-4 ">
            <Button onClick={() => router.push(link)}>Rozpocznij</Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Hero;
