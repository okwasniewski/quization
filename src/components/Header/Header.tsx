import Button from 'components/Button/Button';
import React from 'react';
import Quization from '../../../public/assets/Quization.svg';

const Header = () => (
  <div className="navbar mb-2 shadow-lg text-neutral-content bg-white p-2">
    <div className="flex-1 hidden px-2 mx-2 lg:flex">
      <Quization />
    </div>
    <div>
      <Button label="Login" onClick={() => {}} />
    </div>
  </div>
);

export default Header;
