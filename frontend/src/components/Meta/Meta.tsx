import Head from 'next/head';
import type { FC } from 'react';
import React from 'react';

type Props = {
  title: string;
};

const Meta: FC<Props> = props => (
  <Head>
    <title>{props.title}</title>
  </Head>
);

export default Meta;
