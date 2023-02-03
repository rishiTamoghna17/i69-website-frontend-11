
import React, { useEffect, useRef } from 'react';
import LayoutDefault from '../src/layouts/LayoutDefault';
import ScrollReveal from '../src/utils/ScrollReveal';
import ReactGA from 'react-ga';
import "@apollo/client"
import '../src/assets/scss/style.scss'
import { useRouter } from 'next/router';
import { ReduxWrapper } from '../redux/store';
import { appWithTranslation } from 'next-i18next';
import { ApolloProvider } from '@apollo/client';
import { client } from '../src/ApolloClient/client';
import './App.css'
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const MyApp = ({ Component, pageProps }) => {

  const childRef = useRef();
  let router = useRouter();

  useEffect(() => {
    const page = router.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
  }, [router]);

  return (
    <ApolloProvider client={client}>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <LayoutDefault>
            <Component {...pageProps} />
          </LayoutDefault>
        )} />
    </ApolloProvider>
  );
}

export default ReduxWrapper.withRedux(appWithTranslation(MyApp))
