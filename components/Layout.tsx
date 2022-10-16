import { Nav } from './Nav';
import { Footer } from './Footer';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
