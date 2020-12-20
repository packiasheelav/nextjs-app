import React from 'react';
import Head from 'next/head';
import Welcome from 'components/Welcome';

const Home = () => {
  return (
    <>
      <Head>
        <title>UpCloud</title>
      </Head>
      <main>
        <Welcome />
      </main>
    </>
  );
};

export default Home;
