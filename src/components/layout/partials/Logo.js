import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';
import Link from "next/link";

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link href="/">
          <Image
            src={'/images/logo.png'}
            alt="Open"
            width={32}
            height={32} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;