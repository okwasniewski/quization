import Button from 'components/Button/Button';
import React from 'react';
import Link from 'next/link';
import Quization from 'assets/Quization.svg';
import { useRouter } from 'next/router';

interface HeaderProps {
  authorized: boolean;
}

const Header = ({ authorized }: HeaderProps) => {
  const router = useRouter();
  return (
    <div className="navbar items-center mb-4 shadow-md text-neutral-content bg-white p-3 md:h-20">
      <div className="container mx-auto h-18">
        <div className="flex-1 px-2 mx-2 lg:flex">
          <Link href="/" passHref>
            <a>
              <Quization />
            </a>
          </Link>
        </div>
        <div className="block md:hidden">
          <Button
            label="Zaloguj się"
            outline
            onClick={() => router.push('/login')}
          />
        </div>
        <div className="md:block hidden">
          {authorized ? (
            <></>
          ) : (
            <>
              <Button
                label="Zaloguj się"
                outline
                onClick={() => router.push('/login')}
              />
              <Button
                label="Rejestracja"
                onClick={() => router.push('/register')}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
