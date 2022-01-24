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
    <div className="navbar items-center shadow-md text-neutral-content bg-white p-3 md:h-20">
      <div className="container mx-auto h-18">
        <div className="flex-1 px-2 mx-2 lg:flex">
          <Link href="/" passHref>
            <a>
              <Quization />
            </a>
          </Link>
        </div>
        {!authorized && (
          <div className="block md:hidden">
            <Button outline onClick={() => router.push('/login')}>
              Zaloguj się
            </Button>
          </div>
        )}
        <div className="md:block hidden">
          {authorized ? (
            <></>
          ) : (
            <>
              <div className="flex">
                <Button outline onClick={() => router.push('/login')}>
                  Zaloguj się
                </Button>
                <Button onClick={() => router.push('/register')}>
                  Zarejestruj się
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
