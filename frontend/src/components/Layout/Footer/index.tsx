import React, { FC, useState } from 'react';
import { FooterSection, RowWrapper, FooterText } from './styled';
import Image from 'next/image';
import hatIcon from '../../../../public/images/hat-icon.svg';
import rowRight from '../../../../public/images/row-right-icon.svg';
import Link from 'next/link';

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <FooterSection>
      <Image src={hatIcon} width="20" height="20" />
      <FooterText>ZOBRAZIT VŠECH 315 KURZŮ</FooterText>
      <RowWrapper>
        <Link href="/vysledky-hledani">
          <Image src={rowRight} width="15" height="15" />
        </Link>
      </RowWrapper>
    </FooterSection>
  );
};

export default Footer;
