import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('Add text…');

  return (
    <>
      <Head>
        <title>{value || 'Add text…'}</title>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <input
        autoFocus={true}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </>
  );
}
