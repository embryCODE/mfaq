import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './NavDropdown.module.css';
import useIsCurrentLocation from '../../utils/useIsCurrentLocation';

const NavDropdown = () => {
  const isCurrentLocation = useIsCurrentLocation();

  return (
    <Disclosure.Panel className="lg:tw-hidden">
      <div data-test={'mobile-nav'} className="tw-space-y-1 tw-pt-2 tw-pb-3">
        <Disclosure.Button
          as="a"
          href="/"
          className={classNames(
            styles.linkButton,
            isCurrentLocation('/') && styles.linkButtonActive
          )}
        >
          Welcome
        </Disclosure.Button>

        <Disclosure.Button
          as="a"
          href="/browse"
          className={classNames(
            styles.linkButton,
            isCurrentLocation('/browse') && styles.linkButtonActive
          )}
        >
          Browse
        </Disclosure.Button>

        <Disclosure.Button
          as="a"
          href="/search"
          className={classNames(
            styles.linkButton,
            isCurrentLocation('/search') && styles.linkButtonActive
          )}
        >
          Search
        </Disclosure.Button>

        <Disclosure.Button
          as="a"
          href="/ask"
          className={classNames(
            styles.linkButton,
            isCurrentLocation('/ask') && styles.linkButtonActive
          )}
        >
          Ask
        </Disclosure.Button>
      </div>

      <div className="tw-border-t tw-border-gray-200 tw-pt-4 tw-pb-3">
        <div className="tw-flex tw-items-center tw-px-4">
          <div className="tw-flex-shrink-0">
            <Image
              width={40}
              height={40}
              className="tw-h-10 tw-w-10 tw-rounded-full"
              src="/the-donald.jpeg"
              alt=""
            />
          </div>

          <div className="tw-ml-3">
            <div className="tw-text-base tw-font-medium tw-text-gray-800">
              Tom Cook
            </div>

            <div className="tw-text-sm tw-font-medium tw-text-gray-500">
              tom@example.com
            </div>
          </div>
        </div>

        <div className="tw-mt-3 tw-space-y-1">
          <Disclosure.Button
            as="a"
            href="/profile"
            className={classNames(
              'tw-block tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-bg-gray-100 hover:tw-text-gray-800',
              isCurrentLocation('/profile') && 'tw-underline tw-text-gray-900'
            )}
          >
            Profile
          </Disclosure.Button>

          <Disclosure.Button
            as="a"
            href="/sign-out"
            className={classNames(
              'tw-block tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-bg-gray-100 hover:tw-text-gray-800',
              isCurrentLocation('/sign-out') && 'tw-underline tw-text-gray-900'
            )}
          >
            Sign out
          </Disclosure.Button>
        </div>
      </div>
    </Disclosure.Panel>
  );
};

export default NavDropdown;
