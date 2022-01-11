import Header from 'components/Header/Header';
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
      <div className="mx-auto container p-10">{children}</div>
    </SidebarPanel>
  </>
);

export default AuthorizedTemplate;
