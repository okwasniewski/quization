import type { AppProps } from 'next/app';
import 'styles/style.css';
import { AuthContextProvider } from 'templates/AuthorizedContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
