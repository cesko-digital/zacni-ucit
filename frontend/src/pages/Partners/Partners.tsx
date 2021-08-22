import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import { H2, LinkToExtPage } from '@components/Typography';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import router from 'next/router';
import { MainTitle, Paragraph, MainLink, Link, Logo, Section, Logowrapper, Img } from './styled';

import ceskoDigitalLogo from '../../pages/HomePage/PartnersSection/cesko-digital.png';
import laboratorVodafoneLogo from '../../pages/HomePage/PartnersSection/laborator-vodafone.png';
import nadaceCsLogo from '../../pages/HomePage/PartnersSection/nadace-cs.png';
import blizKSobeLogo from './bliz-k-sobe.png';
import zemeKvetLogo from './zemekvet.png';
import mhmpLogo from './praha-logo.png';
import otevrenoLogo from './otevreno.png';
import ucitelNazivoLogo from './ucitel-nazivo.png';
import ucitelskaPlatformaLogo from './ucitelska-platforma.png';
import skavLogo from './skav.png';
import eduLogo from './edu.png';
import nadaceKarlaJaneckaLogo from './nadace-karla-janecka.png';
import euLogo from './european-social-fund.png';
import Meta from '@components/Meta/Meta';

const links = [
  { cd: { logo: ceskoDigitalLogo, href: 'https://cesko.digital/' } },
  { nadacecs: { logo: nadaceCsLogo, href: 'https://www.nadacecs.cz/' } },
  { blizksobe: { logo: blizKSobeLogo, href: 'https://www.blizksobe.cz/' } },
  { zemekvet: { logo: zemeKvetLogo, href: 'http://zemekvet.cz/' } },
  { mhmp: { logo: mhmpLogo, href: 'https://granty.praha.eu/GrantyPortal/default' } },
  { otevreno: { logo: otevrenoLogo, href: 'https://otevreno.org/' } },
  { ucitelnazivo: { logo: ucitelNazivoLogo, href: 'https://www.ucitelnazivo.cz/' } },
  { up: { logo: ucitelskaPlatformaLogo, href: 'https://www.ucitelskaplatforma.cz/' } },
  { skav: { logo: skavLogo, href: 'https://skav.cz/' } },
  { edu: { logo: eduLogo, href: 'https://edu.cz/' } },
  { nadacekj: { logo: nadaceKarlaJaneckaLogo, href: 'https://www.nadacekj.cz/' } },
  { vodafone: { logo: laboratorVodafoneLogo, href: 'https://www.nadacevodafone.cz/' } },
  { eu: { logo: euLogo } },
];
const Partners: React.FC = () => (
  <Container>
    <Meta
      title="Přispějte na projekt Začni učit a zlepšete české školství"
      description="Chcete nám s naší prací pomoci nebo nás finančně podpořit? Ozvěte se na info@vyluka.org a společně to vymyslíme!"
    />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>

    <Section>
      <MainTitle>Partneři</MainTitle>

      <Paragraph>
        Za webovou platformou Začni učit! stojí{' '}
        <MainLink className="underline" href={routes.vyluka}>
          {' '}
          organizace Výluka, z.s.
        </MainLink>
      </Paragraph>

      <Paragraph>
        <strong>Chcete s námi spolupracovat či přispět k naší práci?</strong>
      </Paragraph>

      <Paragraph>Chcete nám pomoct finančně nebo s naší prací?</Paragraph>

      <Paragraph>
        Ozvěte se na{' '}
        <MainLink className="underline" href="mailto:info@vyluka.org">
          info@vyluka.org
        </MainLink>{' '}
        a společně to vymyslíme!
      </Paragraph>
      <H2>S kým spolupracujeme?</H2>
    </Section>
    <Section className="bgr">
      <Link href={links[0].cd.href} target="_blank">
        <Logo src={links[0].cd.logo} alt="" />
      </Link>
      <Paragraph>
        Dobrovolníci sdružení na platformě{' '}
        <MainLink href={links[0].cd.href} target="_blank">
          Česko.Digital
        </MainLink>{' '}
        pomohli proměnit v realitu naši představu o webu, který provádí zájemce o učitelskou kariéru
        na celé jejich cestě za katedru.{' '}
      </Paragraph>
    </Section>
    <Section>
      <Link href={links[1].nadacecs.href} target="_blank">
        <Logo src={links[1].nadacecs.logo} alt="" />
      </Link>
      <Paragraph>
        <MainLink href={links[1].nadacecs.href} target="_blank">
          Nadace České spořitelny
        </MainLink>{' '}
        zajistila stabilní vedení organizace. Spolu také realizujeme projekt Den pro školu.{' '}
      </Paragraph>
    </Section>
    <Section className="bgr">
      <Link href={links[2].blizksobe.href} target="_blank">
        <Logo src={links[2].blizksobe.logo} alt="" />
      </Link>
      <Paragraph>
        {' '}
        <MainLink href={links[2].blizksobe.href} target="_blank">
          Nadace Blížksobě
        </MainLink>{' '}
        je partnerem programu Zkus učit!
      </Paragraph>
    </Section>
    <Section>
      <Link href={links[3].zemekvet.href} target="_blank">
        <Logo src={links[3].zemekvet.logo} alt="" />
      </Link>
      <Paragraph>
        <MainLink href={links[3].zemekvet.href} target="_blank">
          Nadační fond Zeměkvět
        </MainLink>{' '}
        přispívá k zajištění chodu organizace Výluka.{' '}
      </Paragraph>
    </Section>
    <Section className="bgr">
      <Link href={links[4].mhmp.href} target="_blank">
        <Logo src={links[4].mhmp.logo} alt="" />
      </Link>
      <Paragraph>
        Díky podpoře od{' '}
        <MainLink href={links[4].mhmp.href} target="_blank">
          MHMP
        </MainLink>{' '}
        můžeme realizovat program Zauč se! v Praze.
      </Paragraph>
    </Section>
    <Section>
      <Link href={links[5].otevreno.href} target="_blank">
        <Logo src={links[5].otevreno.logo} alt="" />
      </Link>
      <Paragraph>
        Díky organizaci{' '}
        <MainLink href={links[5].otevreno.href} target="_blank">
          Otevřeno
        </MainLink>{' '}
        se podílíme na změně vzdělávání pedagogů.
      </Paragraph>
    </Section>
    <Section className="bgr">
      <Link href={links[6].ucitelnazivo.href} target="_blank">
        <Logo src={links[6].ucitelnazivo.logo} alt="" />
      </Link>
      <Paragraph>
        Spolu s organizací{' '}
        <MainLink href={links[6].ucitelnazivo.href} target="_blank">
          Učitel naživo
        </MainLink>{' '}
        se podílíme na změně vzdělávání v České republice.
      </Paragraph>
    </Section>
    <Section>
      <Link href={links[7].up.href} target="_blank">
        <Logo src={links[7].up.logo} alt="" />
      </Link>
      <Paragraph>
        Díky{' '}
        <MainLink href={links[7].up.href} target="_blank">
          Učitelské platformě
        </MainLink>{' '}
        jsme v kontaktu se zkušenými učiteli a společně měníme pohled na učitelskou profesi.
      </Paragraph>
    </Section>
    <Section className="bgr">
      <Link href={links[8].skav.href} target="_blank">
        <Logo src={links[8].skav.logo} alt="" />
      </Link>
      <Paragraph>
        <MainLink href={links[8].skav.href} target="_blank">
          SKAV
        </MainLink>{' '}
        představuje důležitého partnera, který sdružuje mnoho subjektů s cílem změnit české
        vzdělávání.
      </Paragraph>
    </Section>
    <Section>
      <Link href={links[9].edu.href} target="_blank">
        <Logo src={links[9].edu.logo} alt="" />
      </Link>
      <Paragraph>
        Spolu s{' '}
        <MainLink href={links[9].edu.href} target="_blank">
          {' '}
          edu.cz
        </MainLink>{' '}
        poskytujeme důležité informace učitelům a o učitelství.
      </Paragraph>
    </Section>
    <Section className="bgr">
      <Link href={links[10].nadacekj.href} target="_blank">
        <Logo src={links[10].nadacekj.logo} alt="" />
      </Link>
      <Paragraph>
        Díky{' '}
        <MainLink href={links[10].nadacekj.href} target="_blank">
          Nadaci Karla Janečka
        </MainLink>{' '}
        jsme ušli první kroky na cestě ke změně vzdělávání.
      </Paragraph>
    </Section>
    <Section>
      <Logowrapper>
        <Link href={links[11].vodafone.href} target="_blank">
          <Logo src={links[11].vodafone.logo} alt="" />
        </Link>

        <Logo src={links[12].eu.logo} alt="" />
      </Logowrapper>
      <Paragraph>
        <MainLink href={links[11].vodafone.href} target="_blank">
          Nadace Vodafone Česká republika
        </MainLink>{' '}
        podpořila vývoj první verze webu Začni učit! v programu Laboratoř.
      </Paragraph>
    </Section>
    <BackToHomeButton />
  </Container>
);
export default Partners;
