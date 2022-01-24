import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import type { NextPage } from 'next';
import Head from 'next/head';

interface UnauthorizedTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const UnauthorizedTemplate: NextPage<UnauthorizedTemplateProps> = ({
  title,
  description,
  children,
}: UnauthorizedTemplateProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header authorized={false} />
    <div className="container min-h-screen px-5 py-3 mx-auto">{children}</div>
    <Footer />
  </>
);

export default UnauthorizedTemplate;
