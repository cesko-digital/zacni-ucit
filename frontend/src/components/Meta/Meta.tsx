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

    <meta content="/images/og-zacniucit.jpg" prefix="og: http://ogp.me/ns#" property="og:image" />
    <meta content="/images/og-zacniucit.jpg" name="twitter:image" />
  </Head>
);

export default Meta;
