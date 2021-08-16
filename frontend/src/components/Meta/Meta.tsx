import Head from 'next/head';
import React from 'react';

type Props = {
  title: string;
  description?: string;
};

const Meta: React.FC<Props> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    {description && <meta content={description} name="description"></meta>}
  </Head>
);

export default Meta;
