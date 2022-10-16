import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import classNames from 'classnames';
import MyLink from './shared/MyLink';
import Container from './shared/Container';
import styles from './Nav.module.css';
import useIsCurrentLocation from '../utils/useIsCurrentLocation';

export function Nav() {
  const isCurrentLocation = useIsCurrentLocation();

  return (
    <Disclosure as="nav" className="tw-bg-white tw-shadow">
      {({ open }) => (
        <>
          <Container>
            <div className="tw-flex tw-h-16 tw-justify-between">
              <div className="tw-flex tw-px-2 lg:tw-px-0">
                <div className="tw-hidden lg:tw-flex lg:tw-space-x-8">
                  <MyLink
                    href="/"
                    className={styles.link}
                    activeClassName={styles.active}
                  >
                    Welcome
                  </MyLink>
                  <MyLink
                    href="/browse"
                    className={styles.link}
                    activeClassName={styles.active}
                  >
                    Browse
                  </MyLink>
                  <MyLink
                    href="/search"
                    className={styles.link}
                    activeClassName={styles.active}
                  >
                    Search
                  </MyLink>
                  <MyLink
                    href="/ask"
                    className={styles.link}
                    activeClassName={styles.active}
                  >
                    Ask
                  </MyLink>
                </div>
              </div>

              <div className="tw-flex tw-flex-1 tw-items-center tw-justify-center tw-px-2 lg:tw-ml-6 lg:tw-justify-end">
                <div className="tw-w-full tw-max-w-lg lg:tw-max-w-xs">
                  <label htmlFor="search" className="tw-sr-only">
                    Search
                  </label>
                  <div className="tw-relative">
                    <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3">
                      <MagnifyingGlassIcon
                        className="tw-h-5 tw-w-5 tw-text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="tw-block tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-py-2 tw-pl-10 tw-pr-3 tw-leading-5 tw-placeholder-gray-500 focus:tw-border-indigo-500 focus:tw-placeholder-gray-400 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-indigo-500 sm:tw-text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              <div className="tw-flex tw-items-center lg:tw-hidden">
                <Disclosure.Button className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-100 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-500">
                  <span className="tw-sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="tw-block tw-h-6 tw-w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="tw-block tw-h-6 tw-w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="tw-hidden lg:tw-ml-4 lg:tw-flex lg:tw-items-center">
                <Menu as="div" className="tw-relative tw-ml-4 tw-flex-shrink-0">
                  <div>
                    <Menu.Button className="tw-flex tw-rounded-full tw-bg-white tw-text-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2">
                      <span className="tw-sr-only">Open user menu</span>
                      <Image
                        width={40}
                        height={40}
                        className="tw-h-8 tw-w-8 tw-rounded-full"
                        src="/the-donald.jpeg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="tw-transition tw-ease-out tw-duration-100"
                    enterFrom="tw-transform tw-opacity-0 tw-scale-95"
                    enterTo="tw-transform tw-opacity-100 tw-scale-100"
                    leave="tw-transition tw-ease-in tw-duration-75"
                    leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
                    leaveTo="tw-transform tw-opacity-0 tw-scale-95"
                  >
                    <Menu.Items className="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <MyLink
                            href="/profile"
                            className={classNames(
                              active ? 'tw-bg-gray-100' : '',
                              'tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700'
                            )}
                            activeClassName={classNames(
                              styles.active,
                              'tw-underline'
                            )}
                          >
                            Profile
                          </MyLink>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <MyLink
                            href="/sign-out"
                            className={classNames(
                              active ? 'tw-bg-gray-100' : '',
                              'tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700'
                            )}
                            activeClassName={classNames(
                              styles.active,
                              'tw-underline'
                            )}
                          >
                            Sign out
                          </MyLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </Container>

          <Disclosure.Panel className="lg:tw-hidden">
            <div className="tw-space-y-1 tw-pt-2 tw-pb-3">
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
                    isCurrentLocation('/profile') &&
                      'tw-underline tw-text-gray-900'
                  )}
                >
                  Profile
                </Disclosure.Button>

                <Disclosure.Button
                  as="a"
                  href="/sign-out"
                  className={classNames(
                    'tw-block tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-bg-gray-100 hover:tw-text-gray-800',
                    isCurrentLocation('/sign-out') &&
                      'tw-underline tw-text-gray-900'
                  )}
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
