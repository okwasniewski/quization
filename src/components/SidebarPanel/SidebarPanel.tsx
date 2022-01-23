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
    <div className="relative min-h-screen md:flex z-50">
      <div className="bg-blue-900 text-white fixed w-screen space-y-6 pb-7 pt-5 overflow-hidden h-26 bottom-0 top-auto  inset-y-0 left-0 transform md:translate-x-0 md:w-56 md:h-screen md:py-7">
        <div className="text-center mb-6 hidden md:block">
          <div>
            <Image
              src={avatarImage || '/sample-avatar.jpeg'}
              alt="avatar"
              width={60}
              height={60}
              className="inline object-cover w-16 h-16 mr-2 rounded-full"
            />
          </div>
          <span className="text-md">{userName}</span>
        </div>
        <nav className="flex justify-around md:block" style={{ margin: '0' }}>
          <SidebarLink link="/panel" image="/panel.svg" name="Panel" />
          <SidebarLink link="/2" image="/scores.svg" name="Wyniki" />
          <SidebarLink
            link="/certificates"
            image="/certificate.svg"
            name="Certyfikaty"
          />
          <SidebarLink link="/profile" image="/profile.svg" name="Profil" />
          <SidebarLink
            link="/settings"
            image="/settings.svg"
            name="Ustawienia"
          />
        </nav>
      </div>

      <div className="md:pl-56 flex-1" style={{ backgroundColor: '#F6F5FA' }}>
        {children}
      </div>
    </div>
  );
}

export default SidebarPanel;
