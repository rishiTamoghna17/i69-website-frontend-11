
import React, { useEffect, useRef } from 'react';
import LayoutDefault from '../src/layouts/LayoutDefault';
import ScrollReveal from '../src/utils/ScrollReveal';
import ReactGA from 'react-ga';
import '../src/assets/scss/style.scss'
import { useRouter } from 'next/router';
import { ReduxWrapper } from '../redux/store';
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
    <ScrollReveal
      ref={childRef}
      children={() => (
        <LayoutDefault>
          <Component {...pageProps} />
        </LayoutDefault>
      )} />
  );
}

export default ReduxWrapper.withRedux(MyApp)
