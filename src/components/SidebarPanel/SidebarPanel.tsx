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
      <div className="fixed z-50 inset-y-0 bottom-0 left-0 top-auto w-screen space-y-6 overflow-hidden text-white transform py-0 bg-blue-900 h-26 md:translate-x-0 md:w-56 md:h-screen md:py-7">
        <div className="hidden mb-6 text-center md:block">
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
          <SidebarLink link="/results" image="/scores.svg" name="Wyniki" />
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

      <div className="flex-1 md:pl-56" style={{ backgroundColor: '#F6F5FA' }}>
        {children}
      </div>
    </div>
  );
}

export default SidebarPanel;
