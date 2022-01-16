import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SidebarPanel from 'components/SidebarPanel/SidebarPanel';
import type { NextPage } from 'next';
import Head from 'next/head';

interface AuthorizedTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const AuthorizedTemplate: NextPage<AuthorizedTemplateProps> = ({
  title,
  description,
  children,
}: AuthorizedTemplateProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SidebarPanel userName="Jan Kowalski">
      <Header authorized />
      <div className="container p-10 mx-auto">{children}</div>
      <Footer />
    </SidebarPanel>
  </>
);

export default AuthorizedTemplate;
