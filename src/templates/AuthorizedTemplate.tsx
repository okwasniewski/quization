import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SidebarPanel from 'components/SidebarPanel/SidebarPanel';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useAuth } from './AuthorizedContext';
import { auth } from '../firebase';

interface AuthorizedTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const AuthorizedTemplate: NextPage<AuthorizedTemplateProps> = ({
  title,
  description,
  children,
}: AuthorizedTemplateProps) => {
  const router = useRouter();
  const { setUser, user } = useAuth();

  useEffect(() =>
    auth.onAuthStateChanged((userObj) => {
      if (userObj) {
        setUser(userObj);
      } else {
        setUser(null);
        router.push('/login');
      }
    })
  );
  const handleLogout = useCallback(async () => {
    await auth.signOut();
    setUser(null);
    router.push('/login');
  }, [setUser, router]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarPanel
        userName={user?.displayName || ''}
        avatarImage={user?.photoURL || ''}
      >
        <Header authorized handleLogout={handleLogout} />
        <div className="container px-5 py-3 mx-auto min-h-screen">
          {children}
        </div>
        <Footer authorized />
      </SidebarPanel>
    </>
  );
};

export default AuthorizedTemplate;
