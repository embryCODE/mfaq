import { forwardRef, HTMLProps } from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';
import classNames from 'classnames';
import useIsCurrentLocation from '../../utils/useIsCurrentLocation';

interface MyLinkProps extends Omit<HTMLProps<HTMLAnchorElement>, 'href'> {
  href: string | UrlObject;
  activeClassName?: string;
}

const MyLink = forwardRef<HTMLAnchorElement, MyLinkProps>(
  ({ href, children, activeClassName, className, ...rest }, ref) => {
    const isCurrentLocation = useIsCurrentLocation();

    return (
      <Link href={href}>
        <a
          ref={ref}
          className={classNames(
            className,
            isCurrentLocation(href) ? activeClassName : ''
          )}
          {...rest}
        >
          {children}
        </a>
      </Link>
    );
  }
);
MyLink.displayName = 'MyLink';

export default MyLink;
