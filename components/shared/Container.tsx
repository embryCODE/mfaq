import { ReactNode } from 'react';
import classNames from 'classnames';

const Container = ({
  children,
  isProse,
}: {
  children: ReactNode;
  isProse?: boolean;
}) => (
  <div
    className={classNames(
      'tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-4 lg:tw-px-8',
      isProse && 'tw-prose'
    )}
  >
    {children}
  </div>
);

export default Container;
