import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Button, Space, DatePicker } from 'antd';

const Home: NextPage = () => {
  const onChange = () => {};
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div style={{ padding: 100 }}>
        <Space direction='vertical'>
          <Button type='primary'>Primary Button</Button>
          <Button type='ghost'>Ghost Button</Button>
          <DatePicker onChange={onChange} />
        </Space>
      </div>
    </div>
  );
};

export default Home;
