import React, { useState } from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Image from 'next/image';
import LoginSVG from 'assets/Login.svg';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const [login, setLogin] = useState('');
  const handleLogin = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLogin(event?.target?.value);
  };

  const [password, setPassword] = useState('');
  const handlePassword = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event?.target?.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div
      id="login"
      className="flex flex-col justify-center items-center py-12 shadow-2xl md:flex-row rounded-xl"
    >
      <div className="hidden lg:flex items-center justify-center w-1/2">
        <a>
          <LoginSVG />
        </a>
      </div>
      <div className="flex flex-col items-center lg:items-center justify-center md:w-full lg:w-1/2 ">
        <h3 className="px-4 text-xl font-bold">Zaloguj się</h3>
        <form action="handleSubmit()" className="flex flex-col lg:w-3/5">
          <Input
            type="text"
            value={login}
            required
            placeholder="Adres e-mail"
            onChange={handleLogin}
          />
          <Input
            type="password"
            value={password}
            required
            placeholder="Hasło"
            onChange={handlePassword}
          />
          <Button onClick={() => router.push('/login')}>Zaloguj się</Button>
          <div
            id="buttons"
            className="flex flex-col xl:justify-between sm:flex-row xl:w-full"
          >
            <Button onClick={() => router.push('/login')}>
              <Image src="/panel.svg" width={25} height={25} className="mr-2" />
              Google
            </Button>
            <Button onClick={() => router.push('/login')}>Facebook</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
