import Button from 'components/Button/Button';
import React from 'react';
import Link from 'next/link';
import Quization from 'assets/Quization.svg';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <div className="navbar mb-4 shadow-md text-neutral-content bg-white p-3">
      <div className="container mx-auto">
        <div className="flex-1 hidden px-2 mx-2 lg:flex">
          <Link href="/" passHref>
            <a>
              <Quization />
            </a>
          </Link>
        </div>
        <div>
          <Button
            label="Zaloguj się"
            outline
            onClick={() => router.push('/login')}
          />
          <Button
            label="Rejestracja"
            onClick={() => router.push('/register')}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
