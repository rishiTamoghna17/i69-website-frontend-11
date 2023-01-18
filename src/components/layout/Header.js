import React, { useState, useRef, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from "next/link";
import Image from "next/image";
import Logo from './partials/Logo';
import { useTranslation } from "react-i18next";
import '../../services/localizationService';
import I69Link from '../elements/i69Link';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { logout_user } from '../../../redux/actions/user'
import { connect } from 'react-redux';
import { LanguageArray } from '../../utils/SectionProps';

const propTypes = {
  navposition: PropTypes.string,
  hideNav: PropTypes.bool,
  hidesignin: PropTypes.bool,
  hidesignup: PropTypes.bool,
  bottomouterdivider: PropTypes.bool,
  bottomdivider: PropTypes.bool
}

const defaultProps = {
  navposition: '',
  hideNav: false,
  hidesignin: false,
  hidesignup: false,
  bottomouterdivider: false,
  bottomdivider: false
}

const Header = (props) => {
  const {
    className,
    navposition,
    hideNav,
    hidesignin,
    hidesignup,
    bottomouterdivider,
    bottomdivider,
    // ...props
  } = props
  // redux action
  const { i18n, t } = useTranslation()
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [language, setLanguage] = React.useState('');

  const handleChange = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value)
  };

  const [isActive, setIsactive] = useState(false);


  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  // useLayoutEffect(() => {
  //   window.addEventListener('click', forceUpdate);

  //   return () => window.removeEventListener('click', forceUpdate);
  // }, []);


  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const logout = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    props?.logout_user()
    setIsactive(false);
  }

  const profile = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);

  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomouterdivider && 'has-bottom-divider',
    className
  );

  const changeLanguage = (e) => {
    window.changeLanguage(e.target.dataset.language);
    window.addEventListener('click', forceUpdate);

  }
  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomdivider ? 'has-bottom-divider' : ''
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">{t('Home.Menu')}</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navposition && `header-nav-${navposition}`
                    )}>
                    <li>
                      <Button style={{ textTransform: 'initial' }} onClick={closeMenu}>
                        <Link href="/">{t('Home.Home')}</Link>
                      </Button>
                    </li>
                    <li>
                      <Button style={{ textTransform: 'initial' }} onClick={closeMenu}>
                        <Link href="/faq">{t('Home.FAQ')}</Link>
                      </Button>
                    </li>
                    <li>
                      <Button style={{ textTransform: 'initial' }} onClick={closeMenu}>
                        <Link href="/policy">{t('Home.Policy')}</Link>
                      </Button>
                    </li>
                    <li>
                      <Button style={{ textTransform: 'initial' }} onClick={closeMenu}>
                        <Link href="/terms">{t('Home.Terms')}</Link>
                      </Button>
                    </li>
                  </ul>
                  {!hidesignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Button style={{ textTransform: 'initial' }} onClick={closeMenu}>
                          <I69Link href="/signin" className="button button-secondary button-wide-mobile button-sm">{t('Home.Login')}</I69Link>
                        </Button>
                      </li>
                    </ul>

                  }
                  {
                    hidesignin && <ul className="list-reset header-nav-right">
                      <li>
                        <Button style={{ textTransform: 'initial' }} onClick={logout}>
                          <I69Link href="/" className="button button-secondary button-wide-mobile button-sm" > {t('Home.Logout')}</I69Link>
                        </Button>
                        {/* <Button className="button button-secondary button-wide-mobile button-sm" onClick={logout}>Logout</Button> */}
                      </li>
                    </ul>
                  }{
                    hidesignin && <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <I69Link href="/profile" className="button button-secondary button-wide-mobile button-sm"> {t('Home.Profile')}</I69Link>
                      </li>
                    </ul>
                  }
                  {!hidesignup &&
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Button style={{ textTransform: 'initial' }} onClick={closeMenu}>
                          <I69Link href="/signup" className="button button-primary button-wide-mobile button-sm"> {t('Home.Signup')}</I69Link>
                        </Button>
                      </li>
                    </ul>}
                  <ul
                    className="list-reset header-nav-right"
                  >
                    <li>
                      <Box
                        sx={{
                          minWidth: 120,
                          marginLeft: 20,
                        }}
                      >
                        <FormControl
                          fullWidth
                          classes={{ root: "langBg", MuiInput: "123123" }}
                        >
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select1"
                            value={language}
                            label="Language"
                            onChange={handleChange}
                            classes={{
                              root: "input-select",
                              MuiInput: "112313",
                            }}
                            MenuProps={{
                              className: "menu-outbox",
                              MenuListProps: {
                                className: "213212313",
                                disablePadding: true,
                              },
                            }}
                          >
                            <MenuItem disabled selected value="Language">
                              <em>Language</em>
                            </MenuItem>
                            {LanguageArray.map((i, index) => (
                              <MenuItem key={index} value={i.label}>
                                <I69Link
                                  className="dropDownMenuWrapper"
                                  locale={i.label}
                                  href=""
                                >
                                  <Image
                                    loading="lazy"
                                    src={i.image.src}
                                    width={20}
                                    height={20}
                                    alt="flag"
                                  />
                                  <span className='imageFlage'>{i.label}</span>
                                </I69Link>
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </li>
                  </ul>
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default connect(null, { logout_user })(Header)