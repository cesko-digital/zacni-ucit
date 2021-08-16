import NextHead from 'next/head';
import type { FC } from 'react';
import React from 'react';

import { H2, LinkRegular, LinkToExtPage } from '../../Typography';
import { menuItems } from '../Menu/Menu';
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
  Link,
  MainLink,
} from './styled';

import FacebookIcon from '@icons/facebook.svg';
import InstagramIcon from '@icons/instagram.svg';
import TwitterIcon from '@icons/twitter.svg';

const Footer: FC = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <FooterWrap>
      <FooterSection className="footer_section1">
        <FlexRowSB>
          {menuItems.map(item => (
            <FlexColumn key={item.label}>
              <MainLink className="linkRegular footer bold" href={item.route}>
                {item.label}
              </MainLink>
              {item.lights?.map(light => (
                <Link key={light.route} className="linkRegular footer light" href={light.route}>
                  {light.label}
                </Link>
              ))}
            </FlexColumn>
          ))}
        </FlexRowSB>
      </FooterSection>

      <FooterSection className="footer_section2">
        <H2>Výluka, z.s.</H2>
        <FooterText>
          <b>Kampus Hybernská</b>
        </FooterText>
        <FooterText>Hybernská 4</FooterText>
        <FooterText>110 00 Praha 1</FooterText>
        <LinkRegular href="mailto:info@vyluka.org" footer>
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
          Novinky pro budoucí i začínající učitele, tipy na zajímavé akce o vzdělávání či na
          nástroje do výuky.
        </FooterText>
        <div id="mc_embed_signup">
          <form
            action="https://vyluka.us19.list-manage.com/subscribe/post?u=3de897b21700c27eefbd0bf7d&id=afd069cda3"
            className="validate"
            id="mc-embedded-subscribe-form"
            method="post"
            name="mc-embedded-subscribe-form"
            style={{ paddingLeft: '0', position: 'relative', maxWidth: '300px' }}
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <FooterInput
                className="email"
                id="mce-EMAIL"
                name="EMAIL"
                placeholder="e-mail"
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '40px',
                  fontSize: '14px',
                  padding: ' 0.5rem 1rem',
                  lineHeight: '2rem',
                  width: '100%',
                  maxWidth: '300px',
                  outline: 'none',
                }}
                type="email"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                required
              />

              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input
                  name="b_3de897b21700c27eefbd0bf7d_a1ece305d1"
                  tabIndex={-1}
                  type="text"
                  value={inputValue}
                />
              </div>
              <div className="clear">
                <FooterInput
                  className="button"
                  id="mc-embedded-subscribe"
                  name="subscribe"
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
                    transform: 'translateY(-120%)',
                    right: 0,
                  }}
                  type="submit"
                  value="Odebírat"
                />
              </div>
            </div>
          </form>
        </div>
        <SmallText>Posláním adresy souhlasíte se </SmallText>{' '}
        <LinkSmall
          href="https://vyluka.org/wp-content/uploads/2021/08/Ozn%C3%A1men%C3%AD-o-zpracov%C3%A1n%C3%AD-osobn%C3%ADch-%C3%BAdaj%C5%AF-V%C3%BDluka-2021.pdf"
          target="_blank"
        >
          zpracováním osobních údajů.
        </LinkSmall>
      </FooterSection>
      <FooterSection className="footer_section4">
        <Link href="https://vyluka.org/" target="_blank">
          <strong>Začni učit!</strong>&nbsp;je projektem neziskové organizace Výluka.
        </Link>
        <br></br>
        <SmallText className="vyluka"> © 2021 Výluka, z.s. PROTOTYP</SmallText>
      </FooterSection>
    </FooterWrap>
  );
};

export default Footer;
