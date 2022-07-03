import { Toast } from '@components/UI';
import '@styles/globals.css';
import { AuthProvider, UIProvider } from 'contexts';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ax } from 'utils';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: (url) => ax.get(url).then((res) => res.data) }}>
      <UIProvider>
        <AuthProvider>
          <Toast />
          <Component {...pageProps} />
        </AuthProvider>
      </UIProvider>
    </SWRConfig>
  );
}

export default MyApp;
