import { Disclosure } from '@headlessui/react';

import NavBar from './NavBar';
import NavDropdown from './NavDropdown';

export const Test = 'mason';

const Nav = () => {
  return (
    <Disclosure as="nav" className="tw-bg-white tw-shadow">
      {({ open }) => (
        <>
          <NavBar open={open} />
          <NavDropdown />
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
