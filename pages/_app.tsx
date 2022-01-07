import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FunctionComponent } from 'react';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};
App.displayName = 'App';

export default App;
