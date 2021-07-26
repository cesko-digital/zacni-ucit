import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import { FooterSection, RowWrapper, FooterText } from './styled';
import { routes } from '@routes';

import HatIcon from '@icons/hat.svg';
import RowRightIcon from '@icons/row-right.svg';

const Footer: FC = () => (
  <FooterSection>
    <HatIcon height={20} width={20} />
    <FooterText>ZOBRAZIT VŠECH 315 KURZŮ</FooterText>
    <RowWrapper>
      <Link href={routes.searchResults}>
        <span>
          <RowRightIcon height={20} width={20} />
        </span>
      </Link>
    </RowWrapper>
  </FooterSection>
);

export default Footer;
