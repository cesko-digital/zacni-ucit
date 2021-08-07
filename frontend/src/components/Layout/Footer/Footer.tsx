import type { FC } from 'react';
import React from 'react';

import { FooterSection, FlexRowSB, FlexColumn, SmallText, LinkSmall, FooterWrap } from './styled';
import { H3, H4, LightText, LinkLight, LinkRegular } from '../../Typography';
import StyleWrapper from '../../StyledWrapper';
import Input from '@components/Input/Input';
import { theme } from 'src/common/theme';

const Footer: FC = () => (
  <FooterWrap>
    <FooterSection className="footer_section1">
      <FlexRowSB>
        <FlexColumn>
          <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
            Můžu učit?
          </LinkRegular>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Pedagogické minimum
          </LinkLight>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Jací učitelé chybí
          </LinkLight>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Zákon o ped.pracovnících
          </LinkLight>
        </FlexColumn>
        <FlexColumn>
          <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
            Proč jít učit?
          </LinkRegular>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Příběhy učitelů
          </LinkLight>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Platy učitelů
          </LinkLight>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Co můžete dělat ve škole?
          </LinkLight>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Volná místa ve školství
          </LinkLight>
        </FlexColumn>

        <FlexColumn>
          <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
            Chci zkusit učit
          </LinkRegular>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Zkus učit!
          </LinkLight>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Den pro školu
          </LinkLight>
        </FlexColumn>
        <FlexColumn>
          <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
            Chci se zaučit
          </LinkRegular>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Zauč se!
          </LinkLight>
          <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
            Tipy pro začínající učitele
          </LinkLight>
        </FlexColumn>
      </FlexRowSB>
      <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
        Začni učit!je projektem spolku Výluka
      </LinkRegular>
      <br></br>
      <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
        Naši partneři a přispějte
      </LinkRegular>
    </FooterSection>
    <FooterSection className="footer_section2">
      <H3>Výluka, z.s</H3>
      <LightText>
        <b>Kampus Hybernská</b>
      </LightText>
      <LightText>Hybernská 4</LightText>
      <LightText>110 00 Praha 1</LightText>
      <LinkRegular href="mailto:info@vyluka.org">info@vyluka.org</LinkRegular>
      <Input
        value="Facebook"
        type="button"
        padding="1rem 2rem"
        margin="1rem 0 1rem 0"
        color={theme.color.primary}
        bgColor="transparent"
      />
      <Input
        value="Instagram"
        type="button"
        padding="1rem 2rem"
        margin="1rem 0 1rem 0"
        color={theme.color.primary}
        bgColor="transparent"
      />
      <Input
        value="Twitter"
        type="button"
        padding="1rem 2rem"
        margin="1rem 0 1rem 0"
        color={theme.color.primary}
        bgColor="transparent"
      />
    </FooterSection>
    <FooterSection className="footer_section3">
      <H4>Newsletter jednou měsíčně</H4>
      <LightText>
        Novinky pro budoucí i začínající učitele, tipy na zajímavé akce o vzdělávání či na nástroje
        do výuky.
      </LightText>
      <form action="">
        <input type="email" placeholder="email" />
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
