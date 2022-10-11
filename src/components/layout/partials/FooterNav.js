import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';
import Link from "next/link";

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/policy">Policy</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;