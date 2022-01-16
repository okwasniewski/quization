import type { NextPage } from 'next';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';
import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Image from 'next/image';
import LoginSVG from 'assets/Login.svg';
import { useRouter } from 'next/router';
import PageTemplate from 'templates/SinglePageTemplate';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <UnauthorizedTemplate
      title="Logowanie"
      description="Logowanie do serwisu Quization"
    >
      <PageTemplate>
        <div className="hidden lg:flex items-center justify-center w-1/2">
          <a>
            <LoginSVG />
          </a>
        </div>
        <div className="flex flex-col items-center lg:items-center justify-center md:w-full lg:w-1/2 ">
          <h3 className="px-4 text-xl font-bold">Zaloguj się</h3>
          <form action="handleSubmit()" className="flex flex-col">
            <Input
              type="text"
              value=""
              required
              placeholder="Adres e-mail"
              onChange={() => {}}
            />
            <Input
              type="password"
              value=""
              required
              placeholder="Hasło"
              onChange={() => {}}
            />
            <Button onClick={() => router.push('/login')}>Zaloguj się</Button>
            <div
              id="buttons"
              className="flex flex-col xl:justify-between sm:flex-row xl:w-full"
            >
              <Button onClick={() => router.push('/login')}>
                <div className="flex items-center mr-2">
                  <Image
                    src="/Google.svg"
                    width={25}
                    height={25}
                    className="mx-5"
                  />
                </div>
                Google
              </Button>
              <Button onClick={() => router.push('/login')}>
                <div className="flex items-center mr-2">
                  <Image
                    src="/Facebook.svg"
                    width={25}
                    height={25}
                    className="mx-5"
                  />
                </div>
                Facebook
              </Button>
            </div>
          </form>
        </div>
      </PageTemplate>
    </UnauthorizedTemplate>
  );
};

export default Home;
