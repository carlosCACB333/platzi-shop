import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import { NavBar } from '../components';

interface Props extends PropsWithChildren {
  title?: string;
}

export const ShopLayout: FC<Props> = ({ children, title = 'Platzi | Shop' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative z-10 scroll">
        <NavBar />
        <main className="flex p-4 ">{children}</main>
      </div>
    </>
  );
};
