import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import { H2, LinkToExtPage } from '@components/Typography';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import { MainTitle, Paragraph, MainLink, Link, Logo, Section, Logowrapper, Img } from './styled';
import Meta from '@components/Meta/Meta';

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
import { VYLUKA_MAIL } from '@siteData';

const data = [
  {
    logo: ceskoDigitalLogo,
    href: 'https://cesko.digital/',
    text1: 'Dobrovolníci sdružení na platformě',
    text2:
      'pomohli proměnit v realitu naši představu o webu, který provádí zájemce o učitelskou kariéru na celé jejich cestě za katedru.',
    link: 'Česko.Digital',
  },
  {
    logo: nadaceCsLogo,
    href: 'https://www.nadacecs.cz/',
    text2: 'zajistila stabilní vedení organizace. Spolu také realizujeme projekt Den pro školu.',
    link: 'Nadace České spořitelny',
  },
  {
    logo: blizKSobeLogo,
    href: 'https://www.blizksobe.cz/',
    text2: 'je partnerem programu Zkus učit!',
    link: 'Nadace Blížksobě',
  },
  {
    logo: zemeKvetLogo,
    href: 'http://zemekvet.cz/',
    text2: 'přispívá k zajištění chodu organizace Výluka.',
    link: 'Nadační fond Zeměkvět',
  },
  {
    logo: mhmpLogo,
    href: 'https://granty.praha.eu/GrantyPortal/default',
    text1: 'Díky podpoře od',
    text2: 'můžeme realizovat program Zauč se! v Praze.',
    link: 'MHMP',
  },
  {
    logo: otevrenoLogo,
    href: 'https://otevreno.org/',
    text1: 'Díky organizaci',
    text2: 'se podílíme na změně vzdělávání pedagogů.',
    link: 'Otevřeno',
  },
  {
    logo: ucitelNazivoLogo,
    href: 'https://www.ucitelnazivo.cz/',
    text1: 'Spolu s organizací',
    text2: 'se podílíme na změně vzdělávání v České republice.',
    link: 'Učitel naživo',
  },
  {
    logo: ucitelskaPlatformaLogo,
    href: 'https://www.ucitelskaplatforma.cz/',
    text1: 'Díky',
    text2: 'jsme v kontaktu se zkušenými učiteli a společně měníme pohled na učitelskou profesi.',
    link: 'Učitelské platformě',
  },
  {
    logo: skavLogo,
    href: 'https://skav.cz/',
    text2:
      'představuje důležitého partnera, který sdružuje mnoho subjektů s cílem změnit české vzdělávání.',
    link: 'SKAV',
  },
  {
    logo: eduLogo,
    href: 'https://edu.cz/',
    text1: 'Spolu s',
    text2: 'poskytujeme důležité informace učitelům a o učitelství.',
    link: 'edu.cz',
  },
  {
    logo: nadaceKarlaJaneckaLogo,
    href: 'https://www.nadacekj.cz/',
    text1: 'Díky',
    text2: 'jsme ušli první kroky na cestě ke změně vzdělávání.',
    link: 'Nadaci Karla Janečka',
  },
  {
    logo: laboratorVodafoneLogo,
    href: 'https://www.nadacevodafone.cz/',
    logo2: euLogo,
    text2: 'podpořila vývoj první verze webu Začni učit! v programu Laboratoř.',
    link: 'Nadace Vodafone Česká republika',
  },
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
        <MainLink className="underline" href={`mailto:${VYLUKA_MAIL}`}>
          {VYLUKA_MAIL}
        </MainLink>{' '}
        a společně to vymyslíme!
      </Paragraph>
      <H2>S kým spolupracujeme?</H2>
    </Section>

    {data.map(item => (
      <Section key={item.logo}>
        {item.logo2 ? (
          <Logowrapper>
            <Link href={item.href} target="_blank">
              <Logo src={item.logo} alt="" />
            </Link>
            <Logo src={item.logo2} alt="" />
          </Logowrapper>
        ) : (
          <Link href={item.href} target="_blank">
            <Logo src={item.logo} alt="" />
          </Link>
        )}
        <Paragraph>
          {item.text1 ? item.text1 : null}{' '}
          <MainLink href={item.href} target="_blank">
            {item.link}
          </MainLink>{' '}
          {item.text2}
        </Paragraph>
      </Section>
    ))}

    <BackToHomeButton />
  </Container>
);
export default Partners;
