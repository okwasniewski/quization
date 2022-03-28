import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SidebarPanel from 'components/SidebarPanel/SidebarPanel';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = useCallback(async () => {
    await auth.signOut();
    router.push('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error || (!user && !loading)) {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, user, loading]);

  if (!user) {
    return null;
  }
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
