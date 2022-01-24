import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

interface SidebarLinkProps {
  link: string;
  image: string;
  name: string;
}

function SidebarLink({ link, image, name }: SidebarLinkProps) {
  const router = useRouter();

  return (
    <Link href={link}>
      <a
        className={`flex py-4 px-6 align-middle  transition duration-200 hover:bg-blue-800 hover:text-white md:my-1 md:py-3 ${
          router.pathname === link ? 'bg-blue-800 text-white' : ''
        }`}
      >
        <Image src={image} alt={name} width={20} height={20} />
        <span className="px-2 hidden md:block">{name}</span>
      </a>
    </Link>
  );
}

export default SidebarLink;
