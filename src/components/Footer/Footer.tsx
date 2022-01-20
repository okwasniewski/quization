import React from 'react';
import Quization from 'assets/Quization.svg';
import WiZut from 'assets/WIZUT.svg';
import Link from 'next/link';

interface FooterProps {
  authorized?: boolean;
}

const Footer = ({ authorized = false }: FooterProps) => (
  <footer
    className={`p-3 ${
      authorized ? 'mb-20' : 'mb-0'
    } bg-white shadow-md navbar md:mb-0`}
  >
    <div className="container mx-auto h-18">
      <div>
        <Link href="/" passHref>
          <a>
            <Quization />
          </a>
        </Link>
      </div>
      <div className="flex">
        <Link href="https://www.wi.zut.edu.pl/pl/" passHref>
          <a className="pl-3">
            <WiZut className="w-28 pl-3 h-16" />
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
