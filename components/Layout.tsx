import { ReactNode } from 'react';

import Footer from './Footer';
import Nav from './Nav';

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
