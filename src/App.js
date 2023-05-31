import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import FAQ from './views/FAQ'
import Policy from './views/Policy'
import Terms from './views/Terms'
import Registration from './views/Register'
import Login from './views/Login'
import Profile from './views/Profile';
import Reset from './views/Reset';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();


  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/faq" component={FAQ} layout={LayoutDefault} />
          <AppRoute exact path="/policy" component={Policy} layout={LayoutDefault} />
          <AppRoute exact path="/terms" component={Terms} layout={LayoutDefault} />
          <AppRoute exact path="/signin" component={Login} layout={LayoutDefault} />
          <AppRoute exact path="/signup" component={Registration} layout={LayoutDefault} />
          <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault} />
          <AppRoute exact path="/reset" component={Reset} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;
