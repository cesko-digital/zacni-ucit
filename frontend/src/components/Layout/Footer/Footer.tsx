import type { FC } from 'react';
import React from 'react';

import {
  FooterSection,
  FlexRowSB,
  FlexColumn,
  SmallText,
  LinkSmall,
  FooterWrap,
  FooterText,
  FooterBTN,
  FooterInput,
  FooterLabel,
} from './styled';
import { H2, H3, LinkLight, LinkRegular } from '../../Typography';
import StyleWrapper from '../../StyledWrapper';
import FacebookIcon from '@icons/facebook.svg';
import InstagramIcon from '@icons/instagram.svg';
import TwitterIcon from '@icons/twitter.svg';

const Footer: FC = () => (
  <FooterWrap>
    <FooterSection className="footer_section1">
      <FlexRowSB>
        <FlexColumn>
          <LinkRegular footer href="http://" target="_blank" rel="noopener noreferrer">
            Můžu učit?
          </LinkRegular>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Pedagogické minimum
          </LinkLight>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Jací učitelé chybí
          </LinkLight>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Zákon o ped.pracovnících
          </LinkLight>
        </FlexColumn>
        <FlexColumn>
          <LinkRegular footer href="http://" target="_blank" rel="noopener noreferrer">
            Proč jít učit?
          </LinkRegular>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Příběhy učitelů
          </LinkLight>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Platy učitelů
          </LinkLight>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Co můžete dělat ve škole?
          </LinkLight>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Volná místa ve školství
          </LinkLight>
        </FlexColumn>

        <FlexColumn>
          <LinkRegular footer href="http://" target="_blank" rel="noopener noreferrer">
            Chci zkusit učit
          </LinkRegular>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Zkus učit!
          </LinkLight>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Den pro školu
          </LinkLight>
        </FlexColumn>
        <FlexColumn>
          <LinkRegular footer href="http://" target="_blank" rel="noopener noreferrer">
            Chci se zaučit
          </LinkRegular>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Zauč se!
          </LinkLight>
          <LinkLight footer href="http://" target="_blank" rel="noopener noreferrer">
            Tipy pro začínající učitele
          </LinkLight>
        </FlexColumn>
      </FlexRowSB>
      <LinkRegular footer href="http://" target="_blank" rel="noopener noreferrer">
        Začni učit!je projektem spolku Výluka
      </LinkRegular>
      <br></br>
      <LinkRegular footer href="http://" target="_blank" rel="noopener noreferrer">
        Naši partneři a přispějte
      </LinkRegular>
    </FooterSection>
    <FooterSection className="footer_section2">
      <H2>Výluka, z.s</H2>
      <FooterText>
        <b>Kampus Hybernská</b>
      </FooterText>
      <FooterText>Hybernská 4</FooterText>
      <FooterText>110 00 Praha 1</FooterText>
      <LinkRegular footer href="mailto:info@vyluka.org">
        info@vyluka.org
      </LinkRegular>
      <FooterBTN>
        <FacebookIcon />
        Facebook
      </FooterBTN>
      <FooterBTN>
        <InstagramIcon /> Instagram
      </FooterBTN>
      <FooterBTN>
        <TwitterIcon /> Twitter
      </FooterBTN>
    </FooterSection>
    <FooterSection className="footer_section3">
      <H3>Newsletter jednou měsíčně</H3>
      <FooterText>
        Novinky pro budoucí i začínající učitele, tipy na zajímavé akce o vzdělávání či na nástroje
        do výuky.
      </FooterText>
      <form action="">
        <FooterInput type="email" placeholder="e-mail" />
        <FooterLabel htmlFor="">Odebírat</FooterLabel>
      </form>
      <SmallText>Posláním adresy souhlasíte se </SmallText>{' '}
      <LinkSmall>zpracováním osobních údajů.</LinkSmall>
    </FooterSection>
    <FooterSection className="footer_section4">
      <SmallText>
        <b>Začni učit! </b>je projektem neziskové organizace Výluka.
      </SmallText>
      <StyleWrapper>
        <SmallText>© 2021 Výluka, z.s. PROTOTYP</SmallText>
      </StyleWrapper>
    </FooterSection>
  </FooterWrap>
);

export default Footer;
