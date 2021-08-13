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
  FooterInput,
  FlexRow,
} from './styled';
import { H2, LinkLight, LinkRegular, LinkToExtPage } from '../../Typography';
import FacebookIcon from '@icons/facebook.svg';
import InstagramIcon from '@icons/instagram.svg';
import TwitterIcon from '@icons/twitter.svg';
import { menuItems } from '../Menu/Menu';
import Link from '@components/Link/Link';
import NextHead from 'next/head';

const links = [
  {
    label: 'Můžu učit?',
    route: '/muzu-ucit',
  },
];

const Footer: FC = () => (
  <FooterWrap>
    <FooterSection className="footer_section1">
      <FlexRowSB>
        {menuItems.map(item => (
          <FlexColumn key={item.label}>
            <Link className="linkRegular footer bold" href={item.route}>
              {item.label}
            </Link>
            {item.lights?.map(light => (
              <Link className="linkRegular footer light" key={light.route} href={light.route}>
                {light.label}
              </Link>
            ))}
          </FlexColumn>
        ))}
      </FlexRowSB>
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
      <FlexRow>
        <LinkToExtPage
          className="footerBtn"
          href="https://www.facebook.com/spolekvyluka/"
          target="_blank"
        >
          <FacebookIcon />
          Facebook
        </LinkToExtPage>
        <LinkToExtPage
          className="footerBtn"
          href="https://www.instagram.com/vyluka_/?hl=en"
          target="_blank"
        >
          <InstagramIcon />
          Instagram
        </LinkToExtPage>
        <LinkToExtPage
          className="footerBtn"
          href="https://twitter.com/vyluka_?lang=en"
          target="_blank"
        >
          <TwitterIcon /> Twitter
        </LinkToExtPage>
      </FlexRow>
    </FooterSection>
    <FooterSection className="footer_section3">
      {/* mailchimp form*/}
      <NextHead>
        <link
          href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
      </NextHead>
      <label htmlFor="mce-EMAIL" style={{ fontWeight: 'bold' }}>
        Newsletter jednou měsíčně
      </label>
      <FooterText>
        Novinky pro budoucí i začínající učitele, tipy na zajímavé akce o vzdělávání či na nástroje
        do výuky.
      </FooterText>
      <div id="mc_embed_signup">
        <form
          action="https://vyluka.us19.list-manage.com/subscribe/post?u=3de897b21700c27eefbd0bf7d&amp;id=a1ece305d1"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
          style={{ paddingLeft: '0', position: 'relative' }}
        >
          <div id="mc_embed_signup_scroll">
            <FooterInput
              type="email"
              value=""
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="e-mail"
              required
              style={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '40px',
                fontSize: '14px',
                padding: ' 0.5rem 1rem',
                lineHeight: '2rem',
                width: '300px',
                outline: 'none',
              }}
            />

            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input
                type="text"
                name="b_3de897b21700c27eefbd0bf7d_a1ece305d1"
                tabIndex={-1}
                value=""
              />
            </div>
            <div className="clear">
              <FooterInput
                type="submit"
                value="Odebírat"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                style={{
                  position: 'absolute',
                  background: '#7F50FF',
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '40px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  width: '100px',
                  height: '3rem',
                  textAlign: 'center',
                  padding: '0.5rem',
                  display: 'block',
                  lineHeight: '28px',
                  transform: 'translateX(220px) translateY(-120%)',
                }}
              />
            </div>
          </div>
        </form>
      </div>
      <SmallText>Posláním adresy souhlasíte se </SmallText>{' '}
      <LinkSmall>zpracováním osobních údajů.</LinkSmall>
    </FooterSection>
    <FooterSection className="footer_section4">
      <SmallText>
        <b>Začni učit! </b>je projektem neziskové organizace Výluka.
      </SmallText>
      <br></br>
      <SmallText> © 2021 Výluka, z.s. PROTOTYP</SmallText>
    </FooterSection>
  </FooterWrap>
);

export default Footer;
