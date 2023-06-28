import Head from "next/head";
import React, { Children, ReactElement } from "react";
import Navbar from "../ui/Navbar/Navbar";
type Props = {
  children: ReactElement;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
      </Head>
      <Navbar/>
      <main style={{padding:'20px 50px'}}>{children}</main>
    </>
  );
};

export default Layout;
