import React from 'react';
import Image from 'next/image';
import SidebarLink from './SidebarLink/SidebarLink';

interface SidebarPanelProps {
  children: React.ReactNode;
  avatarImage?: string;
  userName: string;
}

function SidebarPanel({ children, userName, avatarImage }: SidebarPanelProps) {
  return (
    <div className="relative min-h-screen md:flex">
      <div className="bg-blue-900 text-white w-screen space-y-6 py-0 overflow-hidden h-26 bottom-0 top-auto absolute inset-y-0 left-0 transform md:relative md:translate-x-0 md:w-56 md:h-screen md:py-7">
        <div className="text-center mb-6 hidden md:block">
          <div>
            <Image
              src={avatarImage || '/empty-avatar.png'}
              alt="avatar"
              width={60}
              height={60}
              className="inline object-cover w-16 h-16 mr-2 rounded-full"
            />
          </div>
          <span className="text-md">{userName}</span>
        </div>
        <nav className="flex justify-around md:block" style={{ margin: '0' }}>
          <SidebarLink link="/" image="/panel.svg" name="Panel" />
          <SidebarLink link="/2" image="/scores.svg" name="Wyniki" />
          <SidebarLink link="/3" image="/certificate.svg" name="Certyfikaty" />
          <SidebarLink link="/4" image="/profile.svg" name="Profil" />
          <SidebarLink link="/5" image="/settings.svg" name="Ustawienia" />
        </nav>
      </div>

      <div className="flex-1 p-10" style={{ backgroundColor: '#F6F5FA' }}>
        {children}
      </div>
    </div>
  );
}

export default SidebarPanel;