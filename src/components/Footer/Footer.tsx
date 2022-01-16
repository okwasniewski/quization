import React from 'react';
import Quization from 'assets/Quization.svg';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => (
  <footer className="p-3 mb-20 bg-white shadow-md navbar md:mb-0">
    <div className="container mx-auto h-18">
      <div>
        <Link href="/" passHref>
          <a>
            <Quization />
          </a>
        </Link>
      </div>
      <div>
        <Link href="https://www.wi.zut.edu.pl/pl/" passHref>
          <a>
            <Image
              src="/WIZUT.svg"
              alt="avatar"
              width={150}
              height={50}
              className=""
            />
          </a>
        </Link>
      </div>
      <div className="justify-end flex-1 text-xs text-main md:flex">
        <p>
          Wykonanie: Adam Łukasiewicz, Piotr Matyjasik, Oskar Kwaśniewski,
          Konrad Ryczko
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
