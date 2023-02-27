import React from 'react';
import Link from "next/link";

const I69Link = (props) => {
    const { className = '', children, href, ...restProps } = props
    return (
        <Link href={href} {...restProps}>
            <a href={href} className={className}>{children}</a>
        </Link>
    )
}

export default I69Link;