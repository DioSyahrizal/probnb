import Head from "next/head";
import React from "react";

const HeadWrapper = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadWrapper;
