import { SideBar } from '@components/SideBar';
import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title?: string;
}

export const MainLayout: FC<Props> = ({ children, title = 'Platzi | shop' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex">
        <SideBar />

        <main className="flex-1 p-4 h-screen overflow-y-auto scroll">{children}</main>
      </div>
    </>
  );
};
